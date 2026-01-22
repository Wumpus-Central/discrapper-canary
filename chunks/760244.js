a.d(t, {
    A: () => i,
}),
    a(896048),
    a(747238);
var s = a(627968),
    c = a(64700),
    d = a(492462),
    n = a(960488),
    f = a(716965),
    b = a(321987),
    r = a(595244),
    o = a(985018);

function i() {
    let e,
        t = (0, n.zy)(),
        [a, i] = c.useState(!1),
        [p, _] = c.useState(!1);
    return (
        c.useEffect(() => {
            !(async function () {
                let e = (0, d.parse)(t.search);
                try {
                    var a;
                    await (0, f.Kf)(null != (a = e.token) ? a : ""), i(!0);
                } catch (e) {
                    _(!0);
                }
            })();
        }, [t.search]),
        (e = a
            ? (0, s.jsx)(r.jX, {
                  message: o.intl.string(o.t.Tqu3OQ),
                  showsCloseWindowText: !0,
              })
            : p
              ? (0, s.jsx)(r.gz, {
                    message: o.intl.string(o.t.J8LsCs),
                    showsCloseWindowText: !0,
                })
              : (0, s.jsx)(r.Ay, {
                    message: o.intl.string(o.t.BAcf6a),
                    spinner: !0,
                })),
        (0, s.jsx)(b.$, {
            children: e,
        })
    );
}
