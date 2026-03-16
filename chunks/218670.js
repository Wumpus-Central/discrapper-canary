n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(734057),
    o = n(309010),
    d = n(494566),
    u = n(5172);
function c(e) {
    let { locked: t } = e,
        n = (0, r.bG)([o.A], () => o.A.getVoiceChannelId()),
        s = (0, r.bG)([a.A], () => a.A.getChannel(n)),
        c = null != s;
    return (0, i.jsxs)("div", {
        className: l()({ [u.KE]: !0, [u.xt]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: u.Pm,
                children: [
                    (0, i.jsxs)("div", {
                        className: u.qi,
                        children: [
                            (0, i.jsx)(d.pp, { voiceChannel: s, locked: t }),
                            (0, i.jsx)(d.Yb, { voiceChannel: s, locked: t }),
                            (0, i.jsx)(d.GF, { voiceChannel: s, locked: t }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: u.qi,
                        children: [
                            (0, i.jsx)(d.un, { voiceChannel: s, locked: t }),
                            (0, i.jsx)(d.sm, { voiceChannel: s, locked: t }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: l()(u.qi, c && u.SV),
                        children: (0, i.jsx)(d.NO, { voiceChannel: s, locked: t }),
                    }),
                ],
            }),
            c && (0, i.jsx)("div", { className: u.Pm, children: (0, i.jsx)(d.LK, { voiceChannel: s, locked: t }) }),
        ],
    });
}
