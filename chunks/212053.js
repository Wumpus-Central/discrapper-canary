n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(367513),
    r = n(401843),
    o = n(90804),
    c = n(313961),
    d = n(643501),
    u = n(652896),
    p = n(279250),
    h = n(267102),
    m = n(175203),
    A = n(616356),
    f = n(734057),
    x = n(71393),
    g = n(576705),
    C = n(309010),
    y = n(977997),
    j = n(920639),
    v = n(889426),
    E = n(806931),
    N = n(542138);
let I = [],
    T = 16 / 9;
function b(e) {
    let { channelId: t, participant: n, popoutType: l, maxHeight: u } = e,
        A = (0, h.Us)(),
        I = (0, a.bG)([C.Ay], () => C.Ay.getVoiceChannelId() === t),
        b = (0, a.bG)([f.A], () => f.A.getChannel(t)),
        _ = (0, a.bG)([c.A], () => c.A.getSelectedParticipant(t)),
        [R, S] = (0, a.yK)([y.A, x.A, g.A, d.default], () => (0, p.eo)(b, y.A, x.A, g.A, d.default));
    if (null == b) return null;
    async function P() {
        if (null == b) return;
        let e = I;
        e || (e = await (0, o.A)({ channelId: t })),
            e &&
                ((0, E.Ay)(n) && R && (0, r.A9)(n.stream, { forceMultiple: !0 }),
                _?.id === n.id
                    ? s.A.selectParticipant(b.id, null)
                    : (s.A.selectParticipant(b.id, n.id),
                      (0, j.n0)({ interactionType: "call_tile_expanded", channelId: t })));
    }
    return (0, i.jsx)(m.Ay, {
        participant: n,
        inCall: !0,
        channel: b,
        width: 0.15 * u * T,
        popoutType: l,
        className: N.Vs,
        onClick: P,
        onContextMenu: (e, n, i, l) =>
            (0, v.A)({
                participant: e,
                event: n,
                minimalContextMenu: i,
                entrypoint: l,
                channelId: t,
                appContext: A,
                location: "GuildRoomTiles",
            }),
    });
}
function _(e) {
    let { channelId: t, popoutType: n, aspectRatio: s } = e,
        r = (0, l.useRef)(null),
        [o, d] = (0, l.useState)({ top: 0, maxHeight: 0 }),
        p = (0, a.bG)([C.Ay], () => C.Ay.getVoiceChannelId()),
        h = (0, a.yK)([A.A], () => A.A.getAllActiveStreams()),
        { streamParticipants: m, videoParticipants: f } = (0, a.cf)([c.A], () => ({
            streamParticipants: h.map((e) => c.A.getParticipant(t, (0, u._z)(e))).filter((e) => null != e),
            videoParticipants: p === t ? c.A.getVideoParticipants(t) : I,
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
            className: N.kL,
            style: { aspectRatio: s, paddingTop: Math.max(82 - o.top, 16) },
            ref: r,
            children: [
                m.map((e) =>
                    (0, i.jsx)(b, { participant: e, channelId: t, popoutType: n, maxHeight: o.maxHeight }, e.id),
                ),
                f.map((e) =>
                    (0, i.jsx)(b, { participant: e, channelId: t, popoutType: n, maxHeight: o.maxHeight }, e.id),
                ),
            ],
        })
    );
}
