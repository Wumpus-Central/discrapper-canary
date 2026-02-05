"use strict";
n.d(t, {
    $w: () => k,
    D1: () => B,
    Df: () => D,
    Sb: () => T.Sb,
    TG: () => L,
    _N: () => V,
    bW: () => O,
    cE: () => b,
    ji: () => w,
    nT: () => F,
    o_: () => x,
    wc: () => R,
    xB: () => G,
    xs: () => U,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(554146),
    o = n(803805),
    l = n(873298),
    u = n(506774),
    c = n(73153),
    d = n(626584),
    _ = n(256787),
    f = n(367727),
    p = n(954571),
    h = n(927813),
    m = n(460288),
    g = n(405892),
    E = n(617617),
    A = n(159201),
    I = n(761821),
    T = n(355097),
    y = n(652215);
let S = 5e3,
    v = "UserSettingsProtoLastWriteTimes",
    C = Date.now();
function b() {}
c.h.subscribe("CONNECTION_OPEN", () => {
    C = Date.now();
}),
    c.h.subscribe("CONNECTION_CLOSED", () => {
        C = Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {
            C = 0;
        }),
        document.addEventListener("keydown", () => {
            C = 0;
        }));
class N {
    ProtoClass;
    type;
    logger;
    beforeSendCallbacks = [];
    lastSendTime = 0;
    constructor(e, t) {
        (this.ProtoClass = e), (this.type = t), (this.logger = new d.A(this.ProtoClass.typeName));
    }
    getEditInfo() {
        return E.A.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n) {
        await this.loadIfNecessary();
        let r = (0, A.f)(this.ProtoClass, e),
            i = this.getCurrentValue()[e],
            a = (0, A.a)(i, t, r, this.ProtoClass, e);
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
                  this.markDirty(a, { delaySeconds: n, jitter: n === T.Sb.AUTOMATED || n === T.Sb.DAILY })));
    }
    markDirty(e, t) {
        i()(!__OVERLAY__, "this cannot run in the overlay");
        let { editInfo: n } = this.getEditInfo(),
            r = { timeout: n.timeout };
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
        let a = t.delaySeconds ?? 0;
        if (
            (null != r.timeout &&
                a < n.timeoutDelay &&
                !n.rateLimited &&
                (clearTimeout(r.timeout), (r.timeout = void 0)),
            null == r.timeout)
        ) {
            let e = a * h.A.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * h.A.Millis.SECOND))),
                this.logger.log("Scheduling save from markDirty"),
                (r.timeout = setTimeout(this.persistChanges, e)),
                (r.timeoutDelay = a);
        }
        null != t.cleanup && (r.cleanupFuncs = [...n.cleanupFuncs, ...t.cleanup]),
            null == n.protoToSave
                ? (r.protoToSave = e)
                : (r.protoToSave = (0, I.RK)(this.ProtoClass, n.protoToSave, e)),
            this.dispatchChanges(r);
    }
    persistChanges = async () => {
        i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
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
            let { body: n } = await a.Bo.patch({
                url: y.Rsh.USER_SETTINGS_PROTO(this.type),
                body: { settings: t, required_data_version: e.offlineEditDataVersion },
                rejectWithError: !1,
            });
            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
            let r = (0, I.ii)(this.ProtoClass, n.settings);
            if (null == r) return;
            c.h.dispatch({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: r, type: this.type },
                resetEditInfo: !0,
                wasSaved: !0,
                local: !1,
            });
        } catch (e) {
            if (429 === e.status) {
                this.logger.log("Rate limited, scheduling retry");
                let t = parseInt(e.headers["retry-after"]);
                isNaN(t) && (t = 60);
                let n = setTimeout(this.persistChanges, Math.min(30 * h.A.Millis.SECOND, t * h.A.Millis.SECOND));
                this.dispatchChanges({ rateLimited: !0, timeout: n });
            } else if (400 === e.status && e.body?.code === y.t02.INVALID_USER_SETTINGS_DATA)
                throw (this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e);
            else throw (this.logger.log("Unknown user settings error"), e);
        }
    };
    dispatchChanges(e) {
        c.h.dispatch({ type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: { changes: e, type: this.type } });
    }
    saveLastSendTime() {
        let e = u.w.get(v) ?? {};
        (e[this.type] = Date.now()), u.w.set(v, e);
    }
    loadIfUncached(e, t) {
        (E.A.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
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
                    } = await a.Bo.get({ url: y.Rsh.USER_SETTINGS_PROTO(this.type), rejectWithError: !1 }),
                    n = (0, I.ii)(this.ProtoClass, t);
                if (null == n) return void this.dispatchChanges({ loading: !1, loaded: !0 });
                let r = g.A[this.type],
                    { proto: i, isDirty: s, cleanupFuncs: o } = (0, I.vI)(n, r);
                return (
                    await c.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: { type: this.type, proto: n },
                        resetEditInfo: s || e,
                        local: !1,
                    }),
                    s && this.markDirtyFromMigration(i, o),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        i()(!__OVERLAY__, "this cannot run in the overlay"),
            this.logger.log("Marking dirty due to migrates"),
            i()(
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
        i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
        let { editInfo: e } = this.getEditInfo();
        i()(null != e.protoToSave, "protoToSave cannot be null"),
            i()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"),
            i()(null == e.timeout, "timeout must not be set already");
        let t = S + Math.floor(Math.random() * S),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({ timeout: n, timeoutDelay: t });
    }
}
let R = new N(l.nT, T.oD.PRELOADED_USER_SETTINGS),
    O = new N(o.aw, T.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    D = { [T.oD.PRELOADED_USER_SETTINGS]: R, [T.oD.FRECENCY_AND_FAVORITES_SETTINGS]: O };
function L(e, t, n) {
    return R.updateAsync("guilds", (n) => (0, I.$o)(n, e, t), n);
}
function w(e, t, n, r) {
    return L(e, (e) => (0, I.VB)(e, t, n), r);
}
function x(e) {
    return (
        P(e),
        R.updateAsync(
            "userContent",
            (t) => {
                if ((0, m.c0)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, m.Vf)(t.dismissedContents, e);
            },
            T.Sb.INFREQUENT_USER_ACTION,
        )
    );
}
function P(e) {
    E.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS) ||
        M(e) ||
        p.default.track(y.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, { content_type: s.M[e] });
}
function M(e) {
    let t = E.A.settings.userContent?.dismissedContents;
    return null != t && (0, m.c0)(t, e);
}
async function k(e, t) {
    return await R.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = { ...n.recurringDismissibleContentStates[e], ...t };
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
async function U(e, t, n) {
    return await L(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = { ...t.guildDismissibleContentStates[e], ...n };
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function G(e) {
    return R.updateAsync(
        "userContent",
        (t) => {
            if (!(0, m.c0)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, m.We)(t.dismissedContents, e);
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function V(e) {
    return k(e, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
}
function F() {
    return R.updateAsync(
        "userContent",
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
function B() {
    return R.updateAsync(
        "userContent",
        (e) => {
            let t = new Uint8Array();
            for (let n of _.zd)
                (0, _.Jq)(n) ? (t = (0, m.Vf)(t, n)) : (e.recurringDismissibleContentStates[n] = (0, f.Tg)(n));
            e.dismissedContents = t;
        },
        T.Sb.INFREQUENT_USER_ACTION,
    );
}
