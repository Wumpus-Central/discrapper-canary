n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(367513),
    r = n(401843),
    o = n(313961),
    c = n(643501),
    d = n(279250),
    u = n(175203),
    p = n(734057),
    h = n(71393),
    m = n(576705),
    A = n(309010),
    x = n(977997),
    g = n(408822),
    f = n(806931),
    C = n(125730);
let y = [];
function E(e) {
    let { channelId: t, participant: n, popoutType: l } = e,
        A = (0, a.bG)([p.A], () => p.A.getChannel(t)),
        y = (0, a.bG)([o.A], () => o.A.getSelectedParticipant(t)),
        [E, N] = (0, a.yK)([x.A, h.A, m.A, c.default], () => (0, d.eo)(A, x.A, h.A, m.A, c.default));
    return null == A
        ? null
        : (0, i.jsx)(u.Ay, {
              participant: n,
              inCall: !0,
              channel: A,
              width: 100,
              popoutType: l,
              className: C.Vs,
              onClick: () => {
                  (0, f.Ay)(n) && E && (0, r.A9)(n.stream, { forceMultiple: !0 }),
                      y?.id === n.id ? s.A.selectParticipant(A.id, null) : s.A.selectParticipant(A.id, n.id),
                      (0, g.zD)(t);
              },
          });
}
function N(e) {
    let { channelId: t, popoutType: n, aspectRatio: s } = e,
        r = (0, l.useRef)(null),
        [c, d] = (0, l.useState)(0),
        u = (0, a.bG)([A.A], () => A.A.getVoiceChannelId()),
        { streamParticipants: p, videoParticipants: h } = (0, a.cf)([o.A], () => ({
            streamParticipants: o.A.getStreamParticipants(t),
            videoParticipants: u === t ? o.A.getVideoParticipants(t) : y,
        }));
    return (
        (0, l.useEffect)(() => {
            function e() {
                r.current?.getBoundingClientRect().top != null && d(r.current?.getBoundingClientRect().top);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)("div", {
            className: C.kL,
            style: { aspectRatio: s, paddingTop: 82 > c + 16 ? 82 - c : 16 },
            ref: r,
            children: [
                p.map((e) => (0, i.jsx)(E, { participant: e, channelId: t, popoutType: n }, e.id)),
                h.map((e) => (0, i.jsx)(E, { participant: e, channelId: t, popoutType: n }, e.id)),
            ],
        })
    );
}
