s.r(t), s.d(t, { default: () => g });
var n = s(627968),
    r = s(64700),
    i = s(549711),
    l = s(492462),
    a = s(873263),
    o = s(716965),
    c = s(321987),
    d = s(595244),
    u = s(985018);
function h() {
    let e,
        t = (0, a.zy)(),
        [s, i] = r.useState(!1),
        [h, p] = r.useState(!1);
    return (
        r.useEffect(() => {
            !(async function () {
                let e = (0, l.parse)(t.search);
                try {
                    await (0, o.Kf)(e.token ?? ""), i(!0);
                } catch {
                    p(!0);
                }
            })();
        }, [t.search]),
        (e = s
            ? (0, n.jsx)(d.jX, { message: u.intl.string(u.t.Tqu3OQ), showsCloseWindowText: !0 })
            : h
              ? (0, n.jsx)(d.gz, { message: u.intl.string(u.t.J8LsCs), showsCloseWindowText: !0 })
              : (0, n.jsx)(d.Ay, { message: u.intl.string(u.t.BAcf6a), spinner: !0 })),
        (0, n.jsx)(c.$, { children: e })
    );
}
var p = s(200330),
    f = s(612181),
    x = s(210309),
    m = s(652215);
function g() {
    return (0, n.jsxs)(x.A, {
        splash: (0, f.u8)(),
        children: [
            (0, n.jsx)(i.A, { path: m.BVt.OAUTH2_AUTHORIZED, component: d.i8 }),
            (0, n.jsx)(i.A, { path: m.BVt.OAUTH2_AUTHORIZE, component: p.OAuth2AuthorizePage }),
            (0, n.jsx)(i.A, { path: m.BVt.OAUTH2_ERROR, component: d.bc }),
            (0, n.jsx)(i.A, { path: [m.BVt.OAUTH2_WHITELIST_ACCEPT, "/oauth2/whitelist/accept"], component: h }),
        ],
    });
}
