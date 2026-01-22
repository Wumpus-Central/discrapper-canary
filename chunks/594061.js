n.d(t, {
    $w: () => U,
    D1: () => H,
    Df: () => D,
    Sb: () => O.Sb,
    TG: () => x,
    _N: () => F,
    bW: () => P,
    cE: () => N,
    ji: () => L,
    nT: () => B,
    o_: () => j,
    wc: () => w,
    xB: () => V,
    xs: () => G,
}),
    n(65821),
    n(896048),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(554146),
    o = n(803805),
    l = n(873298),
    c = n(506774),
    u = n(73153),
    d = n(626584),
    f = n(256787),
    p = n(367727),
    _ = n(954571),
    h = n(927813),
    m = n(460288),
    g = n(405892),
    E = n(617617),
    b = n(159201),
    y = n(761821),
    O = n(355097),
    A = n(652215);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
let I = 5e3,
    T = "UserSettingsProtoLastWriteTimes",
    C = Date.now();

function N() {}
u.h.subscribe("CONNECTION_OPEN", () => {
    C = Date.now();
}),
    u.h.subscribe("CONNECTION_CLOSED", () => {
        C = Date.now();
    }),
    "u" > typeof document &&
        (document.addEventListener("mousedown", () => {
            C = 0;
        }),
        document.addEventListener("keydown", () => {
            C = 0;
        }));
class R {
    getEditInfo() {
        return E.A.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n) {
        await this.loadIfNecessary();
        let r = (0, b.f)(this.ProtoClass, e),
            i = this.getCurrentValue()[e],
            a = (0, b.a)(i, t, r, this.ProtoClass, e);
        null != a &&
            (__OVERLAY__
                ? u.h.dispatch({
                      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                      settings: {
                          type: this.type,
                          proto: a,
                      },
                      delaySeconds: n,
                      jitter: n === O.Sb.AUTOMATED || n === O.Sb.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0,
                  })
                : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)),
                  this.markDirty(a, {
                      delaySeconds: n,
                      jitter: n === O.Sb.AUTOMATED || n === O.Sb.DAILY,
                  })));
    }
    markDirty(e, t) {
        var n;
        i()(!__OVERLAY__, "this cannot run in the overlay");
        let { editInfo: r } = this.getEditInfo(),
            a = {
                timeout: r.timeout,
            };
        if (!r.loaded)
            throw Error(
                "Cannot edit user settings proto because we have not yet loaded the stored version from the DB",
            );
        !1 !== t.dispatch &&
            u.h.dispatch({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    type: this.type,
                    proto: e,
                },
                partial: !0,
                local: !0,
            });
        let s = null != (n = t.delaySeconds) ? n : 0;
        if (
            (null != a.timeout &&
                s < r.timeoutDelay &&
                !r.rateLimited &&
                (clearTimeout(a.timeout), (a.timeout = void 0)),
            null == a.timeout)
        ) {
            let e = s * h.A.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * h.A.Millis.SECOND))),
                this.logger.log("Scheduling save from markDirty"),
                (a.timeout = setTimeout(this.persistChanges, e)),
                (a.timeoutDelay = s);
        }
        null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]),
            null == r.protoToSave
                ? (a.protoToSave = e)
                : (a.protoToSave = (0, y.RK)(this.ProtoClass, r.protoToSave, e)),
            this.dispatchChanges(a);
    }
    dispatchChanges(e) {
        u.h.dispatch({
            type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
            settings: {
                changes: e,
                type: this.type,
            },
        });
    }
    saveLastSendTime() {
        var e;
        let t = null != (e = c.w.get(T)) ? e : {};
        (t[this.type] = Date.now()), c.w.set(T, t);
    }
    loadIfUncached(e, t) {
        (E.A.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void u.h.dispatch({
                type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
                settingsType: this.type,
            });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log("Loading proto"),
                this.dispatchChanges({
                    loading: !0,
                });
            try {
                let {
                        body: { settings: t },
                    } = await a.Bo.get({
                        url: A.Rsh.USER_SETTINGS_PROTO(this.type),
                        rejectWithError: !1,
                    }),
                    n = (0, y.ii)(this.ProtoClass, t);
                if (null == n)
                    return void this.dispatchChanges({
                        loading: !1,
                        loaded: !0,
                    });
                let r = g.A[this.type],
                    { proto: i, isDirty: s, cleanupFuncs: o } = (0, y.vI)(n, r);
                return (
                    await u.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            type: this.type,
                            proto: n,
                        },
                        resetEditInfo: s || e,
                        local: !1,
                    }),
                    s && this.markDirtyFromMigration(i, o),
                    n
                );
            } catch (e) {
                throw (
                    (this.dispatchChanges({
                        loading: !1,
                    }),
                    e)
                );
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
            this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: O.Sb.AUTOMATED,
                jitter: !0,
            });
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) &&
            this.markDirty(this.ProtoClass.create(), {
                dispatch: !1,
                delaySeconds: 0,
                cleanup: e,
            });
    }
    scheduleSaveFromOfflineEdit() {
        i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
        let { editInfo: e } = this.getEditInfo();
        i()(null != e.protoToSave, "protoToSave cannot be null"),
            i()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"),
            i()(null == e.timeout, "timeout must not be set already");
        let t = I + Math.floor(Math.random() * I),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({
            timeout: n,
            timeoutDelay: t,
        });
    }
    constructor(e, t) {
        v(this, "ProtoClass", void 0),
            v(this, "type", void 0),
            v(this, "logger", void 0),
            v(this, "beforeSendCallbacks", void 0),
            v(this, "lastSendTime", void 0),
            v(this, "persistChanges", void 0),
            (this.ProtoClass = e),
            (this.type = t),
            (this.beforeSendCallbacks = []),
            (this.lastSendTime = 0),
            (this.persistChanges = async () => {
                i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
                let { editInfo: e } = this.getEditInfo();
                if (null == e.protoToSave)
                    return void this.logger.log("Not persisting proto because the proto was null");
                this.beforeSendCallbacks.forEach((t) => {
                    let { processProto: n } = t;
                    return n(e.protoToSave);
                });
                let t = (0, y.ob)(this.ProtoClass, e.protoToSave);
                if (null == t || "" === t)
                    return void this.logger.log("Not persisting proto because there is nothing to change");
                try {
                    this.saveLastSendTime();
                    let { body: n } = await a.Bo.patch({
                        url: A.Rsh.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion,
                        },
                        rejectWithError: !1,
                    });
                    n.out_of_date && this.logger.log("Proto was out of date, discarding changes"),
                        this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let r = (0, y.ii)(this.ProtoClass, n.settings);
                    if (null == r) return;
                    u.h.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            proto: r,
                            type: this.type,
                        },
                        resetEditInfo: !0,
                        wasSaved: !0,
                        local: !1,
                    });
                } catch (e) {
                    var n;
                    if (429 === e.status) {
                        this.logger.log("Rate limited, scheduling retry");
                        let t = parseInt(e.headers["retry-after"]);
                        isNaN(t) && (t = 60);
                        let n = setTimeout(
                            this.persistChanges,
                            Math.min(30 * h.A.Millis.SECOND, t * h.A.Millis.SECOND),
                        );
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: n,
                        });
                    } else if (
                        400 === e.status &&
                        (null == (n = e.body) ? void 0 : n.code) === A.t02.INVALID_USER_SETTINGS_DATA
                    )
                        throw (this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log("Unknown user settings error"), e);
                }
            }),
            (this.logger = new d.A(this.ProtoClass.typeName));
    }
}
let w = new R(l.nT, O.oD.PRELOADED_USER_SETTINGS),
    P = new R(o.aw, O.oD.FRECENCY_AND_FAVORITES_SETTINGS),
    D = {
        [O.oD.PRELOADED_USER_SETTINGS]: w,
        [O.oD.FRECENCY_AND_FAVORITES_SETTINGS]: P,
    };

