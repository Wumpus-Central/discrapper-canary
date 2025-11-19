n.d(t, { Z: () => d });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    o = n(442837),
    a = n(592125),
    s = n(944486),
    c = n(293224),
    u = n(678925);
function d(e) {
    let { locked: t } = e,
        n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        r = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
        d = null != r;
    return (0, i.jsxs)("div", {
        className: l()({
            [u.panelContainer]: !0,
            [u.locked]: t,
        }),
        children: [
            (0, i.jsxs)("div", {
                className: u.panelRow,
                children: [
                    (0, i.jsxs)("div", {
                        className: u.buttonSection,
                        children: [
                            (0, i.jsx)(c.Ox, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(c.SE, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(c.N3, {
                                voiceChannel: r,
                                locked: t,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: u.buttonSection,
                        children: [
                            (0, i.jsx)(c.sm, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(c.aG, {
                                voiceChannel: r,
                                locked: t,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: l()(u.buttonSection, d && u.inCall),
                        children: (0, i.jsx)(c.c_, {
                            voiceChannel: r,
                            locked: t,
                        }),
                    }),
                ],
            }),
            d &&
                (0, i.jsx)("div", {
                    className: u.panelRow,
                    children: (0, i.jsx)(c.L, {
                        voiceChannel: r,
                        locked: t,
                    }),
                }),
        ],
    });
}
