n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(283836),
    l = n(728345),
    s = n(388032),
    c = n(535429);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, l.IX)(t);
    return null == i
        ? null
        : (0, r.jsx)(u, {
              app: i,
              guildId: n
          });
}
function u(e) {
    let { app: t, guildId: l } = e;
    (0, o.q)(t.id);
    let d = i.useCallback(() => {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('51641')]).then(n.bind(n, 7225));
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
                            guildId: l
                        },
                        n
                    )
                );
        });
    }, [t, l]);
    return (0, r.jsx)(a.zxk, {
        color: a.zxk.Colors.BRAND,
        size: a.zxk.Sizes.SMALL,
        onClick: d,
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
