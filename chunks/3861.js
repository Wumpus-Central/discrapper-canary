n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(112724),
    o = n(413458),
    a = n(351248),
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
    let { participants: t, filteredParticipants: n, selectedParticipant: l, participantsVersion: _, layout: y, onSelectParticipant: C, onContextMenuParticipant: x, onFullscreenParticipant: v, channel: j, hasConnectPermission: O, className: E, inCall: S, showParticipants: I = !0, width: P, height: Z, idle: N, mode: T, popoutWindow: A, awaitingRemoteSessionInfo: w, callContainerDimensions: R } = e;
    i.useEffect(() => {
        c.S.dispatch(m.CkL.REMEASURE_TARGET);
    }, [P, Z, R.width, R.height]);
    let k = i.useMemo(() => n.filter((e) => e.type !== g.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, _]);
    return (null == w ? void 0 : w.channelId) === j.id
        ? (0, r.jsx)(d.Z, { height: Z })
        : (null == j ? void 0 : j.isGuildVocal()) && !S
          ? (0, r.jsx)(u.Z, {
                channel: j,
                participants: t,
                hasConnectPermission: O
            })
          : T === m.WtW.VOICE
            ? (0, r.jsx)(a.Z, {
                  guildId: j.guild_id,
                  width: P,
                  className: b.voiceCallWrapper,
                  participants: t,
                  onContextMenu: x
              })
            : ((n = S ? n : t), null == l)
              ? 0 === n.length
                  ? (0, r.jsx)(f.Z, { channelId: j.id })
                  : (0, r.jsx)(s.Z, {
                        className: b.videoGridWrapper,
                        justify: s.Z.Justify.CENTER,
                        align: s.Z.Align.CENTER,
                        children: (0, r.jsx)(p.Z, {
                            channel: j,
                            className: b.videoGrid,
                            participants: k,
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
                    filteredParticipants: k,
                    participants: t,
                    popoutWindow: A,
                    className: E,
                    idle: N,
                    height: Z,
                    width: P,
                    layout: y,
                    inCall: S,
                    channel: j,
                    showParticipants: I
                });
});
