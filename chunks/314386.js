t.d(n, { Z: () => u });
var o = t(255367);
t(73800);
var c = t(444141),
    i = t(510659),
    a = t(544989),
    r = t(481932),
    d = t(195387),
    l = t(664794),
    s = t(228168);
function u(e) {
    let { user: n, guildId: t, channelId: u, displayProfile: _, onClose: f } = e,
        { interactionType: p } = (0, i.Xo)(),
        m = (0, c.Z)({
            user: n,
            guildId: t,
            channelId: u,
            displayProfile: _,
            onClose: f
        });
    return (0, o.jsxs)(a.Z, {
        children: [
            (0, o.jsx)(d.Z, {
                shouldShowTooltip: null === p,
                user: n,
                guildId: t,
                channelId: u,
                onClose: f
            }),
            (0, o.jsx)(r.Z, {
                shouldShowTooltip: null === p,
                themeType: s.lY.MODAL,
                user: n
            }),
            (0, o.jsx)(l.Z, {
                type: 'banner',
                user: n,
                guildId: t,
                viewProfileItem: m
            })
        ]
    });
}
