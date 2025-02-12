n.d(t, { Z: () => d });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(283836),
    s = n(728345),
    o = n(388032),
    c = n(661467);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: l } = (0, s.IX)(t);
    return null == l
        ? null
        : (0, i.jsx)(u, {
              app: l,
              guildId: n
          });
}
function u(e) {
    let { app: t, guildId: s } = e;
    (0, r.q)(t.id);
    let d = l.useCallback(() => {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('24829')]).then(n.bind(n, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: t.id,
                    guildId: s,
                    ...n
                });
        });
    }, [t, s]);
    return (0, i.jsx)(a.zxk, {
        color: a.zxk.Colors.BRAND,
        size: a.zxk.Sizes.SMALL,
        onClick: d,
        children: (0, i.jsxs)('div', {
            className: c.button,
            children: [
                (0, i.jsx)(a.QJP, {
                    size: 'xs',
                    color: 'white'
                }),
                o.intl.format(o.t.XDRjs7, { appName: t.name })
            ]
        })
    });
}
