(n.d(t, { A: () => b }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(562708),
    s = n(121894),
    r = n(17928),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(198052),
    p = n(333204),
    m = n(826673),
    A = n(855687),
    f = n(267102),
    x = n(511205),
    g = n(530804),
    C = n(71393),
    j = n(576705),
    y = n(686502),
    I = n(175203),
    N = n(263854),
    E = n(652215),
    v = n(886179);
function b(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: b,
            onContextMenu: _,
            channel: S,
            className: T,
            inCall: R,
            totalNumberOfParticipants: O,
            popoutType: L,
        } = e,
        P = (0, f.Us)() === E.BRT.POPOUT,
        M = (0, r.bG)([C.A], () => C.A.getGuild(S.guild_id), [S.guild_id]),
        { dismissedActivityEntryPointTileChannel: w } = (0, N.P)(),
        U = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(S.id), [S]),
        D = (0, g.vp)(S.id, t),
        V = l.useCallback(() => {
            (0, s.r)(() => {
                N.P.setState({ dismissedActivityEntryPointTileChannel: S.id });
            });
        }, [S.id]);
    l.useEffect(() => {
        null != w &&
            S.id !== w &&
            (0, s.r)(() => {
                N.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [S.id, w]);
    let G = (0, r.bG)([j.A], () => S.isPrivate() || (0, A.K)(j.A, M, S), [M, S]),
        k = M?.afkChannelId === S.id,
        B = S.userLimit <= 0 || S.userLimit > 1,
        F = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(S.id).length <= 0),
        z = (0, m.HX)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        H = (0, d.et)(S.id) !== d.xy.CAN_LAUNCH,
        W = null != w && w === S.id,
        Y = D.map(
            (e) => (t) =>
                (0, i.jsx)(
                    I.Ay,
                    {
                        participant: e,
                        channel: S,
                        className: v.V,
                        onClick: n,
                        onDoubleClick: b,
                        onContextMenu: _,
                        inCall: R,
                        width: t,
                        popoutType: L,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: O, can_invite: G, is_afk_channel: k, channel_user_limit: S.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let $ = F && !H,
        [K, X] = (0, p._)();
    null != M &&
        !k &&
        !S.isGuildStageVoice() &&
        (K
            ? Y.push((e) => (0, i.jsx)(p.V, { width: e, handleClose: X }, "clips-video-call-tile"))
            : U >= 2 && $ && !z && !W
              ? Y.push((e) =>
                    (0, i.jsx)(y.y, {
                        channel: S,
                        guild: M,
                        width: e,
                        inPopout: P,
                        handleClose: V,
                        userParticipantCount: U,
                    }),
                )
              : B &&
                1 === U &&
                G &&
                Y.push((e) =>
                    (0, i.jsx)(y.y, {
                        channel: S,
                        guild: M,
                        width: e,
                        inPopout: P,
                        handleClose: V,
                        userParticipantCount: U,
                        activitiesEnabled: $,
                    }),
                ));
    let q = l.useCallback((e) => D[e]?.id ?? "empty-tile", [D]);
    return (0, i.jsx)(x.A, { className: T, keyExtractor: q, paddingTop: 64, paddingBottom: 64, children: Y });
}
