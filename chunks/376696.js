n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(80682),
    o = n(845056),
    c = n(685399),
    u = n(643501),
    d = n(279250),
    p = n(834757),
    h = n(727353),
    g = n(636920),
    f = n(565688),
    m = n(93879),
    b = n(616356),
    A = n(961350),
    y = n(71393),
    O = n(576705),
    j = n(290863),
    _ = n(977997),
    x = n(607567),
    v = n(338234),
    E = n(667936),
    C = n(188275),
    S = n(962966);

function I(e) {
    let { channel: t, user: n, onAction: I, excludeActivity: N, onWatchStream: T, hangStatusActivity: P } = e,
        w = l.useMemo(
            () => ({
                [t.guild_id]: [n.id],
            }),
            [t.guild_id, n.id],
        );
    (0, a.E)(w, "VoiceUserActivities");
    let R = (0, c.Ay)(t),
        D = l.useMemo(() => R.filter((e) => e.embeddedActivity.userIds.has(n.id)), [R, n.id]),
        L = Array.from((0, c.Rz)(D).values()),
        [M, G] = (0, i.yK)(
            [b.A],
            () => [b.A.getStreamForUser(n.id, t.getGuildId()), b.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [k, U] = (0, i.yK)([_.A, y.A, O.A, u.default], () => (0, d.eo)(t, _.A, y.A, O.A, u.default)),
        V = (0, i.bG)([A.default], () => A.default.getId()),
        B = (0, i.bG)([j.A], () => (0, p.nr)(M, j.A), [M]),
        H = (0, o.m)(n, null != N ? N : B),
        F = (0, i.bG)([x.Ay], () => {
            var e;
            return null != (e = x.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id)) ? e : null;
        }, [t, n.id]),
        Y = l.useMemo(() => (null != F ? [F] : []), [F]),
        { enableUserHoverActivities: K } = (0, v.fC)({
            guildId: t.guild_id,
            location: "VoiceUserActivities",
        }),
        W = (0, f.m)({
            location: "voice_channel_activities",
        }),
        z = null != M,
        X = H.length + L.length > 0,
        q = n.id === A.default.getId(),
        J = null != P;
    return z || X || J
        ? (0, r.jsxs)(s.HOs, {
              className: S.kL,
              children: [
                  J && null != P
                      ? (0, r.jsx)("div", {
                            className: S.Ak,
                            children: (0, r.jsx)(g.Z, {
                                hangStatusActivity: P,
                                channel: t,
                                userId: n.id,
                                isSelf: q,
                                analyticsSource: "VoiceUserActivities",
                                onAction: I,
                                className: S.AF,
                                iconClassName: S.W9,
                                textClassName: S.YJ,
                            }),
                        })
                      : null,
                  J &&
                      (z || X) &&
                      (0, r.jsx)("div", {
                          className: S.zN,
                      }),
                  null == M || null == T
                      ? null
                      : (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.P, {
                                    stream: M,
                                    activeStream: G,
                                    streamActivity: B,
                                    user: n,
                                    currentUserId: V,
                                    canWatch: k,
                                    unavailableReason: U,
                                    onWatchStream: T,
                                    onAction: I,
                                    showHeader: K,
                                }),
                                X &&
                                    (0, r.jsx)("div", {
                                        className: S.zN,
                                    }),
                            ],
                        }),
                  L.map((e, n) => {
                      var l;
                      return (0, r.jsx)(
                          E.A,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (l = e.presenceActivity) ? l : void 0,
                              channel: t,
                              onAction: I,
                              enableUserHoverActivities: K,
                          },
                          n,
                      );
                  }),
                  H.map((e, i) =>
                      W && null != e.application_id && C.sQ.has(e.application_id)
                          ? (0, r.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(E.A, {
                                            presenceActivity: e,
                                            channel: t,
                                            members: Y,
                                            onAction: I,
                                            enableUserHoverActivities: K,
                                        }),
                                        (0, r.jsx)(m.A, {
                                            className: S.L,
                                            applicationId: e.application_id,
                                            userIds: [n.id],
                                            location: "voice_channel",
                                            guildId: t.guild_id,
                                            channelId: t.id,
                                        }),
                                    ],
                                },
                                "".concat(i, "-with-gifting-breadcrumb"),
                            )
                          : (0, r.jsx)(
                                E.A,
                                {
                                    presenceActivity: e,
                                    channel: t,
                                    members: Y,
                                    onAction: I,
                                    enableUserHoverActivities: K,
                                },
                                i,
                            ),
                  ),
              ],
          })
        : null;
}
