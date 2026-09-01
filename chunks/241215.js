n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(621466),
    s = n(17928),
    r = n(939249),
    o = n(367513),
    c = n(401843),
    d = n(198052),
    u = n(643501),
    h = n(652896),
    p = n(279250),
    m = n(267102),
    A = n(874739),
    f = n(616356),
    x = n(734057),
    g = n(71393),
    C = n(576705),
    y = n(309010),
    j = n(977997),
    I = n(625494),
    N = n(446243),
    v = n(889426),
    E = n(652215),
    b = n(806931),
    T = n(527133);
let _ = function (e) {
    let { channelId: t, popoutType: n, width: _, height: R, idle: S, onClose: L } = e,
        O = (0, m.Us)(),
        P = (0, s.bG)([d.A], () => d.A.getSelectedParticipant(t)),
        w = (0, s.bG)([x.A], () => x.A.getChannel(t)),
        M = (0, s.bG)([g.A], () => g.A.getGuild(w?.getGuildId())),
        U = (0, s.bG)([y.Ay], () => null != w && y.Ay.getVoiceChannelId() === w.id),
        {
            participants: D,
            filteredParticipants: V,
            participantsVersion: k,
            mode: G,
            layout: B,
            participantsOpen: F,
        } = (0, s.cf)([d.A], () => {
            let e = null != w ? d.A.getLayout(w.id, O) : E.DUB.NORMAL;
            return {
                participants: d.A.getParticipants(t),
                filteredParticipants: d.A.getFilteredParticipants(t),
                participantsVersion: d.A.getParticipantsVersion(t),
                mode: d.A.getMode(t),
                layout: O === E.BRT.POPOUT && e !== E.DUB.FULL_SCREEN ? E.DUB.NO_CHAT : e,
                participantsOpen: d.A.getParticipantsOpen(t),
            };
        }),
        H = (0, s.bG)([u.default], () => u.default.getAwaitingRemoteSessionInfo());
    return ((0, l.useEffect)(() => {
        if (null != w)
            return (
                I._.subscribe(E.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE, e),
                () => {
                    I._.unsubscribe(E.jej.GUILD_ROOM_VIDEO_OVERLAY_CLOSE, e);
                }
            );
        function e() {
            null != w && (0, N.UV)(!1, t);
        }
    }, [w, t]),
    null == w)
        ? null
        : (0, i.jsx)(r.D, {
              style: { width: _, height: R },
              className: T.Lw,
              onClick: function (e) {
                  null == w || ((0, a.vq)(e.target, Element) && null != e.target.closest("[data-call-tile]")) || L();
              },
              tabIndex: -1,
              "aria-hidden": !0,
              children: (0, i.jsx)(A.A, {
                  inCall: U,
                  channel: w,
                  hasConnectPermission: !0,
                  guild: M,
                  participants: D,
                  filteredParticipants: V,
                  participantsVersion: k,
                  selectedParticipant: U && G === E._Of.VIDEO ? P : null,
                  layout: B,
                  idle: S,
                  mode: G,
                  onSelectParticipant: function (e, t) {
                      if (null != w) {
                          if (
                              (0, b.Ay)(e) &&
                              (0, p.eo)(w, j.A, g.A, C.A, u.default)[0] &&
                              0 ===
                                  f.A.getAllActiveStreams().filter(
                                      (t) => (0, h._z)(t) === e.id && t.state !== E.XYD.ENDED,
                                  ).length
                          )
                              return void (0, c.A9)((0, h.Iy)(e.id), { forceMultiple: t.shiftKey });
                          P?.id === e.id ? o.A.selectParticipant(w.id, null) : o.A.selectParticipant(w.id, e.id);
                      }
                  },
                  onContextMenuParticipant: function (e, n, i, l) {
                      (0, v.A)({
                          participant: e,
                          event: n,
                          minimalContextMenu: i,
                          entrypoint: l,
                          channelId: t,
                          appContext: O,
                          location: "GuildRoomVideoOverlay",
                      });
                  },
                  showParticipants: F,
                  popoutType: n,
                  awaitingRemoteSessionInfo: H,
                  callContainerDimensions: { width: _, height: R },
              }),
          });
};
