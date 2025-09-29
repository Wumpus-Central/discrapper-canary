n.d(t, { Z: () => S }), n(539854);
var r = n(951288),
    i = n(647438),
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
    y = n(430824),
    C = n(496675),
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
            inCall: T,
            totalNumberOfParticipants: N,
        } = e,
        A = (0, m.bp)() === j.IlC.POPOUT,
        w = (0, o.e7)([y.Z], () => y.Z.getGuild(I.guild_id), [I.guild_id]),
        { dismissedActivityEntryPointTileChannel: M } = (0, x.d)(),
        R = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]),
        k = (0, b.bt)(I.id, t),
        L = i.useCallback(() => {
            (0, a.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: I.id });
            });
        }, [I.id]);
    i.useEffect(() => {
        null != M &&
            I.id !== M &&
            (0, a.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [I.id, M]);
    let D = (0, o.e7)([C.Z], () => I.isPrivate() || (0, f.b)(C.Z, w, I), [w, I]),
        U = (null == w ? void 0 : w.afkChannelId) === I.id,
        B = I.userLimit <= 0 || I.userLimit > 1,
        F = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        H = (0, h.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        V = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
        G = null != M && M === I.id,
        z = k.map(
            (e) => (t) =>
                (0, r.jsx)(
                    v.ZP,
                    {
                        participant: e,
                        channel: I,
                        className: E.tile,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: P,
                        inCall: T,
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
                total_participants: N,
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
            (!(R >= 2) || !F || V || H || G
                ? B &&
                  1 === R &&
                  D &&
                  (F && !V
                      ? z.push((e) =>
                            (0, r.jsx)(_.h, {
                                channel: I,
                                guild: w,
                                width: e,
                                inPopout: A,
                                handleClose: L,
                                userParticipantCount: R,
                            }),
                        )
                      : z.push((e) =>
                            (0, r.jsx)(O.Z, {
                                width: e,
                                channel: I,
                                guild: w,
                                inPopout: A,
                            }),
                        ))
                : z.push((e) =>
                      (0, r.jsx)(_.h, {
                          channel: I,
                          guild: w,
                          width: e,
                          inPopout: A,
                          handleClose: L,
                          userParticipantCount: R,
                      }),
                  ));
    let W = i.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = k[e]) ? void 0 : t.id) ? n : "empty-tile";
        },
        [k],
    );
    return (0, r.jsx)(g.Z, {
        className: Z,
        keyExtractor: W,
        paddingTop: 64,
        paddingBottom: 64,
        children: z,
    });
}
