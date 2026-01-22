n.d(t, { A: () => C }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(110259),
    a = n(121894),
    s = n(311907),
    o = n(554146),
    c = n(933958),
    u = n(782091),
    d = n(139286),
    f = n(313961),
    p = n(826673),
    h = n(855687),
    b = n(267102),
    g = n(733586),
    m = n(530804),
    A = n(71393),
    y = n(576705),
    O = n(686502),
    j = n(175203),
    v = n(263854),
    x = n(794927),
    E = n(652215),
    _ = n(439197);
function C(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: C,
            onContextMenu: S,
            channel: I,
            className: N,
            inCall: T,
            totalNumberOfParticipants: P,
            popoutType: w,
        } = e,
        R = (0, b.Us)() === E.BRT.POPOUT,
        D = (0, s.bG)([A.A], () => A.A.getGuild(I.guild_id), [I.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, v.P)(),
        L = (0, s.bG)([f.A], () => f.A.getUserParticipantCount(I.id), [I]),
        G = (0, m.vp)(I.id, t),
        k = l.useCallback(() => {
            (0, a.r)(() => {
                v.P.setState({ dismissedActivityEntryPointTileChannel: I.id });
            });
        }, [I.id]);
    l.useEffect(() => {
        null != M &&
            I.id !== M &&
            (0, a.r)(() => {
                v.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [I.id, M]);
    let U = (0, s.bG)([y.A], () => I.isPrivate() || (0, h.K)(y.A, D, I), [D, I]),
        V = (null == D ? void 0 : D.afkChannelId) === I.id,
        F = I.userLimit <= 0 || I.userLimit > 1,
        H = (0, s.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        B = (0, p.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        K = (0, u.et)(I.id) !== u.xy.CAN_LAUNCH,
        W = null != M && M === I.id,
        z = G.map(
            (e) => (t) =>
                (0, r.jsx)(
                    j.Ay,
                    {
                        participant: e,
                        channel: I,
                        className: _.V,
                        onClick: n,
                        onDoubleClick: C,
                        onContextMenu: S,
                        inCall: T,
                        width: t,
                        popoutType: w,
                    },
                    e.id,
                ),
        );
    (0, d.A)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: P,
                can_invite: U,
                is_afk_channel: V,
                channel_user_limit: I.userLimit,
            },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != D &&
            !V &&
            (!(L >= 2) || !H || K || B || W
                ? F &&
                  1 === L &&
                  U &&
                  (H && !K
                      ? z.push((e) =>
                            (0, r.jsx)(O.y, {
                                channel: I,
                                guild: D,
                                width: e,
                                inPopout: R,
                                handleClose: k,
                                userParticipantCount: L,
                            }),
                        )
                      : z.push((e) =>
                            (0, r.jsx)(x.A, {
                                width: e,
                                channel: I,
                                guild: D,
                                inPopout: R,
                            }),
                        ))
                : z.push((e) =>
                      (0, r.jsx)(O.y, {
                          channel: I,
                          guild: D,
                          width: e,
                          inPopout: R,
                          handleClose: k,
                          userParticipantCount: L,
                      }),
                  ));
    let Y = l.useCallback(
        (e) => {
            var t, n;
            return null != (t = null == (n = G[e]) ? void 0 : n.id) ? t : "empty-tile";
        },
        [G],
    );
    return (0, r.jsx)(g.A, {
        className: N,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: z,
    });
}
