n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(562708),
    s = n(121894),
    r = n(17928),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(313961),
    p = n(826673),
    m = n(855687),
    A = n(267102),
    x = n(733586),
    g = n(530804),
    C = n(71393),
    f = n(576705),
    E = n(686502),
    y = n(175203),
    N = n(263854),
    j = n(652215),
    v = n(526610);
function I(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: I,
            onContextMenu: T,
            channel: _,
            className: R,
            inCall: S,
            totalNumberOfParticipants: P,
            popoutType: O,
        } = e,
        b = (0, A.Us)() === j.BRT.POPOUT,
        L = (0, r.bG)([C.A], () => C.A.getGuild(_.guild_id), [_.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, N.P)(),
        D = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(_.id), [_]),
        U = (0, g.vp)(_.id, t),
        w = l.useCallback(() => {
            (0, s.r)(() => {
                N.P.setState({ dismissedActivityEntryPointTileChannel: _.id });
            });
        }, [_.id]);
    l.useEffect(() => {
        null != M &&
            _.id !== M &&
            (0, s.r)(() => {
                N.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [_.id, M]);
    let V = (0, r.bG)([f.A], () => _.isPrivate() || (0, m.K)(f.A, L, _), [L, _]),
        B = L?.afkChannelId === _.id,
        k = _.userLimit <= 0 || _.userLimit > 1,
        H = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(_.id).length <= 0),
        F = (0, p.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, d.et)(_.id) !== d.xy.CAN_LAUNCH,
        z = null != M && M === _.id,
        W = U.map(
            (e) => (t) =>
                (0, i.jsx)(
                    y.Ay,
                    {
                        participant: e,
                        channel: _,
                        className: v.V,
                        onClick: n,
                        onDoubleClick: I,
                        onContextMenu: T,
                        inCall: S,
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
            properties: { total_participants: P, can_invite: V, is_afk_channel: B, channel_user_limit: _.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let Y = H && !G;
    null != L &&
        !B &&
        (D >= 2 && Y && !F && !z
            ? W.push((e) =>
                  (0, i.jsx)(E.y, {
                      channel: _,
                      guild: L,
                      width: e,
                      inPopout: b,
                      handleClose: w,
                      userParticipantCount: D,
                  }),
              )
            : k &&
              1 === D &&
              V &&
              W.push((e) =>
                  (0, i.jsx)(E.y, {
                      channel: _,
                      guild: L,
                      width: e,
                      inPopout: b,
                      handleClose: w,
                      userParticipantCount: D,
                      activitiesEnabled: Y,
                  }),
              ));
    let K = l.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
    return (0, i.jsx)(x.A, { className: R, keyExtractor: K, paddingTop: 64, paddingBottom: 64, children: W });
}
