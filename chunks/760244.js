s.d(t, { A: () => u });
var r = s(627968),
    i = s(64700),
    l = s(492462),
    o = s(960488),
    a = s(716965),
    n = s(321987),
    c = s(595244),
    d = s(985018);
function u() {
    let e,
        t = (0, o.zy)(),
        [s, u] = i.useState(!1),
        [h, f] = i.useState(!1);
    return (
        i.useEffect(() => {
            !(async function () {
                let e = (0, l.parse)(t.search);
                try {
                    await (0, a.Kf)(e.token ?? ""), u(!0);
                } catch {
                    f(!0);
                }
            })();
        }, [t.search]),
        (e = s
            ? (0, r.jsx)(c.jX, { message: d.intl.string(d.t.Tqu3OQ), showsCloseWindowText: !0 })
            : h
              ? (0, r.jsx)(c.gz, { message: d.intl.string(d.t.J8LsCs), showsCloseWindowText: !0 })
              : (0, r.jsx)(c.Ay, { message: d.intl.string(d.t.BAcf6a), spinner: !0 })),
        (0, r.jsx)(n.$, { children: e })
    );
}
