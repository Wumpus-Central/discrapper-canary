n.d(t, { Z: () => N }), n(539854);
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
    C = n(496675),
    y = n(434488),
    x = n(27457),
    v = n(251564),
    j = n(695492),
    O = n(981631),
    E = n(600295);
function N(e) {
    let { participants: t, onClick: n, onDoubleClick: N, onContextMenu: I, channel: S, className: P, inCall: Z, totalNumberOfParticipants: T, paused: A = !1 } = e,
        w = (0, c.bp)() === O.IlC.POPOUT,
        R = (0, a.e7)([_.Z], () => _.Z.getGuild(S.guild_id), [S.guild_id]),
        { dismissedActivityEntryPointTileChannel: k } = (0, v.d)(),
        M = (0, a.e7)([h.Z], () => h.Z.getUserParticipantCount(S.id), [S]),
        L = (0, b.bt)(S.id, t),
        D = i.useCallback(() => {
            (0, o.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: S.id });
            });
        }, [S.id]);
    i.useEffect(() => {
        null != k &&
            S.id !== k &&
            (0, o.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [S.id, k]);
    let W = (0, a.e7)([C.Z], () => S.isPrivate() || (0, m.b)(C.Z, R, S), [R, S]),
        U = (null == R ? void 0 : R.afkChannelId) === S.id,
        B = S.userLimit <= 0 || S.userLimit > 1,
        H = (0, a.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(S.id).length <= 0),
        F = (0, f.N)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, d.KF)(S.id) !== d.jy.CAN_LAUNCH,
        V = null != k && k === S.id,
        z = L.map(
            (e) => (t) =>
                (0, r.jsx)(
                    x.ZP,
                    {
                        participant: e,
                        channel: S,
                        className: E.tile,
                        paused: A,
                        onClick: n,
                        onDoubleClick: N,
                        onContextMenu: I,
                        inCall: Z,
                        width: t,
                        inPopout: w
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
                can_invite: W,
                is_afk_channel: U,
                channel_user_limit: S.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != R &&
            !U &&
            (!(M >= 2) || !H || G || F || V
                ? B &&
                  1 === M &&
                  W &&
                  (H && !G
                      ? z.push((e) =>
                            (0, r.jsx)(y.h, {
                                channel: S,
                                guild: R,
                                width: e,
                                inPopout: w,
                                handleClose: D,
                                userParticipantCount: M
                            })
                        )
                      : z.push((e) =>
                            (0, r.jsx)(j.Z, {
                                width: e,
                                channel: S,
                                guild: R,
                                inPopout: w
                            })
                        ))
                : z.push((e) =>
                      (0, r.jsx)(y.h, {
                          channel: S,
                          guild: R,
                          width: e,
                          inPopout: w,
                          handleClose: D,
                          userParticipantCount: M
                      })
                  ));
    let Y = i.useCallback(
        (e) => {
            var t, n;
            return null != (n = null == (t = L[e]) ? void 0 : t.id) ? n : 'empty-tile';
        },
        [L]
    );
    return (0, r.jsx)(g.Z, {
        className: P,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    });
}
