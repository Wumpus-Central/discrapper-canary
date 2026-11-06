n(321073);
var i = n(477900),
    l = n(582128),
    a = n(613412),
    s = n(121894),
    r = n(855986),
    o = n(554146),
    c = n(933958),
    d = n(782091),
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
    I = n(175203),
    j = n(263854),
    v = n(652215),
    N = n(886179);
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
                    className: T,
                    inCall: _,
                    totalNumberOfParticipants: R,
                    popoutType: O,
                } = e,
                L = (0, A.Us)() === v.BRT.POPOUT,
                P = (0, r.bG)([x.A], () => x.A.getGuild(S.guild_id), [S.guild_id]),
                { dismissedActivityEntryPointTileChannel: w } = (0, j.P)(),
                M = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(S.id), [S]),
                U = (0, g.vp)(S.id, t),
                D = l.useCallback(() => {
                    (0, s.r)(() => {
                        j.P.setState({ dismissedActivityEntryPointTileChannel: S.id });
                    });
                }, [S.id]);
            l.useEffect(() => {
                null != w &&
                    S.id !== w &&
                    (0, s.r)(() => {
                        j.P.setState({ dismissedActivityEntryPointTileChannel: null });
                    });
            }, [S.id, w]);
            let V = (0, r.bG)([C.A], () => S.isPrivate() || (0, m.K)(C.A, P, S), [P, S]),
                G = P?.afkChannelId === S.id,
                k = S.userLimit <= 0 || S.userLimit > 1,
                B = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(S.id).length <= 0),
                F = (0, p.HX)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
                z = (0, d.et)(S.id) !== d.xy.CAN_LAUNCH,
                H = null != w && w === S.id,
                W = U.map(
                    (e) => (t) =>
                        (0, i.jsx)(
                            I.Ay,
                            {
                                participant: e,
                                channel: S,
                                className: N.V,
                                onClick: n,
                                onDoubleClick: E,
                                onContextMenu: b,
                                inCall: _,
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
            null != P &&
                !G &&
                !S.isGuildStageVoice() &&
                (M >= 2 && $ && !F && !H
                    ? W.push((e) =>
                          (0, i.jsx)(y.y, {
                              channel: S,
                              guild: P,
                              width: e,
                              inPopout: L,
                              handleClose: D,
                              userParticipantCount: M,
                          }),
                      )
                    : k &&
                      1 === M &&
                      V &&
                      W.push((e) =>
                          (0, i.jsx)(y.y, {
                              channel: S,
                              guild: P,
                              width: e,
                              inPopout: L,
                              handleClose: D,
                              userParticipantCount: M,
                              activitiesEnabled: $,
                          }),
                      ));
            let Y = l.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
            return (0, i.jsx)(f.A, { className: T, keyExtractor: Y, paddingTop: 64, paddingBottom: 64, children: W });
        },
    },
);
