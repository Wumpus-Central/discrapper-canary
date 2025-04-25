n.d(t, { Z: () => I }), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(990547),
    o = n(731965),
    a = n(442837),
    s = n(704215),
    c = n(40851),
    u = n(317381),
    d = n(374065),
    p = n(213609),
    h = n(358221),
    f = n(381586),
    m = n(159300),
    g = n(800329),
    b = n(470956),
    _ = n(430824),
    y = n(496675),
    x = n(434488),
    C = n(27457),
    v = n(251564),
    j = n(695492),
    O = n(981631),
    E = n(600295);
function I(e) {
    let { participants: t, onClick: n, onDoubleClick: I, onContextMenu: P, channel: S, className: Z, inCall: N, totalNumberOfParticipants: T } = e,
        A = (0, c.bp)() === O.IlC.POPOUT,
        w = (0, a.e7)([_.Z], () => _.Z.getGuild(S.guild_id), [S.guild_id]),
        { dismissedActivityEntryPointTileChannel: R } = (0, v.d)(),
        k = (0, a.e7)([h.Z], () => h.Z.getUserParticipantCount(S.id), [S]),
        M = (0, b.bt)(S.id, t),
        L = i.useCallback(() => {
            (0, o.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: S.id });
            });
        }, [S.id]);
    i.useEffect(() => {
        null != R &&
            S.id !== R &&
            (0, o.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [S.id, R]);
    let D = (0, a.e7)([y.Z], () => S.isPrivate() || (0, m.b)(y.Z, w, S), [w, S]),
        U = (null == w ? void 0 : w.afkChannelId) === S.id,
        B = S.userLimit <= 0 || S.userLimit > 1,
        G = (0, a.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(S.id).length <= 0),
        F = (0, f.N)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        H = (0, d.KF)(S.id) !== d.jy.CAN_LAUNCH,
        V = null != R && R === S.id,
        z = M.map(
            (e) => (t) =>
                (0, r.jsx)(
                    C.ZP,
                    {
                        participant: e,
                        channel: S,
                        className: E.tile,
                        onClick: n,
                        onDoubleClick: I,
                        onContextMenu: P,
                        inCall: N,
                        width: t,
                        inPopout: A
                    },
                    e.id
                )
        );
    (0, p.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: T,
                can_invite: D,
                is_afk_channel: U,
                channel_user_limit: S.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != w &&
            !U &&
            (!(k >= 2) || !G || H || F || V
                ? B &&
                  1 === k &&
                  D &&
                  (G && !H
                      ? z.push((e) =>
                            (0, r.jsx)(x.h, {
                                channel: S,
                                guild: w,
                                width: e,
                                inPopout: A,
                                handleClose: L,
                                userParticipantCount: k
                            })
                        )
                      : z.push((e) =>
                            (0, r.jsx)(j.Z, {
                                width: e,
                                channel: S,
                                guild: w,
                                inPopout: A
                            })
                        ))
                : z.push((e) =>
                      (0, r.jsx)(x.h, {
                          channel: S,
                          guild: w,
                          width: e,
                          inPopout: A,
                          handleClose: L,
                          userParticipantCount: k
                      })
                  ));
    let W = i.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = M[e]) ? void 0 : t.id) ? n : 'empty-tile';
        },
        [M]
    );
    return (0, r.jsx)(g.Z, {
        className: Z,
        keyExtractor: W,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    });
}
