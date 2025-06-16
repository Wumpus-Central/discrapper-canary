n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(112724),
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
let v = (0, o.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: l, participantsVersion: o, layout: v, onSelectParticipant: j, onContextMenuParticipant: O, onFullscreenParticipant: E, channel: I, hasConnectPermission: P, className: S, inCall: Z, showParticipants: N = !0, width: T, height: A, idle: w, mode: R, popoutWindow: M, awaitingRemoteSessionInfo: k, callContainerDimensions: D } = e;
    i.useEffect(() => {
        p.S.dispatch(y.CkL.REMEASURE_TARGET);
    }, [T, A, D.width, D.height]);
    let L = (0, d.Q3)('ChannelCallContent'),
        U = i.useMemo(() => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, s.J)(e))), [n, o]);
    return (null == k ? void 0 : k.channelId) === I.id
        ? (0, r.jsx)(f.Z, { height: A })
        : (null == I ? void 0 : I.isGuildVocal()) && !Z
          ? (0, r.jsx)(h.Z, {
                channel: I,
                participants: t,
                hasConnectPermission: P
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
                  ? L
                      ? (0, r.jsx)(_.Z, { channelId: I.id })
                      : (0, r.jsx)(b.Z, {
                            className: a()(x.videoGrid, x.hiddenParticipants),
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
                    popoutWindow: M,
                    className: S,
                    idle: w,
                    height: A,
                    width: T,
                    layout: v,
                    inCall: Z,
                    channel: I,
                    showParticipants: N
                });
});
