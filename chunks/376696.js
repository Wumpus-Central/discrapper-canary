n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(80682),
    o = n(845056),
    d = n(685399),
    c = n(643501),
    u = n(279250),
    h = n(834757),
    A = n(727353),
    g = n(636920),
    m = n(565688),
    p = n(93879),
    _ = n(616356),
    x = n(961350),
    f = n(71393),
    E = n(576705),
    C = n(290863),
    I = n(977997),
    S = n(607567),
    b = n(338234),
    N = n(667936),
    T = n(188275),
    j = n(962966);
function v(e) {
    let { channel: t, user: n, onAction: v, excludeActivity: y, onWatchStream: R, hangStatusActivity: O } = e,
        L = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, r.E)(L, "VoiceUserActivities");
    let D = (0, d.Ay)(t),
        M = l.useMemo(() => D.filter((e) => e.embeddedActivity.userIds.has(n.id)), [D, n.id]),
        G = Array.from((0, d.Rz)(M).values()),
        [U, P] = (0, s.yK)(
            [_.A],
            () => [_.A.getStreamForUser(n.id, t.getGuildId()), _.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [k, w] = (0, s.yK)([I.A, f.A, E.A, c.default], () => (0, u.eo)(t, I.A, f.A, E.A, c.default)),
        V = (0, s.bG)([x.default], () => x.default.getId()),
        B = (0, s.bG)([C.A], () => (0, h.nr)(U, C.A), [U]),
        H = (0, o.m)(n, y ?? B),
        F = (0, s.bG)([S.Ay], () => S.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        Y = l.useMemo(() => (null != F ? [F] : []), [F]),
        { enableUserHoverActivities: W } = (0, b.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        K = (0, m.m)({ location: "voice_channel_activities" }),
        z = null != U,
        X = H.length + G.length > 0,
        q = n.id === x.default.getId(),
        J = null != O;
    return z || X || J
        ? (0, i.jsxs)(a.HOs, {
              className: j.kL,
              children: [
                  J && null != O
                      ? (0, i.jsx)("div", {
                            className: j.Ak,
                            children: (0, i.jsx)(g.Z, {
                                hangStatusActivity: O,
                                channel: t,
                                userId: n.id,
                                isSelf: q,
                                analyticsSource: "VoiceUserActivities",
                                onAction: v,
                                className: j.AF,
                                iconClassName: j.W9,
                                textClassName: j.YJ,
                            }),
                        })
                      : null,
                  J && (z || X) && (0, i.jsx)("div", { className: j.zN }),
                  null == U || null == R
                      ? null
                      : (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(A.P, {
                                    stream: U,
                                    activeStream: P,
                                    streamActivity: B,
                                    user: n,
                                    currentUserId: V,
                                    canWatch: k,
                                    unavailableReason: w,
                                    onWatchStream: R,
                                    onAction: v,
                                    showHeader: W,
                                }),
                                X && (0, i.jsx)("div", { className: j.zN }),
                            ],
                        }),
                  G.map((e, n) =>
                      (0, i.jsx)(
                          N.A,
                          {
                              embeddedApp: e,
                              presenceActivity: e.presenceActivity ?? void 0,
                              channel: t,
                              onAction: v,
                              enableUserHoverActivities: W,
                          },
                          n,
                      ),
                  ),
                  H.map((e, s) =>
                      K && null != e.application_id && T.sQ.has(e.application_id)
                          ? (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(N.A, {
                                            presenceActivity: e,
                                            channel: t,
                                            members: Y,
                                            onAction: v,
                                            enableUserHoverActivities: W,
                                        }),
                                        (0, i.jsx)(p.A, {
                                            className: j.L,
                                            applicationId: e.application_id,
                                            userIds: [n.id],
                                            location: "voice_channel",
                                            guildId: t.guild_id,
                                            channelId: t.id,
                                        }),
                                    ],
                                },
                                `${s}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(
                                N.A,
                                {
                                    presenceActivity: e,
                                    channel: t,
                                    members: Y,
                                    onAction: v,
                                    enableUserHoverActivities: W,
                                },
                                s,
                            ),
                  ),
              ],
          })
        : null;
}
