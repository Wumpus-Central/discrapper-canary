n.d(t, { Z: () => d }), n(47120), n(301563);
var r = n(200651),
    o = n(192379),
    i = n(593473),
    c = n(512969),
    l = n(489863),
    s = n(787025),
    a = n(397394),
    u = n(388032);
function d() {
    let e,
        t = (0, c.TH)(),
        [n, d] = o.useState(!1),
        [h, p] = o.useState(!1);
    return (
        o.useEffect(() => {
            !(async function () {
                let e = (0, i.parse)(t.search);
                try {
                    var n;
                    await (0, l.g)(null != (n = e.token) ? n : ''), d(!0);
                } catch (e) {
                    p(!0);
                }
            })();
        }, [t.search]),
        (e = n
            ? (0, r.jsx)(a.c7, {
                  message: u.NW.string(u.t.Tqu3OT),
                  showsCloseWindowText: !0
              })
            : h
              ? (0, r.jsx)(a.Lk, {
                    message: u.NW.string(u.t.J8LsCg),
                    showsCloseWindowText: !0
                })
              : (0, r.jsx)(a.ZP, {
                    message: u.NW.string(u.t.BAcf6e),
                    spinner: !0
                })),
        (0, r.jsx)(s.G, { children: e })
    );
}
