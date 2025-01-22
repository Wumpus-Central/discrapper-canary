n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(283836),
    o = n(728345),
    s = n(388032),
    c = n(22650);
function u(e) {
    let { applicationId: t, guildId: n } = e,
        { data: r } = (0, o.IX)(t);
    return null == r
        ? null
        : (0, i.jsx)(d, {
              app: r,
              guildId: n
          });
}
function d(e) {
    let { app: t, guildId: o } = e;
    (0, a.q)(t.id);
    let u = r.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: t.id,
                    guildId: o,
                    ...n
                });
        });
    }, [t, o]);
    return (0, i.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.SMALL,
        onClick: u,
        children: (0, i.jsxs)('div', {
            className: c.button,
            children: [
                (0, i.jsx)(l.ShopSparkleIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                s.intl.format(s.t.XDRjs7, { appName: t.name })
            ]
        })
    });
}
