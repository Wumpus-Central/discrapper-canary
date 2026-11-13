(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(582128));
var i = n(284009),
    r = n.n(i),
    a = n(620632),
    s = n(554146),
    l = n(803805),
    o = n(873298),
    d = n(506774),
    c = n(73153),
    u = n(626584),
    _ = n(256787),
    E = n(129230),
    A = n(927813);
n(536194);
var f = n(460288),
    h = n(405892),
    I = n(617617),
    p = n(159201),
    m = n(761821),
    g = n(355097),
    T = n(652215);
let S = "UserSettingsProtoLastWriteTimes";
(Date.now(),
    c.h.subscribe("CONNECTION_OPEN", () => {
        Date.now();
    }),
    c.h.subscribe("CONNECTION_CLOSED", () => {
        Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {})));
class N {
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
                      jitter: n === g.Sb.AUTOMATED || n === g.Sb.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0,
                  })
                : (this.logger.log(`Updating ${String(e)} with delay ${n}`),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === g.Sb.AUTOMATED || n === g.Sb.DAILY,
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
                : (i.protoToSave = (0, m.RK)(this.ProtoClass, n.protoToSave, e)),
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
        let t = (0, m.ob)(this.ProtoClass, e.protoToSave);
        if (null == t || "" === t)
            return void this.logger.log("Not persisting proto because there is nothing to change");
        try {
            this.saveLastSendTime();
            let { body: n } = await a.Bo.patch({
                url: T.Rsh.USER_SETTINGS_PROTO(this.type),
                body: { settings: t, required_data_version: e.offlineEditDataVersion },
                rejectWithError: !1,
            });
            (n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e()));
            let i = (0, m.ii)(this.ProtoClass, n.settings);
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
            } else if (400 === e.status && e.body?.code === T.t02.INVALID_USER_SETTINGS_DATA)
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
                    } = await a.Bo.get({ url: T.Rsh.USER_SETTINGS_PROTO(this.type), rejectWithError: !1 }),
                    n = (0, m.ii)(this.ProtoClass, t);
                if (null == n) return void this.dispatchChanges({ loading: !1, loaded: !0 });
                let i = h.A[this.type],
                    { proto: r, isDirty: s, cleanupFuncs: l } = (0, m.vI)(n, i);
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
            this.markDirty(e, { cleanup: t, dispatch: !1, delaySeconds: g.Sb.AUTOMATED, jitter: !0 }));
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
let C = new N(o.nT, g.oD.PRELOADED_USER_SETTINGS),
    O = new N(l.aw, g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    R = { [g.oD.PRELOADED_USER_SETTINGS]: C, [g.oD.FRECENCY_AND_FAVORITES_SETTINGS]: O };
function L(e, t, n) {
    return C.updateAsync("guilds", (n) => (0, m.$o)(n, e, t), n);
}
function y(e, t) {
    return L(
        e,
        (e) => {
            e.guildThemeSourcePreference = t;
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
async function D(e, t) {
    return await C.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = { ...n.recurringDismissibleContentStates[e], ...t };
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
n.d(
    t,
    { Sb: () => g.Sb },
    {
        $w: D,
        D1: async function () {
            let { getDismissedRecurringDismissibleContentState: e } = await Promise.resolve().then(n.bind(n, 543862));
            return C.updateAsync(
                "userContent",
                (t) => {
                    let n = new Uint8Array();
                    for (let i of _.zd)
                        (0, _.Zm)(i) ? (t.recurringDismissibleContentStates[i] = e(i)) : (n = (0, f.Vf)(n, i));
                    t.dismissedContents = n;
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        Df: R,
        JM: function (e) {
            return C.updateAsync(
                "appearance",
                (t) => {
                    if ((t.defaultGuildThemePreference ?? o.tI.UNSPECIFIED) === e) return !1;
                    t.defaultGuildThemePreference = e;
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        Sh: function (e) {
            return y(e, o.tI.UNSPECIFIED);
        },
        TG: L,
        XW: y,
        _N: function (e) {
            return D(e, {
                lastDismissedVersion: 0,
                lastDismissedAtMs: "0",
                lastDismissedObjectId: "0",
                numTimesDismissed: 0,
            });
        },
        bW: O,
        cE: function () {},
        ji: function (e, t, n, i) {
            return L(e, (e) => (0, m.VB)(e, t, n), i);
        },
        nT: function () {
            return C.updateAsync(
                "userContent",
                (e) => {
                    ((e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {}));
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        o_: function (e) {
            var t, n;
            let i;
            return (
                (t = e),
                I.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS) ||
                    ((n = t),
                    (null != (i = I.A.settings.userContent?.dismissedContents) && (0, f.c0)(i, n)) ||
                        E.default.track(T.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, {
                            content_type: s.M[t],
                        })),
                C.updateAsync(
                    "userContent",
                    (t) => {
                        if ((0, f.c0)(t.dismissedContents, e)) return !1;
                        t.dismissedContents = (0, f.Vf)(t.dismissedContents, e);
                    },
                    g.Sb.INFREQUENT_USER_ACTION,
                )
            );
        },
        wc: C,
        xB: function (e) {
            return C.updateAsync(
                "userContent",
                (t) => {
                    if (!(0, f.c0)(t.dismissedContents, e)) return !1;
                    t.dismissedContents = (0, f.We)(t.dismissedContents, e);
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
        xs: async function (e, t, n) {
            return await L(
                t,
                (t) => {
                    t.guildDismissibleContentStates[e] = { ...t.guildDismissibleContentStates[e], ...n };
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        },
    },
);
