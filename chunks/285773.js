o.r(t), o.d(t, { default: () => d });
var n = o(54381);
o(473749);
var s = o(765717),
    a = o(384666),
    r = o(69580),
    i = o(397394),
    l = o(449934),
    c = o(721751),
    u = o(981631);
function d() {
    return (0, n.jsxs)(c.Z, {
        splash: (0, l.gK)(),
        children: [
            (0, n.jsx)(s.Z, {
                path: u.Z5c.OAUTH2_AUTHORIZED,
                component: i.Xg,
            }),
            (0, n.jsx)(s.Z, {
                path: u.Z5c.OAUTH2_AUTHORIZE,
                component: r.OAuth2AuthorizePage,
            }),
            (0, n.jsx)(s.Z, {
                path: u.Z5c.OAUTH2_ERROR,
                component: i.j3,
            }),
            (0, n.jsx)(s.Z, {
                path: [u.Z5c.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
                component: a.Z,
            }),
        ],
    });
}
