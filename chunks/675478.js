r.d(n, {
    BU: function () {
        return V;
    },
    Bn: function () {
        return H;
    },
    DZ: function () {
        return G;
    },
    PS: function () {
        return F;
    },
    T6: function () {
        return k;
    },
    Z1: function () {
        return K;
    },
    aj: function () {
        return Z;
    },
    bE: function () {
        return q;
    },
    fy: function () {
        return D.fy;
    },
    hW: function () {
        return B;
    },
    nm: function () {
        return j;
    },
    sr: function () {
        return z;
    },
    w9: function () {
        return W;
    },
    z2: function () {
        return Y;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(518263);
var o = r(970173);
var l = r(520712);
var u = r(268111);
var c = r(941497);
var d = r(32026);
var f = r(480839);
var _ = r(744285);
var h = r(492257);
var p = r(873817);
var m = r(512722),
    g = r.n(m),
    E = r(259443),
    v = r(544891),
    I = r(704215),
    T = r(377108),
    b = r(524437),
    y = r(433517),
    S = r(570140),
    A = r(70956),
    N = r(915486),
    C = r(262847),
    R = r(581883),
    O = r(48481),
    D = r(526761),
    L = r(981631);
function x(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let w = 5000,
    P = 'UserSettingsProtoLastWriteTimes',
    M = Date.now();
function k() {}
S.Z.subscribe('CONNECTION_OPEN', () => {
    M = Date.now();
}),
    S.Z.subscribe('CONNECTION_CLOSED', () => {
        M = Date.now();
    }),
    'undefined' != typeof document &&
        (document.addEventListener('mousedown', () => {
            M = 0;
        }),
        document.addEventListener('keydown', () => {
            M = 0;
        }));
class U {
    getEditInfo() {
        return R.Z.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, n, r) {
        await this.loadIfNecessary();
        let i = this.ProtoClass.fields.find((n) => n.localName === e);
        if (null == i) throw Error('Unknown proto field name '.concat(String(e)));
        let a = i.T(),
            s = this.getCurrentValue()[e],
            o = null != s ? a.fromBinary(a.toBinary(s), O.Uc) : a.create();
        if (!1 === n(o)) return;
        let l = this.ProtoClass.create();
        (l[e] = o),
            __OVERLAY__
                ? S.Z.dispatch({
                      type: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
                      settings: {
                          type: this.type,
                          proto: l
                      },
                      delaySeconds: r,
                      jitter: r === D.fy.AUTOMATED || r === D.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(r)),
                  this.markDirty(l, {
                      delaySeconds: r,
                      jitter: r === D.fy.AUTOMATED || r === D.fy.DAILY
                  }));
    }
    markDirty(e, n) {
        var r;
        g()(!__OVERLAY__, 'this cannot run in the overlay');
        let { editInfo: i } = this.getEditInfo(),
            a = { timeout: i.timeout };
        if (!i.loaded) throw Error('Cannot edit user settings proto because we have not yet loaded the stored version from the DB');
        !1 !== n.dispatch &&
            S.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    type: this.type,
                    proto: e
                },
                partial: !0,
                local: !0
            });
        let s = null !== (r = n.delaySeconds) && void 0 !== r ? r : 0;
        if ((null != a.timeout && s < i.timeoutDelay && !i.rateLimited && (clearTimeout(a.timeout), (a.timeout = void 0)), null == a.timeout)) {
            let e = s * A.Z.Millis.SECOND;
            n.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * A.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (a.timeout = setTimeout(this.persistChanges, e)), (a.timeoutDelay = s);
        }
        null != n.cleanup && (a.cleanupFuncs = [...i.cleanupFuncs, ...n.cleanup]), null == i.protoToSave ? (a.protoToSave = e) : (a.protoToSave = (0, O.re)(this.ProtoClass, i.protoToSave, e)), this.dispatchChanges(a);
    }
    dispatchChanges(e) {
        S.Z.dispatch({
            type: 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO',
            settings: {
                changes: e,
                type: this.type
            }
        });
    }
    saveLastSendTime() {
        var e;
        let n = null !== (e = y.K.get(P)) && void 0 !== e ? e : {};
        (n[this.type] = Date.now()), y.K.set(P, n);
    }
    loadIfUncached(e, n) {
        (!R.Z.hasLoaded(e) || !0 === n) && this.loadIfNecessary(n);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__) {
            S.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
                settingsType: this.type
            });
            return;
        }
        let { editInfo: n } = this.getEditInfo();
        if (e || (!n.loaded && !n.loading)) {
            this.logger.log('Loading proto'), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: n }
                    } = await v.tn.get({
                        url: L.ANM.USER_SETTINGS_PROTO(this.type),
                        rejectWithError: !1
                    }),
                    r = (0, O.d5)(this.ProtoClass, n);
                if (null == r) {
                    this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                    return;
                }
                let i = C.Z[this.type],
                    { proto: a, isDirty: s, cleanupFuncs: o } = (0, O.xt)(r, i);
                return (
                    await S.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            type: this.type,
                            proto: r
                        },
                        resetEditInfo: s || e,
                        local: !1
                    }),
                    s && this.markDirtyFromMigration(a, o),
                    r
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, n) {
        g()(!__OVERLAY__, 'this cannot run in the overlay'),
            this.logger.log('Marking dirty due to migrates'),
            g()(null == this.getEditInfo().editInfo.offlineEditDataVersion, 'offline changes are not supported with migrations'),
            this.markDirty(e, {
                cleanup: n,
                dispatch: !1,
                delaySeconds: D.fy.AUTOMATED,
                jitter: !0
            });
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: n } = e;
            return n();
        }) &&
            this.markDirty(this.ProtoClass.create(), {
                dispatch: !1,
                delaySeconds: 0,
                cleanup: e
            });
    }
    scheduleSaveFromOfflineEdit() {
        g()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Scheduling save from offline edit');
        let { editInfo: e } = this.getEditInfo();
        g()(null != e.protoToSave, 'protoToSave cannot be null'), g()(null != e.offlineEditDataVersion, 'offlineEditDataVersion cannot be null'), g()(null == e.timeout, 'timeout must not be set already');
        let n = w + Math.floor(Math.random() * w),
            r = setTimeout(this.persistChanges, n);
        this.dispatchChanges({
            timeout: r,
            timeoutDelay: n
        });
    }
    constructor(e, n) {
        x(this, 'ProtoClass', void 0),
            x(this, 'type', void 0),
            x(this, 'logger', void 0),
            x(this, 'beforeSendCallbacks', void 0),
            x(this, 'lastSendTime', void 0),
            x(this, 'persistChanges', void 0),
            (this.ProtoClass = e),
            (this.type = n),
            (this.beforeSendCallbacks = []),
            (this.lastSendTime = 0),
            (this.persistChanges = async () => {
                g()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Persisting proto');
                let { editInfo: e } = this.getEditInfo();
                if (null == e.protoToSave) {
                    this.logger.log('Not persisting proto because the proto was null');
                    return;
                }
                this.beforeSendCallbacks.forEach((n) => {
                    let { processProto: r } = n;
                    return r(e.protoToSave);
                });
                let n = (0, O.xU)(this.ProtoClass, e.protoToSave);
                if (null == n || '' === n) {
                    this.logger.log('Not persisting proto because there is nothing to change');
                    return;
                }
                try {
                    this.saveLastSendTime();
                    let { body: r } = await v.tn.patch({
                        url: L.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: n,
                            required_data_version: e.offlineEditDataVersion
                        },
                        rejectWithError: !1
                    });
                    r.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let i = (0, O.d5)(this.ProtoClass, r.settings);
                    if (null == i) return;
                    S.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            proto: i,
                            type: this.type
                        },
                        resetEditInfo: !0,
                        wasSaved: !0,
                        local: !1
                    });
                } catch (e) {
                    var r;
                    if (429 === e.status) {
                        this.logger.log('Rate limited, scheduling retry');
                        let n = parseInt(e.headers['retry-after']);
                        isNaN(n) && (n = 60);
                        let r = setTimeout(this.persistChanges, Math.min(30 * A.Z.Millis.SECOND, n * A.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: r
                        });
                    } else if (400 === e.status && (null === (r = e.body) || void 0 === r ? void 0 : r.code) === L.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new E.Yd(this.ProtoClass.typeName));
    }
}
let B = new U(b.o8, D.yP.PRELOADED_USER_SETTINGS),
    G = new U(T.ji, D.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    Z = {
        [D.yP.PRELOADED_USER_SETTINGS]: B,
        [D.yP.FRECENCY_AND_FAVORITES_SETTINGS]: G
    };
function F(e, n, r) {
    return B.updateAsync('guilds', (r) => (0, O.u0)(r, e, n), r);
}
function V(e, n, r, i) {
    return F(e, (e) => (0, O.uL)(e, n, r), i);
}
function j(e) {
    return B.updateAsync(
        'userContent',
        (n) => {
            if ((0, N.jl)(n.dismissedContents, e)) return !1;
            n.dismissedContents = (0, N.GV)(n.dismissedContents, e);
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
function H(e, n) {
    return B.updateAsync(
        'userContent',
        (r) => {
            null == r.recurringDismissibleContentStates[e]
                ? (r.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: n,
                      lastDismissedAtMs: Date.now().toString()
                  })
                : ((r.recurringDismissibleContentStates[e].lastDismissedVersion = n), (r.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString()));
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
function Y(e) {
    return B.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e]
                ? (n.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: 0,
                      lastDismissedAtMs: Date.now().toString()
                  })
                : (n.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString());
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
function W(e) {
    return B.updateAsync(
        'userContent',
        (n) => {
            if (!(0, N.jl)(n.dismissedContents, e)) return !1;
            n.dismissedContents = (0, N.jx)(n.dismissedContents, e);
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
function K(e) {
    return B.updateAsync(
        'userContent',
        (n) => {
            if (null == n.recurringDismissibleContentStates[e]) return !1;
            (n.recurringDismissibleContentStates[e].lastDismissedVersion = 0), (n.recurringDismissibleContentStates[e].lastDismissedAtMs = '0');
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
function z() {
    return B.updateAsync(
        'userContent',
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
function q() {
    return B.updateAsync(
        'userContent',
        (e) => {
            let n = new Uint8Array();
            for (let e of Object.keys(I.z)) n = (0, N.GV)(n, I.z[e]);
            e.dismissedContents = n;
        },
        D.fy.INFREQUENT_USER_ACTION
    );
}
