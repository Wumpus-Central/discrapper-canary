n.r(t), n.d(t, { default: () => d });
var r = n(255367);
n(73800);
var o = n(765717),
    i = n(384666),
    l = n(69580),
    c = n(397394),
    s = n(449934),
    a = n(721751),
    u = n(981631);
function d() {
    return (0, r.jsxs)(a.Z, {
        splash: (0, s.gK)(),
        children: [
            (0, r.jsx)(o.Z, {
                path: u.Z5c.OAUTH2_AUTHORIZED,
                component: c.Xg
            }),
            (0, r.jsx)(o.Z, {
                path: u.Z5c.OAUTH2_AUTHORIZE,
                component: l.OAuth2AuthorizePage
            }),
            (0, r.jsx)(o.Z, {
                path: u.Z5c.OAUTH2_ERROR,
                component: c.j3
            }),
            (0, r.jsx)(o.Z, {
                path: [u.Z5c.OAUTH2_WHITELIST_ACCEPT, '/oauth2/whitelist/accept'],
                component: i.Z
            })
        ]
    });
}
