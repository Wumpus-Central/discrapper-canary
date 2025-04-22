n.d(t, { Z: () => I }), n(539854);
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
function I(e) {
    let { participants: t, onClick: n, onDoubleClick: I, onContextMenu: P, channel: S, className: Z, inCall: N, totalNumberOfParticipants: T, paused: A = !1 } = e,
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
    let U = (0, a.e7)([y.Z], () => S.isPrivate() || (0, m.b)(y.Z, R, S), [R, S]),
        B = (null == R ? void 0 : R.afkChannelId) === S.id,
        G = S.userLimit <= 0 || S.userLimit > 1,
        F = (0, a.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(S.id).length <= 0),
        H = (0, f.N)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        V = (0, d.KF)(S.id) !== d.jy.CAN_LAUNCH,
        z = null != k && k === S.id,
        W = L.map(
            (e) => (t) =>
                (0, r.jsx)(
                    x.ZP,
                    {
                        participant: e,
                        channel: S,
                        className: E.tile,
                        paused: A,
                        onClick: n,
                        onDoubleClick: I,
                        onContextMenu: P,
                        inCall: N,
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
                can_invite: U,
                is_afk_channel: B,
                channel_user_limit: S.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != R &&
            !B &&
            (!(M >= 2) || !F || V || H || z
                ? G &&
                  1 === M &&
                  U &&
                  (F && !V
                      ? W.push((e) =>
                            (0, r.jsx)(C.h, {
                                channel: S,
                                guild: R,
                                width: e,
                                inPopout: w,
                                handleClose: D,
                                userParticipantCount: M
                            })
                        )
                      : W.push((e) =>
                            (0, r.jsx)(j.Z, {
                                width: e,
                                channel: S,
                                guild: R,
                                inPopout: w
                            })
                        ))
                : W.push((e) =>
                      (0, r.jsx)(C.h, {
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
        className: Z,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: W
    });
}
