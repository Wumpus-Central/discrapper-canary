n.d(t, { Z: () => f });
var r = n(255367),
    o = n(120356),
    i = n.n(o),
    a = n(755721),
    s = n(639777),
    c = n(973772),
    l = n(880419),
    u = n(535396),
    d = n(388032),
    p = n(737174);
function f(e) {
    let { className: t, guildId: n, powerup: o, onError: f, onClose: b } = e,
        m = (0, c.Z)(n, o),
        O = m.type === u.A3.TIER_OVERRIDE_ACTIVATED,
        j = (0, s.Z)(n),
        x = null == m.sourceEntitlement || !j;
    return (0, r.jsxs)('div', {
        className: i()(p.container, { [p.disabled]: x }, t),
        children: [
            !O &&
                j &&
                (0, r.jsx)(l.Z, {
                    guildId: n,
                    powerup: o,
                    onError: f,
                    grow: !1,
                    compact: !x
                }),
            (0, r.jsx)(a.zx, {
                color: x ? a.Tt.PRIMARY : a.Tt.BRAND,
                onClick: b,
                children: d.intl.string(d.t.cpT0Cg)
            })
        ]
    });
}
