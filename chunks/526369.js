n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(110259),
    s = n(121894),
    r = n(311907),
    o = n(554146),
    c = n(933958),
    d = n(782091),
    u = n(139286),
    p = n(313961),
    h = n(826673),
    _ = n(855687),
    m = n(267102),
    A = n(733586),
    x = n(530804),
    f = n(71393),
    g = n(576705),
    C = n(686502),
    y = n(175203),
    v = n(263854),
    E = n(652215),
    N = n(526610);
function I(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: I,
            onContextMenu: j,
            channel: T,
            className: b,
            inCall: S,
            totalNumberOfParticipants: R,
            popoutType: P,
        } = e,
        O = (0, m.Us)() === E.BRT.POPOUT,
        w = (0, r.bG)([f.A], () => f.A.getGuild(T.guild_id), [T.guild_id]),
        { dismissedActivityEntryPointTileChannel: L } = (0, v.P)(),
        D = (0, r.bG)([p.A], () => p.A.getUserParticipantCount(T.id), [T]),
        M = (0, x.vp)(T.id, t),
        U = a.useCallback(() => {
            (0, s.r)(() => {
                v.P.setState({ dismissedActivityEntryPointTileChannel: T.id });
            });
        }, [T.id]);
    a.useEffect(() => {
        null != L &&
            T.id !== L &&
            (0, s.r)(() => {
                v.P.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [T.id, L]);
    let V = (0, r.bG)([g.A], () => T.isPrivate() || (0, _.K)(g.A, w, T), [w, T]),
        k = w?.afkChannelId === T.id,
        B = T.userLimit <= 0 || T.userLimit > 1,
        H = (0, r.bG)([c.Ay], () => c.Ay.getEmbeddedActivitiesForChannel(T.id).length <= 0),
        F = (0, h.JZ)(o.M.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, d.et)(T.id) !== d.xy.CAN_LAUNCH,
        z = null != L && L === T.id,
        W = M.map(
            (e) => (t) =>
                (0, i.jsx)(
                    y.Ay,
                    {
                        participant: e,
                        channel: T,
                        className: N.V,
                        onClick: n,
                        onDoubleClick: I,
                        onContextMenu: j,
                        inCall: S,
                        width: t,
                        popoutType: P,
                    },
                    e.id,
                ),
        );
    (0, u.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: { total_participants: R, can_invite: V, is_afk_channel: k, channel_user_limit: T.userLimit },
        },
        { trackOnInitialLoad: !0 },
        [],
    );
    let Y = H && !G;
    null != w &&
        !k &&
        (D >= 2 && Y && !F && !z
            ? W.push((e) =>
                  (0, i.jsx)(C.y, {
                      channel: T,
                      guild: w,
                      width: e,
                      inPopout: O,
                      handleClose: U,
                      userParticipantCount: D,
                  }),
              )
            : B &&
              1 === D &&
              V &&
              W.push((e) =>
                  (0, i.jsx)(C.y, {
                      channel: T,
                      guild: w,
                      width: e,
                      inPopout: O,
                      handleClose: U,
                      userParticipantCount: D,
                      activitiesEnabled: Y,
                  }),
              ));
    let K = a.useCallback((e) => M[e]?.id ?? "empty-tile", [M]);
    return (0, i.jsx)(A.A, { className: b, keyExtractor: K, paddingTop: 64, paddingBottom: 64, children: W });
}
