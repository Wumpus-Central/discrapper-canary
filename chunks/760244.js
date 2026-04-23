s.d(t, { A: () => u });
var n = s(627968),
    r = s(64700),
    i = s(492462),
    l = s(873263),
    a = s(716965),
    o = s(321987),
    c = s(595244),
    d = s(985018);
function u() {
    let e,
        t = (0, l.zy)(),
        [s, u] = r.useState(!1),
        [h, p] = r.useState(!1);
    return (
        r.useEffect(() => {
            !(async function () {
                let e = (0, i.parse)(t.search);
                try {
                    await (0, a.Kf)(e.token ?? ""), u(!0);
                } catch {
                    p(!0);
                }
            })();
        }, [t.search]),
        (e = s
            ? (0, n.jsx)(c.jX, { message: d.intl.string(d.t.Tqu3OQ), showsCloseWindowText: !0 })
            : h
              ? (0, n.jsx)(c.gz, { message: d.intl.string(d.t.J8LsCs), showsCloseWindowText: !0 })
              : (0, n.jsx)(c.Ay, { message: d.intl.string(d.t.BAcf6a), spinner: !0 })),
        (0, n.jsx)(o.$, { children: e })
    );
}
