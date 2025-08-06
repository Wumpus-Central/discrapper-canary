n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    o = n(112724),
    a = n(413458),
    s = n(351248),
    l = n(600164),
    c = n(585483),
    u = n(340295),
    d = n(171277),
    f = n(677845),
    _ = n(430371),
    p = n(45430),
    h = n(981631),
    m = n(354459),
    g = n(363987);
let E = (0, o.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: o, participantsVersion: E, layout: b, onSelectParticipant: y, onContextMenuParticipant: O, onFullscreenParticipant: v, channel: I, hasConnectPermission: T, className: S, inCall: A, showParticipants: N = !0, width: C, height: R, idle: P, mode: w, popoutWindow: D, awaitingRemoteSessionInfo: L, callContainerDimensions: x } = e;
    i.useEffect(() => {
        c.S.dispatch(h.CkL.REMEASURE_TARGET);
    }, [C, R, x.width, x.height]);
    let M = i.useMemo(() => n.filter((e) => e.type !== m.fO.ACTIVITY || !e.participants.some((e) => (0, a.J)(e))), [n, E]);
    return (null == L ? void 0 : L.channelId) === I.id
        ? (0, r.jsx)(d.Z, { height: R })
        : (null == I ? void 0 : I.isGuildVocal()) && !A
          ? (0, r.jsx)(u.Z, {
                channel: I,
                participants: t,
                hasConnectPermission: T
            })
          : w === h.WtW.VOICE
            ? (0, r.jsx)(s.Z, {
                  guildId: I.guild_id,
                  width: C,
                  className: g.voiceCallWrapper,
                  participants: t,
                  onContextMenu: O
              })
            : ((n = A ? n : t), null == o)
              ? 0 === n.length
                  ? (0, r.jsx)(p.Z, { channelId: I.id })
                  : (0, r.jsx)(l.Z, {
                        className: g.videoGridWrapper,
                        justify: l.Z.Justify.CENTER,
                        align: l.Z.Align.CENTER,
                        children: (0, r.jsx)(f.Z, {
                            channel: I,
                            className: g.videoGrid,
                            participants: M,
                            totalNumberOfParticipants: t.length,
                            onClick: y,
                            onDoubleClick: v,
                            onContextMenu: O,
                            inCall: A
                        })
                    })
              : (0, r.jsx)(_.Z, {
                    onFullscreenParticipant: v,
                    onContextMenuParticipant: O,
                    onSelectParticipant: y,
                    selectedParticipant: o,
                    filteredParticipants: M,
                    participants: t,
                    popoutWindow: D,
                    className: S,
                    idle: P,
                    height: R,
                    width: C,
                    layout: b,
                    inCall: A,
                    channel: I,
                    showParticipants: N
                });
});
