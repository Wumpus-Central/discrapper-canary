n.d(t, {
    A: () => m,
}),
    n(747238);
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    a = n(283823),
    s = n(455207),
    o = n(542287),
    c = n(589022),
    u = n(734057),
    d = n(287809),
    p = n(943667);

function m(e, t) {
    var n, i, m, f;
    if ((0, s.MZ)(t)) return (0, r.jsx)(o.A, {});
    if ((0, p.A)(t)) {
        let l = (null != (n = null == t || null == (i = t.author) ? void 0 : i.username) ? n : "")
                .split(" ")
                .slice(0, -1)
                .join(" "),
            { guild_id: s } = t.messageReference;
        if (null != s)
            return (0, r.jsx)(a.A, {
                setPopoutRef: e.setPopoutRef,
                guildId: s,
                name: l,
            });
    }
    if (null != t.interaction && "SENDING" === t.state) return (0, r.jsx)(r.Fragment, {});
    let g = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
    l()(null != g, "renderUserGuildPopout: user should never be null");
    let h = d.default.getCurrentUser();
    l()(null != h, "renderUserGuildPopout: currentUser should never be null");
    let _ = u.A.getChannel(t.channel_id);
    return (
        l()(null != _, "renderUserGuildPopout: channel should never be null"),
        (0, r.jsx)(
            c.A,
            ((m = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (f = f =
                {
                    user: g,
                    currentUser: h,
                    guildId: _.guild_id,
                    channelId: t.channel_id,
                    messageId: t.id,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(f))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(f)).forEach(function (e) {
                      Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(f, e));
                  }),
            m),
        )
    );
}
