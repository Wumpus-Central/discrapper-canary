n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    a = n(442837),
    l = n(592125),
    s = n(944486),
    c = n(293224),
    d = n(201636);
function u(e) {
    let { locked: t } = e,
        n = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        r = (0, a.e7)([l.Z], () => l.Z.getChannel(n)),
        u = null != r;
    return (0, i.jsxs)('div', {
        className: o()({
            [d.panelContainer]: !0,
            [d.locked]: t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: d.panelRow,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.buttonSection,
                        children: [
                            (0, i.jsx)(c.Ox, {
                                voiceChannel: r,
                                locked: t
                            }),
                            (0, i.jsx)(c.SE, {
                                voiceChannel: r,
                                locked: t
                            }),
                            (0, i.jsx)(c.N3, {
                                voiceChannel: r,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: d.buttonSection,
                        children: [
                            (0, i.jsx)(c.sm, {
                                voiceChannel: r,
                                locked: t
                            }),
                            (0, i.jsx)(c.aG, {
                                voiceChannel: r,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: o()(d.buttonSection, u && d.inCall),
                        children: (0, i.jsx)(c.c_, {
                            voiceChannel: r,
                            locked: t
                        })
                    })
                ]
            }),
            u &&
                (0, i.jsx)('div', {
                    className: d.panelRow,
                    children: (0, i.jsx)(c.L, {
                        voiceChannel: r,
                        locked: t
                    })
                })
        ]
    });
}
