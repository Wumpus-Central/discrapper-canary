n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(112724),
    o = n(413458),
    c = n(351248),
    d = n(600164),
    u = n(585483),
    h = n(340295),
    p = n(171277),
    m = n(677845),
    f = n(430371),
    g = n(236564),
    _ = n(981631),
    C = n(354459),
    x = n(932747);
let v = (0, s.Z)((e) => {
    let { participants: t, filteredParticipants: n, selectedParticipant: a, participantsVersion: s, layout: v, onSelectParticipant: E, onContextMenuParticipant: I, onFullscreenParticipant: b, channel: Z, hasConnectPermission: N, className: T, inCall: S, showParticipants: j = !0, paused: y = !1, width: A, height: P, idle: R, mode: M, popoutWindow: L, awaitingRemoteSessionInfo: k, callContainerDimensions: O } = e;
    l.useEffect(() => {
        u.S.dispatch(_.CkL.REMEASURE_TARGET);
    }, [A, P, O.width, O.height]);
    let D = l.useMemo(() => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [n, s]);
    return (null == k ? void 0 : k.channelId) === Z.id
        ? (0, i.jsx)(p.Z, { height: P })
        : (null == Z ? void 0 : Z.isGuildVocal()) && !S
          ? (0, i.jsx)(h.Z, {
                channel: Z,
                participants: t,
                hasConnectPermission: N
            })
          : M === _.WtW.VOICE
            ? (0, i.jsx)(c.Z, {
                  guildId: Z.guild_id,
                  width: A,
                  className: x.voiceCallWrapper,
                  participants: t,
                  onContextMenu: I
              })
            : ((n = S ? n : t), null == a)
              ? 0 === n.length
                  ? (0, i.jsx)(g.Z, {
                        className: r()(x.videoGrid, x.hiddenParticipants),
                        channelId: Z.id,
                        width: A
                    })
                  : (0, i.jsx)(d.Z, {
                        className: x.videoGridWrapper,
                        justify: d.Z.Justify.CENTER,
                        align: d.Z.Align.CENTER,
                        children: (0, i.jsx)(m.Z, {
                            channel: Z,
                            className: x.videoGrid,
                            participants: D,
                            totalNumberOfParticipants: t.length,
                            onClick: E,
                            onDoubleClick: b,
                            onContextMenu: I,
                            paused: y,
                            inCall: S
                        })
                    })
              : (0, i.jsx)(f.Z, {
                    onFullscreenParticipant: b,
                    onContextMenuParticipant: I,
                    onSelectParticipant: E,
                    selectedParticipant: a,
                    filteredParticipants: D,
                    participants: t,
                    popoutWindow: L,
                    className: T,
                    idle: R,
                    height: P,
                    width: A,
                    layout: v,
                    inCall: S,
                    channel: Z,
                    showParticipants: j
                });
});
