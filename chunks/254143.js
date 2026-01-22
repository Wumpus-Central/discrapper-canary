n.d(t, { A: () => g }), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(421380),
    s = n(397927),
    o = n(686956),
    c = n(964486),
    u = n(351001),
    d = n(576705),
    f = n(400528),
    p = n(102817),
    h = n(641131),
    b = n(985018);
function g(e) {
    let { channel: t, user: g, guild: m } = e,
        A = (0, i.bG)([f.A], () => null != g && f.A.isUserBanned(g.id)),
        y = null != g && null == A,
        [O, j] = l.useState(y),
        v = (0, i.bG)([d.A], () => null != g && null != m && (0, u.fJ)(g, m, [d.A]));
    if (
        ((0, c.Ay)(() => {
            y && o.A.searchGuildBans(t.guild_id, void 0, [null == g ? void 0 : g.id]).finally(() => j(!1));
        }),
        !v)
    )
        return null;
    let x = !0 === A ? b.intl.string(h.default.dpfwQ1) : b.intl.string(h.default.ASv23S),
        E = "ban-user-".concat(null == g ? void 0 : g.id);
    return (0, r.jsx)(
        p.A,
        {
            text: x,
            icon: s.wI0,
            onClick: () => {
                null != g &&
                    (0, s.mMO)(async () => {
                        let { default: e } = await n.e("57742").then(n.bind(n, 333179));
                        return (n) => {
                            var l, i;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
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
                                (i = i =
                                    {
                                        guildId: t.guild_id,
                                        user: g,
                                        modReportId: t.id,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                l),
                            );
                        };
                    });
            },
            disabled: !0 === A || O,
            submitting: O,
            color: a.$n.Colors.RED,
        },
        E,
    );
}
