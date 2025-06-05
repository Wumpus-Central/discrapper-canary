n.d(t, { Z: () => p });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(946273),
    o = n(271383),
    s = n(496675),
    c = n(796263),
    u = n(463959),
    d = n(388032);
function p(e) {
    let { channel: t, user: p, guild: h } = e,
        f = (0, i.e7)([s.Z], () => null != p && null != h && (0, a.nX)(p, h, [s.Z])),
        m = (0, i.e7)([o.ZP], () => null == p || null == o.ZP.getMember(t.guild_id, p.id));
    if (!f) return null;
    let g = m ? d.intl.string(u.default.Ux67nZ) : d.intl.string(u.default['snp/lJ']),
        b = 'kick-user-'.concat(null == p ? void 0 : p.id);
    return (0, r.jsx)(
        c.Z,
        {
            text: g,
            icon: l.I9k,
            onClick: () => {
                null != p &&
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (l = l =
                                    {
                                        guildId: t.guild_id,
                                        user: p,
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
            disabled: m
        },
        b
    );
}
