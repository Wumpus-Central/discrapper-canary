n.d(t, { Z: () => f });
var r = n(255367),
    o = n(120356),
    a = n.n(o),
    i = n(755721),
    s = n(477415),
    l = n(690786),
    c = n(639777),
    u = n(262212),
    d = n(388032),
    p = n(737174);
function f(e) {
    let { className: t, guildId: n, powerup: o, onError: f, onClose: b } = e,
        m = (0, c.Z)(n),
        O = null == (0, l.Z)(n, o) || !m,
        j = (0, s.Z)(n, o);
    return (0, r.jsxs)('div', {
        className: a()(p.container, { [p.disabled]: O }, t),
        children: [
            !j &&
                m &&
                (0, r.jsx)(u.Nn, {
                    guildId: n,
                    powerup: o,
                    onError: f,
                    grow: !1,
                    compact: !O
                }),
            (0, r.jsx)(i.zx, {
                color: O ? i.Tt.PRIMARY : i.Tt.BRAND,
                onClick: b,
                children: d.intl.string(d.t.cpT0Cg)
            })
        ]
    });
}
