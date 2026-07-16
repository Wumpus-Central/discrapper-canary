n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(367513),
    r = n(401843),
    o = n(793574),
    c = n(313961),
    d = n(643501),
    u = n(279250),
    h = n(175203),
    p = n(734057),
    m = n(71393),
    A = n(576705),
    x = n(309010),
    g = n(977997),
    f = n(446243),
    C = n(920639),
    j = n(806931),
    y = n(125730);
let v = [];
function E(e) {
    let { channelId: t, participant: n, popoutType: l } = e,
        x = (0, a.bG)([p.A], () => p.A.getChannel(t)),
        v = (0, a.bG)([c.A], () => c.A.getSelectedParticipant(t)),
        [E, N] = (0, a.yK)([g.A, m.A, A.A, d.default], () => (0, u.eo)(x, g.A, m.A, A.A, d.default));
    return null == x
        ? null
        : (0, i.jsx)(h.Ay, {
              participant: n,
              inCall: !0,
              channel: x,
              width: 100,
              popoutType: l,
              className: y.Vs,
              onClick: () => {
                  (0, j.Ay)(n) && E && (0, r.A9)(n.stream, { forceMultiple: !0 }),
                      v?.id === n.id ? s.A.selectParticipant(x.id, null) : s.A.selectParticipant(x.id, n.id),
                      (0, f.zD)(t, !0),
                      (0, C.yt)({ channelId: t, location: o.A.GUILD_ROOM, guildRoomOpen: !1 });
              },
          });
}
function N(e) {
    let { channelId: t, popoutType: n, aspectRatio: s } = e,
        r = (0, l.useRef)(null),
        [o, d] = (0, l.useState)(0),
        u = (0, a.bG)([x.A], () => x.A.getVoiceChannelId()),
        { streamParticipants: h, videoParticipants: p } = (0, a.cf)([c.A], () => ({
            streamParticipants: c.A.getStreamParticipants(t),
            videoParticipants: u === t ? c.A.getVideoParticipants(t) : v,
        }));
    return (
        (0, l.useEffect)(() => {
            function e() {
                r.current?.getBoundingClientRect().top != null && d(r.current?.getBoundingClientRect().top);
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)("div", {
            className: y.kL,
            style: { aspectRatio: s, paddingTop: 82 > o + 16 ? 82 - o : 16 },
            ref: r,
            children: [
                h.map((e) => (0, i.jsx)(E, { participant: e, channelId: t, popoutType: n }, e.id)),
                p.map((e) => (0, i.jsx)(E, { participant: e, channelId: t, popoutType: n }, e.id)),
            ],
        })
    );
}
