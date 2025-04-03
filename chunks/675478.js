n.d(t, {
    BU: () => R,
    Bn: () => w,
    DZ: () => N,
    PS: () => C,
    T6: () => I,
    Z1: () => x,
    aj: () => A,
    bE: () => k,
    fy: () => g.fy,
    hW: () => T,
    nm: () => P,
    sr: () => M,
    w9: () => L,
    z2: () => D
}),
    n(411104),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298);
var r = n(512722),
    i = n.n(r),
    o = n(259443),
    a = n(544891),
    s = n(704215),
    l = n(377108),
    c = n(524437),
    u = n(433517),
    d = n(570140),
    f = n(70956),
    _ = n(915486),
    p = n(262847),
    h = n(581883),
    m = n(48481),
    g = n(526761),
    E = n(981631);
function b(e, t, n) {
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
let y = 5000,
    v = 'UserSettingsProtoLastWriteTimes',
    O = Date.now();
function I() {}
d.Z.subscribe('CONNECTION_OPEN', () => {
    O = Date.now();
}),
    d.Z.subscribe('CONNECTION_CLOSED', () => {
        O = Date.now();
    }),
    'undefined' != typeof document &&
        (document.addEventListener('mousedown', () => {
            O = 0;
        }),
        document.addEventListener('keydown', () => {
            O = 0;
        }));
class S {
    getEditInfo() {
        return h.Z.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n) {
        await this.loadIfNecessary();
        let r = this.ProtoClass.fields.find((t) => t.localName === e);
        if (null == r) throw Error('Unknown proto field name '.concat(String(e)));
        let i = r.T(),
            o = this.getCurrentValue()[e],
            a = null != o ? i.fromBinary(i.toBinary(o), m.Uc) : i.create();
        if (!1 === t(a)) return;
        let s = this.ProtoClass.create();
        (s[e] = a),
            __OVERLAY__
                ? d.Z.dispatch({
                      type: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
                      settings: {
                          type: this.type,
                          proto: s
                      },
                      delaySeconds: n,
                      jitter: n === g.fy.AUTOMATED || n === g.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(n)),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === g.fy.AUTOMATED || n === g.fy.DAILY
                  }));
    }
    markDirty(e, t) {
        var n;
        i()(!__OVERLAY__, 'this cannot run in the overlay');
        let { editInfo: r } = this.getEditInfo(),
            o = { timeout: r.timeout };
        if (!r.loaded) throw Error('Cannot edit user settings proto because we have not yet loaded the stored version from the DB');
        !1 !== t.dispatch &&
            d.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    type: this.type,
                    proto: e
                },
                partial: !0,
                local: !0
            });
        let a = null != (n = t.delaySeconds) ? n : 0;
        if ((null != o.timeout && a < r.timeoutDelay && !r.rateLimited && (clearTimeout(o.timeout), (o.timeout = void 0)), null == o.timeout)) {
            let e = a * f.Z.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * f.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (o.timeout = setTimeout(this.persistChanges, e)), (o.timeoutDelay = a);
        }
        null != t.cleanup && (o.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? (o.protoToSave = e) : (o.protoToSave = (0, m.re)(this.ProtoClass, r.protoToSave, e)), this.dispatchChanges(o);
    }
    dispatchChanges(e) {
        d.Z.dispatch({
            type: 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO',
            settings: {
                changes: e,
                type: this.type
            }
        });
    }
    saveLastSendTime() {
        var e;
        let t = null != (e = u.K.get(v)) ? e : {};
        (t[this.type] = Date.now()), u.K.set(v, t);
    }
    loadIfUncached(e, t) {
        (h.Z.hasLoaded(e) && !0 !== t) || this.loadIfNecessary(t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__)
            return void d.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
                settingsType: this.type
            });
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log('Loading proto'), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: t }
                    } = await a.tn.get({
                        url: E.ANM.USER_SETTINGS_PROTO(this.type),
                        rejectWithError: !1
                    }),
                    n = (0, m.d5)(this.ProtoClass, t);
                if (null == n)
                    return void this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                let r = p.Z[this.type],
                    { proto: i, isDirty: o, cleanupFuncs: s } = (0, m.xt)(n, r);
                return (
                    await d.Z.dispatch({
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
        i()(!__OVERLAY__, 'this cannot run in the overlay'),
            this.logger.log('Marking dirty due to migrates'),
            i()(null == this.getEditInfo().editInfo.offlineEditDataVersion, 'offline changes are not supported with migrations'),
            this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: g.fy.AUTOMATED,
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
        let t = y + Math.floor(Math.random() * y),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({
            timeout: n,
            timeoutDelay: t
        });
    }
    constructor(e, t) {
        b(this, 'ProtoClass', void 0),
            b(this, 'type', void 0),
            b(this, 'logger', void 0),
            b(this, 'beforeSendCallbacks', void 0),
            b(this, 'lastSendTime', void 0),
            b(this, 'persistChanges', void 0),
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
                let t = (0, m.xU)(this.ProtoClass, e.protoToSave);
                if (null == t || '' === t) return void this.logger.log('Not persisting proto because there is nothing to change');
                try {
                    this.saveLastSendTime();
                    let { body: n } = await a.tn.patch({
                        url: E.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        },
                        rejectWithError: !1
                    });
                    n.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let r = (0, m.d5)(this.ProtoClass, n.settings);
                    if (null == r) return;
                    d.Z.dispatch({
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
                        let n = setTimeout(this.persistChanges, Math.min(30 * f.Z.Millis.SECOND, t * f.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: n
                        });
                    } else if (400 === e.status && (null == (n = e.body) ? void 0 : n.code) === E.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new o.Yd(this.ProtoClass.typeName));
    }
}
let T = new S(c.o8, g.yP.PRELOADED_USER_SETTINGS),
    N = new S(l.ji, g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    A = {
        [g.yP.PRELOADED_USER_SETTINGS]: T,
        [g.yP.FRECENCY_AND_FAVORITES_SETTINGS]: N
    };
function C(e, t, n) {
    return T.updateAsync('guilds', (n) => (0, m.u0)(n, e, t), n);
}
function R(e, t, n, r) {
    return C(e, (e) => (0, m.uL)(e, t, n), r);
}
function P(e) {
    return T.updateAsync(
        'userContent',
        (t) => {
            if ((0, _.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, _.GV)(t.dismissedContents, e);
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function w(e, t) {
    return T.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e]
                ? (n.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: t,
                      lastDismissedAtMs: Date.now().toString()
                  })
                : ((n.recurringDismissibleContentStates[e].lastDismissedVersion = t), (n.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString()));
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function D(e) {
    return T.updateAsync(
        'userContent',
        (t) => {
            null == t.recurringDismissibleContentStates[e]
                ? (t.recurringDismissibleContentStates[e] = {
                      lastDismissedVersion: 0,
                      lastDismissedAtMs: Date.now().toString()
                  })
                : (t.recurringDismissibleContentStates[e].lastDismissedAtMs = Date.now().toString());
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function L(e) {
    return T.updateAsync(
        'userContent',
        (t) => {
            if (!(0, _.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, _.jx)(t.dismissedContents, e);
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function x(e) {
    return T.updateAsync(
        'userContent',
        (t) => {
            if (null == t.recurringDismissibleContentStates[e]) return !1;
            (t.recurringDismissibleContentStates[e].lastDismissedVersion = 0), (t.recurringDismissibleContentStates[e].lastDismissedAtMs = '0');
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function M() {
    return T.updateAsync(
        'userContent',
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function k() {
    return T.updateAsync(
        'userContent',
        (e) => {
            let t = new Uint8Array();
            for (let e of Object.keys(s.z)) t = (0, _.GV)(t, s.z[e]);
            e.dismissedContents = t;
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
