n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(112724),
    a = n(413458),
    o = n(351248),
    s = n(600164),
    c = n(585483),
    u = n(340295),
    d = n(171277),
    p = n(677845),
    h = n(430371),
    f = n(45430),
    m = n(981631),
    g = n(354459),
    b = n(363987);
let _ = (0, l.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: l, participantsVersion: _, layout: y, onSelectParticipant: C, onContextMenuParticipant: x, onFullscreenParticipant: v, channel: O, hasConnectPermission: j, className: E, inCall: S, showParticipants: P = !0, width: I, height: Z, idle: T, mode: N, popoutWindow: A, awaitingRemoteSessionInfo: w, callContainerDimensions: R } = e;
    i.useEffect(() => {
        c.S.dispatch(m.CkL.REMEASURE_TARGET);
    }, [I, Z, R.width, R.height]);
    let M = i.useMemo(() => n.filter((e) => e.type !== g.fO.ACTIVITY || !e.participants.some((e) => (0, a.J)(e))), [n, _]);
    return (null == w ? void 0 : w.channelId) === O.id
        ? (0, r.jsx)(d.Z, { height: Z })
        : (null == O ? void 0 : O.isGuildVocal()) && !S
          ? (0, r.jsx)(u.Z, {
                channel: O,
                participants: t,
                hasConnectPermission: j
            })
          : N === m.WtW.VOICE
            ? (0, r.jsx)(o.Z, {
                  guildId: O.guild_id,
                  width: I,
                  className: b.voiceCallWrapper,
                  participants: t,
                  onContextMenu: x
              })
            : ((n = S ? n : t), null == l)
              ? 0 === n.length
                  ? (0, r.jsx)(f.Z, { channelId: O.id })
                  : (0, r.jsx)(s.Z, {
                        className: b.videoGridWrapper,
                        justify: s.Z.Justify.CENTER,
                        align: s.Z.Align.CENTER,
                        children: (0, r.jsx)(p.Z, {
                            channel: O,
                            className: b.videoGrid,
                            participants: M,
                            totalNumberOfParticipants: t.length,
                            onClick: C,
                            onDoubleClick: v,
                            onContextMenu: x,
                            inCall: S
                        })
                    })
              : (0, r.jsx)(h.Z, {
                    onFullscreenParticipant: v,
                    onContextMenuParticipant: x,
                    onSelectParticipant: C,
                    selectedParticipant: l,
                    filteredParticipants: M,
                    participants: t,
                    popoutWindow: A,
                    className: E,
                    idle: T,
                    height: Z,
                    width: I,
                    layout: y,
                    inCall: S,
                    channel: O,
                    showParticipants: P
                });
});
