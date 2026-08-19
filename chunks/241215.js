n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(939249),
    r = n(367513),
    o = n(401843),
    c = n(198052),
    d = n(643501),
    u = n(652896),
    h = n(279250),
    p = n(267102),
    m = n(874739),
    f = n(616356),
    A = n(734057),
    x = n(71393),
    g = n(576705),
    C = n(309010),
    y = n(977997),
    j = n(625494),
    I = n(446243),
    v = n(889426),
    N = n(652215),
    E = n(806931),
    b = n(804362);
let _ = function (e) {
    let { channelId: t, popoutType: n, width: _, height: T, idle: R, onClose: S } = e,
        L = (0, p.Us)(),
        O = (0, a.bG)([c.A], () => c.A.getSelectedParticipant(t)),
        P = (0, a.bG)([A.A], () => A.A.getChannel(t)),
        M = (0, a.bG)([x.A], () => x.A.getGuild(P?.getGuildId())),
        w = (0, a.bG)([C.Ay], () => null != P && C.Ay.getVoiceChannelId() === P.id),
        {
            participants: D,
            filteredParticipants: U,
            participantsVersion: V,
            mode: k,
            layout: G,
            participantsOpen: B,
        } = (0, a.cf)([c.A], () => {
            let e = null != P ? c.A.getLayout(P.id, L) : N.DUB.NORMAL;
            return {
                participants: c.A.getParticipants(t),
                filteredParticipants: c.A.getFilteredParticipants(t),
                participantsVersion: c.A.getParticipantsVersion(t),
                mode: c.A.getMode(t),
                layout: L === N.BRT.POPOUT && e !== N.DUB.FULL_SCREEN ? N.DUB.NO_CHAT : e,
                participantsOpen: c.A.getParticipantsOpen(t),
            };
        }),
        F = (0, a.bG)([d.default], () => d.default.getAwaitingRemoteSessionInfo());
    return ((0, l.useEffect)(() => {
        if (null != P)
            return (
                j._.subscribe(N.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE, e),
                () => {
                    j._.unsubscribe(N.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE, e);
                }
            );
        function e() {
            null != P && (0, I.UV)(!1, t);
        }
    }, [P, t]),
    null == P)
        ? null
        : (0, i.jsx)(s.D, {
              style: { width: _, height: T },
              className: b.Lw,
              onClick: function () {
                  null != P && (r.A.selectParticipant(P.id, null), S());
              },
              tabIndex: -1,
              "aria-hidden": !0,
              children: (0, i.jsx)(m.A, {
                  inCall: w,
                  channel: P,
                  hasConnectPermission: !0,
                  guild: M,
                  participants: D,
                  filteredParticipants: U,
                  participantsVersion: V,
                  selectedParticipant: w && k === N._Of.VIDEO ? O : null,
                  layout: G,
                  idle: R,
                  mode: k,
                  onSelectParticipant: function (e, t) {
                      if (null != P) {
                          if (
                              (t.preventDefault(),
                              t.stopPropagation(),
                              (0, E.Ay)(e) &&
                                  (0, h.eo)(P, y.A, x.A, g.A, d.default)[0] &&
                                  0 ===
                                      f.A.getAllActiveStreams().filter(
                                          (t) => (0, u._z)(t) === e.id && t.state !== N.XYD.ENDED,
                                      ).length)
                          )
                              return void (0, o.A9)((0, u.Iy)(e.id), { forceMultiple: t.shiftKey });
                          O?.id === e.id ? r.A.selectParticipant(P.id, null) : r.A.selectParticipant(P.id, e.id);
                      }
                  },
                  onContextMenuParticipant: function (e, n, i, l) {
                      (0, v.A)({
                          participant: e,
                          event: n,
                          minimalContextMenu: i,
                          entrypoint: l,
                          channelId: t,
                          appContext: L,
                          location: "GuildRoomVideoOverlay",
                      });
                  },
                  showParticipants: B,
                  popoutType: n,
                  awaitingRemoteSessionInfo: F,
                  callContainerDimensions: { width: _, height: T },
              }),
          });
};
