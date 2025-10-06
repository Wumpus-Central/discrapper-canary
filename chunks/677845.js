n.d(t, { Z: () => S }), n(539854);
var i = n(951288),
    r = n(647438),
    l = n(990547),
    a = n(731965),
    o = n(442837),
    s = n(704215),
    c = n(317381),
    u = n(374065),
    d = n(213609),
    p = n(358221),
    h = n(266454),
    f = n(159300),
    m = n(728285),
    g = n(800329),
    b = n(470956),
    C = n(430824),
    y = n(496675),
    _ = n(434488),
    v = n(27457),
    x = n(251564),
    O = n(695492),
    j = n(981631),
    E = n(53155);
function S(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: S,
            onContextMenu: P,
            channel: I,
            className: Z,
            inCall: N,
            totalNumberOfParticipants: T,
        } = e,
        A = (0, m.bp)() === j.IlC.POPOUT,
        w = (0, o.e7)([C.Z], () => C.Z.getGuild(I.guild_id), [I.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, x.d)(),
        R = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]),
        k = (0, b.bt)(I.id, t),
        L = r.useCallback(() => {
            (0, a.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: I.id });
            });
        }, [I.id]);
    r.useEffect(() => {
        null != M &&
            I.id !== M &&
            (0, a.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [I.id, M]);
    let D = (0, o.e7)([y.Z], () => I.isPrivate() || (0, f.b)(y.Z, w, I), [w, I]),
        U = (null == w ? void 0 : w.afkChannelId) === I.id,
        B = I.userLimit <= 0 || I.userLimit > 1,
        H = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        V = (0, h.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
        G = null != M && M === I.id,
        z = k.map(
            (e) => (t) =>
                (0, i.jsx)(
                    v.ZP,
                    {
                        participant: e,
                        channel: I,
                        className: E.tile,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: P,
                        inCall: N,
                        width: t,
                        inPopout: A,
                    },
                    e.id,
                ),
        );
    (0, d.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: T,
                can_invite: D,
                is_afk_channel: U,
                channel_user_limit: I.userLimit,
            },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != w &&
            !U &&
            (!(R >= 2) || !H || F || V || G
                ? B &&
                  1 === R &&
                  D &&
                  (H && !F
                      ? z.push((e) =>
                            (0, i.jsx)(_.h, {
                                channel: I,
                                guild: w,
                                width: e,
                                inPopout: A,
                                handleClose: L,
                                userParticipantCount: R,
                            }),
                        )
                      : z.push((e) =>
                            (0, i.jsx)(O.Z, {
                                width: e,
                                channel: I,
                                guild: w,
                                inPopout: A,
                            }),
                        ))
                : z.push((e) =>
                      (0, i.jsx)(_.h, {
                          channel: I,
                          guild: w,
                          width: e,
                          inPopout: A,
                          handleClose: L,
                          userParticipantCount: R,
                      }),
                  ));
    let W = r.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = k[e]) ? void 0 : t.id) ? n : "empty-tile";
        },
        [k],
    );
    return (0, i.jsx)(g.Z, {
        className: Z,
        keyExtractor: W,
        paddingTop: 64,
        paddingBottom: 64,
        children: z,
    });
}
