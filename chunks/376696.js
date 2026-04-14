n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(80682),
    c = n(845056),
    u = n(685399),
    h = n(323073),
    A = n(643501),
    _ = n(279250),
    m = n(834757),
    p = n(727353),
    g = n(832163),
    f = n(565688),
    E = n(533562),
    x = n(93879),
    I = n(616356),
    C = n(961350),
    N = n(71393),
    T = n(576705),
    S = n(290863),
    b = n(977997),
    y = n(954571),
    v = n(329554),
    R = n(652215),
    j = n(699976),
    O = n(510495),
    L = n(442078);
function M(e) {
    let { channel: t, user: n, onAction: s, excludeActivity: M, onWatchStream: D } = e,
        U = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.Eq)(U, "VoiceUserActivities");
    let G = (0, u.Ay)(t),
        P = l.useMemo(() => G.filter((e) => e.embeddedActivity.userIds.has(n.id)), [G, n.id]),
        k = Array.from((0, u.Rz)(P).values()),
        w = (0, E.W)(),
        [B, V] = (0, r.yK)(
            [I.A],
            () => [I.A.getStreamForUser(n.id, t.getGuildId()), I.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [H, F] = (0, r.yK)([b.A, N.A, T.A, A.default], () => (0, _.eo)(t, b.A, N.A, T.A, A.default)),
        W = (0, r.bG)([C.default], () => C.default.getId()),
        K = (0, r.bG)([S.A], () => (0, m.nr)(B, S.A), [B]),
        Y = (0, c.m)(n, M ?? K),
        z = (0, f.m)({ location: "voice_channel_activities" }),
        X = (0, r.bG)([g.A], () => g.A.getDetectableIdsToApplicationIds()),
        q = (0, h.r9)() && (0, h.UK)(t.id),
        $ = null != B && !q,
        J = Y.length + k.length > 0,
        Q = $ || J;
    return (l.useEffect(() => {
        Q &&
            y.default.track(R.HAw.OPEN_POPOUT, {
                type: "Voice User Activities",
                channel_id: t.id,
                other_user_id: n.id,
            });
    }, [Q, t.id, n.id]),
    Q)
        ? (0, i.jsxs)(o.HOs, {
              className: a()(L.popover, O.kL),
              children: [
                  null == B || null == D || q
                      ? null
                      : (0, i.jsx)(p.P, {
                            stream: B,
                            activeStream: V,
                            streamActivity: K,
                            user: n,
                            currentUserId: W,
                            canWatch: H,
                            unavailableReason: F,
                            onWatchStream: D,
                            onAction: s,
                            showHeader: !0,
                        }),
                  k.map((e) =>
                      (0, i.jsx)(
                          v.A,
                          {
                              userId: n.id,
                              embeddedApp: e,
                              presenceActivity: e.presenceActivity ?? void 0,
                              channel: t,
                              onAction: s,
                          },
                          e.application.id,
                      ),
                  ),
                  Y.map((e) => {
                      let a = e.application_id;
                      return (null != w && (a = w), z && null != a && null != X[a])
                          ? (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(v.A, { presenceActivity: e, channel: t, userId: n.id, onAction: s }),
                                        (0, i.jsx)(x.A, {
                                            className: O.L,
                                            applicationId: a,
                                            rewardOfferNoticeClassName: O.Nh,
                                            userIds: [n.id],
                                            location: "voice_channel",
                                            guildId: t.guild_id,
                                            channelId: t.id,
                                            numWishlistItems: 2,
                                            cardSpec: j.Z.SIZE_110,
                                        }),
                                    ],
                                },
                                `${e.application_id}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(
                                v.A,
                                { presenceActivity: e, channel: t, userId: n.id, onAction: s },
                                `${e.application_id}`,
                            );
                  }),
              ],
          })
        : null;
}
