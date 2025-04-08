n.d(t, { Z: () => d });
var r = n(200651),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    c = n(690786),
    i = n(262212),
    l = n(388032),
    u = n(737174);
function d(e) {
    let { className: t, guildId: n, powerup: o, onError: d, onClose: p } = e,
        f = null == (0, c.Z)(n, o);
    return (0, r.jsxs)('div', {
        className: a()(u.container, { [u.disabled]: f }, t),
        children: [
            (0, r.jsx)(i.Nn, {
                guildId: n,
                powerup: o,
                onError: d,
                grow: !1,
                compact: !f
            }),
            (0, r.jsx)(s.zxk, {
                color: f ? s.Ttl.PRIMARY : s.Ttl.BRAND,
                onClick: p,
                children: l.NW.string(l.t.cpT0Cg)
            })
        ]
    });
}
