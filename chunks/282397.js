let i, a;
var o,
    s = r(47120);
var l = r(442837),
    u = r(570140),
    c = r(904245),
    d = r(911969),
    f = r(314897),
    p = r(592125),
    h = r(70956),
    _ = r(622449);
function m(e, n, r) {
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
let g = 5 * h.Z.Millis.MINUTE,
    E = 10 * h.Z.Millis.SECOND,
    v = {},
    y = {},
    b = {};
let I = {};
function T() {
    (v = {}),
        (y = {}),
        (b = {}),
        (I = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [n, r] of Object.entries(I)) e - r.insertedAt > E && delete I[n];
        }, g);
}
function S(e) {
    let { nonce: n, messageId: r, data: i, onCreate: a, onCancel: o, onSuccess: s, onFailure: l } = e;
    null != r && ((y[r] = n), (b[n] = r)),
        (v[n] = {
            state: _.F.QUEUED,
            data: i,
            onCreate: a,
            onCancel: o,
            onSuccess: s,
            onFailure: l
        });
}
function A(e) {
    var n;
    let { nonce: r, interactionId: i } = e;
    if (null == r) return !1;
    let a = v[r];
    if (null == a || a.state !== _.F.QUEUED) return !1;
    (a.state = _.F.CREATED), null === (n = a.onCreate) || void 0 === n || n.call(a, i);
}
function C(e) {
    let { nonce: n } = e;
    M(n);
}
function N(e) {
    let { message: n } = e;
    if (null == n.nonce) return !1;
    {
        var r;
        let e = v[n.nonce];
        if (null == e) return !1;
        null === (r = e.onSuccess) || void 0 === r || r.call(e), k(n.nonce);
    }
}
function R(e) {
    var n;
    let { nonce: r, errorCode: i, errorMessage: a, status: o, reasonCode: s } = e;
    if (null == r) return !1;
    let l = v[r];
    if (null == l) return !1;
    null === (n = l.onFailure) || void 0 === n || n.call(l, i, a, o, s),
        l.data.interactionType === d.B8.APPLICATION_COMMAND
            ? k(r)
            : (v[r] = {
                  ...l,
                  state: _.F.FAILED,
                  errorCode: i,
                  errorMessage: a
              });
}
function O(e) {
    let { channelId: n } = e;
    if (null == p.Z.getChannel(n)) return !1;
    for (let [e, n] of Object.entries(v)) n.state === _.F.FAILED && k(e);
}
function D(e) {
    let { nonce: n } = e;
    M(n);
}
function x(e) {
    let { application: n, nonce: r } = e;
    (a = n.id), M(r);
}
function L() {
    (i = void 0), (a = void 0);
}
function w(e) {
    let { modalKey: n } = e;
    i = n;
}
function P(e) {
    let n,
        r,
        { participants: i } = e,
        a = f.default.getSessionId(),
        o = f.default.getId(),
        s = i.find((e) => e.user_id === o && e.session_id === a);
    if (null == s || null == s.nonce) return;
    let l = I[s.nonce];
    if ((null == l ? ((n = b[s.nonce]), (r = v[s.nonce])) : ((n = l.messageId), (r = l.interaction)), null != r && null != n)) k(s.nonce), null != n && 'channelId' in r.data && c.Z.deleteMessage(r.data.channelId, n, !0);
}
function M(e) {
    var n;
    if (null == e) return !1;
    let r = v[e];
    if (null == r) return !1;
    null === (n = r.onSuccess) || void 0 === n || n.call(r), k(e);
}
function k(e) {
    if (null != I[e]) {
        delete I[e];
        return;
    }
    let n = v[e];
    delete v[e];
    let r = b[e];
    null != r && delete y[r],
        delete b[e],
        (I[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: r,
            interaction: n
        });
}
class U extends (o = l.ZP.Store) {
    getInteraction(e) {
        let n = y[e.id];
        return null != n ? v[n] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [n, r] of Object.entries(v)) {
            let i = b[n];
            null != i && (e[i] = r.state);
        }
        return e;
    }
    canQueueInteraction(e, n) {
        let r = y[e];
        return (null == r || null == v[r] || v[r].state === _.F.FAILED) && (null == v[n] || v[n].state === _.F.FAILED) && !0;
    }
    getIFrameModalApplicationId() {
        return a;
    }
    getIFrameModalKey() {
        return i;
    }
}
m(U, 'displayName', 'InteractionStore'),
    (n.ZP = new U(u.Z, {
        LOGOUT: T,
        INTERACTION_QUEUE: S,
        INTERACTION_CREATE: A,
        INTERACTION_SUCCESS: C,
        INTERACTION_FAILURE: R,
        MESSAGE_CREATE: N,
        CHANNEL_SELECT: O,
        INTERACTION_IFRAME_MODAL_CREATE: x,
        INTERACTION_IFRAME_MODAL_CLOSE: L,
        INTERACTION_IFRAME_MODAL_KEY_CREATE: w,
        INTERACTION_MODAL_CREATE: D,
        EMBEDDED_ACTIVITY_UPDATE_V2: P
    }));
