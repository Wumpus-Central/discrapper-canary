n.d(t, { Z: () => g }), n(388685), n(457542);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(749210),
    c = n(493773),
    u = n(946273),
    d = n(496675),
    p = n(993706),
    h = n(796263),
    f = n(342153),
    m = n(388032);
function g(e) {
    let { channel: t, user: g, guild: b } = e,
        y = (0, l.e7)([p.Z], () => null != g && p.Z.isUserBanned(g.id)),
        C = null != g && null == y,
        [v, _] = r.useState(C),
        O = (0, l.e7)([d.Z], () => null != g && null != b && (0, u.lD)(g, b, [d.Z]));
    if (
        ((0, c.ZP)(() => {
            C && s.Z.searchGuildBans(t.guild_id, void 0, [null == g ? void 0 : g.id]).finally(() => _(!1));
        }),
        !O)
    )
        return null;
    let x = !0 === y ? m.intl.string(f.default.dpfwQ1) : m.intl.string(f.default.ASv23S),
        j = "ban-user-".concat(null == g ? void 0 : g.id);
    return (0, i.jsx)(
        h.Z,
        {
            text: x,
            icon: o.pgN,
            onClick: () => {
                null != g &&
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("48192").then(n.bind(n, 497880));
                        return (n) => {
                            var r, l;
                            return (0, i.jsx)(
                                e,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
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
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                r),
                            );
                        };
                    });
            },
            disabled: !0 === y || v,
            submitting: v,
            color: a.zx.Colors.RED,
        },
        j,
    );
}
