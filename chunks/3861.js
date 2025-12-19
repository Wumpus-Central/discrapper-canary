n.d(t, { Z: () => x });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(112724),
    o = n(413458),
    s = n(358221),
    c = n(351248),
    u = n(600164),
    d = n(707920),
    p = n(585483),
    f = n(340295),
    h = n(171277),
    m = n(677845),
    g = n(430371),
    b = n(45430),
    y = n(981631),
    C = n(354459),
    v = n(676465);
let x = (0, a.Z)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: x,
        layout: O,
        onSelectParticipant: E,
        onContextMenuParticipant: j,
        onFullscreenParticipant: S,
        channel: _,
        hasConnectPermission: P,
        className: I,
        inCall: Z,
        showParticipants: T = !0,
        width: N,
        height: A,
        idle: w,
        mode: M,
        popoutType: R,
        awaitingRemoteSessionInfo: D,
        callContainerDimensions: k,
    } = e;
    r.useEffect(() => {
        p.S.dispatch(y.CkL.REMEASURE_TARGET);
    }, [N, A, k.width, k.height]);
    let L = r.useMemo(
            () => n.filter((e) => e.type !== C.fO.ACTIVITY || !e.participants.some((e) => (0, o.J)(e))),
            [n, x],
        ),
        U = (0, l.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(_.id), [_.id]);
    if ((null == D ? void 0 : D.channelId) === _.id) return (0, i.jsx)(h.Z, { height: A });
    if ((null == _ ? void 0 : _.isGuildVocalOrThread()) && !Z)
        return (0, i.jsx)(f.Z, {
            channel: _,
            participants: t,
            hasConnectPermission: P,
        });
    if (((n = Z ? n : t), O === y.AEg.HAVEN))
        return (0, i.jsx)(d.Z, {
            participants: n,
            channel: _,
            idle: w,
        });
    if (M === y.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: _.guild_id,
            width: N,
            className: v.voiceCallWrapper,
            participants: t,
            onContextMenu: j,
        });
    if (null == a) {
        if (0 === n.length) {
            let e = t.length > 0 && !U;
            return (0, i.jsx)(b.Z, {
                channelId: _.id,
                allPoppedOut: e,
            });
        }
        return (0, i.jsx)(u.Z, {
            className: v.videoGridWrapper,
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            children: (0, i.jsx)(m.Z, {
                channel: _,
                className: v.videoGrid,
                participants: L,
                totalNumberOfParticipants: t.length,
                onClick: E,
                onDoubleClick: S,
                onContextMenu: j,
                inCall: Z,
                popoutType: R,
            }),
        });
    }
    return (0, i.jsx)(g.Z, {
        onFullscreenParticipant: S,
        onContextMenuParticipant: j,
        onSelectParticipant: E,
        selectedParticipant: a,
        filteredParticipants: L,
        participants: t,
        popoutType: R,
        className: I,
        idle: w,
        height: A,
        width: N,
        layout: O,
        inCall: Z,
        channel: _,
        showParticipants: T,
    });
});
