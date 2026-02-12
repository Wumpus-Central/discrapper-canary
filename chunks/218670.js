n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(734057),
    o = n(309010),
    d = n(494566),
    u = n(5172);
function c(e) {
    let { locked: t } = e,
        n = (0, s.bG)([o.A], () => o.A.getVoiceChannelId()),
        l = (0, s.bG)([r.A], () => r.A.getChannel(n)),
        c = null != l;
    return (0, i.jsxs)("div", {
        className: a()({ [u.KE]: !0, [u.xt]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: u.Pm,
                children: [
                    (0, i.jsxs)("div", {
                        className: u.qi,
                        children: [
                            (0, i.jsx)(d.pp, { voiceChannel: l, locked: t }),
                            (0, i.jsx)(d.Yb, { voiceChannel: l, locked: t }),
                            (0, i.jsx)(d.GF, { voiceChannel: l, locked: t }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: u.qi,
                        children: [
                            (0, i.jsx)(d.un, { voiceChannel: l, locked: t }),
                            (0, i.jsx)(d.sm, { voiceChannel: l, locked: t }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: a()(u.qi, c && u.SV),
                        children: (0, i.jsx)(d.NO, { voiceChannel: l, locked: t }),
                    }),
                ],
            }),
            c && (0, i.jsx)("div", { className: u.Pm, children: (0, i.jsx)(d.LK, { voiceChannel: l, locked: t }) }),
        ],
    });
}
