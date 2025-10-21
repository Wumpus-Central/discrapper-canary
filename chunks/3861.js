n.d(t, { Z: () => _ });
var i = n(951288),
    r = n(647438),
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
    C = n(354459),
    y = n(394024);
let _ = (0, a.Z)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: _,
        layout: v,
        onSelectParticipant: x,
        onContextMenuParticipant: O,
        onFullscreenParticipant: j,
        channel: E,
        hasConnectPermission: S,
        className: P,
        inCall: I,
        showParticipants: Z = !0,
        width: T,
        height: N,
        idle: A,
        mode: w,
        popoutWindow: M,
        awaitingRemoteSessionInfo: R,
        callContainerDimensions: L,
    } = e;
    r.useEffect(() => {
        d.S.dispatch(b.CkL.REMEASURE_TARGET);
    }, [T, N, L.width, L.height]);
    let D = r.useMemo(
        () => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))),
        [n, _],
    );
    if ((null == R ? void 0 : R.channelId) === E.id) return (0, i.jsx)(h.Z, { height: N });
    if ((null == E ? void 0 : E.isGuildVocal()) && !I)
        return (0, i.jsx)(p.Z, {
            channel: E,
            participants: t,
            hasConnectPermission: S,
        });
    if (w === b.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: E.guild_id,
            width: T,
            className: y.voiceCallWrapper,
            participants: t,
            onContextMenu: O,
        });
    n = I ? n : t;
    let k = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(E.id), [E.id]);
    if (null == a) {
        if (0 === n.length) {
            let e = t.length > 0 && !k;
            return (0, i.jsx)(g.Z, {
                channelId: E.id,
                allPoppedOut: e,
            });
        }
        return (0, i.jsx)(u.Z, {
            className: y.videoGridWrapper,
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            children: (0, i.jsx)(f.Z, {
                channel: E,
                className: y.videoGrid,
                participants: D,
                totalNumberOfParticipants: t.length,
                onClick: x,
                onDoubleClick: j,
                onContextMenu: O,
                inCall: I,
            }),
        });
    }
    return (0, i.jsx)(m.Z, {
        onFullscreenParticipant: j,
        onContextMenuParticipant: O,
        onSelectParticipant: x,
        selectedParticipant: a,
        filteredParticipants: D,
        participants: t,
        popoutWindow: M,
        className: P,
        idle: A,
        height: N,
        width: T,
        layout: v,
        inCall: I,
        channel: E,
        showParticipants: Z,
    });
});
