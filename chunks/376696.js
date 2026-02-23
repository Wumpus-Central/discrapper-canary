"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(643501),
    A = n(279250),
    p = n(834757),
    g = n(727353),
    m = n(140547),
    _ = n(636920),
    f = n(565688),
    x = n(533562),
    C = n(93879),
    E = n(178213),
    I = n(616356),
    b = n(961350),
    N = n(71393),
    S = n(576705),
    T = n(290863),
    y = n(977997),
    v = n(607567),
    j = n(954571),
    R = n(338234),
    O = n(667936),
    L = n(652215),
    M = n(188275),
    D = n(962966);
function G(e) {
    let {
            channel: t,
            user: n,
            onAction: l,
            excludeActivity: G,
            onWatchStream: U,
            hangStatusActivity: P,
            renderSelfHangStatus: w,
            isStandardGap: k = !1,
        } = e,
        V = s.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.E)(V, "VoiceUserActivities");
    let B = (0, u.Ay)(t),
        H = s.useMemo(() => B.filter((e) => e.embeddedActivity.userIds.has(n.id)), [B, n.id]),
        F = Array.from((0, u.Rz)(H).values()),
        K = (0, x.W)(),
        [W, Y] = (0, a.yK)(
            [I.A],
            () => [I.A.getStreamForUser(n.id, t.getGuildId()), I.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [z, X] = (0, a.yK)([y.A, N.A, S.A, h.default], () => (0, A.eo)(t, y.A, N.A, S.A, h.default)),
        q = (0, a.bG)([b.default], () => b.default.getId()),
        J = (0, a.bG)([T.A], () => (0, p.nr)(W, T.A), [W]),
        Q = (0, d.m)(n, G ?? J),
        $ = (0, a.bG)([v.Ay], () => v.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        Z = s.useMemo(() => (null != $ ? [$] : []), [$]),
        { enableUserHoverActivities: ee } = (0, R.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: et } = (0, m.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        en = (0, E.G)("voice_channel_activities"),
        ei = (0, f.m)({ location: "voice_channel_activities" }),
        es = null != W,
        el = Q.length + F.length > 0,
        er = null != P,
        ea = n.id === b.default.getId(),
        eo = es || el || (er && et);
    if (
        (s.useEffect(() => {
            eo &&
                j.default.track(L.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [eo, t.id, n.id]),
        !eo && !ea)
    )
        return null;
    if (ea) {
        if (et) return w({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!eo) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: r()(D.kL, { [D.iA]: k, [D.XK]: en }),
        children: [
            er && et && null != P
                ? (0, i.jsx)(_.Z, {
                      hangStatusActivity: P,
                      channel: t,
                      userId: n.id,
                      isSelf: ea,
                      analyticsSource: "VoiceUserActivities",
                      onAction: l,
                      className: D.AF,
                      iconClassName: D.W9,
                      textClassName: D.YJ,
                  })
                : null,
            null == W || null == U
                ? null
                : (0, i.jsx)(g.P, {
                      stream: W,
                      activeStream: Y,
                      streamActivity: J,
                      user: n,
                      currentUserId: q,
                      canWatch: z,
                      unavailableReason: X,
                      onWatchStream: U,
                      onAction: l,
                      showHeader: ee,
                  }),
            F.map((e) =>
                (0, i.jsx)(
                    O.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: l,
                        enableUserHoverActivities: ee,
                    },
                    e.application.id,
                ),
            ),
            Q.map((e) => {
                let r = e.application_id;
                return (null != K && (r = K), ei && null != r && M.sQ.has(r))
                    ? (0, i.jsxs)(
                          s.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(O.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: Z,
                                      onAction: l,
                                      enableUserHoverActivities: ee,
                                  }),
                                  (0, i.jsx)(C.A, {
                                      applicationId: r,
                                      userIds: [n.id],
                                      location: "voice_channel",
                                      guildId: t.guild_id,
                                      channelId: t.id,
                                  }),
                              ],
                          },
                          `${e.application_id}-with-gifting-breadcrumb`,
                      )
                    : (0, i.jsx)(
                          O.A,
                          { presenceActivity: e, channel: t, members: Z, onAction: l, enableUserHoverActivities: ee },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
