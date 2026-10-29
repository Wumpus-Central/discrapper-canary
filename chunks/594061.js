(n.d(t, {
    $w: () => U,
    D1: () => F,
    Df: () => L,
    JM: () => D,
    Sb: () => m.Sb,
    Sh: () => b,
    TG: () => y,
    XW: () => v,
    _N: () => x,
    bW: () => R,
    cE: () => N,
    ji: () => M,
    nT: () => k,
    o_: () => P,
    wc: () => O,
    xB: () => G,
    xs: () => w,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(582128));
var i = n(284009),
    r = n.n(i),
    a = n(636537),
    s = n(554146),
    l = n(803805),
    o = n(873298),
    d = n(506774),
    c = n(73153),
    u = n(626584),
    _ = n(256787),
    E = n(174459),
    A = n(927813);
n(536194);
var h = n(460288),
    f = n(405892),
    I = n(617617),
    p = n(159201),
    T = n(761821),
    m = n(355097),
    g = n(652215);
let S = "UserSettingsProtoLastWriteTimes";
function N() {}
(Date.now(),
    c.h.subscribe("CONNECTION_OPEN", () => {
        Date.now();
    }),
    c.h.subscribe("CONNECTION_CLOSED", () => {
        Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {})));
class C {
    ProtoClass;
    type;
    logger;
    beforeSendCallbacks = [];
    lastSendTime = 0;
    constructor(e, t) {
        ((this.ProtoClass = e), (this.type = t), (this.logger = new u.A(this.ProtoClass.typeName)));
    }
    getEditInfo() {
        return I.A.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n, i) {
        await this.loadIfNecessary();
        let r = (0, p.f)(this.ProtoClass, e),
            a = this.getCurrentValue()[e],
            s = (0, p.a)(a, t, r, this.ProtoClass, e);
        null != s &&
            (__OVERLAY__
                ? c.h.dispatch({
                      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                      settings: { type: this.type, proto: s },
                      delaySeconds: n,
                      jitter: n === m.Sb.AUTOMATED || n === m.Sb.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0,
                  })
                : (this.logger.log(`Updating ${String(e)} with delay ${n}`),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === m.Sb.AUTOMATED || n === m.Sb.DAILY,
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
        let a = t.delaySeconds ?? 0;
        if (
            (null != i.timeout &&
                a < n.timeoutDelay &&
                !n.rateLimited &&
                (clearTimeout(i.timeout), (i.timeout = void 0)),
            null == i.timeout)
        ) {
            let e = a * A.A.Millis.SECOND;
            (t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * A.A.Millis.SECOND))),
                this.logger.log("Scheduling save from markDirty"),
                (i.timeout = setTimeout(this.persistChanges, e)),
                (i.timeoutDelay = a));
        }
        (null != t.cleanup && (i.cleanupFuncs = [...n.cleanupFuncs, ...t.cleanup]),
            null == t.onError ||
                n.errorCallbacks.includes(t.onError) ||
                (i.errorCallbacks = [...n.errorCallbacks, t.onError]),
            null == n.protoToSave
                ? (i.protoToSave = e)
                : (i.protoToSave = (0, T.RK)(this.ProtoClass, n.protoToSave, e)),
            this.dispatchChanges(i));
    }
    persistChanges = async () => {
        (r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto"));
        let { editInfo: e } = this.getEditInfo();
        if (null == e.protoToSave) return void this.logger.log("Not persisting proto because the proto was null");
        this.beforeSendCallbacks.forEach((t) => {
            let { processProto: n } = t;
            return n(e.protoToSave);
        });
        let t = (0, T.ob)(this.ProtoClass, e.protoToSave);
        if (null == t || "" === t)
            return void this.logger.log("Not persisting proto because there is nothing to change");
        try {
            this.saveLastSendTime();
            let { body: n } = await a.Bo.patch({
                url: g.Rsh.USER_SETTINGS_PROTO(this.type),
                body: { settings: t, required_data_version: e.offlineEditDataVersion },
                rejectWithError: !1,
            });
            (n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e()));
            let i = (0, T.ii)(this.ProtoClass, n.settings);
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
                let n = setTimeout(this.persistChanges, Math.min(30 * A.A.Millis.SECOND, t * A.A.Millis.SECOND));
                this.dispatchChanges({ rateLimited: !0, timeout: n });
            } else if (400 === e.status && e.body?.code === g.t02.INVALID_USER_SETTINGS_DATA)
                throw (
                    this.logger.log("Reloading do to invalid data"),
                    this.getEditInfo().editInfo.errorCallbacks.forEach((t) => t(e)),
                    this.loadIfNecessary(!0),
                    e
                );
            else
                throw (
                    this.logger.log("Unknown user settings error"),
                    this.getEditInfo().editInfo.errorCallbacks.forEach((t) => t(e)),
                    e
                );
        }
    };
    dispatchChanges(e) {
        c.h.dispatch({ type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: { changes: e, type: this.type } });
    }
    saveLastSendTime() {
        let e = d.w.get(S) ?? {};
        ((e[this.type] = Date.now()), d.w.set(S, e));
    }
    loadIfUncached(e, t) {
        (I.A.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void c.h.dispatch({ type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", settingsType: this.type });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            (this.logger.log("Loading proto"), this.dispatchChanges({ loading: !0 }));
            try {
                let {
                        body: { settings: t },
                    } = await a.Bo.get({ url: g.Rsh.USER_SETTINGS_PROTO(this.type), rejectWithError: !1 }),
                    n = (0, T.ii)(this.ProtoClass, t);
                if (null == n) return void this.dispatchChanges({ loading: !1, loaded: !0 });
                let i = f.A[this.type],
                    { proto: r, isDirty: s, cleanupFuncs: l } = (0, T.vI)(n, i);
                return (
                    await c.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: { type: this.type, proto: n },
                        resetEditInfo: s || e,
                        local: !1,
                    }),
                    s && this.markDirtyFromMigration(r, l),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        (r()(!__OVERLAY__, "this cannot run in the overlay"),
            this.logger.log("Marking dirty due to migrates"),
            r()(
                null == this.getEditInfo().editInfo.offlineEditDataVersion,
                "offline changes are not supported with migrations",
            ),
            this.markDirty(e, { cleanup: t, dispatch: !1, delaySeconds: m.Sb.AUTOMATED, jitter: !0 }));
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) && this.markDirty(this.ProtoClass.create(), { dispatch: !1, delaySeconds: 0, cleanup: e });
    }
    scheduleSaveFromOfflineEdit() {
        (r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit"));
        let { editInfo: e } = this.getEditInfo();
        (r()(null != e.protoToSave, "protoToSave cannot be null"),
            r()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"),
            r()(null == e.timeout, "timeout must not be set already"));
        let t = 5e3 + Math.floor(5e3 * Math.random()),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({ timeout: n, timeoutDelay: t });
    }
}
let O = new C(o.nT, m.oD.PRELOADED_USER_SETTINGS),
    R = new C(l.aw, m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    L = { [m.oD.PRELOADED_USER_SETTINGS]: O, [m.oD.FRECENCY_AND_FAVORITES_SETTINGS]: R };
function y(e, t, n) {
    return O.updateAsync("guilds", (n) => (0, T.$o)(n, e, t), n);
}
function D(e) {
    return O.updateAsync(
        "appearance",
        (t) => {
            if ((t.defaultGuildThemePreference ?? o.tI.UNSPECIFIED) === e) return !1;
            t.defaultGuildThemePreference = e;
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
function v(e, t) {
    return y(
        e,
        (e) => {
            e.guildThemeSourcePreference = t;
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
function b(e) {
    return v(e, o.tI.UNSPECIFIED);
}
function M(e, t, n, i) {
    return y(e, (e) => (0, T.VB)(e, t, n), i);
}
function P(e) {
    var t, n;
    let i;
    return (
        (t = e),
        I.A.hasLoaded(m.oD.PRELOADED_USER_SETTINGS) ||
            ((n = t),
            (null != (i = I.A.settings.userContent?.dismissedContents) && (0, h.c0)(i, n)) ||
                E.default.track(g.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, { content_type: s.M[t] })),
        O.updateAsync(
            "userContent",
            (t) => {
                if ((0, h.c0)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, h.Vf)(t.dismissedContents, e);
            },
            m.Sb.INFREQUENT_USER_ACTION,
        )
    );
}
async function U(e, t) {
    return await O.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = { ...n.recurringDismissibleContentStates[e], ...t };
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
async function w(e, t, n) {
    return await y(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = { ...t.guildDismissibleContentStates[e], ...n };
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
function G(e) {
    return O.updateAsync(
        "userContent",
        (t) => {
            if (!(0, h.c0)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, h.We)(t.dismissedContents, e);
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
function x(e) {
    return U(e, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
}
function k() {
    return O.updateAsync(
        "userContent",
        (e) => {
            ((e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {}));
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
async function F() {
    let { getDismissedRecurringDismissibleContentState: e } = await Promise.resolve().then(n.bind(n, 501419));
    return O.updateAsync(
        "userContent",
        (t) => {
            let n = new Uint8Array();
            for (let i of _.zd) (0, _.Zm)(i) ? (t.recurringDismissibleContentStates[i] = e(i)) : (n = (0, h.Vf)(n, i));
            t.dismissedContents = n;
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
