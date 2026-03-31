n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(110259),
    a = n(121894),
    r = n(311907),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(313961),
    A = n(826673),
    _ = n(855687),
    m = n(267102),
    g = n(733586),
    p = n(530804),
    f = n(71393),
    x = n(576705),
    E = n(686502),
    I = n(175203),
    C = n(263854),
    N = n(652215),
    T = n(207266);
function S(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: S,
            onContextMenu: b,
            channel: y,
            className: v,
            inCall: j,
            totalNumberOfParticipants: R,
            popoutType: O,
        } = e,
        L = (0, m.Us)() === N.BRT.POPOUT,
        M = (0, r.bG)([f.A], () => f.A.getGuild(y.guild_id), [y.guild_id]),
        { dismissedActivityEntryPointTileChannel: D } = (0, C.P)(),
        U = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(y.id), [y]),
        G = (0, p.vp)(y.id, t),
        P = l.useCallback(() => {
            (0, a.r)(() => {
                C.P.setState({ dismissedActivityEntryPointTileChannel: y.id });
            });
        }, [y.id]);
    l.useEffect(() => {
        null != D &&
            y.id !== D &&
            (0, a.r)(() => {
                C.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [y.id, D]);
    let k = (0, r.bG)([x.A], () => y.isPrivate() || (0, _.K)(x.A, M, y), [M, y]),
        w = M?.afkChannelId === y.id,
        B = y.userLimit <= 0 || y.userLimit > 1,
        V = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(y.id).length <= 0),
        H = (0, A.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.et)(y.id) !== d.xy.CAN_LAUNCH,
        K = null != D && D === y.id,
        W = G.map(
            (e) => (t) =>
                (0, i.jsx)(
                    I.Ay,
                    {
                        participant: e,
                        channel: y,
                        className: T.V,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: b,
                        inCall: j,
                        width: t,
                        popoutType: O,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: R, can_invite: k, is_afk_channel: w, channel_user_limit: y.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let Y = V && !F;
    null != M &&
        !w &&
        (U >= 2 && Y && !H && !K
            ? W.push((e) =>
                  (0, i.jsx)(E.y, {
                      channel: y,
                      guild: M,
                      width: e,
                      inPopout: L,
                      handleClose: P,
                      userParticipantCount: U,
                  }),
              )
            : B &&
              1 === U &&
              k &&
              W.push((e) =>
                  (0, i.jsx)(E.y, {
                      channel: y,
                      guild: M,
                      width: e,
                      inPopout: L,
                      handleClose: P,
                      userParticipantCount: U,
                      activitiesEnabled: Y,
                  }),
              ));
    let z = l.useCallback((e) => G[e]?.id ?? "empty-tile", [G]);
    return (0, i.jsx)(g.A, { className: v, keyExtractor: z, paddingTop: 64, paddingBottom: 64, children: W });
}
