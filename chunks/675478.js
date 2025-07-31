(n.d(t, {
    BU: () => L,
    Cd: () => j,
    DZ: () => P,
    PS: () => D,
    T6: () => N,
    Z1: () => B,
    aj: () => w,
    bE: () => F,
    fy: () => y.fy,
    hW: () => R,
    m9: () => U,
    nm: () => x,
    sr: () => V,
    w9: () => G
}),
    n(415506),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733));
var r = n(512722),
    i = n.n(r),
    a = n(544891),
    o = n(704215),
    s = n(377108),
    l = n(524437),
    c = n(433517),
    u = n(570140),
    d = n(710845),
    _ = n(428967),
    f = n(605236),
    p = n(626135),
    h = n(70956),
    m = n(915486),
    g = n(262847),
    E = n(581883),
    b = n(48481),
    y = n(526761),
    O = n(981631);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            }));
    }
    return e;
}
let T = 5000,
    S = 'UserSettingsProtoLastWriteTimes',
    A = Date.now();
function N() {}
(u.Z.subscribe('CONNECTION_OPEN', () => {
    A = Date.now();
}),
    u.Z.subscribe('CONNECTION_CLOSED', () => {
        A = Date.now();
    }),
    'undefined' != typeof document &&
        (document.addEventListener('mousedown', () => {
            A = 0;
        }),
        document.addEventListener('keydown', () => {
            A = 0;
        })));
