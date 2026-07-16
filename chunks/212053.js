n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(367513),
    r = n(401843),
    o = n(90804),
    c = n(313961),
    d = n(643501),
    u = n(279250),
    p = n(267102),
    h = n(175203),
    m = n(734057),
    A = n(71393),
    x = n(576705),
    g = n(309010),
    f = n(977997),
    C = n(920639),
    y = n(889426),
    j = n(806931),
    v = n(125730);
let E = [],
    N = 16 / 9;
function I(e) {
    let { channelId: t, participant: n, popoutType: l, maxHeight: E } = e,
        I = (0, p.Us)(),
        T = (0, a.bG)([g.Ay], () => g.Ay.getVoiceChannelId() === t),
        _ = (0, a.bG)([m.A], () => m.A.getChannel(t)),
        b = (0, a.bG)([c.A], () => c.A.getSelectedParticipant(t)),
        [S, R] = (0, a.yK)([f.A, A.A, x.A, d.default], () => (0, u.eo)(_, f.A, A.A, x.A, d.default));
    if (null == _) return null;
    let P = async () => {
        let e = T;
        e || (e = await (0, o.A)({ channelId: t })),
            e &&
                ((0, j.Ay)(n) && S && (0, r.A9)(n.stream, { forceMultiple: !0 }),
                b?.id === n.id
                    ? s.A.selectParticipant(_.id, null)
                    : (s.A.selectParticipant(_.id, n.id),
                      (0, C.n0)({ interactionType: "call_tile_expanded", channelId: t })));
    };
    return (0, i.jsx)(h.Ay, {
        participant: n,
        inCall: !0,
        channel: _,
        width: 0.15 * E * N,
        popoutType: l,
        className: v.Vs,
        onClick: P,
        onContextMenu: (e, n, i, l) =>
            (0, y.A)({
                participant: e,
                event: n,
                minimalContextMenu: i,
                entrypoint: l,
                channelId: t,
                appContext: I,
                location: "GuildRoomTiles",
            }),
    });
}
function T(e) {
    let { channelId: t, popoutType: n, aspectRatio: s } = e,
        r = (0, l.useRef)(null),
        [o, d] = (0, l.useState)({ top: 0, maxHeight: 0 }),
        u = (0, a.bG)([g.Ay], () => g.Ay.getVoiceChannelId()),
        { streamParticipants: p, videoParticipants: h } = (0, a.cf)([c.A], () => ({
            streamParticipants: c.A.getStreamParticipants(t),
            videoParticipants: u === t ? c.A.getVideoParticipants(t) : E,
        }));
    return (
        (0, l.useEffect)(() => {
            function e() {
                let e = r.current?.getBoundingClientRect();
                null != e && d({ top: e.top, maxHeight: e.height });
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)("div", {
            className: v.kL,
            style: { aspectRatio: s, paddingTop: Math.max(82 - o.top, 16) },
            ref: r,
            children: [
                p.map((e) =>
                    (0, i.jsx)(I, { participant: e, channelId: t, popoutType: n, maxHeight: o.maxHeight }, e.id),
                ),
                h.map((e) =>
                    (0, i.jsx)(I, { participant: e, channelId: t, popoutType: n, maxHeight: o.maxHeight }, e.id),
                ),
            ],
        })
    );
}
