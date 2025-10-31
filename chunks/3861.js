n.d(t, { Z: () => C });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(112724),
    o = n(413458),
    s = n(358221),
    c = n(351248),
    u = n(600164),
    d = n(585483),
    p = n(340295),
    f = n(171277),
    h = n(677845),
    m = n(430371),
    g = n(45430),
    b = n(981631),
    _ = n(354459),
    y = n(394024);
let C = (0, a.Z)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: C,
        layout: v,
        onSelectParticipant: O,
        onContextMenuParticipant: x,
        onFullscreenParticipant: E,
        channel: j,
        hasConnectPermission: S,
        className: P,
        inCall: I,
        showParticipants: Z = !0,
        width: T,
        height: N,
        idle: A,
        mode: w,
        popoutType: M,
        awaitingRemoteSessionInfo: R,
        callContainerDimensions: D,
    } = e;
    i.useEffect(() => {
        d.S.dispatch(b.CkL.REMEASURE_TARGET);
    }, [T, N, D.width, D.height]);
    let L = i.useMemo(
            () => n.filter((e) => e.type !== _.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))),
            [n, C],
        ),
        k = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(j.id), [j.id]);
    if ((null == R ? void 0 : R.channelId) === j.id) return (0, r.jsx)(f.Z, { height: N });
    if ((null == j ? void 0 : j.isGuildVocalOrThread()) && !I)
        return (0, r.jsx)(p.Z, {
            channel: j,
            participants: t,
            hasConnectPermission: S,
        });
    if (w === b.WtW.VOICE)
        return (0, r.jsx)(c.Z, {
            guildId: j.guild_id,
            width: T,
            className: y.voiceCallWrapper,
            participants: t,
            onContextMenu: x,
        });
    if (((n = I ? n : t), null == a)) {
        if (0 === n.length) {
            let e = t.length > 0 && !k;
            return (0, r.jsx)(g.Z, {
                channelId: j.id,
                allPoppedOut: e,
            });
        }
        return (0, r.jsx)(u.Z, {
            className: y.videoGridWrapper,
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            children: (0, r.jsx)(h.Z, {
                channel: j,
                className: y.videoGrid,
                participants: L,
                totalNumberOfParticipants: t.length,
                onClick: O,
                onDoubleClick: E,
                onContextMenu: x,
                inCall: I,
                popoutType: M,
            }),
        });
    }
    return (0, r.jsx)(m.Z, {
        onFullscreenParticipant: E,
        onContextMenuParticipant: x,
        onSelectParticipant: O,
        selectedParticipant: a,
        filteredParticipants: L,
        participants: t,
        popoutType: M,
        className: P,
        idle: A,
        height: N,
        width: T,
        layout: v,
        inCall: I,
        channel: j,
        showParticipants: Z,
    });
});
