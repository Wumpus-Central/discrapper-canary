"use strict";
n.d(t, { A: () => S }), n(321073);
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
    m = n(855687),
    p = n(267102),
    g = n(733586),
    _ = n(530804),
    f = n(71393),
    x = n(576705),
    C = n(686502),
    E = n(175203),
    I = n(263854),
    N = n(652215),
    b = n(439197);
function S(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: S,
            onContextMenu: T,
            channel: v,
            className: y,
            inCall: j,
            totalNumberOfParticipants: R,
            popoutType: O,
        } = e,
        L = (0, p.Us)() === N.BRT.POPOUT,
        M = (0, a.bG)([f.A], () => f.A.getGuild(v.guild_id), [v.guild_id]),
        { dismissedActivityEntryPointTileChannel: D } = (0, I.P)(),
        G = (0, a.bG)([h.A], () => h.A.getUserParticipantCount(v.id), [v]),
        U = (0, _.vp)(v.id, t),
        P = s.useCallback(() => {
            (0, r.r)(() => {
                I.P.setState({ dismissedActivityEntryPointTileChannel: v.id });
            });
        }, [v.id]);
    s.useEffect(() => {
        null != D &&
            v.id !== D &&
            (0, r.r)(() => {
                I.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [v.id, D]);
    let w = (0, a.bG)([x.A], () => v.isPrivate() || (0, m.K)(x.A, M, v), [M, v]),
        k = M?.afkChannelId === v.id,
        V = v.userLimit <= 0 || v.userLimit > 1,
        B = (0, a.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(v.id).length <= 0),
        H = (0, A.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.et)(v.id) !== d.xy.CAN_LAUNCH,
        K = null != D && D === v.id,
        Y = U.map(
            (e) => (t) =>
                (0, i.jsx)(
                    E.Ay,
                    {
                        participant: e,
                        channel: v,
                        className: b.V,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: T,
                        inCall: j,
                        width: t,
                        popoutType: O,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: R, can_invite: w, is_afk_channel: k, channel_user_limit: v.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let W = B && !F;
    null != M &&
        !k &&
        (G >= 2 && W && !H && !K
            ? Y.push((e) =>
                  (0, i.jsx)(C.y, {
                      channel: v,
                      guild: M,
                      width: e,
                      inPopout: L,
                      handleClose: P,
                      userParticipantCount: G,
                  }),
              )
            : V &&
              1 === G &&
              w &&
              Y.push((e) =>
                  (0, i.jsx)(C.y, {
                      channel: v,
                      guild: M,
                      width: e,
                      inPopout: L,
                      handleClose: P,
                      userParticipantCount: G,
                      activitiesEnabled: W,
                  }),
              ));
    let z = s.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
    return (0, i.jsx)(g.A, { className: y, keyExtractor: z, paddingTop: 64, paddingBottom: 64, children: Y });
}
