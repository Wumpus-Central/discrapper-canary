o.d(t, { Z: () => d }), o(388685), o(35282);
var n = o(54381),
    s = o(473749),
    a = o(593473),
    r = o(828700),
    i = o(489863),
    l = o(787025),
    c = o(397394),
    u = o(388032);
function d() {
    let e,
        t = (0, r.TH)(),
        [o, d] = s.useState(!1),
        [p, _] = s.useState(!1);
    return (
        s.useEffect(() => {
            !(async function () {
                let e = (0, a.parse)(t.search);
                try {
                    var o;
                    await (0, i.g)(null != (o = e.token) ? o : ""), d(!0);
                } catch (e) {
                    _(!0);
                }
            })();
        }, [t.search]),
        (e = o
            ? (0, n.jsx)(c.c7, {
                  message: u.intl.string(u.t.Tqu3OQ),
                  showsCloseWindowText: !0,
              })
            : p
              ? (0, n.jsx)(c.Lk, {
                    message: u.intl.string(u.t.J8LsCs),
                    showsCloseWindowText: !0,
                })
              : (0, n.jsx)(c.ZP, {
                    message: u.intl.string(u.t.BAcf6a),
                    spinner: !0,
                })),
        (0, n.jsx)(l.G, { children: e })
    );
}