function x(e, t, n) {
    return w.updateAsync("guilds", (n) => (0, y.$o)(n, e, t), n);
}

function L(e, t, n, r) {
    return x(e, (e) => (0, y.VB)(e, t, n), r);
}

function j(e) {
    return (
        M(e),
        w.updateAsync(
            "userContent",
            (t) => {
                if ((0, m.c0)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, m.Vf)(t.dismissedContents, e);
            },
            O.Sb.INFREQUENT_USER_ACTION,
        )
    );
}

function M(e) {
    E.A.hasLoaded(O.oD.PRELOADED_USER_SETTINGS) ||
        k(e) ||
        _.default.track(A.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, {
            content_type: s.M[e],
        });
}

function k(e) {
    var t;
    let n = null == (t = E.A.settings.userContent) ? void 0 : t.dismissedContents;
    return null != n && (0, m.c0)(n, e);
}
async function U(e, t) {
    return await w.updateAsync(
        "userContent",
        (n) => {
            n.recurringDismissibleContentStates[e] = S({}, n.recurringDismissibleContentStates[e], t);
        },
        O.Sb.INFREQUENT_USER_ACTION,
    );
}
async function G(e, t, n) {
    return await x(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = S({}, t.guildDismissibleContentStates[e], n);
        },
        O.Sb.INFREQUENT_USER_ACTION,
    );
}

function V(e) {
    return w.updateAsync(
        "userContent",
        (t) => {
            if (!(0, m.c0)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, m.We)(t.dismissedContents, e);
        },
        O.Sb.INFREQUENT_USER_ACTION,
    );
}

function F(e) {
    return U(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: 0,
    });
}

function B() {
    return w.updateAsync(
        "userContent",
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        O.Sb.INFREQUENT_USER_ACTION,
    );
}

function H() {
    return w.updateAsync(
        "userContent",
        (e) => {
            let t = new Uint8Array();
            for (let n of f.zd)
                (0, f.Jq)(n) ? (t = (0, m.Vf)(t, n)) : (e.recurringDismissibleContentStates[n] = (0, p.Tg)(n));
            e.dismissedContents = t;
        },
        O.Sb.INFREQUENT_USER_ACTION,
    );
}
