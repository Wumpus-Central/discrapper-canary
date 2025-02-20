n.d(t, { Z: () => E }), n(653041);
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
    v = n(434488),
    y = n(27457),
    x = n(251564),
    j = n(695492),
    O = n(981631),
    N = n(910860);
function E(e) {
    let { participants: t, onClick: n, onDoubleClick: E, onContextMenu: P, channel: I, className: S, inCall: Z, totalNumberOfParticipants: T, paused: A = !1 } = e,
        w = (0, c.bp)() === O.IlC.POPOUT,
        R = (0, a.e7)([_.Z], () => _.Z.getGuild(I.guild_id), [I.guild_id]),
        { dismissedActivityEntryPointTileChannel: k } = (0, x.d)(),
        M = (0, a.e7)([h.Z], () => h.Z.getUserParticipantCount(I.id), [I]),
        L = (0, b.bt)(I.id, t),
        D = i.useCallback(() => {
            (0, o.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: I.id });
            });
        }, [I.id]);
    i.useEffect(() => {
        null != k &&
            I.id !== k &&
            (0, o.j)(() => {
                x.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [I.id, k]);
    let W = (0, a.e7)([C.Z], () => I.isPrivate() || (0, m.b)(C.Z, R, I), [R, I]),
        U = (null == R ? void 0 : R.afkChannelId) === I.id,
        B = I.userLimit <= 0 || I.userLimit > 1,
        F = (0, a.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(I.id).length <= 0),
        H = (0, f.N)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        G = (0, d.KF)(I.id) !== d.jy.CAN_LAUNCH,
        V = null != k && k === I.id,
        z = L.map(
            (e) => (t) =>
                (0, r.jsx)(
                    y.ZP,
                    {
                        participant: e,
                        channel: I,
                        className: N.tile,
                        paused: A,
                        onClick: n,
                        onDoubleClick: E,
                        onContextMenu: P,
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
                channel_user_limit: I.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != R &&
            !U &&
            (!(M >= 2) || !F || G || H || V
                ? B &&
                  1 === M &&
                  W &&
                  (F && !G
                      ? z.push((e) =>
                            (0, r.jsx)(v.h, {
                                channel: I,
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
                                channel: I,
                                guild: R,
                                inPopout: w
                            })
                        ))
                : z.push((e) =>
                      (0, r.jsx)(v.h, {
                          channel: I,
                          guild: R,
                          width: e,
                          inPopout: w,
                          handleClose: D,
                          userParticipantCount: M
                      })
                  ));
    let q = i.useCallback(
        (e) => {
            var t, n;
            return null !== (n = null === (t = L[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
        },
        [L]
    );
    return (0, r.jsx)(g.Z, {
        className: S,
        keyExtractor: q,
        paddingTop: 64,
        paddingBottom: 64,
        children: z
    });
}
