n.d(t, { A: () => b }), n(321073);
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
    y = n(576705),
    j = n(686502),
    I = n(175203),
    N = n(263854),
    v = n(652215),
    E = n(886179);
function b(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: b,
            onContextMenu: _,
            channel: T,
            className: S,
            inCall: R,
            totalNumberOfParticipants: L,
            popoutType: O,
        } = e,
        P = (0, f.Us)() === v.BRT.POPOUT,
        M = (0, r.bG)([C.A], () => C.A.getGuild(T.guild_id), [T.guild_id]),
        { dismissedActivityEntryPointTileChannel: w } = (0, N.P)(),
        U = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(T.id), [T]),
        D = (0, g.vp)(T.id, t),
        V = l.useCallback(() => {
            (0, s.r)(() => {
                N.P.setState({ dismissedActivityEntryPointTileChannel: T.id });
            });
        }, [T.id]);
    l.useEffect(() => {
        null != w &&
            T.id !== w &&
            (0, s.r)(() => {
                N.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [T.id, w]);
    let k = (0, r.bG)([y.A], () => T.isPrivate() || (0, A.K)(y.A, M, T), [M, T]),
        G = M?.afkChannelId === T.id,
        B = T.userLimit <= 0 || T.userLimit > 1,
        F = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(T.id).length <= 0),
        z = (0, m.HX)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        H = (0, d.et)(T.id) !== d.xy.CAN_LAUNCH,
        W = null != w && w === T.id,
        $ = D.map(
            (e) => (t) =>
                (0, i.jsx)(
                    I.Ay,
                    {
                        participant: e,
                        channel: T,
                        className: E.V,
                        onClick: n,
                        onDoubleClick: b,
                        onContextMenu: _,
                        inCall: R,
                        width: t,
                        popoutType: O,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: L, can_invite: k, is_afk_channel: G, channel_user_limit: T.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let Y = F && !H,
        [K, q] = (0, p._)();
    null != M &&
        !G &&
        (K
            ? $.push((e) => (0, i.jsx)(p.V, { width: e, handleClose: q }, "clips-video-call-tile"))
            : U >= 2 && Y && !z && !W
              ? $.push((e) =>
                    (0, i.jsx)(j.y, {
                        channel: T,
                        guild: M,
                        width: e,
                        inPopout: P,
                        handleClose: V,
                        userParticipantCount: U,
                    }),
                )
              : B &&
                1 === U &&
                k &&
                $.push((e) =>
                    (0, i.jsx)(j.y, {
                        channel: T,
                        guild: M,
                        width: e,
                        inPopout: P,
                        handleClose: V,
                        userParticipantCount: U,
                        activitiesEnabled: Y,
                    }),
                ));
    let X = l.useCallback((e) => D[e]?.id ?? "empty-tile", [D]);
    return (0, i.jsx)(x.A, { className: S, keyExtractor: X, paddingTop: 64, paddingBottom: 64, children: $ });
}
