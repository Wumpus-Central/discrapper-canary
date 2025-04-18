n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(837411),
    o = n(705556),
    a = n(955418),
    s = n(165957);
function l(e) {
    let { user: t, guildId: n, channelId: l, onClose: c, appContext: u } = e,
        d = (0, i.Z)(t.id, n);
    return (0, r.jsxs)('footer', {
        className: s.footer,
        children: [
            d &&
                (0, r.jsx)(a.Z, {
                    user: t,
                    guildId: n,
                    channelId: l,
                    onClose: c
                }),
            !d &&
                (0, r.jsx)(o.Z, {
                    user: t,
                    guildId: n,
                    onClose: c,
                    fullWidth: !0,
                    appContext: u
                })
        ]
    });
}
