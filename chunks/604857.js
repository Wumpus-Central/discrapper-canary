o.d(t, { Z: () => b });
var n = o(951288),
    r = o(120356),
    a = o.n(r),
    c = o(755721),
    s = o(639777),
    i = o(973772),
    l = o(880419),
    u = o(535396),
    d = o(388032),
    p = o(856945);
function b(e) {
    let { className: t, guildId: o, powerup: r, onError: b, onClose: f } = e,
        m = (0, i.ZP)(o, r),
        I = m.type === u.A3.TIER_OVERRIDE_ACTIVATED,
        _ = (0, s.Z)(o),
        O = null == m.sourceEntitlement || !_;
    return (0, n.jsxs)("div", {
        className: a()(p.container, { [p.disabled]: O }, t),
        children: [
            !I &&
                _ &&
                (0, n.jsx)(l.ZP, {
                    guildId: o,
                    powerup: r,
                    onError: b,
                    grow: !1,
                    compact: !O,
                }),
            (0, n.jsx)(c.zx, {
                color: O ? c.Tt.PRIMARY : c.Tt.BRAND,
                onClick: f,
                children: d.intl.string(d.t.cpT0Cg),
            }),
        ],
    });
}
