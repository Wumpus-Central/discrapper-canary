n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(283836),
    o = n(728345),
    s = n(388032),
    c = n(75905);
function u(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, o.IX)(t);
    return null == i
        ? null
        : (0, r.jsx)(d, {
              app: i,
              guildId: n
          });
}
function d(e) {
    let { app: t, guildId: o } = e;
    (0, l.q)(t.id);
    let u = i.useCallback(() => {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })(
                        {
                            appId: t.id,
                            guildId: o
                        },
                        n
                    )
                );
        });
    }, [t, o]);
    return (0, r.jsx)(a.zxk, {
        color: a.zxk.Colors.BRAND,
        size: a.zxk.Sizes.SMALL,
        onClick: u,
        children: (0, r.jsxs)('div', {
            className: c.button,
            children: [
                (0, r.jsx)(a.QJP, {
                    size: 'xs',
                    color: 'white'
                }),
                s.NW.format(s.t.XDRjs7, { appName: t.name })
            ]
        })
    });
}
