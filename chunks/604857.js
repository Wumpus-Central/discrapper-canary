n.d(t, { Z: () => f });
var r = n(255367),
    o = n(120356),
    i = n.n(o),
    l = n(755721),
    a = n(477415),
    s = n(690786),
    c = n(639777),
    u = n(262212),
    d = n(388032),
    p = n(737174);
function f(e) {
    let { className: t, guildId: n, powerup: o, onError: f, onClose: b } = e,
        m = (0, c.Z)(n),
        v = null == (0, s.Z)(n, o) || !m,
        O = (0, a.Z)(n, o);
    return (0, r.jsxs)('div', {
        className: i()(p.container, { [p.disabled]: v }, t),
        children: [
            !O &&
                m &&
                (0, r.jsx)(u.Nn, {
                    guildId: n,
                    powerup: o,
                    onError: f,
                    grow: !1,
                    compact: !v
                }),
            (0, r.jsx)(l.zx, {
                color: v ? l.Tt.PRIMARY : l.Tt.BRAND,
                onClick: b,
                children: d.intl.string(d.t.cpT0Cg)
            })
        ]
    });
}
