a.r(t), a.d(t, { default: () => i });
var s = a(627968);
a(64700);
var c = a(549711),
    d = a(760244),
    n = a(200330),
    f = a(595244),
    b = a(612181),
    r = a(603647),
    o = a(652215);
function i() {
    return (0, s.jsxs)(r.A, {
        splash: (0, b.u8)(),
        children: [
            (0, s.jsx)(c.A, {
                path: o.BVt.OAUTH2_AUTHORIZED,
                component: f.i8,
            }),
            (0, s.jsx)(c.A, {
                path: o.BVt.OAUTH2_AUTHORIZE,
                component: n.OAuth2AuthorizePage,
            }),
            (0, s.jsx)(c.A, {
                path: o.BVt.OAUTH2_ERROR,
                component: f.bc,
            }),
            (0, s.jsx)(c.A, {
                path: [o.BVt.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"],
                component: d.A,
            }),
        ],
    });
}
