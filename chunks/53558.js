r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(970321),
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
            icon: s.ShopIcon,
            text: d.intl.string(d.t.V7j5aW),
            color: s.ButtonColors.BRAND,
            themeColor: 'none',
            onClick: r,
            ...a
        })
    );
}
function _(e) {
    var n;
    let { user: l, guildId: c, ...d } = e,
        _ = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(l.id)) || void 0 === e ? void 0 : e.application;
        }),
        h = (0, o.R)(null !== (n = null == _ ? void 0 : _.id) && void 0 !== n ? n : '');
    if (null == _ || !h) return null;
    let p = () => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([r.e('73503'), r.e('66711'), r.e('77803'), r.e('19598')]).then(r.bind(r, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: _.id,
                    guildId: c,
                    ...n
                });
        });
    };
    return (0, i.jsx)(f, {
        user: l,
        guildId: c,
        onClick: p,
        ...d
    });
}
