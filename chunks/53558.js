n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(970321),
    o = n(283836),
    l = n(621853),
    u = n(475413),
    c = n(388032);
function d(e) {
    let { user: t, onClick: n, ...r } = e;
    return (
        (0, o.q)(t.id),
        (0, i.jsx)(u.tG, {
            action: 'PRESS_APP_STOREFRONT',
            icon: a.EOn,
            text: c.intl.string(c.t.V7j5aW),
            color: a.Ttl.BRAND,
            themeColor: 'none',
            onClick: n,
            ...r
        })
    );
}
function f(e) {
    var t;
    let { user: o, guildId: u, ...c } = e,
        f = (0, r.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getUserProfile(o.id)) || void 0 === e ? void 0 : e.application;
        }),
        _ = (0, s.R)(null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : '');
    if (null == f || !_) return null;
    let p = () => {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('66711'), n.e('77803'), n.e('7722')]).then(n.bind(n, 7225));
            return (t) =>
                (0, i.jsx)(e, {
                    appId: f.id,
                    guildId: u,
                    ...t
                });
        });
    };
    return (0, i.jsx)(d, {
        user: o,
        guildId: u,
        onClick: p,
        ...c
    });
}
