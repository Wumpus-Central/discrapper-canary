n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(80682),
    c = n(845056),
    u = n(685399),
    h = n(643501),
    A = n(279250),
    m = n(834757),
    p = n(727353),
    g = n(636920),
    _ = n(565688),
    f = n(93879),
    x = n(616356),
    C = n(961350),
    E = n(71393),
    I = n(576705),
    N = n(290863),
    b = n(977997),
    S = n(607567),
    T = n(338234),
    v = n(667936),
    y = n(188275),
    j = n(962966);
function R(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: R,
            onWatchStream: O,
            hangStatusActivity: L,
            isStandardGap: M = !1,
        } = e,
        D = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.E)(D, "VoiceUserActivities");
    let G = (0, u.Ay)(t),
        U = l.useMemo(() => G.filter((e) => e.embeddedActivity.userIds.has(n.id)), [G, n.id]),
        P = Array.from((0, u.Rz)(U).values()),
        [w, k] = (0, r.yK)(
            [x.A],
            () => [x.A.getStreamForUser(n.id, t.getGuildId()), x.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [V, B] = (0, r.yK)([b.A, E.A, I.A, h.default], () => (0, A.eo)(t, b.A, E.A, I.A, h.default)),
        H = (0, r.bG)([C.default], () => C.default.getId()),
        F = (0, r.bG)([N.A], () => (0, m.nr)(w, N.A), [w]),
        K = (0, c.m)(n, R ?? F),
        W = (0, r.bG)([S.Ay], () => S.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        Y = l.useMemo(() => (null != W ? [W] : []), [W]),
        { enableUserHoverActivities: z } = (0, T.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        q = (0, _.m)({ location: "voice_channel_activities" }),
        X = null != w,
        J = K.length + P.length > 0,
        Q = n.id === C.default.getId(),
        $ = null != L;
    return X || J || $
        ? (0, i.jsxs)(o.HOs, {
              className: a()(j.kL, { [j.iA]: M }),
              children: [
                  $ && null != L
                      ? (0, i.jsx)("div", {
                            className: j.Ak,
                            children: (0, i.jsx)(g.Z, {
                                hangStatusActivity: L,
                                channel: t,
                                userId: n.id,
                                isSelf: Q,
                                analyticsSource: "VoiceUserActivities",
                                onAction: s,
                                className: j.AF,
                                iconClassName: j.W9,
                                textClassName: j.YJ,
                            }),
                        })
                      : null,
                  $ && (X || J) && (0, i.jsx)("div", { className: j.zN }),
                  null == w || null == O
                      ? null
                      : (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.P, {
                                    stream: w,
                                    activeStream: k,
                                    streamActivity: F,
                                    user: n,
                                    currentUserId: H,
                                    canWatch: V,
                                    unavailableReason: B,
                                    onWatchStream: O,
                                    onAction: s,
                                    showHeader: z,
                                }),
                                J && (0, i.jsx)("div", { className: j.zN }),
                            ],
                        }),
                  P.map((e, n) =>
                      (0, i.jsx)(
                          v.A,
                          {
                              embeddedApp: e,
                              presenceActivity: e.presenceActivity ?? void 0,
                              channel: t,
                              onAction: s,
                              enableUserHoverActivities: z,
                          },
                          n,
                      ),
                  ),
                  K.map((e, a) =>
                      q && null != e.application_id && y.sQ.has(e.application_id)
                          ? (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(v.A, {
                                            presenceActivity: e,
                                            channel: t,
                                            members: Y,
                                            onAction: s,
                                            enableUserHoverActivities: z,
                                        }),
                                        (0, i.jsx)(f.A, {
                                            className: j.L,
                                            applicationId: e.application_id,
                                            userIds: [n.id],
                                            location: "voice_channel",
                                            guildId: t.guild_id,
                                            channelId: t.id,
                                        }),
                                    ],
                                },
                                `${a}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(
                                v.A,
                                {
                                    presenceActivity: e,
                                    channel: t,
                                    members: Y,
                                    onAction: s,
                                    enableUserHoverActivities: z,
                                },
                                a,
                            ),
                  ),
              ],
          })
        : null;
}
