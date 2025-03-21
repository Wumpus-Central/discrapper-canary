n.d(t, { Z: () => x });
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
    f = n(515334),
    m = n(677845),
    g = n(430371),
    b = n(236564),
    _ = n(45430),
    C = n(981631),
    v = n(354459),
    y = n(26128);
let x = (0, a.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: l, participantsVersion: a, layout: x, onSelectParticipant: j, onContextMenuParticipant: O, onFullscreenParticipant: E, channel: N, hasConnectPermission: I, className: P, inCall: S, showParticipants: Z = !0, paused: T = !1, width: A, height: w, idle: R, mode: M, popoutWindow: k, awaitingRemoteSessionInfo: L, callContainerDimensions: D } = e;
    i.useEffect(() => {
        p.S.dispatch(C.CkL.REMEASURE_TARGET);
    }, [A, w, D.width, D.height]);
    let W = (0, d.Q3)('ChannelCallContent'),
        U = i.useMemo(() => n.filter((e) => e.type !== v.fO.ACTIVITY || !e.participants.some((e) => (0, s.J)(e))), [n, a]);
    return (null == L ? void 0 : L.channelId) === N.id
        ? (0, r.jsx)(f.Z, { height: w })
        : (null == N ? void 0 : N.isGuildVocal()) && !S
          ? (0, r.jsx)(h.Z, {
                channel: N,
                participants: t,
                hasConnectPermission: I
            })
          : M === C.WtW.VOICE
            ? (0, r.jsx)(c.Z, {
                  guildId: N.guild_id,
                  width: A,
                  className: y.voiceCallWrapper,
                  participants: t,
                  onContextMenu: O
              })
            : ((n = S ? n : t), null == l)
              ? 0 === n.length
                  ? W
                      ? (0, r.jsx)(_.Z, { channelId: N.id })
                      : (0, r.jsx)(b.Z, {
                            className: o()(y.videoGrid, y.hiddenParticipants),
                            channelId: N.id,
                            width: A
                        })
                  : (0, r.jsx)(u.Z, {
                        className: y.videoGridWrapper,
                        justify: u.Z.Justify.CENTER,
                        align: u.Z.Align.CENTER,
                        children: (0, r.jsx)(m.Z, {
                            channel: N,
                            className: y.videoGrid,
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
                    popoutWindow: k,
                    className: P,
                    idle: R,
                    height: w,
                    width: A,
                    layout: x,
                    inCall: S,
                    channel: N,
                    showParticipants: Z
                });
});
