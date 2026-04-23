n.d(t, {
    $w: () => M,
    D1: () => w,
    Df: () => g,
    Sb: () => f.Sb,
    TG: () => b,
    _N: () => v,
    bW: () => h,
    cE: () => m,
    ji: () => U,
    nT: () => B,
    o_: () => P,
    wc: () => D,
    xB: () => G,
    xs: () => y,
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
    a = n(636537),
    s = n(554146),
    _ = n(803805),
    l = n(873298),
    o = n(506774),
    E = n(228366),
    d = n(626584),
    c = n(256787),
    u = n(367727),
    I = n(954571),
    A = n(927813),
    T = n(460288),
    S = n(405892),
    N = n(617617),
    O = n(159201),
    R = n(761821),
    f = n(355097),
    C = n(652215);
let p = "UserSettingsProtoLastWriteTimes";
function m() {}
Date.now(),
    E.h.subscribe("CONNECTION_OPEN", () => {
        Date.now();
    }),
    E.h.subscribe("CONNECTION_CLOSED", () => {
        Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
class L {
    ProtoClass;
    type;
    logger;
    beforeSendCallbacks = [];
    lastSendTime = 0;
    constructor(e, t) {
        (this.ProtoClass = e), (this.type = t), (this.logger = new d.A(this.ProtoClass.typeName));
    }
    getEditInfo() {
        return N.A.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n, i) {
        await this.loadIfNecessary();
        let r = (0, O.f)(this.ProtoClass, e),
            a = this.getCurrentValue()[e],
            s = (0, O.a)(a, t, r, this.ProtoClass, e);
        null != s &&
            (__OVERLAY__
                ? E.h.dispatch({
                      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                      settings: { type: this.type, proto: s },
                      delaySeconds: n,
                      jitter: n === f.Sb.AUTOMATED || n === f.Sb.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0,
                  })
                : (this.logger.log(`Updating ${String(e)} with delay ${n}`),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === f.Sb.AUTOMATED || n === f.Sb.DAILY,
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
            E.h.dispatch({
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
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * A.A.Millis.SECOND))),
                this.logger.log("Scheduling save from markDirty"),
                (i.timeout = setTimeout(this.persistChanges, e)),
                (i.timeoutDelay = a);
        }
        null != t.cleanup && (i.cleanupFuncs = [...n.cleanupFuncs, ...t.cleanup]),
            null == t.onError ||
                n.errorCallbacks.includes(t.onError) ||
                (i.errorCallbacks = [...n.errorCallbacks, t.onError]),
            null == n.protoToSave
                ? (i.protoToSave = e)
                : (i.protoToSave = (0, R.RK)(this.ProtoClass, n.protoToSave, e)),
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
        let t = (0, R.ob)(this.ProtoClass, e.protoToSave);
        if (null == t || "" === t)
            return void this.logger.log("Not persisting proto because there is nothing to change");
        try {
            this.saveLastSendTime();
            let { body: n } = await a.Bo.patch({
                url: C.Rsh.USER_SETTINGS_PROTO(this.type),
                body: { settings: t, required_data_version: e.offlineEditDataVersion },
                rejectWithError: !1,
            });
            n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
            let i = (0, R.ii)(this.ProtoClass, n.settings);
            if (null == i) return;
            E.h.dispatch({
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
            } else if (400 === e.status && e.body?.code === C.t02.INVALID_USER_SETTINGS_DATA)
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
        E.h.dispatch({ type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: { changes: e, type: this.type } });
    }
    saveLastSendTime() {
        let e = o.w.get(p) ?? {};
        (e[this.type] = Date.now()), o.w.set(p, e);
    }
    loadIfUncached(e, t) {
        (N.A.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void E.h.dispatch({ type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", settingsType: this.type });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log("Loading proto"), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: t },
                    } = await a.Bo.get({ url: C.Rsh.USER_SETTINGS_PROTO(this.type), rejectWithError: !1 }),
                    n = (0, R.ii)(this.ProtoClass, t);
                if (null == n) return void this.dispatchChanges({ loading: !1, loaded: !0 });
                let i = S.A[this.type],
                    { proto: r, isDirty: s, cleanupFuncs: _ } = (0, R.vI)(n, i);
                return (
                    await E.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: { type: this.type, proto: n },
                        resetEditInfo: s || e,
                        local: !1,
                    }),
                    s && this.markDirtyFromMigration(r, _),
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
            this.markDirty(e, { cleanup: t, dispatch: !1, delaySeconds: f.Sb.AUTOMATED, jitter: !0 });
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
let D = new L(l.nT, f.oD.PRELOADED_USER_SETTINGS),
    h = new L(_.aw, f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    g = { [f.oD.PRELOADED_USER_SETTINGS]: D, [f.oD.FRECENCY_AND_FAVORITES_SETTINGS]: h };
function b(e, t, n) {
    return D.updateAsync("guilds", (n) => (0, R.$o)(n, e, t), n);
}
function U(e, t, n, i) {
    return b(e, (e) => (0, R.VB)(e, t, n), i);
}
function P(e) {
    var t, n;
    let i;
    return (
        (t = e),
        N.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS) ||
            ((n = t),
            (null != (i = N.A.settings.userContent?.dismissedContents) && (0, T.c0)(i, n)) ||
                I.default.track(C.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, { content_type: s.M[t] })),
        D.updateAsync(
            "userContent",
            (t) => {
                if ((0, T.c0)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, T.Vf)(t.dismissedContents, e);
            },
            f.Sb.INFREQUENT_USER_ACTION,
        )
    );
}
async function M(e, t) {
    return await D.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = { ...n.recurringDismissibleContentStates[e], ...t };
        },
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
async function y(e, t, n) {
    return await b(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = { ...t.guildDismissibleContentStates[e], ...n };
        },
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
function G(e) {
    return D.updateAsync(
        "userContent",
        (t) => {
            if (!(0, T.c0)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, T.We)(t.dismissedContents, e);
        },
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
function v(e) {
    return M(e, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
}
function B() {
    return D.updateAsync(
        "userContent",
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
function w() {
    return D.updateAsync(
        "userContent",
        (e) => {
            let t = new Uint8Array();
            for (let n of c.zd)
                (0, c.Jq)(n) ? (t = (0, T.Vf)(t, n)) : (e.recurringDismissibleContentStates[n] = (0, u.Tg)(n));
            e.dismissedContents = t;
        },
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
