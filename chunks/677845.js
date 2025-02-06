n.d(t, { Z: () => T }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(990547),
    r = n(731965),
    s = n(442837),
    o = n(704215),
    c = n(40851),
    d = n(317381),
    u = n(374065),
    h = n(213609),
    p = n(358221),
    m = n(381586),
    f = n(159300),
    g = n(800329),
    _ = n(470956),
    C = n(430824),
    x = n(496675),
    v = n(434488),
    E = n(27457),
    I = n(251564),
    b = n(695492),
    Z = n(981631),
    N = n(948899);
function T(e) {
    let { participants: t, onClick: n, onDoubleClick: T, onContextMenu: S, channel: j, className: y, inCall: A, totalNumberOfParticipants: P, paused: R = !1 } = e,
        M = (0, c.bp)() === Z.IlC.POPOUT,
        L = (0, s.e7)([C.Z], () => C.Z.getGuild(j.guild_id), [j.guild_id]),
        { dismissedActivityEntryPointTileChannel: k } = (0, I.d)(),
        O = (0, s.e7)([p.Z], () => p.Z.getUserParticipantCount(j.id), [j]),
        D = (0, _.bt)(j.id, t),
        w = l.useCallback(() => {
            (0, r.j)(() => {
                I.d.setState({ dismissedActivityEntryPointTileChannel: j.id });
            });
        }, [j.id]);
    l.useEffect(() => {
        null != k &&
            j.id !== k &&
            (0, r.j)(() => {
                I.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [j.id, k]);
    let U = (0, s.e7)([x.Z], () => j.isPrivate() || (0, f.b)(x.Z, L, j), [L, j]),
        B = (null == L ? void 0 : L.afkChannelId) === j.id,
        F = j.userLimit <= 0 || j.userLimit > 1,
        H = (0, s.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForChannel(j.id).length <= 0),
        G = (0, m.N)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        V = (0, u.KF)(j.id) !== u.jy.CAN_LAUNCH,
        z = null != k && k === j.id,
        W = D.map(
            (e) => (t) =>
                (0, i.jsx)(
                    E.ZP,
                    {
                        participant: e,
                        channel: j,
                        className: N.tile,
                        paused: R,
                        onClick: n,
                        onDoubleClick: T,
                        onContextMenu: S,
                        inCall: A,
                        width: t,
                        inPopout: M
                    },
                    e.id
                )
        );
    (0, h.Z)(
        {
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: P,
                can_invite: U,
                is_afk_channel: B,
                channel_user_limit: j.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != L &&
            !B &&
            (!(O >= 2) || !H || V || G || z
                ? F &&
                  1 === O &&
                  U &&
                  (H && !V
                      ? W.push((e) =>
                            (0, i.jsx)(v.h, {
                                channel: j,
                                guild: L,
                                width: e,
                                inPopout: M,
                                handleClose: w,
                                userParticipantCount: O
                            })
                        )
                      : W.push((e) =>
                            (0, i.jsx)(b.Z, {
                                width: e,
                                channel: j,
                                guild: L,
                                inPopout: M
                            })
                        ))
                : W.push((e) =>
                      (0, i.jsx)(v.h, {
                          channel: j,
                          guild: L,
                          width: e,
                          inPopout: M,
                          handleClose: w,
                          userParticipantCount: O
                      })
                  ));
    let Y = l.useCallback(
        (e) => {
            var t, n;
            return null !== (n = null === (t = D[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
        },
        [D]
    );
    return (0, i.jsx)(g.Z, {
        className: y,
        keyExtractor: Y,
        paddingTop: 64,
        paddingBottom: 64,
        children: W
    });
}
