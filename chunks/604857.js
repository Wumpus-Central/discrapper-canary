n.d(t, { Z: () => f });
var r = n(255367),
    o = n(120356),
    a = n.n(o),
    i = n(755721),
    s = n(639777),
    l = n(973772),
    c = n(262212),
    u = n(535396),
    d = n(388032),
    p = n(737174);
function f(e) {
    let { className: t, guildId: n, powerup: o, onError: f, onClose: b } = e,
        m = (0, l.Z)(n, o),
        O = m.type === u.A3.TIER_OVERRIDE_ACTIVATED,
        j = (0, s.Z)(n),
        I = null == m.sourceEntitlement || !j;
    return (0, r.jsxs)('div', {
        className: a()(p.container, { [p.disabled]: I }, t),
        children: [
            !O &&
                j &&
                (0, r.jsx)(c.Nn, {
                    guildId: n,
                    powerup: o,
                    onError: f,
                    grow: !1,
                    compact: !I
                }),
            (0, r.jsx)(i.zx, {
                color: I ? i.Tt.PRIMARY : i.Tt.BRAND,
                onClick: b,
                children: d.intl.string(d.t.cpT0Cg)
            })
        ]
    });
}
