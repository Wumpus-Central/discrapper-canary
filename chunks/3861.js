n.d(t, { Z: () => b });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(112724),
    o = n(413458),
    c = n(351248),
    d = n(600164),
    u = n(540059),
    h = n(594174),
    p = n(585483),
    m = n(340295),
    f = n(171277),
    g = n(677845),
    _ = n(430371),
    C = n(236564),
    x = n(45430),
    v = n(981631),
    E = n(354459),
    I = n(932747);
let b = (0, s.Z)((e) => {
    var t, n;
    let { participants: a, filteredParticipants: s, selectedParticipant: b, participantsVersion: Z, layout: N, onSelectParticipant: T, onContextMenuParticipant: S, onFullscreenParticipant: j, channel: y, hasConnectPermission: A, className: P, inCall: R, showParticipants: M = !0, paused: L = !1, width: k, height: O, idle: D, mode: w, popoutWindow: U, awaitingRemoteSessionInfo: B, callContainerDimensions: F } = e;
    l.useEffect(() => {
        p.S.dispatch(v.CkL.REMEASURE_TARGET);
    }, [k, O, F.width, F.height]);
    let H = (0, u.Q3)('ChannelCallContent'),
        G = null !== (n = null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        V = l.useMemo(() => s.filter((e) => e.type !== E.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))), [s, Z]);
    return (null == B ? void 0 : B.channelId) === y.id
        ? (0, i.jsx)(f.Z, { height: O })
        : (null == y ? void 0 : y.isGuildVocal()) && !R
          ? (0, i.jsx)(m.Z, {
                channel: y,
                participants: a,
                hasConnectPermission: A
            })
          : w === v.WtW.VOICE
            ? (0, i.jsx)(c.Z, {
                  guildId: y.guild_id,
                  width: k,
                  className: I.voiceCallWrapper,
                  participants: a,
                  onContextMenu: S
              })
            : ((s = R ? s : a), null == b)
              ? 0 === s.length
                  ? H && G
                      ? (0, i.jsx)(x.Z, { channelId: y.id })
                      : (0, i.jsx)(C.Z, {
                            className: r()(I.videoGrid, I.hiddenParticipants),
                            channelId: y.id,
                            width: k
                        })
                  : (0, i.jsx)(d.Z, {
                        className: I.videoGridWrapper,
                        justify: d.Z.Justify.CENTER,
                        align: d.Z.Align.CENTER,
                        children: (0, i.jsx)(g.Z, {
                            channel: y,
                            className: I.videoGrid,
                            participants: V,
                            totalNumberOfParticipants: a.length,
                            onClick: T,
                            onDoubleClick: j,
                            onContextMenu: S,
                            paused: L,
                            inCall: R
                        })
                    })
              : (0, i.jsx)(_.Z, {
                    onFullscreenParticipant: j,
                    onContextMenuParticipant: S,
                    onSelectParticipant: T,
                    selectedParticipant: b,
                    filteredParticipants: V,
                    participants: a,
                    popoutWindow: U,
                    className: P,
                    idle: D,
                    height: O,
                    width: k,
                    layout: N,
                    inCall: R,
                    channel: y,
                    showParticipants: M
                });
});
