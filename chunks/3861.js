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
    h = n(171277),
    f = n(677845),
    m = n(430371),
    g = n(45430),
    b = n(981631),
    y = n(354459),
    C = n(450906);
let v = (0, a.Z)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: v,
        layout: _,
        onSelectParticipant: x,
        onContextMenuParticipant: j,
        onFullscreenParticipant: O,
        channel: E,
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
        callContainerDimensions: L,
    } = e;
    r.useEffect(() => {
        d.S.dispatch(b.CkL.REMEASURE_TARGET);
    }, [T, N, L.width, L.height]);
    let k = r.useMemo(
            () => n.filter((e) => e.type !== y.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))),
            [n, v],
        ),
        D = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(E.id), [E.id]);
    if ((null == R ? void 0 : R.channelId) === E.id) return (0, i.jsx)(h.Z, { height: N });
    if ((null == E ? void 0 : E.isGuildVocalOrThread()) && !I)
        return (0, i.jsx)(p.Z, {
            channel: E,
            participants: t,
            hasConnectPermission: S,
        });
    if (w === b.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: E.guild_id,
            width: T,
            className: C.voiceCallWrapper,
            participants: t,
            onContextMenu: j,
        });
    if (((n = I ? n : t), null == a)) {
        if (0 === n.length) {
            let e = t.length > 0 && !D;
            return (0, i.jsx)(g.Z, {
                channelId: E.id,
                allPoppedOut: e,
            });
        }
        return (0, i.jsx)(u.Z, {
            className: C.videoGridWrapper,
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            children: (0, i.jsx)(f.Z, {
                channel: E,
                className: C.videoGrid,
                participants: k,
                totalNumberOfParticipants: t.length,
                onClick: x,
                onDoubleClick: O,
                onContextMenu: j,
                inCall: I,
                popoutType: M,
            }),
        });
    }
    return (0, i.jsx)(m.Z, {
        onFullscreenParticipant: O,
        onContextMenuParticipant: j,
        onSelectParticipant: x,
        selectedParticipant: a,
        filteredParticipants: k,
        participants: t,
        popoutType: M,
        className: P,
        idle: A,
        height: N,
        width: T,
        layout: _,
        inCall: I,
        channel: E,
        showParticipants: Z,
    });
});
