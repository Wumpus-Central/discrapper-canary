n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(592125),
    s = n(944486),
    d = n(293224),
    c = n(348172);
function u(e) {
    let { locked: t } = e,
        n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        l = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
        u = null != l;
    return (0, i.jsxs)('div', {
        className: r()({
            [c.panelContainer]: !0,
            [c.locked]: t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: c.panelRow,
                children: [
                    (0, i.jsxs)('div', {
                        className: c.buttonSection,
                        children: [
                            (0, i.jsx)(d.Ox, {
                                voiceChannel: l,
                                locked: t
                            }),
                            (0, i.jsx)(d.SE, {
                                voiceChannel: l,
                                locked: t
                            }),
                            (0, i.jsx)(d.N3, {
                                voiceChannel: l,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.buttonSection,
                        children: [
                            (0, i.jsx)(d.sm, {
                                voiceChannel: l,
                                locked: t
                            }),
                            (0, i.jsx)(d.aG, {
                                voiceChannel: l,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(c.buttonSection, u && c.inCall),
                        children: (0, i.jsx)(d.c_, {
                            voiceChannel: l,
                            locked: t
                        })
                    })
                ]
            }),
            u &&
                (0, i.jsx)('div', {
                    className: c.panelRow,
                    children: (0, i.jsx)(d.L, {
                        voiceChannel: l,
                        locked: t
                    })
                })
        ]
    });
}
