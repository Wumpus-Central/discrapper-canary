(n.d(t, { Z: () => m }), n(388685), n(457542));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(749210),
    s = n(493773),
    c = n(946273),
    u = n(496675),
    d = n(993706),
    p = n(796263),
    h = n(130883),
    f = n(388032);
function m(e) {
    let { channel: t, user: m, guild: g } = e,
        b = (0, l.e7)([d.Z], () => null != m && d.Z.isUserBanned(m.id)),
        _ = null != m && null == b,
        [y, C] = i.useState(_),
        x = (0, l.e7)([u.Z], () => null != m && null != g && (0, c.lD)(m, g, [u.Z]));
    if (
        ((0, s.ZP)(() => {
            _ && a.Z.searchGuildBans(t.guild_id, void 0, [null == m ? void 0 : m.id]).finally(() => C(!1));
        }),
        !x)
    )
        return null;
    let v = !0 === b ? f.intl.string(h.default.dpfwQ0) : f.intl.string(h.default.ASv23d),
        O = 'ban-user-'.concat(null == m ? void 0 : m.id);
    return (0, r.jsx)(
        p.Z,
        {
            text: v,
            icon: o.pgN,
            onClick: () => {
                null != m &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = (function (e) {
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
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, n)),
                                (l = l =
                                    {
                                        guildId: t.guild_id,
                                        user: m,
                                        modReportId: t.id
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
                                i)
                            );
                        };
                    });
            },
            disabled: !0 === b || y,
            submitting: y,
            color: o.zxk.Colors.RED
        },
        O
    );
}
