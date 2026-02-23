"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(323073),
    A = n(643501),
    p = n(279250),
    g = n(834757),
    m = n(727353),
    _ = n(140547),
    f = n(636920),
    x = n(565688),
    C = n(533562),
    E = n(760716),
    I = n(93879),
    b = n(178213),
    N = n(616356),
    S = n(961350),
    T = n(71393),
    y = n(576705),
    v = n(290863),
    j = n(977997),
    R = n(607567),
    O = n(954571),
    L = n(338234),
    M = n(667936),
    D = n(652215),
    G = n(188275),
    U = n(962966);
function P(e) {
    let {
            channel: t,
            user: n,
            onAction: l,
            excludeActivity: P,
            onWatchStream: w,
            hangStatusActivity: k,
            renderSelfHangStatus: V,
            isStandardGap: B = !1,
        } = e,
        H = s.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.E)(H, "VoiceUserActivities");
    let F = (0, u.Ay)(t),
        K = s.useMemo(() => F.filter((e) => e.embeddedActivity.userIds.has(n.id)), [F, n.id]),
        W = Array.from((0, u.Rz)(K).values()),
        Y = (0, C.W)(),
        z = (0, E.i)((e) => e.showSelfActivity),
        [X, q] = (0, a.yK)(
            [N.A],
            () => [N.A.getStreamForUser(n.id, t.getGuildId()), N.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [J, Q] = (0, a.yK)([j.A, T.A, y.A, A.default], () => (0, p.eo)(t, j.A, T.A, y.A, A.default)),
        $ = (0, a.bG)([S.default], () => S.default.getId()),
        Z = (0, a.bG)([v.A], () => (0, g.nr)(X, v.A), [X]),
        ee = (0, d.m)(n, P ?? Z),
        et = (0, a.bG)([R.Ay], () => R.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        en = s.useMemo(() => (null != et ? [et] : []), [et]),
        { enableUserHoverActivities: ei } = (0, L.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: es } = (0, _.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        el = (0, b.G)("voice_channel_activities"),
        er = (0, x.m)({ location: "voice_channel_activities" }),
        ea = (0, h.r9)() && (0, h.UK)(t.id),
        eo = null != X && !ea,
        ec = ee.length + W.length > 0,
        ed = null != k,
        eu = n.id === S.default.getId() && !z,
        eh = eo || ec || (ed && es);
    if (
        (s.useEffect(() => {
            eh &&
                O.default.track(D.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [eh, t.id, n.id]),
        !eh && !eu)
    )
        return null;
    if (eu) {
        if (es) return V({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!eh) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: r()(U.kL, { [U.iA]: B, [U.XK]: el }),
        children: [
            ed && es && null != k
                ? (0, i.jsx)(f.Z, {
                      hangStatusActivity: k,
                      channel: t,
                      userId: n.id,
                      isSelf: eu,
                      analyticsSource: "VoiceUserActivities",
                      onAction: l,
                      className: U.AF,
                      iconClassName: U.W9,
                      textClassName: U.YJ,
                  })
                : null,
            null == X || null == w || ea
                ? null
                : (0, i.jsx)(m.P, {
                      stream: X,
                      activeStream: q,
                      streamActivity: Z,
                      user: n,
                      currentUserId: $,
                      canWatch: J,
                      unavailableReason: Q,
                      onWatchStream: w,
                      onAction: l,
                      showHeader: ei,
                  }),
            W.map((e) =>
                (0, i.jsx)(
                    M.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: l,
                        enableUserHoverActivities: ei,
                    },
                    e.application.id,
                ),
            ),
            ee.map((e) => {
                let r = e.application_id;
                return (null != Y && (r = Y), er && null != r && G.sQ.has(r))
                    ? (0, i.jsxs)(
                          s.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(M.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: en,
                                      onAction: l,
                                      enableUserHoverActivities: ei,
                                  }),
                                  (0, i.jsx)(I.A, {
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
                          M.A,
                          { presenceActivity: e, channel: t, members: en, onAction: l, enableUserHoverActivities: ei },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
