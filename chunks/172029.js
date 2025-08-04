(n.d(t, { Z: () => b }), n(388685));
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    _ = {};
function p(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    if (t === n) return !1;
    ((_ = {}), (f = {}));
}
function h(e) {
    let { id: t } = e;
    for (let [e, n] of (delete f[t], Object.entries(_))) t === n && delete _[e];
}
function m(e) {
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
    (delete f[a.nonce], (_ = d(c({}, _), { [u]: a.id })));
}
function g(e) {
    let { streamKey: t } = e,
        { ownerId: n } = a.my(t);
    if (null == _[n]) return !1;
    delete _[n];
}
class E extends r.ZP.Store {
    getPendingRequestForUser(e) {
        return _[e];
    }
}
let b = new E(i.Z, {
    STREAM_WATCH: g,
    MESSAGE_CREATE: m,
    MESSAGE_DELETE: h,
    VOICE_CHANNEL_SELECT: p
});
