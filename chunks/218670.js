n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(417098),
    d = n(834730),
    c = n(55619),
    u = n(734057),
    h = n(309010),
    m = n(351906),
    p = n(589051),
    g = n(494566),
    f = n(652215),
    _ = n(985018),
    x = n(423005);
let A = r.memo(function () {
    let e = (0, l.bG)([m.A], () => m.A.enabled),
        t = (0, p.Mn)("StreamerModeNotice");
    return e && t
        ? (0, i.jsxs)(o.$T, {
              color: o.Hv.STREAMER_MODE,
              className: x.$X,
              children: [
                  (0, i.jsx)(d.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: _.intl.string(_.t.q9K7jp),
                  }),
                  (0, i.jsx)(o.Z_, {
                      className: x.lI,
                      onClick: () => c.A.setEnabled(!1),
                      noticeType: f.kqX.STREAMER_MODE,
                      children: _.intl.string(_.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function E(e) {
    let { locked: t } = e,
        n = (0, l.bG)([h.A], () => h.A.getVoiceChannelId()),
        r = (0, l.bG)([u.A], () => u.A.getChannel(n)),
        a = null != r;
    return (0, i.jsxs)("div", {
        className: s()({ [x.KE]: !0, [x.xt]: t }),
        children: [
            (0, i.jsx)(A, {}),
            (0, i.jsxs)("div", {
                className: x.Pm,
                children: [
                    (0, i.jsxs)("div", {
                        className: x.qi,
                        children: [
                            (0, i.jsx)(g.pp, { voiceChannel: r, locked: t }),
                            (0, i.jsx)(g.Yb, { voiceChannel: r, locked: t }),
                            (0, i.jsx)(g.GF, { voiceChannel: r, locked: t }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: x.qi,
                        children: [
                            (0, i.jsx)(g.un, { voiceChannel: r, locked: t }),
                            (0, i.jsx)(g.sm, { voiceChannel: r, locked: t }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: s()(x.qi, a && x.SV),
                        children: (0, i.jsx)(g.NO, { voiceChannel: r, locked: t }),
                    }),
                ],
            }),
            a && (0, i.jsx)("div", { className: x.Pm, children: (0, i.jsx)(g.LK, { voiceChannel: r, locked: t }) }),
        ],
    });
}
