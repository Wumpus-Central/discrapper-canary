n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    s = n(430824),
    a = n(594174),
    o = n(723047),
    c = n(388032);
function d(e) {
    let { guildId: t, application: d } = e,
        u = (0, i.e7)([s.Z], () => s.Z.getGuild(t)),
        m = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        g = (0, o.mY)();
    if (null == u || !u.isOwner(m)) return null;
    let p = d.team;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                disabled: g,
                children: null != p ? c.intl.format(c.t.erxwWF, { teamName: p.name }) : c.intl.string(c.t.FGzLkJ)
            }),
            (0, r.jsx)(l.LZC, { size: 16 }),
            (0, r.jsx)(l.zxk, {
                look: l.zxk.Looks.FILLED,
                color: null != p ? l.zxk.Colors.PRIMARY : l.zxk.Colors.BRAND,
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
                                })({}, t)),
                                (i = i = { application: d }),
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
                disabled: g,
                children: null != p ? c.intl.string(c.t['/Fjq5O']) : c.intl.string(c.t['6ih+b2'])
            })
        ]
    });
}
