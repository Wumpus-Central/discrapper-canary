n.d(t, { A: () => T }), n(321073);
var i = n(477900),
    l = n(582128),
    a = n(562708),
    s = n(121894),
    r = n(17928),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(313961),
    p = n(333204),
    m = n(826673),
    A = n(855687),
    f = n(267102),
    x = n(511205),
    g = n(530804),
    C = n(71393),
    y = n(576705),
    j = n(686502),
    v = n(175203),
    E = n(263854),
    N = n(652215),
    I = n(310554);
function T(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: T,
            onContextMenu: b,
            channel: _,
            className: R,
            inCall: S,
            totalNumberOfParticipants: P,
            popoutType: L,
        } = e,
        O = (0, f.Us)() === N.BRT.POPOUT,
        w = (0, r.bG)([C.A], () => C.A.getGuild(_.guild_id), [_.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, E.P)(),
        D = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(_.id), [_]),
        U = (0, g.vp)(_.id, t),
        k = l.useCallback(() => {
            (0, s.r)(() => {
                E.P.setState({ dismissedActivityEntryPointTileChannel: _.id });
            });
        }, [_.id]);
    l.useEffect(() => {
        null != M &&
            _.id !== M &&
            (0, s.r)(() => {
                E.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [_.id, M]);
    let V = (0, r.bG)([y.A], () => _.isPrivate() || (0, A.K)(y.A, w, _), [w, _]),
        G = w?.afkChannelId === _.id,
        B = _.userLimit <= 0 || _.userLimit > 1,
        H = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(_.id).length <= 0),
        F = (0, m.HX)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        z = (0, d.et)(_.id) !== d.xy.CAN_LAUNCH,
        W = null != M && M === _.id,
        Y = U.map(
            (e) => (t) =>
                (0, i.jsx)(
                    v.Ay,
                    {
                        participant: e,
                        channel: _,
                        className: I.V,
                        onClick: n,
                        onDoubleClick: T,
                        onContextMenu: b,
                        inCall: S,
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
            properties: { total_participants: P, can_invite: V, is_afk_channel: G, channel_user_limit: _.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let K = H && !z,
        [X, $] = (0, p._)();
    null != w &&
        !G &&
        (X
            ? Y.push((e) => (0, i.jsx)(p.V, { width: e, handleClose: $ }, "clips-video-call-tile"))
            : D >= 2 && K && !F && !W
              ? Y.push((e) =>
                    (0, i.jsx)(j.y, {
                        channel: _,
                        guild: w,
                        width: e,
                        inPopout: O,
                        handleClose: k,
                        userParticipantCount: D,
                    }),
                )
              : B &&
                1 === D &&
                V &&
                Y.push((e) =>
                    (0, i.jsx)(j.y, {
                        channel: _,
                        guild: w,
                        width: e,
                        inPopout: O,
                        handleClose: k,
                        userParticipantCount: D,
                        activitiesEnabled: K,
                    }),
                ));
    let Z = l.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
    return (0, i.jsx)(x.A, { className: R, keyExtractor: Z, paddingTop: 64, paddingBottom: 64, children: Y });
}
