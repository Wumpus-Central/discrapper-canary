n.d(t, { Z: () => h }), n(47120);
var s = n(200651),
    i = n(192379),
    l = n(593473),
    r = n(512969),
    o = n(489863),
    a = n(787025),
    c = n(397394),
    d = n(388032);
function h() {
    let e;
    let t = (0, r.TH)(),
        [n, h] = i.useState(!1),
        [u, _] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async function () {
                let e = (0, l.parse)(t.search);
                try {
                    var n;
                    await (0, o.g)(null !== (n = e.token) && void 0 !== n ? n : ''), h(!0);
                } catch {
                    _(!0);
                }
            })();
        }, [t.search]),
        (e = n
            ? (0, s.jsx)(c.c7, {
                  message: d.intl.string(d.t.Tqu3OT),
                  showsCloseWindowText: !0
              })
            : u
              ? (0, s.jsx)(c.Lk, {
                    message: d.intl.string(d.t.J8LsCg),
                    showsCloseWindowText: !0
                })
              : (0, s.jsx)(c.ZP, {
                    message: d.intl.string(d.t.BAcf6e),
                    spinner: !0
                })),
        (0, s.jsx)(a.G, { children: e })
    );
}
