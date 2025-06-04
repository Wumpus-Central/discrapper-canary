n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(837411),
    o = n(705556),
    a = n(955418),
    s = n(200669);
function l(e) {
    let { user: t, guildId: n, channelId: l, onClose: c, appContext: u, disableAutoFocus: d = !1 } = e,
        f = (0, i.Z)(t.id, n);
    return (0, r.jsxs)('footer', {
        className: s.footer,
        children: [
            f &&
                (0, r.jsx)(a.Z, {
                    user: t,
                    guildId: n,
                    channelId: l,
                    onClose: c,
                    disableAutoFocus: d
                }),
            !f &&
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
