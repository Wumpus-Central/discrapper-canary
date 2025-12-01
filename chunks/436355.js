n.d(t, { Z: () => p });
var i = n(54381),
    r = n(442837),
    l = n(481060),
    a = n(946273),
    o = n(271383),
    s = n(496675),
    c = n(796263),
    u = n(342153),
    d = n(388032);
function p(e) {
    let { channel: t, user: p, guild: h } = e,
        f = (0, r.e7)([s.Z], () => null != p && null != h && (0, a.nX)(p, h, [s.Z])),
        m = (0, r.e7)([o.ZP], () => null == p || null == o.ZP.getMember(t.guild_id, p.id));
    if (!f) return null;
    let g = m ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
        b = "kick-user-".concat(null == p ? void 0 : p.id);
    return (0, i.jsx)(
        c.Z,
        {
            text: g,
            icon: l.I9k,
            onClick: () => {
                null != p &&
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e("39298").then(n.bind(n, 495494));
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
                                        user: p,
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
            disabled: m,
        },
        b,
    );
}
