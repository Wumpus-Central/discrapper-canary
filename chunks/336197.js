n.d(t, { Z: () => g });
var r = n(727429),
    i = n(982168),
    o = n(703656),
    a = n(769654),
    s = n(592125),
    l = n(754688),
    c = n(849027),
    u = n(927723),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    if (null == e.channelId) return e;
    let t = s.Z.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, r.e)(t);
    return h(_({}, e), { guildId: null != n ? n : d.ME });
}
async function g(e, t) {
    let n = (0, l.Qj)(e);
    if (null != n && !(await (0, c.Z)(n))) return void (0, u.k)({ kind: 'channel' });
    if (null == n) return void (0, o.uL)(e, t);
    let r = m(n);
    return null == r.channelId ? void (0, a.X)(r.guildId) : (0, i.WF)(r.channelId) && (0, i.WF)(r.threadId) ? void (null != r.threadId ? (0, o.uL)(d.Z5c.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t) : (0, o.uL)(d.Z5c.CHANNEL(r.guildId, r.channelId, r.messageId), t)) : void (0, u.V)();
}
