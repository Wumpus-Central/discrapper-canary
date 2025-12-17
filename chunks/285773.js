t.r(a), t.d(a, { default: () => f });
var o = t(54381);
t(473749);
var n = t(765717),
    s = t(384666),
    c = t(69580),
    r = t(397394),
    d = t(449934),
    i = t(721751),
    l = t(981631);
function f() {
    return (0, o.jsxs)(i.Z, {
        splash: (0, d.gK)(),
        children: [
            (0, o.jsx)(n.Z, {
                path: l.Z5c.OAUTH2_AUTHORIZED,
                component: r.Xg,
            }),
            (0, o.jsx)(n.Z, {
                path: l.Z5c.OAUTH2_AUTHORIZE,
                component: c.OAuth2AuthorizePage,
            }),
            (0, o.jsx)(n.Z, {
                path: l.Z5c.OAUTH2_ERROR,
                component: r.j3,
            }),
            (0, o.jsx)(n.Z, {
                path: [l.Z5c.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
                component: s.Z,
            }),
        ],
    });
}
