n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(481060),
    s = n(601964),
    a = n(430824),
    o = n(594174),
    c = n(723047),
    d = n(388032);
function u(e) {
    let { guildId: t, application: u } = e,
        m = (0, i.e7)([a.Z], () => a.Z.getGuild(t)),
        g = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        p = (0, c.mY)();
    if (null == m || !(0, s.eM)(m, g)) return null;
    let f = u.team;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                disabled: p,
                children: null != f ? d.intl.format(d.t.erxwWF, { teamName: f.name }) : d.intl.string(d.t.FGzLkJ)
            }),
            (0, r.jsx)(l.LZC, { size: 16 }),
            (0, r.jsx)(l.zxk, {
                look: l.zxk.Looks.FILLED,
                color: null != f ? l.zxk.Colors.PRIMARY : l.zxk.Colors.BRAND,
                onClick: () => {
                    (0, l.ZDy)(async () => {
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
                                (i = i = { application: u }),
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
                disabled: p,
                children: null != f ? d.intl.string(d.t['/Fjq5O']) : d.intl.string(d.t['6ih+b2'])
            })
        ]
    });
}
