n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(617498),
    s = n(17928),
    r = n(717421),
    o = n(367513),
    c = n(401843),
    d = n(770178),
    u = n(90804),
    p = n(313961),
    h = n(643501),
    m = n(279250),
    A = n(267102),
    f = n(175203),
    x = n(616356),
    g = n(734057),
    C = n(71393),
    y = n(576705),
    j = n(309010),
    v = n(977997),
    E = n(889426),
    N = n(57642);
function I(e) {
    let { channelId: t, popoutType: n, seatsRef: I, controlsIdle: T, height: b } = e,
        _ = (0, A.Us)(),
        R = l.useRef(null),
        [S, P] = (0, r.z)(() => ({ raise: 0, config: { duration: 200, clamp: !0 } })),
        L = (0, s.bG)([p.A], () => p.A.getStreamParticipants(t)),
        O = (0, s.yK)([x.A], () => x.A.getAllActiveStreams()),
        w = L.filter((e) => !O.some((n) => n.channelId === t && n.ownerId === e.user.id)),
        M = (0, s.bG)([g.A], () => g.A.getChannel(t)),
        D = (0, s.bG)([j.Ay], () => j.Ay.getVoiceChannelId() === t),
        [U, k] = (0, s.yK)([v.A, C.A, y.A, h.default], () => (0, m.eo)(M, v.A, C.A, y.A, h.default)),
        V = (0, s.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        G = l.useCallback(() => {
            let e = I.current?.getBoundingClientRect(),
                t = R.current?.offsetHeight;
            if (null == e || null == t) return;
            let n = b + 32 - 68,
                i = e.bottom - 16;
            i < n ? P({ raise: 0 }) : P({ raise: T ? 0 : Math.max(0, i - (n - 16)) });
        }, [I, b, P, T]);
    (0, d.g)(R, G, [T], { fireOnMount: !0 });
    let B = l.useCallback(
        async (e) => {
            let n = D;
            n || (n = await (0, u.A)({ channelId: t })),
                n && U && ((0, c.A9)(e.stream), o.A.selectParticipant(t, e.id));
        },
        [D, U, t],
    );
    return null == M || V || 0 === w.length
        ? null
        : (0, i.jsx)(a.animated.div, {
              ref: R,
              className: N.M,
              style: { transform: S.raise.to((e) => `translate3d(-50%, -${e}px, 0)`) },
              children: w.map((e) =>
                  (0, i.jsx)(
                      f.Ay,
                      {
                          participant: e,
                          inCall: !0,
                          channel: M,
                          width: 200,
                          popoutType: n,
                          className: N.V,
                          onClick: () => B(e),
                          onContextMenu: (e, n, i, l) =>
                              (0, E.A)({
                                  participant: e,
                                  event: n,
                                  minimalContextMenu: i,
                                  entrypoint: l,
                                  channelId: t,
                                  appContext: _,
                                  location: "GuildRoomTiles",
                              }),
                      },
                      e.id,
                  ),
              ),
          });
}
