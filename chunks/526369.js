n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(110259),
    a = n(121894),
    r = n(311907),
    o = n(554146),
    d = n(933958),
    c = n(782091),
    u = n(139286),
    h = n(313961),
    A = n(826673),
    g = n(855687),
    m = n(267102),
    p = n(733586),
    _ = n(530804),
    x = n(71393),
    f = n(576705),
    E = n(686502),
    C = n(175203),
    I = n(263854),
    S = n(794927),
    b = n(652215),
    N = n(439197);
function T(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: T,
            onContextMenu: j,
            channel: v,
            className: y,
            inCall: R,
            totalNumberOfParticipants: O,
            popoutType: L,
        } = e,
        D = (0, m.Us)() === b.BRT.POPOUT,
        M = (0, r.bG)([x.A], () => x.A.getGuild(v.guild_id), [v.guild_id]),
        { dismissedActivityEntryPointTileChannel: G } = (0, I.P)(),
        U = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(v.id), [v]),
        P = (0, _.vp)(v.id, t),
        k = l.useCallback(() => {
            (0, a.r)(() => {
                I.P.setState({ dismissedActivityEntryPointTileChannel: v.id });
            });
        }, [v.id]);
    l.useEffect(() => {
        null != G &&
            v.id !== G &&
            (0, a.r)(() => {
                I.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [v.id, G]);
    let w = (0, r.bG)([f.A], () => v.isPrivate() || (0, g.K)(f.A, M, v), [M, v]),
        V = M?.afkChannelId === v.id,
        B = v.userLimit <= 0 || v.userLimit > 1,
        H = (0, r.bG)([d.Ay], () => d.Ay.getEmbeddedActivitiesForChannel(v.id).length <= 0),
        F = (0, A.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        Y = (0, c.et)(v.id) !== c.xy.CAN_LAUNCH,
        W = null != G && G === v.id,
        K = P.map(
            (e) => (t) =>
                (0, i.jsx)(
                    C.Ay,
                    {
                        participant: e,
                        channel: v,
                        className: N.V,
                        onClick: n,
                        onDoubleClick: T,
                        onContextMenu: j,
                        inCall: R,
                        width: t,
                        popoutType: L,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: O, can_invite: w, is_afk_channel: V, channel_user_limit: v.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != M &&
            !V &&
            (!(U >= 2) || !H || Y || F || W
                ? B &&
                  1 === U &&
                  w &&
                  (H && !Y
                      ? K.push((e) =>
                            (0, i.jsx)(E.y, {
                                channel: v,
                                guild: M,
                                width: e,
                                inPopout: D,
                                handleClose: k,
                                userParticipantCount: U,
                            }),
                        )
                      : K.push((e) => (0, i.jsx)(S.A, { width: e, channel: v, guild: M, inPopout: D })))
                : K.push((e) =>
                      (0, i.jsx)(E.y, {
                          channel: v,
                          guild: M,
                          width: e,
                          inPopout: D,
                          handleClose: k,
                          userParticipantCount: U,
                      }),
                  ));
    let z = l.useCallback((e) => P[e]?.id ?? "empty-tile", [P]);
    return (0, i.jsx)(p.A, { className: y, keyExtractor: z, paddingTop: 64, paddingBottom: 64, children: K });
}
