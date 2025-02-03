let i, r;
n.d(t, { ZP: () => k }), n(47120);
var a,
    s = n(442837),
    o = n(570140),
    l = n(904245),
    u = n(911969),
    c = n(314897),
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
let h = 5 * f.Z.Millis.MINUTE,
    m = 10 * f.Z.Millis.SECOND,
    g = {},
    E = {},
    v = {},
    y = {};
function I() {
    (g = {}),
        (E = {}),
        (v = {}),
        (y = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(y)) e - n.insertedAt > m && delete y[t];
        }, h);
}
function b(e) {
    let { nonce: t, messageId: n, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: o } = e;
    null != n && ((E[n] = t), (v[t] = n)),
        (g[t] = {
            state: _.F.QUEUED,
            data: i,
            onCreate: r,
            onCancel: a,
            onSuccess: s,
            onFailure: o
        });
}
function T(e) {
    var t;
    let { nonce: n, interactionId: i } = e;
    if (null == n) return !1;
    let r = g[n];
    if (null == r || r.state !== _.F.QUEUED) return !1;
    (r.state = _.F.CREATED), null === (t = r.onCreate) || void 0 === t || t.call(r, i);
}
function S(e) {
    let { nonce: t } = e;
    P(t);
}
function A(e) {
    let { message: t } = e;
    if (null == t.nonce) return !1;
    {
        var n;
        let e = g[t.nonce];
        if (null == e) return !1;
        null === (n = e.onSuccess) || void 0 === n || n.call(e), w(t.nonce);
    }
}
function N(e) {
    var t;
    let { nonce: n, errorCode: i, errorMessage: r, status: a, reasonCode: s } = e;
    if (null == n) return !1;
    let o = g[n];
    if (null == o) return !1;
    null === (t = o.onFailure) || void 0 === t || t.call(o, i, r, a, s),
        o.data.interactionType === u.B8.APPLICATION_COMMAND
            ? w(n)
            : (g[n] = {
                  ...o,
                  state: _.F.FAILED,
                  errorCode: i,
                  errorMessage: r
              });
}
function C(e) {
    let { channelId: t } = e;
    if (null == d.Z.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(g)) t.state === _.F.FAILED && w(e);
}
function R(e) {
    let { nonce: t } = e;
    P(t);
}
function O(e) {
    let { application: t, nonce: n } = e;
    (r = t.id), P(n);
}
function D() {
    (i = void 0), (r = void 0);
}
function x(e) {
    let { modalKey: t } = e;
    i = t;
}
function L(e) {
    let t,
        n,
        { participants: i } = e,
        r = c.default.getSessionId(),
        a = c.default.getId(),
        s = i.find((e) => e.user_id === a && e.session_id === r);
    if (null == s || null == s.nonce) return;
    let o = y[s.nonce];
    null == o ? ((t = v[s.nonce]), (n = g[s.nonce])) : ((t = o.messageId), (n = o.interaction)), null != n && null != t && (w(s.nonce), null != t && 'channelId' in n.data && l.Z.deleteMessage(n.data.channelId, t, !0));
}
function P(e) {
    var t;
    if (null == e) return !1;
    let n = g[e];
    if (null == n) return !1;
    null === (t = n.onSuccess) || void 0 === t || t.call(n), w(e);
}
function w(e) {
    if (null != y[e]) {
        delete y[e];
        return;
    }
    let t = g[e];
    delete g[e];
    let n = v[e];
    null != n && delete E[n],
        delete v[e],
        (y[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class M extends (a = s.ZP.Store) {
    getInteraction(e) {
        let t = E[e.id];
        return null != t ? g[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(g)) {
            let i = v[t];
            null != i && (e[i] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = E[e];
        return (null == n || null == g[n] || g[n].state === _.F.FAILED) && (null == g[t] || g[t].state === _.F.FAILED);
    }
    getIFrameModalApplicationId() {
        return r;
    }
    getIFrameModalKey() {
        return i;
    }
}
p(M, 'displayName', 'InteractionStore');
let k = new M(o.Z, {
    LOGOUT: I,
    INTERACTION_QUEUE: b,
    INTERACTION_CREATE: T,
    INTERACTION_SUCCESS: S,
    INTERACTION_FAILURE: N,
    MESSAGE_CREATE: A,
    CHANNEL_SELECT: C,
    INTERACTION_IFRAME_MODAL_CREATE: O,
    INTERACTION_IFRAME_MODAL_CLOSE: D,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: x,
    INTERACTION_MODAL_CREATE: R,
    EMBEDDED_ACTIVITY_UPDATE_V2: L
});
