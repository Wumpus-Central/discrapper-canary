n.r(t), n.d(t, { default: () => h });
var s = n(200651);
n(192379);
var i = n(765717),
    l = n(384666),
    r = n(69580),
    o = n(397394),
    a = n(449934),
    c = n(721751),
    d = n(981631);
function h() {
    return (0, s.jsxs)(c.Z, {
        splash: (0, a.gK)(),
        children: [
            (0, s.jsx)(i.Z, {
                path: d.Z5c.OAUTH2_AUTHORIZED,
                component: o.Xg
            }),
            (0, s.jsx)(i.Z, {
                path: d.Z5c.OAUTH2_AUTHORIZE,
                component: r.OAuth2AuthorizePage
            }),
            (0, s.jsx)(i.Z, {
                path: d.Z5c.OAUTH2_ERROR,
                component: o.j3
            }),
            (0, s.jsx)(i.Z, {
                path: [d.Z5c.OAUTH2_WHITELIST_ACCEPT, '/oauth2/whitelist/accept'],
                component: l.Z
            })
        ]
    });
}
