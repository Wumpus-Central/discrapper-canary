r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(970321),
    l = r(283836),
    u = r(621853),
    c = r(475413),
    d = r(388032);
function f(e) {
    let { user: n, onClick: r, ...a } = e;
    return (
        (0, l.q)(n.id),
        (0, i.jsx)(c.tG, {
            action: 'PRESS_APP_STOREFRONT',
            icon: o.ShopIcon,
            text: d.intl.string(d.t.V7j5aW),
            color: o.ButtonColors.BRAND,
            themeColor: 'none',
            onClick: r,
            ...a
        })
    );
}
function p(e) {
    var n;
    let { user: l, guildId: c, ...d } = e,
        p = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(l.id)) || void 0 === e ? void 0 : e.application;
        }),
        h = (0, s.R)(null !== (n = null == p ? void 0 : p.id) && void 0 !== n ? n : '');
    if (null == p || !h) return null;
    let _ = () => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([r.e('66711'), r.e('77803'), r.e('93143')]).then(r.bind(r, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: p.id,
                    guildId: c,
                    ...n
                });
        });
    };
    return (0, i.jsx)(f, {
        user: l,
        guildId: c,
        onClick: _,
        ...d
    });
}
