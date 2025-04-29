n.d(t, { Z: () => p });
var r = n(255367),
    o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(477415),
    c = n(690786),
    l = n(262212),
    u = n(388032),
    d = n(737174);
function p(e) {
    let { className: t, guildId: n, powerup: o, onError: p, onClose: f } = e,
        b = null == (0, c.Z)(n, o),
        m = (0, s.Z)(n, o);
    return (0, r.jsxs)('div', {
        className: a()(d.container, { [d.disabled]: b }, t),
        children: [
            !m &&
                (0, r.jsx)(l.Nn, {
                    guildId: n,
                    powerup: o,
                    onError: p,
                    grow: !1,
                    compact: !b
                }),
            (0, r.jsx)(i.zxk, {
                color: b ? i.Ttl.PRIMARY : i.Ttl.BRAND,
                onClick: f,
                children: u.intl.string(u.t.cpT0Cg)
            })
        ]
    });
}
