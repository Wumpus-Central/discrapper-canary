"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(323073),
    A = n(643501),
    p = n(279250),
    m = n(834757),
    g = n(727353),
    _ = n(140547),
    f = n(636920),
    x = n(565688),
    C = n(533562),
    E = n(760716),
    I = n(93879),
    N = n(616356),
    S = n(961350),
    b = n(71393),
    T = n(576705),
    v = n(290863),
    y = n(977997),
    j = n(607567),
    R = n(954571),
    O = n(338234),
    L = n(667936),
    M = n(652215),
    D = n(188275),
    G = n(699976),
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
    (0, c.Eq)(H, "VoiceUserActivities");
    let F = (0, u.Ay)(t),
        K = s.useMemo(() => F.filter((e) => e.embeddedActivity.userIds.has(n.id)), [F, n.id]),
        W = Array.from((0, u.Rz)(K).values()),
        Y = (0, C.W)(),
        z = (0, E.i)((e) => e.showSelfActivity),
        [q, X] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(n.id, t.getGuildId()), N.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [J, Q] = (0, r.yK)([y.A, b.A, T.A, A.default], () => (0, p.eo)(t, y.A, b.A, T.A, A.default)),
        $ = (0, r.bG)([S.default], () => S.default.getId()),
        Z = (0, r.bG)([v.A], () => (0, m.nr)(q, v.A), [q]),
        ee = (0, d.m)(n, P ?? Z),
        et = (0, r.bG)([j.Ay], () => j.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        en = s.useMemo(() => (null != et ? [et] : []), [et]),
        { enableUserHoverActivities: ei } = (0, O.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: es } = (0, _.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        el = (0, x.m)({ location: "voice_channel_activities" }),
        ea = (0, h.r9)() && (0, h.UK)(t.id),
        er = null != q && !ea,
        eo = ee.length + W.length > 0,
        ec = null != k,
        ed = n.id === S.default.getId() && !z,
        eu = er || eo || (ec && es);
    if (
        (s.useEffect(() => {
            eu &&
                R.default.track(M.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [eu, t.id, n.id]),
        !eu && !ed)
    )
        return null;
    if (ed) {
        if (es) return V({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!eu) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: a()(U.kL, { [U.iA]: B }),
        children: [
            ec && es && null != k
                ? (0, i.jsx)(f.Z, {
                      hangStatusActivity: k,
                      channel: t,
                      userId: n.id,
                      isSelf: ed,
                      analyticsSource: "VoiceUserActivities",
                      onAction: l,
                      className: U.AF,
                      iconClassName: U.W9,
                      textClassName: U.YJ,
                  })
                : null,
            null == q || null == w || ea
                ? null
                : (0, i.jsx)(g.P, {
                      stream: q,
                      activeStream: X,
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
                    L.A,
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
                let a = e.application_id;
                return (null != Y && (a = Y), el && null != a && D.sQ.has(a))
                    ? (0, i.jsxs)(
                          s.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(L.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: en,
                                      onAction: l,
                                      enableUserHoverActivities: ei,
                                  }),
                                  (0, i.jsx)(I.A, {
                                      className: U.L,
                                      applicationId: a,
                                      rewardOfferNoticeClassName: U.Nh,
                                      userIds: [n.id],
                                      location: "voice_channel",
                                      guildId: t.guild_id,
                                      channelId: t.id,
                                      numWishlistItems: 2,
                                      cardSpec: G.Z.SIZE_110,
                                  }),
                              ],
                          },
                          `${e.application_id}-with-gifting-breadcrumb`,
                      )
                    : (0, i.jsx)(
                          L.A,
                          { presenceActivity: e, channel: t, members: en, onAction: l, enableUserHoverActivities: ei },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
