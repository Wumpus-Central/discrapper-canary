n.d(t, { Z: () => g }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(749210),
    c = n(493773),
    u = n(946273),
    d = n(496675),
    p = n(993706),
    f = n(796263),
    h = n(43617),
    m = n(388032);
function g(e) {
    let { channel: t, user: g, guild: b } = e,
        _ = (0, l.e7)([p.Z], () => null != g && p.Z.isUserBanned(g.id)),
        y = null != g && null == _,
        [C, v] = i.useState(y),
        O = (0, l.e7)([d.Z], () => null != g && null != b && (0, u.lD)(g, b, [d.Z]));
    if (
        ((0, c.ZP)(() => {
            y && s.Z.searchGuildBans(t.guild_id, void 0, [null == g ? void 0 : g.id]).finally(() => v(!1));
        }),
        !O)
    )
        return null;
    let x = !0 === _ ? m.intl.string(h.default.dpfwQ1) : m.intl.string(h.default.ASv23S),
        E = "ban-user-".concat(null == g ? void 0 : g.id);
    return (0, r.jsx)(
        f.Z,
        {
            text: x,
            icon: o.pgN,
            onClick: () => {
                null != g &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("48192").then(n.bind(n, 497880));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = (function (e) {
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
                                })({}, n)),
                                (l = l =
                                    {
                                        guildId: t.guild_id,
                                        user: g,
                                        modReportId: t.id,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i),
                            );
                        };
                    });
            },
            disabled: !0 === _ || C,
            submitting: C,
            color: a.zx.Colors.RED,
        },
        E,
    );
}
