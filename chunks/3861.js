n.d(t, { Z: () => v });
var i = n(54381),
    r = n(473749),
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
    C = n(354459),
    y = n(676465);
let v = (0, a.Z)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: v,
        layout: x,
        onSelectParticipant: O,
        onContextMenuParticipant: E,
        onFullscreenParticipant: j,
        channel: S,
        hasConnectPermission: _,
        className: P,
        inCall: I,
        showParticipants: Z = !0,
        width: T,
        height: N,
        idle: A,
        mode: w,
        popoutType: M,
        awaitingRemoteSessionInfo: R,
        callContainerDimensions: L,
    } = e;
    r.useEffect(() => {
        d.S.dispatch(b.CkL.REMEASURE_TARGET);
    }, [T, N, L.width, L.height]);
    let D = r.useMemo(
            () => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))),
            [n, v],
        ),
        k = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(S.id), [S.id]);
    if ((null == R ? void 0 : R.channelId) === S.id) return (0, i.jsx)(f.Z, { height: N });
    if ((null == S ? void 0 : S.isGuildVocalOrThread()) && !I)
        return (0, i.jsx)(p.Z, {
            channel: S,
            participants: t,
            hasConnectPermission: _,
        });
    if (w === b.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: S.guild_id,
            width: T,
            className: y.voiceCallWrapper,
            participants: t,
            onContextMenu: E,
        });
    if (((n = I ? n : t), null == a)) {
        if (0 === n.length) {
            let e = t.length > 0 && !k;
            return (0, i.jsx)(g.Z, {
                channelId: S.id,
                allPoppedOut: e,
            });
        }
        return (0, i.jsx)(u.Z, {
            className: y.videoGridWrapper,
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            children: (0, i.jsx)(h.Z, {
                channel: S,
                className: y.videoGrid,
                participants: D,
                totalNumberOfParticipants: t.length,
                onClick: O,
                onDoubleClick: j,
                onContextMenu: E,
                inCall: I,
                popoutType: M,
            }),
        });
    }
    return (0, i.jsx)(m.Z, {
        onFullscreenParticipant: j,
        onContextMenuParticipant: E,
        onSelectParticipant: O,
        selectedParticipant: a,
        filteredParticipants: D,
        participants: t,
        popoutType: M,
        className: P,
        idle: A,
        height: N,
        width: T,
        layout: x,
        inCall: I,
        channel: S,
        showParticipants: Z,
    });
});
