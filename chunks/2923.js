n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    l = n(442837),
    a = n(592125),
    s = n(944486),
    d = n(293224),
    c = n(201636);
function u(e) {
    let { locked: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        r = (0, l.e7)([a.Z], () => a.Z.getChannel(n)),
        u = null != r;
    return (0, i.jsxs)('div', {
        className: o()({
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
                                voiceChannel: r,
                                locked: t
                            }),
                            (0, i.jsx)(d.SE, {
                                voiceChannel: r,
                                locked: t
                            }),
                            (0, i.jsx)(d.N3, {
                                voiceChannel: r,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.buttonSection,
                        children: [
                            (0, i.jsx)(d.sm, {
                                voiceChannel: r,
                                locked: t
                            }),
                            (0, i.jsx)(d.aG, {
                                voiceChannel: r,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: o()(c.buttonSection, u && c.inCall),
                        children: (0, i.jsx)(d.c_, {
                            voiceChannel: r,
                            locked: t
                        })
                    })
                ]
            }),
            u &&
                (0, i.jsx)('div', {
                    className: c.panelRow,
                    children: (0, i.jsx)(d.L, {
                        voiceChannel: r,
                        locked: t
                    })
                })
        ]
    });
}
