(n.d(t, { A: () => E }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(562708),
    s = n(121894),
    r = n(17928),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    h = n(198052),
    p = n(826673),
    m = n(855687),
    A = n(267102),
    f = n(511205),
    x = n(530804),
    g = n(71393),
    C = n(576705),
    y = n(686502),
    j = n(175203),
    I = n(263854),
    N = n(652215),
    v = n(886179);
function E(e) {
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
        L = (0, A.Us)() === N.BRT.POPOUT,
        P = (0, r.bG)([g.A], () => g.A.getGuild(S.guild_id), [S.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, I.P)(),
        w = (0, r.bG)([h.A], () => h.A.getUserParticipantCount(S.id), [S]),
        U = (0, x.vp)(S.id, t),
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
    let V = (0, r.bG)([C.A], () => S.isPrivate() || (0, m.K)(C.A, P, S), [P, S]),
        G = P?.afkChannelId === S.id,
        k = S.userLimit <= 0 || S.userLimit > 1,
        B = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(S.id).length <= 0),
        F = (0, p.HX)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        z = (0, d.et)(S.id) !== d.xy.CAN_LAUNCH,
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
            properties: { total_participants: R, can_invite: V, is_afk_channel: G, channel_user_limit: S.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let Y = B && !z;
    null != P &&
        !G &&
        !S.isGuildStageVoice() &&
        (w >= 2 && Y && !F && !H
            ? W.push((e) =>
                  (0, i.jsx)(y.y, {
                      channel: S,
                      guild: P,
                      width: e,
                      inPopout: L,
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
                      guild: P,
                      width: e,
                      inPopout: L,
                      handleClose: D,
                      userParticipantCount: w,
                      activitiesEnabled: Y,
                  }),
              ));
    let $ = l.useCallback((e) => U[e]?.id ?? "empty-tile", [U]);
    return (0, i.jsx)(f.A, { className: T, keyExtractor: $, paddingTop: 64, paddingBottom: 64, children: W });
}
