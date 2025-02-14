n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(592125),
    s = n(944486),
    d = n(293224),
    u = n(622230);
function c(e) {
    let { locked: t } = e,
        n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        l = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
        c = null != l;
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
                        className: u.buttonSection,
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
                        className: r()(u.buttonSection, c && u.inCall),
                        children: (0, i.jsx)(d.c_, {
                            voiceChannel: l,
                            locked: t
                        })
                    })
                ]
            }),
            c &&
                (0, i.jsx)('div', {
                    className: u.panelRow,
                    children: (0, i.jsx)(d.L, {
                        voiceChannel: l,
                        locked: t
                    })
                })
        ]
    });
}
