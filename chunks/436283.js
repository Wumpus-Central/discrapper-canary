let r, i;
n.d(t, { Ay: () => G }), n(896048);
var a,
    s = n(311907),
    o = n(73153),
    l = n(843472),
    c = n(155718),
    u = n(961350),
    d = n(734057),
    f = n(927813),
    p = n(337591);
function _(e, t, n) {
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
function h(e) {
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
let E = 5 * f.A.Millis.MINUTE,
    b = 10 * f.A.Millis.SECOND,
    y = {},
    O = {},
    A = {},
    v = {};
function S() {
    (y = {}),
        (O = {}),
        (A = {}),
        (v = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(v)) e - n.insertedAt > b && delete v[t];
        }, E);
}
function I(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: a, onSuccess: s, onFailure: o } = e;
    null != n && ((O[n] = t), (A[t] = n)),
        (y[t] = {
            state: p.m.QUEUED,
            data: r,
            onCreate: i,
            onCancel: a,
            onSuccess: s,
            onFailure: o,
        });
}
function T(e) {
    var t;
    let { nonce: n, interactionId: r } = e;
    if (null == n) return !1;
    let i = y[n];
    if (null == i || i.state !== p.m.QUEUED) return !1;
    (i.state = p.m.CREATED), null == (t = i.onCreate) || t.call(i, r);
}
function C(e) {
    let { nonce: t } = e;
    M(t);
}
function N(e) {
    let { message: t } = e;
    if (null == t.nonce) return !1;
    {
        var n;
        let e = y[t.nonce];
        if (null == e) return !1;
        null == (n = e.onSuccess) || n.call(e), k(t.nonce);
    }
}
function R(e) {
    var t;
    let { nonce: n, errorCode: r, errorMessage: i, status: a, reasonCode: s } = e;
    if (null == n) return !1;
    let o = y[n];
    if (null == o) return !1;
    null == (t = o.onFailure) || t.call(o, r, i, a, s),
        o.data.interactionType === c.G4.APPLICATION_COMMAND
            ? k(n)
            : (y[n] = g(h({}, o), {
                  state: p.m.FAILED,
                  errorCode: r,
                  errorMessage: i,
              }));
}
function w(e) {
    let { channelId: t } = e;
    if (null == d.A.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(y)) t.state === p.m.FAILED && k(e);
}
function P(e) {
    let { nonce: t } = e;
    M(t);
}
function D(e) {
    let { application: t, nonce: n } = e;
    (i = t.id), M(n);
}
function x() {
    (r = void 0), (i = void 0);
}
function L(e) {
    let { modalKey: t } = e;
    r = t;
}
function j(e) {
    let t,
        n,
        { participants: r } = e,
        i = u.default.getSessionId(),
        a = u.default.getId(),
        s = r.find((e) => e.user_id === a && e.session_id === i);
    if (null == s || null == s.nonce) return;
    let o = v[s.nonce];
    null == o ? ((t = A[s.nonce]), (n = y[s.nonce])) : ((t = o.messageId), (n = o.interaction)),
        null != n &&
            null != t &&
            (k(s.nonce), null != t && "channelId" in n.data && l.A.deleteMessage(n.data.channelId, t, !0));
}
function M(e) {
    var t;
    if (null == e) return !1;
    let n = y[e];
    if (null == n) return !1;
    null == (t = n.onSuccess) || t.call(n), k(e);
}
function k(e) {
    if (null != v[e]) return void delete v[e];
    let t = y[e];
    delete y[e];
    let n = A[e];
    null != n && delete O[n],
        delete A[e],
        (v[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t,
        });
}
class U extends (a = s.Ay.Store) {
    initialize() {
        this.waitFor(u.default, d.A);
    }
    getInteraction(e) {
        let t = O[e.id];
        return null != t ? y[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(y)) {
            let r = A[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = O[e];
        return (null == n || null == y[n] || y[n].state === p.m.FAILED) && (null == y[t] || y[t].state === p.m.FAILED);
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
}
_(U, "displayName", "InteractionStore");
let G = new U(o.h, {
    LOGOUT: S,
    INTERACTION_QUEUE: I,
    INTERACTION_CREATE: T,
    INTERACTION_SUCCESS: C,
    INTERACTION_FAILURE: R,
    MESSAGE_CREATE: N,
    CHANNEL_SELECT: w,
    INTERACTION_IFRAME_MODAL_CREATE: D,
    INTERACTION_IFRAME_MODAL_CLOSE: x,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: L,
    INTERACTION_MODAL_CREATE: P,
    EMBEDDED_ACTIVITY_UPDATE_V2: j,
});
