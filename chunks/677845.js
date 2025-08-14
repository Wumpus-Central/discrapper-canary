n.d(t, { Z: () => A }), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(990547),
    a = n(731965),
    s = n(442837),
    l = n(704215),
    c = n(40851),
    u = n(317381),
    d = n(374065),
    f = n(213609),
    _ = n(358221),
    p = n(266454),
    h = n(159300),
    m = n(800329),
    g = n(470956),
    E = n(430824),
    b = n(496675),
    y = n(434488),
    O = n(27457),
    v = n(251564),
    I = n(695492),
    T = n(981631),
    S = n(312439);
function A(e) {
    let {
            participants: t,
            onClick: n,
            onDoubleClick: A,
            onContextMenu: N,
            channel: C,
            className: R,
            inCall: P,
            totalNumberOfParticipants: w,
        } = e,
        D = (0, c.bp)() === T.IlC.POPOUT,
        L = (0, s.e7)([E.Z], () => E.Z.getGuild(C.guild_id), [C.guild_id]),
        { dismissedActivityEntryPointTileChannel: x } = (0, v.d)(),
        M = (0, s.e7)([_.Z], () => _.Z.getUserParticipantCount(C.id), [C]),
        j = (0, g.bt)(C.id, t),
        k = i.useCallback(() => {
            (0, a.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: C.id });
            });
        }, [C.id]);
    i.useEffect(() => {
        null != x &&
            C.id !== x &&
            (0, a.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [C.id, x]);
    let U = (0, s.e7)([b.Z], () => C.isPrivate() || (0, h.b)(b.Z, L, C), [L, C]),
        G = (null == L ? void 0 : L.afkChannelId) === C.id,
        B = C.userLimit <= 0 || C.userLimit > 1,
        Z = (0, s.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(C.id).length <= 0),
        F = (0, p.Nj)(l.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        V = (0, d.KF)(C.id) !== d.jy.CAN_LAUNCH,
        H = null != x && x === C.id,
        Y = j.map(
            (e) => (t) =>
                (0, r.jsx)(
                    O.ZP,
                    {
                        participant: e,
                        channel: C,
                        className: S.tile,
                        onClick: n,
                        onDoubleClick: A,
                        onContextMenu: N,
                        inCall: P,
                        width: t,
                        inPopout: D,
                    },
                    e.id,
                ),
        );
    (0, f.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: w,
                can_invite: U,
                is_afk_channel: G,
                channel_user_limit: C.userLimit,
            },
        },
        { trackOnInitialLoad: !0 },
        [],
    ),
        null != L &&
            !G &&
            (!(M >= 2) || !Z || V || F || H
                ? B &&
                  1 === M &&
                  U &&
                  (Z && !V
                      ? Y.push((e) =>
                            (0, r.jsx)(y.h, {
                                channel: C,
                                guild: L,
                                width: e,
                                inPopout: D,
                                handleClose: k,
                                userParticipantCount: M,
                            }),
                        )
                      : Y.push((e) =>
                            (0, r.jsx)(I.Z, {
                                width: e,
                                channel: C,
                                guild: L,
                                inPopout: D,
                            }),
                        ))
                : Y.push((e) =>
                      (0, r.jsx)(y.h, {
                          channel: C,
                          guild: L,
                          width: e,
                          inPopout: D,
                          handleClose: k,
                          userParticipantCount: M,
                      }),
                  ));
    let W = i.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = j[e]) ? void 0 : t.id) ? n : "empty-tile";
        },
        [j],
    );
    return (0, r.jsx)(m.Z, {
        className: R,
        keyExtractor: W,
        paddingTop: 64,
        paddingBottom: 64,
        children: Y,
    });
}
