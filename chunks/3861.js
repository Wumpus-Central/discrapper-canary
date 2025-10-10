n.d(t, { Z: () => C });
var i = n(951288),
    r = n(647438),
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
    b = n(394024);
let C = (0, l.Z)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: l,
        participantsVersion: C,
        layout: y,
        onSelectParticipant: _,
        onContextMenuParticipant: v,
        onFullscreenParticipant: x,
        channel: O,
        hasConnectPermission: j,
        className: E,
        inCall: S,
        showParticipants: P = !0,
        width: I,
        height: Z,
        idle: T,
        mode: N,
        popoutWindow: A,
        awaitingRemoteSessionInfo: w,
        callContainerDimensions: M,
    } = e;
    r.useEffect(() => {
        c.S.dispatch(m.CkL.REMEASURE_TARGET);
    }, [I, Z, M.width, M.height]);
    let R = r.useMemo(
        () => n.filter((e) => e.type !== g.fO.ACTIVITY || !e.participants.some((e) => (0, a.J)(e))),
        [n, C],
    );
    return (null == w ? void 0 : w.channelId) === O.id
        ? (0, i.jsx)(d.Z, { height: Z })
        : (null == O ? void 0 : O.isGuildVocal()) && !S
          ? (0, i.jsx)(u.Z, {
                channel: O,
                participants: t,
                hasConnectPermission: j,
            })
          : N === m.WtW.VOICE
            ? (0, i.jsx)(o.Z, {
                  guildId: O.guild_id,
                  width: I,
                  className: b.voiceCallWrapper,
                  participants: t,
                  onContextMenu: v,
              })
            : ((n = S ? n : t), null == l)
              ? 0 === n.length
                  ? (0, i.jsx)(f.Z, { channelId: O.id })
                  : (0, i.jsx)(s.Z, {
                        className: b.videoGridWrapper,
                        justify: s.Z.Justify.CENTER,
                        align: s.Z.Align.CENTER,
                        children: (0, i.jsx)(p.Z, {
                            channel: O,
                            className: b.videoGrid,
                            participants: R,
                            totalNumberOfParticipants: t.length,
                            onClick: _,
                            onDoubleClick: x,
                            onContextMenu: v,
                            inCall: S,
                        }),
                    })
              : (0, i.jsx)(h.Z, {
                    onFullscreenParticipant: x,
                    onContextMenuParticipant: v,
                    onSelectParticipant: _,
                    selectedParticipant: l,
                    filteredParticipants: R,
                    participants: t,
                    popoutWindow: A,
                    className: E,
                    idle: T,
                    height: Z,
                    width: I,
                    layout: y,
                    inCall: S,
                    channel: O,
                    showParticipants: P,
                });
});
