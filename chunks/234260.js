e.r(s), e.d(s, { default: () => j });
var n = e(627968),
    a = e(64700),
    c = e(549711),
    i = e(492462),
    o = e(873263),
    h = e(716965),
    r = e(321987),
    p = e(595244),
    u = e(375708);
function A() {
    let t,
        s = (0, o.zy)(),
        [e, c] = a.useState(!1),
        [A, l] = a.useState(!1);
    return (
        a.useEffect(() => {
            !(async function () {
                let t = (0, i.parse)(s.search);
                try {
                    await (0, h.Kf)(t.token ?? ""), c(!0);
                } catch {
                    l(!0);
                }
            })();
        }, [s.search]),
        (t = e
            ? (0, n.jsx)(p.jX, { message: u.intl.string(u.t.Tqu3OQ), showsCloseWindowText: !0 })
            : A
              ? (0, n.jsx)(p.gz, { message: u.intl.string(u.t.J8LsCs), showsCloseWindowText: !0 })
              : (0, n.jsx)(p.Ay, { message: u.intl.string(u.t.BAcf6a), spinner: !0 })),
        (0, n.jsx)(r.$, { children: t })
    );
}
var l = e(887909),
    T = e(612181),
    x = e(603647),
    d = e(652215);
function j() {
    return (0, n.jsxs)(x.A, {
        splash: (0, T.u8)(),
        children: [
            (0, n.jsx)(c.A, { path: d.BVt.OAUTH2_AUTHORIZED, component: p.i8 }),
            (0, n.jsx)(c.A, { path: d.BVt.OAUTH2_AUTHORIZE, component: l.OAuth2AuthorizePage }),
            (0, n.jsx)(c.A, { path: d.BVt.OAUTH2_ERROR, component: p.bc }),
            (0, n.jsx)(c.A, { path: [d.BVt.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"], component: A }),
        ],
    });
}
