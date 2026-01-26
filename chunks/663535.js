n.d(t, {
    A: () => x,
});
var r = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    i = n(964486),
    c = n(104171),
    u = n(734057),
    d = n(256587),
    h = n(287809),
    g = n(802958),
    m = n(190772),
    f = n(37411),
    j = n(106259);
let x = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: i } = e,
        c = (0, a.bG)([u.A], () => u.A.getChannel(t)),
        d = (0, a.bG)([u.A], () => u.A.getChannel(c.parent_id));
    return (0, r.jsxs)(s.DUT, {
        className: j.kL,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("99011"), n.e("88974"), n.e("9282")]).then(
                    n.bind(n, 44536),
                );
                return (t) => {
                    var n, l;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        })({}, t)),
                        (l = l =
                            {
                                channel: c,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                };
            }),
        children: [
            (0, r.jsxs)("div", {
                className: j.kb,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        className: j.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, r.jsx)("span", {
                                className: j.CB,
                                children: c.name,
                            }),
                            i && null != d
                                ? (0, r.jsx)("span", {
                                      className: j.Ot,
                                      children: "#".concat(d.name),
                                  })
                                : null,
                        ],
                    }),
                    (0, m.A)(c),
                ],
            }),
            (0, r.jsx)(v, {
                channel: c,
            }),
        ],
    });
});

function v(e) {
    let { channel: t } = e,
        n = (0, a.bG)([g.A], () => {
            var e;
            return null != (e = g.A.getMemberIdsPreview(t.id)) ? e : [];
        }),
        l = (0, a.bG)([g.A], () => {
            var e;
            return null != (e = g.A.getMemberCount(t.id)) ? e : 0;
        }),
        s = (0, a.yK)([h.default], () => n.map((e) => h.default.getUser(e)));
    return ((0, i.Ay)(() => {
        n.filter((e, t) => null == s[t]).forEach((e) => {
            d.A.requestMember(t.guild_id, e);
        });
    }),
    0 === n.length)
        ? null
        : (0, r.jsx)(c.Ay, {
              className: j.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: s,
              count: l,
              max: f.Td,
          });
}
