n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(837411),
    a = n(705556),
    s = n(955418),
    o = n(591156);
function l(e) {
    let { user: t, guildId: n, channelId: l, onClose: u } = e,
        c = (0, r.Z)(t.id, n);
    return (0, i.jsxs)('footer', {
        className: o.footer,
        children: [
            c &&
                (0, i.jsx)(s.Z, {
                    user: t,
                    guildId: n,
                    channelId: l,
                    onClose: u
                }),
            !c &&
                (0, i.jsx)(a.Z, {
                    user: t,
                    guildId: n,
                    onClose: u,
                    fullWidth: !0
                })
        ]
    });
}
