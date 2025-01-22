n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(990547),
    a = n(731965),
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
    C = n(470956),
    x = n(430824),
    v = n(496675),
    _ = n(434488),
    I = n(27457),
    E = n(251564),
    b = n(695492),
    Z = n(981631),
    N = n(948899);
function S(e) {
    let { participants: t, onClick: n, onDoubleClick: S, onContextMenu: T, channel: j, className: A, inCall: y, totalNumberOfParticipants: P, paused: M = !1 } = e,
        R = (0, c.bp)() === Z.IlC.POPOUT,
        L = (0, s.e7)([x.Z], () => x.Z.getGuild(j.guild_id), [j.guild_id]),
        { dismissedActivityEntryPointTileChannel: k } = (0, E.d)(),
        O = (0, s.e7)([p.Z], () => p.Z.getUserParticipantCount(j.id), [j]),
        D = (0, C.bt)(j.id, t),
        w = l.useCallback(() => {
            (0, a.j)(() => {
                E.d.setState({ dismissedActivityEntryPointTileChannel: j.id });
            });
        }, [j.id]);
    l.useEffect(() => {
        null != k &&
            j.id !== k &&
            (0, a.j)(() => {
                E.d.setState({ dismissedActivityEntryPointTileChannel: null });
            });
    }, [j.id, k]);
    let B = (0, s.e7)([v.Z], () => j.isPrivate() || (0, f.b)(v.Z, L, j), [L, j]),
        U = (null == L ? void 0 : L.afkChannelId) === j.id,
        H = j.userLimit <= 0 || j.userLimit > 1,
        G = (0, s.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForChannel(j.id).length <= 0),
        F = (0, m.N)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
        V = (0, u.KF)(j.id) !== u.jy.CAN_LAUNCH,
        z = null != k && k === j.id,
        W = D.map(
            (e) => (t) =>
                (0, i.jsx)(
                    I.ZP,
                    {
                        participant: e,
                        channel: j,
                        className: N.tile,
                        paused: M,
                        onClick: n,
                        onDoubleClick: S,
                        onContextMenu: T,
                        inCall: y,
                        width: t,
                        inPopout: R
                    },
                    e.id
                )
        );
    (0, h.Z)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
            properties: {
                total_participants: P,
                can_invite: B,
                is_afk_channel: U,
                channel_user_limit: j.userLimit
            }
        },
        { trackOnInitialLoad: !0 },
        []
    ),
        null != L &&
            !U &&
            (!(O >= 2) || !G || V || F || z
                ? H &&
                  1 === O &&
                  B &&
                  (G && !V
                      ? W.push((e) =>
                            (0, i.jsx)(_.h, {
                                channel: j,
                                guild: L,
                                width: e,
                                inPopout: R,
                                handleClose: w,
                                userParticipantCount: O
                            })
                        )
                      : W.push((e) =>
                            (0, i.jsx)(b.Z, {
                                width: e,
                                channel: j,
                                guild: L,
                                inPopout: R
                            })
                        ))
                : W.push((e) =>
                      (0, i.jsx)(_.h, {
                          channel: j,
                          guild: L,
                          width: e,
                          inPopout: R,
                          handleClose: w,
                          userParticipantCount: O
                      })
                  ));
    let K = l.useCallback(
        (e) => {
            var t, n;
            return null !== (n = null === (t = D[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'empty-tile';
        },
        [D]
    );
    return (0, i.jsx)(g.Z, {
        className: A,
        keyExtractor: K,
        paddingTop: 64,
        paddingBottom: 64,
        children: W
    });
}
