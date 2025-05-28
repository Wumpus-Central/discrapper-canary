n.d(t, { Z: () => p });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(946273),
    o = n(999382),
    s = n(496675),
    c = n(796263),
    u = n(776571),
    d = n(388032);
function p(e) {
    let { channel: t, user: p, guild: h } = e,
        f = (0, i.e7)([o.Z], () => null != p && o.Z.isUserBanned(p.id));
    if (!(0, i.e7)([s.Z], () => null != p && null != h && (0, a.mm)(p, h, [s.Z]))) return null;
    let m = f ? d.intl.string(u.default.dpfwQ0) : d.intl.string(u.default.ASv23d),
        g = 'ban-user-'.concat(null == p ? void 0 : p.id);
    return (0, r.jsx)(
        c.Z,
        {
            text: m,
            icon: l.pgN,
            onClick: () => {
                null != p &&
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('4114').then(n.bind(n, 98746));
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
            disabled: f,
            color: l.zxk.Colors.RED
        },
        g
    );
}
