t.d(a, { Z: () => f }), t(388685), t(35282);
var o = t(54381),
    n = t(473749),
    s = t(593473),
    c = t(828700),
    r = t(489863),
    d = t(787025),
    i = t(397394),
    l = t(388032);
function f() {
    let e,
        a = (0, c.TH)(),
        [t, f] = n.useState(!1),
        [u, p] = n.useState(!1);
    return (
        n.useEffect(() => {
            !(async function () {
                let e = (0, s.parse)(a.search);
                try {
                    var t;
                    await (0, r.g)(null != (t = e.token) ? t : ""), f(!0);
                } catch (e) {
                    p(!0);
                }
            })();
        }, [a.search]),
        (e = t
            ? (0, o.jsx)(i.c7, {
                  message: l.intl.string(l.t.Tqu3OQ),
                  showsCloseWindowText: !0,
              })
            : u
              ? (0, o.jsx)(i.Lk, {
                    message: l.intl.string(l.t.J8LsCs),
                    showsCloseWindowText: !0,
                })
              : (0, o.jsx)(i.ZP, {
                    message: l.intl.string(l.t.BAcf6a),
                    spinner: !0,
                })),
        (0, o.jsx)(d.G, { children: e })
    );
}
