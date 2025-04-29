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
    _ = n(45430),
    y = n(981631),
    C = n(354459),
    x = n(363987);
let v = (0, a.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: l, participantsVersion: a, layout: v, onSelectParticipant: j, onContextMenuParticipant: O, onFullscreenParticipant: E, channel: I, hasConnectPermission: S, className: P, inCall: Z, showParticipants: N = !0, width: T, height: A, idle: w, mode: R, popoutWindow: k, awaitingRemoteSessionInfo: M, callContainerDimensions: L } = e;
    i.useEffect(() => {
        p.S.dispatch(y.CkL.REMEASURE_TARGET);
    }, [T, A, L.width, L.height]);
    let D = (0, d.Q3)('ChannelCallContent'),
        U = i.useMemo(() => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, s.J)(e))), [n, a]);
    return (null == M ? void 0 : M.channelId) === I.id
        ? (0, r.jsx)(f.Z, { height: A })
        : (null == I ? void 0 : I.isGuildVocal()) && !Z
          ? (0, r.jsx)(h.Z, {
                channel: I,
                participants: t,
                hasConnectPermission: S
            })
          : R === y.WtW.VOICE
            ? (0, r.jsx)(c.Z, {
                  guildId: I.guild_id,
                  width: T,
                  className: x.voiceCallWrapper,
                  participants: t,
                  onContextMenu: O
              })
            : ((n = Z ? n : t), null == l)
              ? 0 === n.length
                  ? D
                      ? (0, r.jsx)(_.Z, { channelId: I.id })
                      : (0, r.jsx)(b.Z, {
                            className: o()(x.videoGrid, x.hiddenParticipants),
                            channelId: I.id,
                            width: T
                        })
                  : (0, r.jsx)(u.Z, {
                        className: x.videoGridWrapper,
                        justify: u.Z.Justify.CENTER,
                        align: u.Z.Align.CENTER,
                        children: (0, r.jsx)(m.Z, {
                            channel: I,
                            className: x.videoGrid,
                            participants: U,
                            totalNumberOfParticipants: t.length,
                            onClick: j,
                            onDoubleClick: E,
                            onContextMenu: O,
                            inCall: Z
                        })
                    })
              : (0, r.jsx)(g.Z, {
                    onFullscreenParticipant: E,
                    onContextMenuParticipant: O,
                    onSelectParticipant: j,
                    selectedParticipant: l,
                    filteredParticipants: U,
                    participants: t,
                    popoutWindow: k,
                    className: P,
                    idle: w,
                    height: A,
                    width: T,
                    layout: v,
                    inCall: Z,
                    channel: I,
                    showParticipants: N
                });
});
