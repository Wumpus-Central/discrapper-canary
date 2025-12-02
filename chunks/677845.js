n.d(t, { Z: () => S }), n(539854);
var i = n(54381),
    r = n(473749),
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
    v = n(434488),
    _ = n(27457),
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
        M = (0, o.e7)([y.Z], () => y.Z.getGuild(I.guild_id), [I.guild_id]),
        { dismissedActivityEntryPointTileChannel: R } = (0, O.d)(),
        L = (0, o.e7)([p.Z], () => p.Z.getUserParticipantCount(I.id), [I]),
        D = (0, b.bt)(I.id, t),
        k = r.useCallback(() => {
            (0, a.j)(() => {
                O.d.setState({ dismissedActivityEntryPointTileChannel: I.id });
            });
        }, [I.id]);
    r.useEffect(() => {
        null != R &&
            I.id !== R &&
            (0, a.j)(() => {
                O.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [I.id, R]);
    let U = (0, o.e7)([C.Z], () => I.isPrivate() || (0, f.b)(C.Z, M, I), [M, I]),
        V = (null == M ? void 0 : M.afkChannelId) === I.id,
        F = I.userLimit <= 0 || I.userLimit > 1,
        B = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        H = (0, h.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
        z = null != R && R === I.id,
        W = D.map(
            (e) => (t) =>
                (0, i.jsx)(
                    _.ZP,
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
                is_afk_channel: V,
                channel_user_limit: I.userLimit,
            },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != M &&
            !V &&
            (!(L >= 2) || !B || G || H || z
                ? F &&
                  1 === L &&
                  U &&
                  (B && !G
                      ? W.push((e) =>
                            (0, i.jsx)(v.h, {
                                channel: I,
                                guild: M,
                                width: e,
                                inPopout: w,
                                handleClose: k,
                                userParticipantCount: L,
                            }),
                        )
                      : W.push((e) =>
                            (0, i.jsx)(x.Z, {
                                width: e,
                                channel: I,
                                guild: M,
                                inPopout: w,
                            }),
                        ))
                : W.push((e) =>
                      (0, i.jsx)(v.h, {
                          channel: I,
                          guild: M,
                          width: e,
                          inPopout: w,
                          handleClose: k,
                          userParticipantCount: L,
                      }),
                  ));
    let q = r.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = D[e]) ? void 0 : t.id) ? n : "empty-tile";
        },
        [D],
    );
    return (0, i.jsx)(g.Z, {
        className: Z,
        keyExtractor: q,
        paddingTop: 64,
        paddingBottom: 64,
        children: W,
    });
}
