let r, i;
n.d(t, { ZP: () => G }), n(388685);
var a,
    o = n(442837),
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
    O = {},
    v = {},
    I = {};
function S() {
    (y = {}),
        (O = {}),
        (v = {}),
        (I = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(I)) e - n.insertedAt > b && delete I[t];
        }, E);
}
function T(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: a, onSuccess: o, onFailure: s } = e;
    null != n && ((O[n] = t), (v[t] = n)),
        (y[t] = {
            state: _.F.QUEUED,
            data: r,
            onCreate: i,
            onCancel: a,
            onSuccess: o,
            onFailure: s
        });
}
function A(e) {
    var t;
    let { nonce: n, interactionId: r } = e;
    if (null == n) return !1;
    let i = y[n];
    if (null == i || i.state !== _.F.QUEUED) return !1;
    (i.state = _.F.CREATED), null == (t = i.onCreate) || t.call(i, r);
}
function N(e) {
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
    let { nonce: n, errorCode: r, errorMessage: i, status: a, reasonCode: o } = e;
    if (null == n) return !1;
    let s = y[n];
    if (null == s) return !1;
    null == (t = s.onFailure) || t.call(s, r, i, a, o),
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
        a = u.default.getId(),
        o = r.find((e) => e.user_id === a && e.session_id === i);
    if (null == o || null == o.nonce) return;
    let s = I[o.nonce];
    null == s ? ((t = v[o.nonce]), (n = y[o.nonce])) : ((t = s.messageId), (n = s.interaction)), null != n && null != t && (j(o.nonce), null != t && 'channelId' in n.data && l.Z.deleteMessage(n.data.channelId, t, !0));
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
    let n = v[e];
    null != n && delete O[n],
        delete v[e],
        (I[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class U extends (a = o.ZP.Store) {
    getInteraction(e) {
        let t = O[e.id];
        return null != t ? y[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(y)) {
            let r = v[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = O[e];
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
    INTERACTION_CREATE: A,
    INTERACTION_SUCCESS: N,
    INTERACTION_FAILURE: R,
    MESSAGE_CREATE: C,
    CHANNEL_SELECT: P,
    INTERACTION_IFRAME_MODAL_CREATE: D,
    INTERACTION_IFRAME_MODAL_CLOSE: L,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: x,
    INTERACTION_MODAL_CREATE: w,
    EMBEDDED_ACTIVITY_UPDATE_V2: M
});
