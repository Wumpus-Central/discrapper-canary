n.d(t, { Z: () => S }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(990547),
    a = n(731965),
    o = n(442837),
    s = n(704215),
    c = n(40851),
    u = n(317381),
    d = n(374065),
    p = n(213609),
    h = n(358221),
    f = n(266454),
    m = n(159300),
    g = n(800329),
    b = n(470956),
    y = n(430824),
    _ = n(496675),
    C = n(434488),
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
            onContextMenu: I,
            channel: P,
            className: Z,
            inCall: T,
            totalNumberOfParticipants: N,
        } = e,
        A = (0, c.bp)() === j.IlC.POPOUT,
        w = (0, o.e7)([y.Z], () => y.Z.getGuild(P.guild_id), [P.guild_id]),
        { dismissedActivityEntryPointTileChannel: R } = (0, x.d)(),
        M = (0, o.e7)([h.Z], () => h.Z.getUserParticipantCount(P.id), [P]),
        D = (0, b.bt)(P.id, t),
        L = i.useCallback(() => {
            (0, a.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: P.id });
            });
        }, [P.id]);
    i.useEffect(() => {
        null != R &&
            P.id !== R &&
            (0, a.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [P.id, R]);
    let k = (0, o.e7)([_.Z], () => P.isPrivate() || (0, m.b)(_.Z, w, P), [w, P]),
        U = (null == w ? void 0 : w.afkChannelId) === P.id,
        B = P.userLimit <= 0 || P.userLimit > 1,
        G = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).length <= 0),
        H = (0, f.Nj)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.KF)(P.id) !== d.jy.CAN_LAUNCH,
        V = null != R && R === P.id,
        z = D.map(
            (e) => (t) =>
                (0, r.jsx)(
                    v.ZP,
                    {
                        participant: e,
                        channel: P,
                        className: E.tile,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: I,
                        inCall: T,
                        width: t,
                        inPopout: A,
                    },
                    e.id,
                ),
        );
    (0, p.Z)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: N,
                can_invite: k,
                is_afk_channel: U,
                channel_user_limit: P.userLimit,
            },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != w &&
            !U &&
            (!(M >= 2) || !G || F || H || V
                ? B &&
                  1 === M &&
                  k &&
                  (G && !F
                      ? z.push((e) =>
                            (0, r.jsx)(C.h, {
                                channel: P,
                                guild: w,
                                width: e,
                                inPopout: A,
                                handleClose: L,
                                userParticipantCount: M,
                            }),
                        )
                      : z.push((e) =>
                            (0, r.jsx)(O.Z, {
                                width: e,
                                channel: P,
                                guild: w,
                                inPopout: A,
                            }),
                        ))
                : z.push((e) =>
                      (0, r.jsx)(C.h, {
                          channel: P,
                          guild: w,
                          width: e,
                          inPopout: A,
                          handleClose: L,
                          userParticipantCount: M,
                      }),
                  ));
    let W = i.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = D[e]) ? void 0 : t.id) ? n : "empty-tile";
        },
        [D],
    );
    return (0, r.jsx)(g.Z, {
        className: Z,
        keyExtractor: W,
        paddingTop: 64,
        paddingBottom: 64,
        children: z,
    });
}
