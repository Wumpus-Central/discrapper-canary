(e.r(s), e.d(s, { default: () => j }));
var n = e(477900),
    a = e(582128),
    c = e(549711),
    i = e(204477),
    o = e(492462),
    h = e(806163),
    r = e(716965),
    p = e(321987),
    u = e(769007),
    A = e(792996);
function l() {
    let t,
        s = (0, h.zy)(),
        [e, c] = a.useState(!1),
        [i, l] = a.useState(!1);
    return (
        a.useEffect(() => {
            !(async function () {
                let t = (0, o.qg)(s.search);
                try {
                    (await (0, r.Kf)(t.token ?? ""), c(!0));
                } catch {
                    l(!0);
                }
            })();
        }, [s.search]),
        (t = e
            ? (0, n.jsx)(u.jX, { message: A.intl.string(A.t.Tqu3OQ), showsCloseWindowText: !0 })
            : i
              ? (0, n.jsx)(u.gz, { message: A.intl.string(A.t.J8LsCs), showsCloseWindowText: !0 })
              : (0, n.jsx)(u.Ay, { message: A.intl.string(A.t.BAcf6a), spinner: !0 })),
        (0, n.jsx)(p.$, { children: t })
    );
}
var T = e(610056),
    x = e(603647),
    d = e(652215);
function j() {
    return (0, n.jsxs)(x.A, {
        splash: (0, i.u)(),
        children: [
            (0, n.jsx)(c.A, { path: d.BVt.OAUTH2_AUTHORIZED, component: u.i8 }),
            (0, n.jsx)(c.A, { path: d.BVt.OAUTH2_AUTHORIZE, component: T.k }),
            (0, n.jsx)(c.A, { path: d.BVt.OAUTH2_ERROR, component: u.bc }),
            (0, n.jsx)(c.A, { path: [d.BVt.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"], component: l }),
        ],
    });
}
