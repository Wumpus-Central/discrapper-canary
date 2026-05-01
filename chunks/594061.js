n.d(t, {
    $w: () => U,
    D1: () => x,
    Df: () => D,
    Sb: () => p.Sb,
    TG: () => b,
    _N: () => G,
    bW: () => L,
    cE: () => C,
    ji: () => M,
    nT: () => w,
    o_: () => P,
    wc: () => g,
    xB: () => y,
    xs: () => v,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    a = n.n(i),
    r = n(636537),
    s = n(554146),
    l = n(803805),
    o = n(873298),
    d = n(506774),
    c = n(228366),
    _ = n(626584),
    E = n(256787),
    u = n(367727),
    A = n(954571),
    I = n(927813),
    T = n(460288),
    h = n(405892),
    S = n(617617),
    N = n(159201),
    f = n(761821),
    p = n(355097),
    m = n(652215);
let O = "UserSettingsProtoLastWriteTimes";
function C() {}
Date.now(),
    c.h.subscribe("CONNECTION_OPEN", () => {
        Date.now();
    }),
    c.h.subscribe("CONNECTION_CLOSED", () => {
        Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
class R {
    ProtoClass;
    type;
    logger;
    beforeSendCallbacks = [];
    lastSendTime = 0;
    constructor(e, t) {
        (this.ProtoClass = e), (this.type = t), (this.logger = new _.A(this.ProtoClass.typeName));
    }
    getEditInfo() {
        return S.A.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n, i) {
        await this.loadIfNecessary();
        let a = (0, N.f)(this.ProtoClass, e),
            r = this.getCurrentValue()[e],
            s = (0, N.a)(r, t, a, this.ProtoClass, e);
        null != s &&
            (__OVERLAY__
                ? c.h.dispatch({
                      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                      settings: { type: this.type, proto: s },
                      delaySeconds: n,
                      jitter: n === p.Sb.AUTOMATED || n === p.Sb.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0,
                  })
                : (this.logger.log(`Updating ${String(e)} with delay ${n}`),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === p.Sb.AUTOMATED || n === p.Sb.DAILY,
                      onError: i,
                  })));
    }
    markDirty(e, t) {
        a()(!__OVERLAY__, "this cannot run in the overlay");
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
        let r = t.delaySeconds ?? 0;
        if (
            (null != i.timeout &&
                r < n.timeoutDelay &&
                !n.rateLimited &&
                (clearTimeout(i.timeout), (i.timeout = void 0)),
            null == i.timeout)
        ) {
            let e = r * I.A.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * I.A.Millis.SECOND))),
                this.logger.log("Scheduling save from markDirty"),
                (i.timeout = setTimeout(this.persistChanges, e)),
                (i.timeoutDelay = r);
        }
        null != t.cleanup && (i.cleanupFuncs = [...n.cleanupFuncs, ...t.cleanup]),
            null == t.onError ||
                n.errorCallbacks.includes(t.onError) ||
                (i.errorCallbacks = [...n.errorCallbacks, t.onError]),
            null == n.protoToSave
                ? (i.protoToSave = e)
                : (i.protoToSave = (0, f.RK)(this.ProtoClass, n.protoToSave, e)),
            this.dispatchChanges(i);
    }
    persistChanges = async () => {
        a()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
        let { editInfo: e } = this.getEditInfo();
        if (null == e.protoToSave) return void this.logger.log("Not persisting proto because the proto was null");
        this.beforeSendCallbacks.forEach((t) => {
            let { processProto: n } = t;
            return n(e.protoToSave);
        });
        let t = (0, f.ob)(this.ProtoClass, e.protoToSave);
        if (null == t || "" === t)
            return void this.logger.log("Not persisting proto because there is nothing to change");
        try {
            this.saveLastSendTime();
            let { body: n } = await r.Bo.patch({
                url: m.Rsh.USER_SETTINGS_PROTO(this.type),
                body: { settings: t, required_data_version: e.offlineEditDataVersion },
                rejectWithError: !1,
            });
            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
            let i = (0, f.ii)(this.ProtoClass, n.settings);
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
                let n = setTimeout(this.persistChanges, Math.min(30 * I.A.Millis.SECOND, t * I.A.Millis.SECOND));
                this.dispatchChanges({ rateLimited: !0, timeout: n });
            } else if (400 === e.status && e.body?.code === m.t02.INVALID_USER_SETTINGS_DATA)
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
        let e = d.w.get(O) ?? {};
        (e[this.type] = Date.now()), d.w.set(O, e);
    }
    loadIfUncached(e, t) {
        (S.A.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
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
                    } = await r.Bo.get({ url: m.Rsh.USER_SETTINGS_PROTO(this.type), rejectWithError: !1 }),
                    n = (0, f.ii)(this.ProtoClass, t);
                if (null == n) return void this.dispatchChanges({ loading: !1, loaded: !0 });
                let i = h.A[this.type],
                    { proto: a, isDirty: s, cleanupFuncs: l } = (0, f.vI)(n, i);
                return (
                    await c.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: { type: this.type, proto: n },
                        resetEditInfo: s || e,
                        local: !1,
                    }),
                    s && this.markDirtyFromMigration(a, l),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        a()(!__OVERLAY__, "this cannot run in the overlay"),
            this.logger.log("Marking dirty due to migrates"),
            a()(
                null == this.getEditInfo().editInfo.offlineEditDataVersion,
                "offline changes are not supported with migrations",
            ),
            this.markDirty(e, { cleanup: t, dispatch: !1, delaySeconds: p.Sb.AUTOMATED, jitter: !0 });
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) && this.markDirty(this.ProtoClass.create(), { dispatch: !1, delaySeconds: 0, cleanup: e });
    }
    scheduleSaveFromOfflineEdit() {
        a()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
        let { editInfo: e } = this.getEditInfo();
        a()(null != e.protoToSave, "protoToSave cannot be null"),
            a()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"),
            a()(null == e.timeout, "timeout must not be set already");
        let t = 5e3 + Math.floor(5e3 * Math.random()),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({ timeout: n, timeoutDelay: t });
    }
}
let g = new R(o.nT, p.oD.PRELOADED_USER_SETTINGS),
    L = new R(l.aw, p.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    D = { [p.oD.PRELOADED_USER_SETTINGS]: g, [p.oD.FRECENCY_AND_FAVORITES_SETTINGS]: L };
function b(e, t, n) {
    return g.updateAsync("guilds", (n) => (0, f.$o)(n, e, t), n);
}
function M(e, t, n, i) {
    return b(e, (e) => (0, f.VB)(e, t, n), i);
}
function P(e) {
    var t, n;
    let i;
    return (
        (t = e),
        S.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS) ||
            ((n = t),
            (null != (i = S.A.settings.userContent?.dismissedContents) && (0, T.c0)(i, n)) ||
                A.default.track(m.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, { content_type: s.M[t] })),
        g.updateAsync(
            "userContent",
            (t) => {
                if ((0, T.c0)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, T.Vf)(t.dismissedContents, e);
            },
            p.Sb.INFREQUENT_USER_ACTION,
        )
    );
}
async function U(e, t) {
    return await g.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = { ...n.recurringDismissibleContentStates[e], ...t };
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
async function v(e, t, n) {
    return await b(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = { ...t.guildDismissibleContentStates[e], ...n };
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function y(e) {
    return g.updateAsync(
        "userContent",
        (t) => {
            if (!(0, T.c0)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, T.We)(t.dismissedContents, e);
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function G(e) {
    return U(e, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
}
function w() {
    return g.updateAsync(
        "userContent",
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function x() {
    return g.updateAsync(
        "userContent",
        (e) => {
            let t = new Uint8Array();
            for (let n of E.zd)
                (0, E.Jq)(n) ? (t = (0, T.Vf)(t, n)) : (e.recurringDismissibleContentStates[n] = (0, u.Tg)(n));
            e.dismissedContents = t;
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
