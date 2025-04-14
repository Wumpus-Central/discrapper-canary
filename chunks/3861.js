n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(112724),
    s = n(413458),
    c = n(351248),
    u = n(600164),
    d = n(540059),
    p = n(585483),
    h = n(340295),
    f = n(171277),
    m = n(677845),
    g = n(430371),
    b = n(236564),
    y = n(45430),
    _ = n(981631),
    C = n(354459),
    x = n(363987);
let v = (0, a.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: l, participantsVersion: a, layout: v, onSelectParticipant: j, onContextMenuParticipant: O, onFullscreenParticipant: E, channel: N, hasConnectPermission: I, className: P, inCall: S, showParticipants: Z = !0, paused: T = !1, width: A, height: w, idle: R, mode: k, popoutWindow: M, awaitingRemoteSessionInfo: L, callContainerDimensions: D } = e;
    i.useEffect(() => {
        p.S.dispatch(_.CkL.REMEASURE_TARGET);
    }, [A, w, D.width, D.height]);
    let W = (0, d.Q3)('ChannelCallContent'),
        U = i.useMemo(() => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, s.J)(e))), [n, a]);
    return (null == L ? void 0 : L.channelId) === N.id
        ? (0, r.jsx)(f.Z, { height: w })
        : (null == N ? void 0 : N.isGuildVocal()) && !S
          ? (0, r.jsx)(h.Z, {
                channel: N,
                participants: t,
                hasConnectPermission: I
            })
          : k === _.WtW.VOICE
            ? (0, r.jsx)(c.Z, {
                  guildId: N.guild_id,
                  width: A,
                  className: x.voiceCallWrapper,
                  participants: t,
                  onContextMenu: O
              })
            : ((n = S ? n : t), null == l)
              ? 0 === n.length
                  ? W
                      ? (0, r.jsx)(y.Z, { channelId: N.id })
                      : (0, r.jsx)(b.Z, {
                            className: o()(x.videoGrid, x.hiddenParticipants),
                            channelId: N.id,
                            width: A
                        })
                  : (0, r.jsx)(u.Z, {
                        className: x.videoGridWrapper,
                        justify: u.Z.Justify.CENTER,
                        align: u.Z.Align.CENTER,
                        children: (0, r.jsx)(m.Z, {
                            channel: N,
                            className: x.videoGrid,
                            participants: U,
                            totalNumberOfParticipants: t.length,
                            onClick: j,
                            onDoubleClick: E,
                            onContextMenu: O,
                            paused: T,
                            inCall: S
                        })
                    })
              : (0, r.jsx)(g.Z, {
                    onFullscreenParticipant: E,
                    onContextMenuParticipant: O,
                    onSelectParticipant: j,
                    selectedParticipant: l,
                    filteredParticipants: U,
                    participants: t,
                    popoutWindow: M,
                    className: P,
                    idle: R,
                    height: w,
                    width: A,
                    layout: v,
                    inCall: S,
                    channel: N,
                    showParticipants: Z
                });
});
