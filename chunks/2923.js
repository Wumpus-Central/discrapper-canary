n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(592125),
    s = n(944486),
    c = n(293224),
    u = n(500479);
function d(e) {
    let { locked: t } = e,
        n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        l = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
        d = null != l;
    return (0, i.jsxs)('div', {
        className: r()({
            [u.panelContainer]: !0,
            [u.locked]: t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: u.panelRow,
                children: [
                    (0, i.jsxs)('div', {
                        className: u.buttonSection,
                        children: [
                            (0, i.jsx)(c.Ox, {
                                voiceChannel: l,
                                locked: t
                            }),
                            (0, i.jsx)(c.SE, {
                                voiceChannel: l,
                                locked: t
                            }),
                            (0, i.jsx)(c.N3, {
                                voiceChannel: l,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: u.buttonSection,
                        children: [
                            (0, i.jsx)(c.sm, {
                                voiceChannel: l,
                                locked: t
                            }),
                            (0, i.jsx)(c.aG, {
                                voiceChannel: l,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: u.buttonSection,
                        children: (0, i.jsx)(c.c_, {
                            voiceChannel: l,
                            locked: t
                        })
                    })
                ]
            }),
            d &&
                (0, i.jsx)('div', {
                    className: u.panelRow,
                    children: (0, i.jsx)(c.L, {
                        voiceChannel: l,
                        locked: t
                    })
                })
        ]
    });
}
