n.d(t, {
    BU: () => R,
    Bn: () => D,
    DZ: () => N,
    PS: () => P,
    T6: () => S,
    Z1: () => M,
    aj: () => C,
    bE: () => U,
    fy: () => E.fy,
    hW: () => A,
    nm: () => w,
    po: () => x,
    sr: () => j,
    w9: () => k,
    z2: () => L
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
    n(146733);
var r = n(512722),
    i = n.n(r),
    a = n(259443),
    o = n(544891),
    s = n(377108),
    l = n(524437),
    c = n(433517),
    u = n(570140),
    d = n(428967),
    f = n(644916),
    _ = n(70956),
    p = n(915486),
    h = n(262847),
    m = n(581883),
    g = n(48481),
    E = n(526761),
    b = n(981631);
function y(e, t, n) {
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
let O = 5000,
    v = 'UserSettingsProtoLastWriteTimes',
    I = Date.now();
function S() {}
u.Z.subscribe('CONNECTION_OPEN', () => {
    I = Date.now();
}),
    u.Z.subscribe('CONNECTION_CLOSED', () => {
        I = Date.now();
    }),
    'undefined' != typeof document &&
        (document.addEventListener('mousedown', () => {
            I = 0;
        }),
        document.addEventListener('keydown', () => {
            I = 0;
        }));
class T {
    getEditInfo() {
        return m.Z.getFullState()[this.type];
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
            o = null != a ? i.fromBinary(i.toBinary(a), g.Uc) : i.create();
        if (!1 === t(o)) return;
        let s = this.ProtoClass.create();
        (s[e] = o),
            __OVERLAY__
                ? u.Z.dispatch({
                      type: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
                      settings: {
                          type: this.type,
                          proto: s
                      },
                      delaySeconds: n,
                      jitter: n === E.fy.AUTOMATED || n === E.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(n)),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === E.fy.AUTOMATED || n === E.fy.DAILY
                  }));
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
            let e = o * _.Z.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * _.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (a.timeout = setTimeout(this.persistChanges, e)), (a.timeoutDelay = o);
        }
        null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? (a.protoToSave = e) : (a.protoToSave = (0, g.re)(this.ProtoClass, r.protoToSave, e)), this.dispatchChanges(a);
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
        let t = null != (e = c.K.get(v)) ? e : {};
        (t[this.type] = Date.now()), c.K.set(v, t);
    }
    loadIfUncached(e, t) {
        (m.Z.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void u.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
                settingsType: this.type
            });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log('Loading proto'), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: t }
                    } = await o.tn.get({
                        url: b.ANM.USER_SETTINGS_PROTO(this.type),
                        rejectWithError: !1
                    }),
                    n = (0, g.d5)(this.ProtoClass, t);
                if (null == n)
                    return void this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                let r = h.Z[this.type],
                    { proto: i, isDirty: a, cleanupFuncs: s } = (0, g.xt)(n, r);
                return (
                    await u.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            type: this.type,
                            proto: n
                        },
                        resetEditInfo: a || e,
                        local: !1
                    }),
                    a && this.markDirtyFromMigration(i, s),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        i()(!__OVERLAY__, 'this cannot run in the overlay'),
            this.logger.log('Marking dirty due to migrates'),
            i()(null == this.getEditInfo().editInfo.offlineEditDataVersion, 'offline changes are not supported with migrations'),
            this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: E.fy.AUTOMATED,
                jitter: !0
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
                cleanup: e
            });
    }
    scheduleSaveFromOfflineEdit() {
        i()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Scheduling save from offline edit');
        let { editInfo: e } = this.getEditInfo();
        i()(null != e.protoToSave, 'protoToSave cannot be null'), i()(null != e.offlineEditDataVersion, 'offlineEditDataVersion cannot be null'), i()(null == e.timeout, 'timeout must not be set already');
        let t = O + Math.floor(Math.random() * O),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({
            timeout: n,
            timeoutDelay: t
        });
    }
    constructor(e, t) {
        y(this, 'ProtoClass', void 0),
            y(this, 'type', void 0),
            y(this, 'logger', void 0),
            y(this, 'beforeSendCallbacks', void 0),
            y(this, 'lastSendTime', void 0),
            y(this, 'persistChanges', void 0),
            (this.ProtoClass = e),
            (this.type = t),
            (this.beforeSendCallbacks = []),
            (this.lastSendTime = 0),
            (this.persistChanges = async () => {
                i()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Persisting proto');
                let { editInfo: e } = this.getEditInfo();
                if (null == e.protoToSave) return void this.logger.log('Not persisting proto because the proto was null');
                this.beforeSendCallbacks.forEach((t) => {
                    let { processProto: n } = t;
                    return n(e.protoToSave);
                });
                let t = (0, g.xU)(this.ProtoClass, e.protoToSave);
                if (null == t || '' === t) return void this.logger.log('Not persisting proto because there is nothing to change');
                try {
                    this.saveLastSendTime();
                    let { body: n } = await o.tn.patch({
                        url: b.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        },
                        rejectWithError: !1
                    });
                    n.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let r = (0, g.d5)(this.ProtoClass, n.settings);
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
                        let n = setTimeout(this.persistChanges, Math.min(30 * _.Z.Millis.SECOND, t * _.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: n
                        });
                    } else if (400 === e.status && (null == (n = e.body) ? void 0 : n.code) === b.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new a.Yd(this.ProtoClass.typeName));
    }
}
let A = new T(l.o8, E.yP.PRELOADED_USER_SETTINGS),
    N = new T(s.ji, E.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    C = {
        [E.yP.PRELOADED_USER_SETTINGS]: A,
        [E.yP.FRECENCY_AND_FAVORITES_SETTINGS]: N
    };
function P(e, t, n) {
    return A.updateAsync('guilds', (n) => (0, g.u0)(n, e, t), n);
}
function R(e, t, n, r) {
    return P(e, (e) => (0, g.uL)(e, t, n), r);
}
function w(e) {
    return A.updateAsync(
        'userContent',
        (t) => {
            if ((0, p.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, p.GV)(t.dismissedContents, e);
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function D(e, t) {
    return A.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e]
                ? (n.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: t,
                      lastDismissedAtMs: Date.now().toString(),
                      lastDismissedObjectId: '0'
                  })
                : ((n.recurringDismissibleContentStates[e].lastDismissedVersion = t), (n.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString()), (n.recurringDismissibleContentStates[e].lastDismissedObjectId = '0'));
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function L(e) {
    return A.updateAsync(
        'userContent',
        (t) => {
            null == t.recurringDismissibleContentStates[e]
                ? (t.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: 0,
                      lastDismissedAtMs: Date.now().toString(),
                      lastDismissedObjectId: '0'
                  })
                : (t.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString());
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function x(e, t) {
    return A.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e]
                ? (n.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: 0,
                      lastDismissedAtMs: Date.now().toString(),
                      lastDismissedObjectId: t
                  })
                : ((n.recurringDismissibleContentStates[e].lastDismissedVersion = 0), (n.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString()), (n.recurringDismissibleContentStates[e].lastDismissedObjectId = t));
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function k(e) {
    return A.updateAsync(
        'userContent',
        (t) => {
            if (!(0, p.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, p.jx)(t.dismissedContents, e);
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function M(e) {
    return A.updateAsync(
        'userContent',
        (t) => {
            if (null == t.recurringDismissibleContentStates[e]) return !1;
            (t.recurringDismissibleContentStates[e].lastDismissedVersion = 0), (t.recurringDismissibleContentStates[e].lastDismissedAtMs = '0'), (t.recurringDismissibleContentStates[e].lastDismissedObjectId = '0');
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function j() {
    return A.updateAsync(
        'userContent',
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
function U() {
    return A.updateAsync(
        'userContent',
        (e) => {
            let t = new Uint8Array();
            for (let n of d.V_)
                (0, d.O2)(n)
                    ? (t = (0, p.GV)(t, n))
                    : (e.recurringDismissibleContentStates[n] = {
                          lastDismissedVersion: (0, d.lg)(n) ? (0, f.t)(n) : 0,
                          lastDismissedAtMs: new Date().getTime().toString(),
                          lastDismissedObjectId: '0'
                      });
            e.dismissedContents = t;
        },
        E.fy.INFREQUENT_USER_ACTION
    );
}
