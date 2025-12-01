n.d(t, { Z: () => d });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(592125),
    s = n(944486),
    u = n(293224),
    c = n(678925);
function d(e) {
    let { locked: t } = e,
        n = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        r = (0, a.e7)([o.Z], () => o.Z.getChannel(n)),
        d = null != r;
    return (0, i.jsxs)("div", {
        className: l()({
            [c.panelContainer]: !0,
            [c.locked]: t,
        }),
        children: [
            (0, i.jsxs)("div", {
                className: c.panelRow,
                children: [
                    (0, i.jsxs)("div", {
                        className: c.buttonSection,
                        children: [
                            (0, i.jsx)(u.Ox, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(u.SE, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(u.N3, {
                                voiceChannel: r,
                                locked: t,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: c.buttonSection,
                        children: [
                            (0, i.jsx)(u.sm, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(u.aG, {
                                voiceChannel: r,
                                locked: t,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: l()(c.buttonSection, d && c.inCall),
                        children: (0, i.jsx)(u.c_, {
                            voiceChannel: r,
                            locked: t,
                        }),
                    }),
                ],
            }),
            d &&
                (0, i.jsx)("div", {
                    className: c.panelRow,
                    children: (0, i.jsx)(u.L, {
                        voiceChannel: r,
                        locked: t,
                    }),
                }),
        ],
    });
}
