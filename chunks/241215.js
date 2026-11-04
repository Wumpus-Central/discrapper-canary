n.d(t, { A: () => T });
var i = n(477900),
    l = n(582128),
    a = n(621466),
    s = n(17928),
    r = n(939249),
    o = n(367513),
    d = n(401843),
    c = n(198052),
    u = n(643501),
    h = n(652896),
    p = n(279250),
    m = n(267102),
    A = n(874739),
    f = n(616356),
    g = n(734057),
    x = n(71393),
    C = n(576705),
    y = n(309010),
    j = n(977997),
    I = n(625494),
    N = n(446243),
    v = n(889426),
    E = n(652215),
    b = n(806931),
    S = n(527133);
let T = function (e) {
    let { channelId: t, popoutType: n, width: T, height: _, idle: R, onClose: O } = e,
        P = (0, m.Us)(),
        L = (0, s.bG)([c.A], () => c.A.getSelectedParticipant(t)),
        M = (0, s.bG)([g.A], () => g.A.getChannel(t)),
        w = (0, s.bG)([x.A], () => x.A.getGuild(M?.getGuildId())),
        U = (0, s.bG)([y.Ay], () => null != M && y.Ay.getVoiceChannelId() === M.id),
        {
            participants: D,
            filteredParticipants: V,
            participantsVersion: G,
            mode: k,
            layout: B,
            participantsOpen: F,
        } = (0, s.cf)([c.A], () => {
            let e = null != M ? c.A.getLayout(M.id, P) : E.DUB.NORMAL;
            return {
                participants: c.A.getParticipants(t),
                filteredParticipants: c.A.getFilteredParticipants(t),
                participantsVersion: c.A.getParticipantsVersion(t),
                mode: c.A.getMode(t),
                layout: P === E.BRT.POPOUT && e !== E.DUB.FULL_SCREEN ? E.DUB.NO_CHAT : e,
                participantsOpen: c.A.getParticipantsOpen(t),
            };
        }),
        z = (0, s.bG)([u.default], () => u.default.getAwaitingRemoteSessionInfo());
    return ((0, l.useEffect)(() => {
        if (null != M)
            return (
                I._.subscribe(E.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE, e),
                () => {
                    I._.unsubscribe(E.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE, e);
                }
            );
        function e() {
            null != M && (0, N.UV)(!1, t);
        }
    }, [M, t]),
    null == M)
        ? null
        : (0, i.jsx)(r.D, {
              style: { width: T, height: _ },
              className: S.Lw,
              onClick: function (e) {
                  null == M || ((0, a.vq)(e.target, Element) && null != e.target.closest("[data-call-tile]")) || O();
              },
              tabIndex: -1,
              "aria-hidden": !0,
              children: (0, i.jsx)(A.A, {
                  inCall: U,
                  channel: M,
                  hasConnectPermission: !0,
                  guild: w,
                  participants: D,
                  filteredParticipants: V,
                  participantsVersion: G,
                  selectedParticipant: U && k === E._Of.VIDEO ? L : null,
                  layout: B,
                  idle: R,
                  mode: k,
                  onSelectParticipant: function (e, t) {
                      if (null != M) {
                          if (
                              (0, b.Ay)(e) &&
                              (0, p.eo)(M, j.A, x.A, C.A, u.default)[0] &&
                              0 ===
                                  f.A.getAllActiveStreams().filter(
                                      (t) => (0, h._z)(t) === e.id && t.state !== E.XYD.ENDED,
                                  ).length
                          )
                              return void (0, d.A9)((0, h.Iy)(e.id), { forceMultiple: t.shiftKey });
                          L?.id === e.id ? o.A.selectParticipant(M.id, null) : o.A.selectParticipant(M.id, e.id);
                      }
                  },
                  onContextMenuParticipant: function (e, n, i, l) {
                      (0, v.A)({
                          participant: e,
                          event: n,
                          minimalContextMenu: i,
                          entrypoint: l,
                          channelId: t,
                          appContext: P,
                          location: "GuildRoomVideoOverlay",
                      });
                  },
                  showParticipants: F,
                  popoutType: n,
                  awaitingRemoteSessionInfo: z,
                  callContainerDimensions: { width: T, height: _ },
              }),
          });
};
