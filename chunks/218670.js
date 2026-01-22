n.d(t, {
    A: () => d,
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(734057),
    s = n(309010),
    c = n(494566),
    u = n(5172);

function d(e) {
    let { locked: t } = e,
        n = (0, a.bG)([s.A], () => s.A.getVoiceChannelId()),
        r = (0, a.bG)([o.A], () => o.A.getChannel(n)),
        d = null != r;
    return (0, i.jsxs)("div", {
        className: l()({
            [u.KE]: !0,
            [u.xt]: t,
        }),
        children: [
            (0, i.jsxs)("div", {
                className: u.Pm,
                children: [
                    (0, i.jsxs)("div", {
                        className: u.qi,
                        children: [
                            (0, i.jsx)(c.pp, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(c.Yb, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(c.GF, {
                                voiceChannel: r,
                                locked: t,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: u.qi,
                        children: [
                            (0, i.jsx)(c.un, {
                                voiceChannel: r,
                                locked: t,
                            }),
                            (0, i.jsx)(c.sm, {
                                voiceChannel: r,
                                locked: t,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: l()(u.qi, d && u.SV),
                        children: (0, i.jsx)(c.NO, {
                            voiceChannel: r,
                            locked: t,
                        }),
                    }),
                ],
            }),
            d &&
                (0, i.jsx)("div", {
                    className: u.Pm,
                    children: (0, i.jsx)(c.LK, {
                        voiceChannel: r,
                        locked: t,
                    }),
                }),
        ],
    });
}
