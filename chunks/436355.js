n.d(t, { Z: () => d });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(946273),
    o = n(496675),
    s = n(796263),
    c = n(877021),
    u = n(388032);
function d(e) {
    let { channel: t, user: d, member: p, guild: h } = e;
    if (!(0, i.e7)([o.Z], () => null != d && null != h && (0, a.BK)(d, h, [o.Z]))) return null;
    let f = null == p ? u.intl.string(c.default.Ux67nZ) : u.intl.string(c.default['snp/lJ']),
        m = 'kick-user-'.concat(null == d ? void 0 : d.id);
    return (0, r.jsx)(
        s.Z,
        {
            text: f,
            icon: l.I9k,
            onClick: () => {
                null != d &&
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
                                        user: d,
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
            disabled: null == p
        },
        m
    );
}
