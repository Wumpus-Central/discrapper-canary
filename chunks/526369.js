n(321073);
var i = n(477900),
    l = n(582128),
    a = n(613412),
    s = n(121894),
    r = n(855986),
    o = n(554146),
    d = n(933958),
    c = n(782091),
    u = n(139286),
    h = n(628983),
    p = n(826673),
    m = n(855687),
    A = n(267102),
    f = n(511205),
    g = n(530804),
    x = n(71393),
    C = n(576705),
    y = n(686502),
    j = n(175203),
    I = n(263854),
    N = n(652215),
    v = n(886179);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    participants: t,
                    onClick: n,
                    onDoubleClick: E,
                    onContextMenu: b,
                    channel: S,
                    className: _,
                    inCall: T,
                    totalNumberOfParticipants: R,
                    popoutType: O,
                } = e,
                P = (0, A.Us)() === N.BRT.POPOUT,
                L = (0, r.bG)([x.A], () => x.A.getGuild(S.guild_id), [S.guild_id]),
                { dismissedActivityEntryPointTileChannel: M } = (0, I.P)(),
                w = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(S.id), [S]),
                U = (0, g.vp)(S.id, t),
                D = l.useCallback(() => {
                    (0, s.r)(() => {
                        I.P.setState({ dismissedActivityEntryPointTileChannel: S.id });
                    });
                }, [S.id]);
            l.useEffect(() => {
                null != M &&
                    S.id !== M &&
                    (0, s.r)(() => {
                        I.P.setState({ dismissedActivityEntryPointTileChannel: null });
                    });
            }, [S.id, M]);
            let V = (0, r.bG)([C.A], () => S.isPrivate() || (0, m.K)(C.A, L, S), [L, S]),
                G = L?.afkChannelId === S.id,
                k = S.userLimit <= 0 || S.userLimit > 1,
                B = (0, r.bG)([d.Ay], () => d.Ay.getEmbeddedActivitiesForChannel(S.id).length <= 0),
                F = (0, p.HX)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
                z = (0, c.et)(S.id) !== c.xy.CAN_LAUNCH,
                H = null != M && M === S.id,
                W = U.map(
                    (e) => (t) =>
                        (0, i.jsx)(
                            j.Ay,
                            {
                                participant: e,
                                channel: S,
                                className: v.V,
                                onClick: n,
                                onDoubleClick: E,
                                onContextMenu: b,
                                inCall: T,
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
                    properties: {
                        total_participants: R,
                        can_invite: V,
                        is_afk_channel: G,
                        channel_user_limit: S.userLimit,
                    },
                },
                { trackOnInitialLoad: !0 },
                [],
            );
            let $ = B && !z;
            null != L &&
                !G &&
                !S.isGuildStageVoice() &&
                (w >= 2 && $ && !F && !H
                    ? W.push((e) =>
                          (0, i.jsx)(y.y, {
                              channel: S,
                              guild: L,
                              width: e,
                              inPopout: P,
                              handleClose: D,
                              userParticipantCount: w,
                          }),
                      )
                    : k &&
                      1 === w &&
                      V &&
                      W.push((e) =>
                          (0, i.jsx)(y.y, {
                              channel: S,
                              guild: L,
                              width: e,
                              inPopout: P,
                              handleClose: D,
                              userParticipantCount: w,
                              activitiesEnabled: $,
                          }),
                      ));
            let Y = l.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
            return (0, i.jsx)(f.A, { className: _, keyExtractor: Y, paddingTop: 64, paddingBottom: 64, children: W });
        },
    },
);
