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
    p = n(622449);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
    v = 10 * f.Z.Millis.SECOND,
    b = {},
    y = {},
    O = {},
    S = {};
function I() {
    (b = {}),
        (y = {}),
        (O = {}),
        (S = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(S)) e - n.insertedAt > v && delete S[t];
        }, E);
}
function T(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: o, onSuccess: a, onFailure: s } = e;
    null != n && ((y[n] = t), (O[t] = n)),
        (b[t] = {
            state: p.F.QUEUED,
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
    let i = b[n];
    if (null == i || i.state !== p.F.QUEUED) return !1;
    (i.state = p.F.CREATED), null === (t = i.onCreate) || void 0 === t || t.call(i, r);
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
        let e = b[t.nonce];
        if (null == e) return !1;
        null === (n = e.onSuccess) || void 0 === n || n.call(e), j(t.nonce);
    }
}
function R(e) {
    var t;
    let { nonce: n, errorCode: r, errorMessage: i, status: o, reasonCode: a } = e;
    if (null == n) return !1;
    let s = b[n];
    if (null == s) return !1;
    null === (t = s.onFailure) || void 0 === t || t.call(s, r, i, o, a),
        s.data.interactionType === c.B8.APPLICATION_COMMAND
            ? j(n)
            : (b[n] = g(h({}, s), {
                  state: p.F.FAILED,
                  errorCode: r,
                  errorMessage: i
              }));
}
function P(e) {
    let { channelId: t } = e;
    if (null == d.Z.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(b)) t.state === p.F.FAILED && j(e);
}
function w(e) {
    let { nonce: t } = e;
    k(t);
}
function D(e) {
    let { application: t, nonce: n } = e;
    (i = t.id), k(n);
}
function x() {
    (r = void 0), (i = void 0);
}
function L(e) {
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
    let s = S[a.nonce];
    null == s ? ((t = O[a.nonce]), (n = b[a.nonce])) : ((t = s.messageId), (n = s.interaction)), null != n && null != t && (j(a.nonce), null != t && 'channelId' in n.data && l.Z.deleteMessage(n.data.channelId, t, !0));
}
function k(e) {
    var t;
    if (null == e) return !1;
    let n = b[e];
    if (null == n) return !1;
    null === (t = n.onSuccess) || void 0 === t || t.call(n), j(e);
}
function j(e) {
    if (null != S[e]) {
        delete S[e];
        return;
    }
    let t = b[e];
    delete b[e];
    let n = O[e];
    null != n && delete y[n],
        delete O[e],
        (S[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class U extends (o = a.ZP.Store) {
    getInteraction(e) {
        let t = y[e.id];
        return null != t ? b[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(b)) {
            let r = O[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = y[e];
        return (null == n || null == b[n] || b[n].state === p.F.FAILED) && (null == b[t] || b[t].state === p.F.FAILED);
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
}
_(U, 'displayName', 'InteractionStore');
let G = new U(s.Z, {
    LOGOUT: I,
    INTERACTION_QUEUE: T,
    INTERACTION_CREATE: N,
    INTERACTION_SUCCESS: A,
    INTERACTION_FAILURE: R,
    MESSAGE_CREATE: C,
    CHANNEL_SELECT: P,
    INTERACTION_IFRAME_MODAL_CREATE: D,
    INTERACTION_IFRAME_MODAL_CLOSE: x,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: L,
    INTERACTION_MODAL_CREATE: w,
    EMBEDDED_ACTIVITY_UPDATE_V2: M
});
