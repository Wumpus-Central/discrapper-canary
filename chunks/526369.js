n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(562708),
    s = n(121894),
    r = n(17928),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    p = n(313961),
    h = n(333204),
    m = n(826673),
    A = n(855687),
    x = n(267102),
    g = n(511205),
    f = n(530804),
    C = n(71393),
    y = n(576705),
    E = n(686502),
    N = n(175203),
    j = n(263854),
    v = n(652215),
    I = n(526610);
function T(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: T,
            onContextMenu: _,
            channel: S,
            className: R,
            inCall: b,
            totalNumberOfParticipants: P,
            popoutType: O,
        } = e,
        L = (0, x.Us)() === v.BRT.POPOUT,
        D = (0, r.bG)([C.A], () => C.A.getGuild(S.guild_id), [S.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, j.P)(),
        w = (0, r.bG)([p.A], () => p.A.getUserParticipantCount(S.id), [S]),
        U = (0, f.vp)(S.id, t),
        V = l.useCallback(() => {
            (0, s.r)(() => {
                j.P.setState({ dismissedActivityEntryPointTileChannel: S.id });
            });
        }, [S.id]);
    l.useEffect(() => {
        null != M &&
            S.id !== M &&
            (0, s.r)(() => {
                j.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [S.id, M]);
    let k = (0, r.bG)([y.A], () => S.isPrivate() || (0, A.K)(y.A, D, S), [D, S]),
        B = D?.afkChannelId === S.id,
        G = S.userLimit <= 0 || S.userLimit > 1,
        H = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(S.id).length <= 0),
        F = (0, m.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        z = (0, d.et)(S.id) !== d.xy.CAN_LAUNCH,
        W = null != M && M === S.id,
        Y = U.map(
            (e) => (t) =>
                (0, i.jsx)(
                    N.Ay,
                    {
                        participant: e,
                        channel: S,
                        className: I.V,
                        onClick: n,
                        onDoubleClick: T,
                        onContextMenu: _,
                        inCall: b,
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
            properties: { total_participants: P, can_invite: k, is_afk_channel: B, channel_user_limit: S.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let K = H && !z,
        [X, Z] = (0, h._)();
    null != D &&
        !B &&
        (X
            ? Y.push((e) => (0, i.jsx)(h.V, { width: e, handleClose: Z }, "clips-video-call-tile"))
            : w >= 2 && K && !F && !W
              ? Y.push((e) =>
                    (0, i.jsx)(E.y, {
                        channel: S,
                        guild: D,
                        width: e,
                        inPopout: L,
                        handleClose: V,
                        userParticipantCount: w,
                    }),
                )
              : G &&
                1 === w &&
                k &&
                Y.push((e) =>
                    (0, i.jsx)(E.y, {
                        channel: S,
                        guild: D,
                        width: e,
                        inPopout: L,
                        handleClose: V,
                        userParticipantCount: w,
                        activitiesEnabled: K,
                    }),
                ));
    let q = l.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
    return (0, i.jsx)(g.A, { className: R, keyExtractor: q, paddingTop: 64, paddingBottom: 64, children: Y });
}
