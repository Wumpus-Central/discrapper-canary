r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(837411),
    s = r(705556),
    o = r(955418),
    l = r(591156);
function u(e) {
    let { user: n, guildId: r, channelId: u, onClose: c } = e,
        d = (0, a.Z)(n.id, r);
    return (0, i.jsxs)('footer', {
        className: l.footer,
        children: [
            d &&
                (0, i.jsx)(o.Z, {
                    user: n,
                    guildId: r,
                    channelId: u,
                    onClose: c
                }),
            !d &&
                (0, i.jsx)(s.Z, {
                    user: n,
                    guildId: r,
                    onClose: c,
                    fullWidth: !0
                })
        ]
    });
}
