"use strict";
n.d(t, {
    $w: () => M,
    D1: () => G,
    Df: () => R,
    Sb: () => T.Sb,
    TG: () => b,
    XW: () => D,
    _N: () => U,
    bW: () => O,
    cE: () => y,
    ji: () => L,
    nT: () => k,
    o_: () => w,
    wc: () => v,
    xB: () => x,
    xs: () => P,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    r = n.n(i),
    s = n(636537),
    a = n(554146),
    o = n(803805),
    l = n(873298),
    u = n(506774),
    c = n(228366),
    d = n(626584),
    _ = n(256787),
    f = n(367727),
    h = n(174459),
    p = n(927813),
    E = n(460288),
    m = n(405892),
    g = n(617617),
    A = n(159201),
    I = n(761821),
    T = n(355097),
    S = n(652215);
let N = "UserSettingsProtoLastWriteTimes";
function y() {}
Date.now(),
    c.h.subscribe("CONNECTION_OPEN", () => {
        Date.now();
    }),
    c.h.subscribe("CONNECTION_CLOSED", () => {
        Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
class C {
    ProtoClass;
    type;
    logger;
    beforeSendCallbacks = [];
    lastSendTime = 0;
    constructor(e, t) {
        (this.ProtoClass = e), (this.type = t), (this.logger = new d.A(this.ProtoClass.typeName));
    }
    getEditInfo() {
        return g.A.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n, i) {
        await this.loadIfNecessary();
        let r = (0, A.f)(this.ProtoClass, e),
            s = this.getCurrentValue()[e],
            a = (0, A.a)(s, t, r, this.ProtoClass, e);
        null != a &&
            (__OVERLAY__
                ? c.h.dispatch({
                      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                      settings: { type: this.type, proto: a },
                      delaySeconds: n,
                      jitter: n === T.Sb.AUTOMATED || n === T.Sb.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0,
                  })
                : (this.logger.log(`Updating ${String(e)} with delay ${n}`),
                  this.markDirty(a, {
                      delaySeconds: n,
                      jitter: n === T.Sb.AUTOMATED || n === T.Sb.DAILY,
                      onError: i,
                  })));
    }
    markDirty(e, t) {
        r()(!__OVERLAY__, "this cannot run in the overlay");
        let { editInfo: n } = this.getEditInfo(),
            i = { timeout: n.timeout };
        if (!n.loaded)
            throw Error(
                "Cannot edit user settings proto because we have not yet loaded the stored version from the DB",
            );
        !1 !== t.dispatch &&
            c.h.dispatch({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { type: this.type, proto: e },
                partial: !0,
                local: !0,
            });
        let s = t.delaySeconds ?? 0;
        if (
            (null != i.timeout &&
                s < n.timeoutDelay &&
                !n.rateLimited &&
                (clearTimeout(i.timeout), (i.timeout = void 0)),
            null == i.timeout)
        ) {
            let e = s * p.A.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * p.A.Millis.SECOND))),
                this.logger.log("Scheduling save from markDirty"),
                (i.timeout = setTimeout(this.persistChanges, e)),
                (i.timeoutDelay = s);
        }
        null != t.cleanup && (i.cleanupFuncs = [...n.cleanupFuncs, ...t.cleanup]),
            null == t.onError ||
                n.errorCallbacks.includes(t.onError) ||
                (i.errorCallbacks = [...n.errorCallbacks, t.onError]),
            null == n.protoToSave
                ? (i.protoToSave = e)
                : (i.protoToSave = (0, I.RK)(this.ProtoClass, n.protoToSave, e)),
            this.dispatchChanges(i);
    }
    persistChanges = async () => {
        r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
        let { editInfo: e } = this.getEditInfo();
        if (null == e.protoToSave) return void this.logger.log("Not persisting proto because the proto was null");
        this.beforeSendCallbacks.forEach((t) => {
            let { processProto: n } = t;
            return n(e.protoToSave);
        });
        let t = (0, I.ob)(this.ProtoClass, e.protoToSave);
        if (null == t || "" === t)
            return void this.logger.log("Not persisting proto because there is nothing to change");
        try {
            this.saveLastSendTime();
            let { body: n } = await s.Bo.patch({
                url: S.Rsh.USER_SETTINGS_PROTO(this.type),
                body: { settings: t, required_data_version: e.offlineEditDataVersion },
                rejectWithError: !1,
            });
            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
            let i = (0, I.ii)(this.ProtoClass, n.settings);
            if (null == i) return;
            c.h.dispatch({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: i, type: this.type },
                resetEditInfo: !0,
                wasSaved: !0,
                local: !1,
            });
        } catch (e) {
            if (429 === e.status) {
                this.logger.log("Rate limited, scheduling retry");
                let t = parseInt(e.headers["retry-after"]);
                isNaN(t) && (t = 60);
                let n = setTimeout(this.persistChanges, Math.min(30 * p.A.Millis.SECOND, t * p.A.Millis.SECOND));
                this.dispatchChanges({ rateLimited: !0, timeout: n });
            } else if (400 === e.status && e.body?.code === S.t02.INVALID_USER_SETTINGS_DATA)
                throw (
                    (this.logger.log("Reloading do to invalid data"),
                    this.getEditInfo().editInfo.errorCallbacks.forEach((e) => e()),
                    this.loadIfNecessary(!0),
                    e)
                );
            else
                throw (
                    (this.logger.log("Unknown user settings error"),
                    this.getEditInfo().editInfo.errorCallbacks.forEach((e) => e()),
                    e)
                );
        }
    };
    dispatchChanges(e) {
        c.h.dispatch({ type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: { changes: e, type: this.type } });
    }
    saveLastSendTime() {
        let e = u.w.get(N) ?? {};
        (e[this.type] = Date.now()), u.w.set(N, e);
    }
    loadIfUncached(e, t) {
        (g.A.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void c.h.dispatch({ type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", settingsType: this.type });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log("Loading proto"), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: t },
                    } = await s.Bo.get({ url: S.Rsh.USER_SETTINGS_PROTO(this.type), rejectWithError: !1 }),
                    n = (0, I.ii)(this.ProtoClass, t);
                if (null == n) return void this.dispatchChanges({ loading: !1, loaded: !0 });
                let i = m.A[this.type],
                    { proto: r, isDirty: a, cleanupFuncs: o } = (0, I.vI)(n, i);
                return (
                    await c.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: { type: this.type, proto: n },
                        resetEditInfo: a || e,
                        local: !1,
                    }),
                    a && this.markDirtyFromMigration(r, o),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        r()(!__OVERLAY__, "this cannot run in the overlay"),
            this.logger.log("Marking dirty due to migrates"),
            r()(
                null == this.getEditInfo().editInfo.offlineEditDataVersion,
                "offline changes are not supported with migrations",
            ),
            this.markDirty(e, { cleanup: t, dispatch: !1, delaySeconds: T.Sb.AUTOMATED, jitter: !0 });
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) && this.markDirty(this.ProtoClass.create(), { dispatch: !1, delaySeconds: 0, cleanup: e });
    }
    scheduleSaveFromOfflineEdit() {
        r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
        let { editInfo: e } = this.getEditInfo();
        r()(null != e.protoToSave, "protoToSave cannot be null"),
            r()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"),
            r()(null == e.timeout, "timeout must not be set already");
        let t = 5e3 + Math.floor(5e3 * Math.random()),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({ timeout: n, timeoutDelay: t });
    }
}
let v = new C(l.nT, T.oD.PRELOADED_USER_SETTINGS),
    O = new C(o.aw, T.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    R = { [T.oD.PRELOADED_USER_SETTINGS]: v, [T.oD.FRECENCY_AND_FAVORITES_SETTINGS]: O };
function b(e, t, n) {
    return v.updateAsync("guilds", (n) => (0, I.$o)(n, e, t), n);
}
function D(e, t) {
    return b(
        e,
        (e) => {
            e.guildThemeSourcePreference = t;
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function L(e, t, n, i) {
    return b(e, (e) => (0, I.VB)(e, t, n), i);
}
function w(e) {
    var t, n;
    let i;
    return (
        (t = e),
        g.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS) ||
            ((n = t),
            (null != (i = g.A.settings.userContent?.dismissedContents) && (0, E.c0)(i, n)) ||
                h.default.track(S.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, { content_type: a.M[t] })),
        v.updateAsync(
            "userContent",
            (t) => {
                if ((0, E.c0)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, E.Vf)(t.dismissedContents, e);
            },
            T.Sb.INFREQUENT_USER_ACTION,
        )
    );
}
async function M(e, t) {
    return await v.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = { ...n.recurringDismissibleContentStates[e], ...t };
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
async function P(e, t, n) {
    return await b(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = { ...t.guildDismissibleContentStates[e], ...n };
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function x(e) {
    return v.updateAsync(
        "userContent",
        (t) => {
            if (!(0, E.c0)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, E.We)(t.dismissedContents, e);
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function U(e) {
    return M(e, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
}
function k() {
    return v.updateAsync(
        "userContent",
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function G() {
    return v.updateAsync(
        "userContent",
        (e) => {
            let t = new Uint8Array();
            for (let n of _.zd)
                (0, _.Jq)(n) ? (t = (0, E.Vf)(t, n)) : (e.recurringDismissibleContentStates[n] = (0, f.Tg)(n));
            e.dismissedContents = t;
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
