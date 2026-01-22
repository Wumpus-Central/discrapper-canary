n.d(t, { A: () => g });
var r = n(584682),
    i = n(376708),
    a = n(976860),
    s = n(345942),
    o = n(734057),
    l = n(376943),
    c = n(150129),
    u = n(9588),
    d = n(652215);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e) {
    if (null == e.channelId) return e;
    let t = o.A.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, r.j)(t);
    return h(p({}, e), { guildId: null != n ? n : d.ME });
}
async function g(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await (0, c.A)(n))) return void (0, u.K)({ kind: "channel" });
    if (null == n) return void (0, a.pX)(e, t);
    let r = m(n);
    null == r.channelId
        ? (0, s.u)(r.guildId)
        : (0, i.C$)(r.channelId) && (0, i.C$)(r.threadId)
          ? null != r.threadId
              ? (0, a.pX)(d.BVt.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t)
              : (0, a.pX)(d.BVt.CHANNEL(r.guildId, r.channelId, r.messageId), t)
          : (0, u.E)();
}
