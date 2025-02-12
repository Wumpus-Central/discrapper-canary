n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(442837),
    a = n(592125),
    s = n(944486),
    d = n(293224),
    c = n(348172);
function u(e) {
    let { locked: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        o = (0, l.e7)([a.Z], () => a.Z.getChannel(n)),
        u = null != o;
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
                                voiceChannel: o,
                                locked: t
                            }),
                            (0, i.jsx)(d.SE, {
                                voiceChannel: o,
                                locked: t
                            }),
                            (0, i.jsx)(d.N3, {
                                voiceChannel: o,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.buttonSection,
                        children: [
                            (0, i.jsx)(d.sm, {
                                voiceChannel: o,
                                locked: t
                            }),
                            (0, i.jsx)(d.aG, {
                                voiceChannel: o,
                                locked: t
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: r()(c.buttonSection, u && c.inCall),
                        children: (0, i.jsx)(d.c_, {
                            voiceChannel: o,
                            locked: t
                        })
                    })
                ]
            }),
            u &&
                (0, i.jsx)('div', {
                    className: c.panelRow,
                    children: (0, i.jsx)(d.L, {
                        voiceChannel: o,
                        locked: t
                    })
                })
        ]
    });
}
