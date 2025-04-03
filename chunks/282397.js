let r, i;
n.d(t, { ZP: () => G }), n(47120);
var o,
    a = n(442837),
    s = n(570140),
    l = n(904245),
    c = n(911969),
    u = n(314897),
    d = n(592125),
    f = n(70956),
    _ = n(622449);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 5 * f.Z.Millis.MINUTE,
    b = 10 * f.Z.Millis.SECOND,
    y = {},
    v = {},
    O = {},
    I = {};
function S() {
    (y = {}),
        (v = {}),
        (O = {}),
        (I = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(I)) e - n.insertedAt > b && delete I[t];
        }, E);
}
function T(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: o, onSuccess: a, onFailure: s } = e;
    null != n && ((v[n] = t), (O[t] = n)),
        (y[t] = {
            state: _.F.QUEUED,
            data: r,
            onCreate: i,
            onCancel: o,
            onSuccess: a,
            onFailure: s
        });
}
function N(e) {
    var t;
    let { nonce: n, interactionId: r } = e;
    if (null == n) return !1;
    let i = y[n];
    if (null == i || i.state !== _.F.QUEUED) return !1;
    (i.state = _.F.CREATED), null == (t = i.onCreate) || t.call(i, r);
}
function A(e) {
    let { nonce: t } = e;
    k(t);
}
function C(e) {
    let { message: t } = e;
    if (null == t.nonce) return !1;
    {
        var n;
        let e = y[t.nonce];
        if (null == e) return !1;
        null == (n = e.onSuccess) || n.call(e), j(t.nonce);
    }
}
function R(e) {
    var t;
    let { nonce: n, errorCode: r, errorMessage: i, status: o, reasonCode: a } = e;
    if (null == n) return !1;
    let s = y[n];
    if (null == s) return !1;
    null == (t = s.onFailure) || t.call(s, r, i, o, a),
        s.data.interactionType === c.B8.APPLICATION_COMMAND
            ? j(n)
            : (y[n] = g(h({}, s), {
                  state: _.F.FAILED,
                  errorCode: r,
                  errorMessage: i
              }));
}
function P(e) {
    let { channelId: t } = e;
    if (null == d.Z.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(y)) t.state === _.F.FAILED && j(e);
}
function w(e) {
    let { nonce: t } = e;
    k(t);
}
function D(e) {
    let { application: t, nonce: n } = e;
    (i = t.id), k(n);
}
function L() {
    (r = void 0), (i = void 0);
}
function x(e) {
    let { modalKey: t } = e;
    r = t;
}
function M(e) {
    let t,
        n,
        { participants: r } = e,
        i = u.default.getSessionId(),
        o = u.default.getId(),
        a = r.find((e) => e.user_id === o && e.session_id === i);
    if (null == a || null == a.nonce) return;
    let s = I[a.nonce];
    null == s ? ((t = O[a.nonce]), (n = y[a.nonce])) : ((t = s.messageId), (n = s.interaction)), null != n && null != t && (j(a.nonce), null != t && 'channelId' in n.data && l.Z.deleteMessage(n.data.channelId, t, !0));
}
function k(e) {
    var t;
    if (null == e) return !1;
    let n = y[e];
    if (null == n) return !1;
    null == (t = n.onSuccess) || t.call(n), j(e);
}
function j(e) {
    if (null != I[e]) return void delete I[e];
    let t = y[e];
    delete y[e];
    let n = O[e];
    null != n && delete v[n],
        delete O[e],
        (I[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class U extends (o = a.ZP.Store) {
    getInteraction(e) {
        let t = v[e.id];
        return null != t ? y[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(y)) {
            let r = O[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = v[e];
        return (null == n || null == y[n] || y[n].state === _.F.FAILED) && (null == y[t] || y[t].state === _.F.FAILED);
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
}
p(U, 'displayName', 'InteractionStore');
let G = new U(s.Z, {
    LOGOUT: S,
    INTERACTION_QUEUE: T,
    INTERACTION_CREATE: N,
    INTERACTION_SUCCESS: A,
    INTERACTION_FAILURE: R,
    MESSAGE_CREATE: C,
    CHANNEL_SELECT: P,
    INTERACTION_IFRAME_MODAL_CREATE: D,
    INTERACTION_IFRAME_MODAL_CLOSE: L,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: x,
    INTERACTION_MODAL_CREATE: w,
    EMBEDDED_ACTIVITY_UPDATE_V2: M
});
