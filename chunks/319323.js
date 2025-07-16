n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(283836),
    o = n(728345),
    s = n(388032);
function c(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, o.IX)(t);
    return null == i
        ? null
        : (0, r.jsx)(u, {
              app: i,
              guildId: n
          });
}
function u(e) {
    let { app: t, guildId: o } = e;
    (0, a.q)(t.id);
    let c = i.useCallback(() => {
        (0, l.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
    return (0, r.jsx)(l.zxk, {
        size: 'sm',
        onClick: c,
        icon: l.QJP,
        text: s.intl.format(s.t.XDRjs7, { appName: t.name })
    });
}
