n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(755721),
    s = n(481060),
    a = n(601964),
    o = n(430824),
    c = n(594174),
    d = n(723047),
    u = n(388032);
function m(e) {
    let { guildId: t, application: m } = e,
        g = (0, i.e7)([o.Z], () => o.Z.getGuild(t)),
        p = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, d.mY)();
    if (null == g || !(0, a.eM)(g, p)) return null;
    let h = m.team;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(s.R94, {
                type: s.R94.Types.DESCRIPTION,
                disabled: f,
                children: null != h ? u.intl.format(u.t.erxwWF, { teamName: h.name }) : u.intl.string(u.t.FGzLkJ)
            }),
            (0, r.jsx)(s.LZC, { size: 16 }),
            (0, r.jsx)(l.zx, {
                look: l.zx.Looks.FILLED,
                color: null != h ? l.zx.Colors.PRIMARY : l.zx.Colors.BRAND,
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('83942').then(n.bind(n, 743582));
                        return (t) => {
                            var n, i;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
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
                                })({}, t)),
                                (i = i = { application: m }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n)
                            );
                        };
                    });
                },
                disabled: f,
                children: null != h ? u.intl.string(u.t['/Fjq5O']) : u.intl.string(u.t['6ih+b2'])
            })
        ]
    });
}
