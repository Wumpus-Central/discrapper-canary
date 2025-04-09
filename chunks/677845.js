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
    y = n(496675),
    C = n(434488),
    x = n(27457),
    v = n(251564),
    j = n(695492),
    O = n(981631),
    E = n(600295);
function N(e) {
    let { participants: t, onClick: n, onDoubleClick: N, onContextMenu: I, channel: P, className: S, inCall: Z, totalNumberOfParticipants: T, paused: A = !1 } = e,
        w = (0, c.bp)() === O.IlC.POPOUT,
        R = (0, a.e7)([_.Z], () => _.Z.getGuild(P.guild_id), [P.guild_id]),
        { dismissedActivityEntryPointTileChannel: k } = (0, v.d)(),
        M = (0, a.e7)([h.Z], () => h.Z.getUserParticipantCount(P.id), [P]),
        L = (0, b.bt)(P.id, t),
        D = i.useCallback(() => {
            (0, o.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: P.id });
            });
        }, [P.id]);
    i.useEffect(() => {
        null != k &&
            P.id !== k &&
            (0, o.j)(() => {
                v.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [P.id, k]);
    let W = (0, a.e7)([y.Z], () => P.isPrivate() || (0, m.b)(y.Z, R, P), [R, P]),
        U = (null == R ? void 0 : R.afkChannelId) === P.id,
        B = P.userLimit <= 0 || P.userLimit > 1,
        H = (0, a.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).length <= 0),
        G = (0, f.N)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        F = (0, d.KF)(P.id) !== d.jy.CAN_LAUNCH,
        V = null != k && k === P.id,
        z = L.map(
            (e) => (t) =>
                (0, r.jsx)(
                    x.ZP,
                    {
                        participant: e,
                        channel: P,
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
                channel_user_limit: P.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != R &&
            !U &&
            (!(M >= 2) || !H || F || G || V
                ? B &&
                  1 === M &&
                  W &&
                  (H && !F
                      ? z.push((e) =>
                            (0, r.jsx)(C.h, {
                                channel: P,
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
                                channel: P,
                                guild: R,
                                inPopout: w
                            })
                        ))
                : z.push((e) =>
                      (0, r.jsx)(C.h, {
                          channel: P,
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
        className: S,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    });
}