class C {
    getEditInfo() {
        return E.Z.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n) {
        await this.loadIfNecessary();
        let r = this.ProtoClass.fields.find((t) => t.localName === e);
        if (null == r) throw Error('Unknown proto field name '.concat(String(e)));
        let i = r.T(),
            a = this.getCurrentValue()[e],
            o = null != a ? i.fromBinary(i.toBinary(a), b.Uc) : i.create();
        if (!1 === t(o)) return;
        let s = this.ProtoClass.create();
        ((s[e] = o),
            __OVERLAY__
                ? u.Z.dispatch({
                      type: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
                      settings: {
                          type: this.type,
                          proto: s
                      },
                      delaySeconds: n,
                      jitter: n === y.fy.AUTOMATED || n === y.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(n)),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === y.fy.AUTOMATED || n === y.fy.DAILY
                  })));
    }
    markDirty(e, t) {
        var n;
        i()(!__OVERLAY__, 'this cannot run in the overlay');
        let { editInfo: r } = this.getEditInfo(),
            a = { timeout: r.timeout };
        if (!r.loaded) throw Error('Cannot edit user settings proto because we have not yet loaded the stored version from the DB');
        !1 !== t.dispatch &&
            u.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    type: this.type,
                    proto: e
                },
                partial: !0,
                local: !0
            });
        let o = null != (n = t.delaySeconds) ? n : 0;
        if ((null != a.timeout && o < r.timeoutDelay && !r.rateLimited && (clearTimeout(a.timeout), (a.timeout = void 0)), null == a.timeout)) {
            let e = o * h.Z.Millis.SECOND;
            (t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * h.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (a.timeout = setTimeout(this.persistChanges, e)), (a.timeoutDelay = o));
        }
        (null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? (a.protoToSave = e) : (a.protoToSave = (0, b.re)(this.ProtoClass, r.protoToSave, e)), this.dispatchChanges(a));
    }
    dispatchChanges(e) {
        u.Z.dispatch({
            type: 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO',
            settings: {
                changes: e,
                type: this.type
            }
        });
    }
    saveLastSendTime() {
        var e;
        let t = null != (e = c.K.get(S)) ? e : {};
        ((t[this.type] = Date.now()), c.K.set(S, t));
    }
    loadIfUncached(e, t) {
        (E.Z.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void u.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
                settingsType: this.type
            });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            (this.logger.log('Loading proto'), this.dispatchChanges({ loading: !0 }));
            try {
                let {
                        body: { settings: t }
                    } = await a.tn.get({
                        url: O.ANM.USER_SETTINGS_PROTO(this.type),
                        rejectWithError: !1
                    }),
                    n = (0, b.d5)(this.ProtoClass, t);
                if (null == n)
                    return void this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                let r = g.Z[this.type],
                    { proto: i, isDirty: o, cleanupFuncs: s } = (0, b.xt)(n, r);
                return (
                    await u.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            type: this.type,
                            proto: n
                        },
                        resetEditInfo: o || e,
                        local: !1
                    }),
                    o && this.markDirtyFromMigration(i, s),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        (i()(!__OVERLAY__, 'this cannot run in the overlay'),
            this.logger.log('Marking dirty due to migrates'),
            i()(null == this.getEditInfo().editInfo.offlineEditDataVersion, 'offline changes are not supported with migrations'),
            this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: y.fy.AUTOMATED,
                jitter: !0
            }));
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) &&
            this.markDirty(this.ProtoClass.create(), {
                dispatch: !1,
                delaySeconds: 0,
                cleanup: e
            });
    }
    scheduleSaveFromOfflineEdit() {
        (i()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Scheduling save from offline edit'));
        let { editInfo: e } = this.getEditInfo();
        (i()(null != e.protoToSave, 'protoToSave cannot be null'), i()(null != e.offlineEditDataVersion, 'offlineEditDataVersion cannot be null'), i()(null == e.timeout, 'timeout must not be set already'));
        let t = T + Math.floor(Math.random() * T),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({
            timeout: n,
            timeoutDelay: t
        });
    }
    constructor(e, t) {
        (v(this, 'ProtoClass', void 0),
            v(this, 'type', void 0),
            v(this, 'logger', void 0),
            v(this, 'beforeSendCallbacks', void 0),
            v(this, 'lastSendTime', void 0),
            v(this, 'persistChanges', void 0),
            (this.ProtoClass = e),
            (this.type = t),
            (this.beforeSendCallbacks = []),
            (this.lastSendTime = 0),
            (this.persistChanges = async () => {
                (i()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Persisting proto'));
                let { editInfo: e } = this.getEditInfo();
                if (null == e.protoToSave) return void this.logger.log('Not persisting proto because the proto was null');
                this.beforeSendCallbacks.forEach((t) => {
                    let { processProto: n } = t;
                    return n(e.protoToSave);
                });
                let t = (0, b.xU)(this.ProtoClass, e.protoToSave);
                if (null == t || '' === t) return void this.logger.log('Not persisting proto because there is nothing to change');
                try {
                    this.saveLastSendTime();
                    let { body: n } = await a.tn.patch({
                        url: O.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        },
                        rejectWithError: !1
                    });
                    (n.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e()));
                    let r = (0, b.d5)(this.ProtoClass, n.settings);
                    if (null == r) return;
                    u.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            proto: r,
                            type: this.type
                        },
                        resetEditInfo: !0,
                        wasSaved: !0,
                        local: !1
                    });
                } catch (e) {
                    var n;
                    if (429 === e.status) {
                        this.logger.log('Rate limited, scheduling retry');
                        let t = parseInt(e.headers['retry-after']);
                        isNaN(t) && (t = 60);
                        let n = setTimeout(this.persistChanges, Math.min(30 * h.Z.Millis.SECOND, t * h.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: n
                        });
                    } else if (400 === e.status && (null == (n = e.body) ? void 0 : n.code) === O.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new d.Z(this.ProtoClass.typeName)));
    }
}
let R = new C(l.o8, y.yP.PRELOADED_USER_SETTINGS),
    P = new C(s.ji, y.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    w = {
        [y.yP.PRELOADED_USER_SETTINGS]: R,
        [y.yP.FRECENCY_AND_FAVORITES_SETTINGS]: P
    };
function D(e, t, n) {
    return R.updateAsync('guilds', (n) => (0, b.u0)(n, e, t), n);
}
function L(e, t, n, r) {
    return D(e, (e) => (0, b.uL)(e, t, n), r);
}
function x(e) {
    return (
        k(e),
        R.updateAsync(
            'userContent',
            (t) => {
                if ((0, m.jl)(t.dismissedContents, e)) return !1;
                t.dismissedContents = (0, m.GV)(t.dismissedContents, e);
            },
            y.fy.INFREQUENT_USER_ACTION
        )
    );
}
function k(e) {
    !E.Z.hasLoaded(y.yP.PRELOADED_USER_SETTINGS) && (M(e) || p.default.track(O.rMx.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, { content_type: o.z[e] }));
}
function M(e) {
    var t;
    let n = null == (t = E.Z.settings.userContent) ? void 0 : t.dismissedContents;
    return null != n && (0, m.jl)(n, e);
}
async function j(e, t) {
    return await R.updateAsync(
        'userContent',
        (n) => {
            n.recurringDismissibleContentStates[e] = I({}, n.recurringDismissibleContentStates[e], t);
        },
        y.fy.INFREQUENT_USER_ACTION
    );
}
async function U(e, t, n) {
    return await D(
        t,
        (t) => {
            t.guildDismissibleContentStates[e] = I({}, t.guildDismissibleContentStates[e], n);
        },
        y.fy.INFREQUENT_USER_ACTION
    );
}
function G(e) {
    return R.updateAsync(
        'userContent',
        (t) => {
            if (!(0, m.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, m.jx)(t.dismissedContents, e);
        },
        y.fy.INFREQUENT_USER_ACTION
    );
}
function B(e) {
    return j(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: '0',
        lastDismissedObjectId: '0'
    });
}
function V() {
    return R.updateAsync(
        'userContent',
        (e) => {
            ((e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {}));
        },
        y.fy.INFREQUENT_USER_ACTION
    );
}
function F() {
    return R.updateAsync(
        'userContent',
        (e) => {
            let t = new Uint8Array();
            for (let n of _.V_) (0, _.O2)(n) ? (t = (0, m.GV)(t, n)) : (e.recurringDismissibleContentStates[n] = (0, f.F8)(n));
            e.dismissedContents = t;
        },
        y.fy.INFREQUENT_USER_ACTION
    );
}
