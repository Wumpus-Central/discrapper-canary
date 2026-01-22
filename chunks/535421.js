n.d(t, { A: () => g }), n(747238);
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(283823),
    o = n(455207),
    l = n(542287),
    c = n(589022),
    u = n(734057),
    d = n(287809),
    f = n(943667);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if ((0, o.MZ)(t)) return (0, r.jsx)(l.A, {});
    if ((0, f.A)(t)) {
        var n, i;
        let a = (null != (n = null == t || null == (i = t.author) ? void 0 : i.username) ? n : "")
                .split(" ")
                .slice(0, -1)
                .join(" "),
            { guild_id: o } = t.messageReference;
        if (null != o)
            return (0, r.jsx)(s.A, {
                setPopoutRef: e.setPopoutRef,
                guildId: o,
                name: a,
            });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, r.jsx)(r.Fragment, {});
    let p = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
    a()(null != p, "renderUserGuildPopout: user should never be null");
    let h = d.default.getCurrentUser();
    a()(null != h, "renderUserGuildPopout: currentUser should never be null");
    let g = u.A.getChannel(t.channel_id);
    return (
        a()(null != g, "renderUserGuildPopout: channel should never be null"),
        (0, r.jsx)(
            c.A,
            m(_({}, e), {
                user: p,
                currentUser: h,
                guildId: g.guild_id,
                channelId: t.channel_id,
                messageId: t.id,
            }),
        )
    );
}
