n.d(t, { Z: () => v }), n(388685);
var r = n(442837),
    i = n(570140),
    a = n(569545),
    o = n(19780),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {},
    p = {},
    _ = null;
function m() {
    (p = {}), (f = {});
}
function h(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    if (t === n) return !1;
    m();
}
function g(e) {
    let { id: t } = e;
    for (let [e, n] of (delete f[t], Object.entries(p))) t === n && delete p[e];
}
function E(e) {
    var t, n;
    let { channelId: r, sendMessageOptions: i, message: a, optimistic: l } = e;
    if (r !== o.Z.getChannelId()) return !1;
    if (l) {
        let e = null == i || null == (n = i.activityAction) ? void 0 : n.targetUserId;
        return null != e && ((f[a.id] = e), !1);
    }
    if (null == a.nonce || (null == (t = a.activity) ? void 0 : t.type) !== s.mFx.STREAM_REQUEST) return !1;
    let u = f[a.nonce];
    if (null == u) return !1;
    delete f[a.nonce], (p = d(c({}, p), { [u]: a.id }));
}
function b(e) {
    let { streamKey: t } = e,
        { ownerId: n } = a.my(t);
    if (null == p[n]) return !1;
    delete p[n];
}
function y() {
    if (o.Z.getWasMoved()) {
        if (o.Z.getChannelId() === _) return !1;
        (_ = o.Z.getChannelId()), m();
    } else {
        if (null == _) return !1;
        _ = null;
    }
}
class O extends r.ZP.Store {
    initialize() {
        this.waitFor(o.Z);
    }
    getPendingRequestForUser(e) {
        return p[e];
    }
}
let v = new O(i.Z, {
    STREAM_WATCH: b,
    MESSAGE_CREATE: E,
    MESSAGE_DELETE: g,
    VOICE_CHANNEL_SELECT: h,
    VOICE_STATE_UPDATES: y,
    LOGOUT: m,
});
