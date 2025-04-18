n.d(t, { Z: () => p });
var r = n(200651),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    c = n(477415),
    i = n(690786),
    l = n(262212),
    u = n(388032),
    d = n(901455);
function p(e) {
    let { className: t, guildId: n, powerup: o, onError: p, onClose: f } = e,
        b = null == (0, i.Z)(n, o),
        m = (0, c.Z)(n, o);
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
            (0, r.jsx)(s.zxk, {
                color: b ? s.Ttl.PRIMARY : s.Ttl.BRAND,
                onClick: f,
                children: u.NW.string(u.t.cpT0Cg)
            })
        ]
    });
}
