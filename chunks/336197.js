n.d(t, { Z: () => m });
var r = n(727429),
    i = n(703656),
    o = n(769654),
    a = n(592125),
    s = n(754688),
    l = n(849027),
    c = n(645727),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    if (null == e.channelId) return e;
    let t = a.Z.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, r.e)(t);
    return p(f({}, e), { guildId: null != n ? n : u.ME });
}
async function m(e, t) {
    let n = (0, s.Qj)(e);
    if (null != n && !(await (0, l.Z)(n))) return void (0, c.k)({ kind: 'channel' });
    if (null == n) return void (0, i.uL)(e, t);
    let r = h(n);
    if (null == r.channelId) return void (0, o.X)(r.guildId);
    null != r.threadId ? (0, i.uL)(u.Z5c.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t) : (0, i.uL)(u.Z5c.CHANNEL(r.guildId, r.channelId, r.messageId), t);
}
