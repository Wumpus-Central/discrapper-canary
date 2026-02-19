"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(110259),
    r = n(121894),
    a = n(311907),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(313961),
    A = n(826673),
    p = n(855687),
    g = n(267102),
    m = n(733586),
    _ = n(530804),
    f = n(71393),
    x = n(576705),
    C = n(686502),
    E = n(175203),
    I = n(263854),
    b = n(794927),
    N = n(652215),
    S = n(439197);
function T(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: T,
            onContextMenu: v,
            channel: y,
            className: j,
            inCall: R,
            totalNumberOfParticipants: O,
            popoutType: L,
        } = e,
        M = (0, g.Us)() === N.BRT.POPOUT,
        D = (0, a.bG)([f.A], () => f.A.getGuild(y.guild_id), [y.guild_id]),
        { dismissedActivityEntryPointTileChannel: G } = (0, I.P)(),
        U = (0, a.bG)([h.A], () => h.A.getUserParticipantCount(y.id), [y]),
        P = (0, _.vp)(y.id, t),
        w = s.useCallback(() => {
            (0, r.r)(() => {
                I.P.setState({ dismissedActivityEntryPointTileChannel: y.id });
            });
        }, [y.id]);
    s.useEffect(() => {
        null != G &&
            y.id !== G &&
            (0, r.r)(() => {
                I.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [y.id, G]);
    let k = (0, a.bG)([x.A], () => y.isPrivate() || (0, p.K)(x.A, D, y), [D, y]),
        V = D?.afkChannelId === y.id,
        B = y.userLimit <= 0 || y.userLimit > 1,
        H = (0, a.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(y.id).length <= 0),
        F = (0, A.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        K = (0, d.et)(y.id) !== d.xy.CAN_LAUNCH,
        W = null != G && G === y.id,
        Y = P.map(
            (e) => (t) =>
                (0, i.jsx)(
                    E.Ay,
                    {
                        participant: e,
                        channel: y,
                        className: S.V,
                        onClick: n,
                        onDoubleClick: T,
                        onContextMenu: v,
                        inCall: R,
                        width: t,
                        popoutType: L,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: O, can_invite: k, is_afk_channel: V, channel_user_limit: y.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != D &&
            !V &&
            (!(U >= 2) || !H || K || F || W
                ? B &&
                  1 === U &&
                  k &&
                  (H && !K
                      ? Y.push((e) =>
                            (0, i.jsx)(C.y, {
                                channel: y,
                                guild: D,
                                width: e,
                                inPopout: M,
                                handleClose: w,
                                userParticipantCount: U,
                            }),
                        )
                      : Y.push((e) => (0, i.jsx)(b.A, { width: e, channel: y, guild: D, inPopout: M })))
                : Y.push((e) =>
                      (0, i.jsx)(C.y, {
                          channel: y,
                          guild: D,
                          width: e,
                          inPopout: M,
                          handleClose: w,
                          userParticipantCount: U,
                      }),
                  ));
    let z = s.useCallback((e) => P[e]?.id ?? "empty-tile", [P]);
    return (0, i.jsx)(m.A, { className: j, keyExtractor: z, paddingTop: 64, paddingBottom: 64, children: Y });
}
