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
    f = n(266454),
    h = n(159300),
    m = n(728285),
    g = n(800329),
    b = n(470956),
    _ = n(430824),
    y = n(496675),
    C = n(434488),
    v = n(27457),
    O = n(251564),
    x = n(695492),
    E = n(981631),
    j = n(312439);
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
            popoutType: A,
        } = e,
        w = (0, m.bp)() === E.IlC.POPOUT,
        M = (0, o.e7)([_.Z], () => _.Z.getGuild(I.guild_id), [I.guild_id]),
        { dismissedActivityEntryPointTileChannel: R } = (0, O.d)(),
        D = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]),
        L = (0, b.bt)(I.id, t),
        k = i.useCallback(() => {
            (0, a.j)(() => {
                O.d.setState({ dismissedActivityEntryPointTileChannel: I.id });
            });
        }, [I.id]);
    i.useEffect(() => {
        null != R &&
            I.id !== R &&
            (0, a.j)(() => {
                O.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [I.id, R]);
    let U = (0, o.e7)([y.Z], () => I.isPrivate() || (0, h.b)(y.Z, M, I), [M, I]),
        B = (null == M ? void 0 : M.afkChannelId) === I.id,
        F = I.userLimit <= 0 || I.userLimit > 1,
        V = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        H = (0, f.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
        W = null != R && R === I.id,
        z = L.map(
            (e) => (t) =>
                (0, r.jsx)(
                    v.ZP,
                    {
                        participant: e,
                        channel: I,
                        className: j.tile,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: P,
                        inCall: T,
                        width: t,
                        popoutType: A,
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
                can_invite: U,
                is_afk_channel: B,
                channel_user_limit: I.userLimit,
            },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != M &&
            !B &&
            (!(D >= 2) || !V || G || H || W
                ? F &&
                  1 === D &&
                  U &&
                  (V && !G
                      ? z.push((e) =>
                            (0, r.jsx)(C.h, {
                                channel: I,
                                guild: M,
                                width: e,
                                inPopout: w,
                                handleClose: k,
                                userParticipantCount: D,
                            }),
                        )
                      : z.push((e) =>
                            (0, r.jsx)(x.Z, {
                                width: e,
                                channel: I,
                                guild: M,
                                inPopout: w,
                            }),
                        ))
                : z.push((e) =>
                      (0, r.jsx)(C.h, {
                          channel: I,
                          guild: M,
                          width: e,
                          inPopout: w,
                          handleClose: k,
                          userParticipantCount: D,
                      }),
                  ));
    let q = i.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = L[e]) ? void 0 : t.id) ? n : "empty-tile";
        },
        [L],
    );
    return (0, r.jsx)(g.Z, {
        className: Z,
        keyExtractor: q,
        paddingTop: 64,
        paddingBottom: 64,
        children: z,
    });
}
