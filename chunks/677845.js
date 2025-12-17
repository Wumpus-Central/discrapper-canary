n.d(t, { Z: () => _ }), n(539854);
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
    f = n(266454),
    h = n(159300),
    m = n(728285),
    g = n(800329),
    b = n(470956),
    C = n(430824),
    y = n(496675),
    v = n(434488),
    x = n(27457),
    O = n(251564),
    E = n(695492),
    j = n(981631),
    S = n(106076);
function _(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: _,
            onContextMenu: P,
            channel: I,
            className: Z,
            inCall: T,
            totalNumberOfParticipants: N,
            popoutType: A,
        } = e,
        w = (0, m.bp)() === j.IlC.POPOUT,
        M = (0, o.e7)([C.Z], () => C.Z.getGuild(I.guild_id), [I.guild_id]),
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
    let U = (0, o.e7)([y.Z], () => I.isPrivate() || (0, h.b)(y.Z, M, I), [M, I]),
        V = (null == M ? void 0 : M.afkChannelId) === I.id,
        F = I.userLimit <= 0 || I.userLimit > 1,
        H = (0, o.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        B = (0, f.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, u.KF)(I.id) !== u.jy.CAN_LAUNCH,
        z = null != R && R === I.id,
        W = D.map(
            (e) => (t) =>
                (0, i.jsx)(
                    x.ZP,
                    {
                        participant: e,
                        channel: I,
                        className: S.tile,
                        onClick: n,
                        onDoubleClick: _,
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
            (!(L >= 2) || !H || G || B || z
                ? F &&
                  1 === L &&
                  U &&
                  (H && !G
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
                            (0, i.jsx)(E.Z, {
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
