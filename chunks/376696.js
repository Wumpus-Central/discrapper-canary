"use strict";
n.d(t, { A: () => U });
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
    b = n(961350),
    S = n(71393),
    T = n(576705),
    y = n(290863),
    v = n(977997),
    j = n(607567),
    R = n(954571),
    O = n(338234),
    L = n(667936),
    M = n(652215),
    D = n(188275),
    G = n(962966);
function U(e) {
    let {
            channel: t,
            user: n,
            onAction: l,
            excludeActivity: U,
            onWatchStream: P,
            hangStatusActivity: w,
            renderSelfHangStatus: k,
            isStandardGap: V = !1,
        } = e,
        B = s.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.E)(B, "VoiceUserActivities");
    let H = (0, u.Ay)(t),
        F = s.useMemo(() => H.filter((e) => e.embeddedActivity.userIds.has(n.id)), [H, n.id]),
        K = Array.from((0, u.Rz)(F).values()),
        W = (0, C.W)(),
        Y = (0, E.i)((e) => e.showSelfActivity),
        [z, q] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(n.id, t.getGuildId()), N.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [X, J] = (0, r.yK)([v.A, S.A, T.A, A.default], () => (0, p.eo)(t, v.A, S.A, T.A, A.default)),
        Q = (0, r.bG)([b.default], () => b.default.getId()),
        $ = (0, r.bG)([y.A], () => (0, m.nr)(z, y.A), [z]),
        Z = (0, d.m)(n, U ?? $),
        ee = (0, r.bG)([j.Ay], () => j.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        et = s.useMemo(() => (null != ee ? [ee] : []), [ee]),
        { enableUserHoverActivities: en } = (0, O.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: ei } = (0, _.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        es = (0, x.m)({ location: "voice_channel_activities" }),
        el = (0, h.r9)() && (0, h.UK)(t.id),
        ea = null != z && !el,
        er = Z.length + K.length > 0,
        eo = null != w,
        ec = n.id === b.default.getId() && !Y,
        ed = ea || er || (eo && ei);
    if (
        (s.useEffect(() => {
            ed &&
                R.default.track(M.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [ed, t.id, n.id]),
        !ed && !ec)
    )
        return null;
    if (ec) {
        if (ei) return k({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!ed) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: a()(G.kL, { [G.iA]: V }),
        children: [
            eo && ei && null != w
                ? (0, i.jsx)(f.Z, {
                      hangStatusActivity: w,
                      channel: t,
                      userId: n.id,
                      isSelf: ec,
                      analyticsSource: "VoiceUserActivities",
                      onAction: l,
                      className: G.AF,
                      iconClassName: G.W9,
                      textClassName: G.YJ,
                  })
                : null,
            null == z || null == P || el
                ? null
                : (0, i.jsx)(g.P, {
                      stream: z,
                      activeStream: q,
                      streamActivity: $,
                      user: n,
                      currentUserId: Q,
                      canWatch: X,
                      unavailableReason: J,
                      onWatchStream: P,
                      onAction: l,
                      showHeader: en,
                  }),
            K.map((e) =>
                (0, i.jsx)(
                    L.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: l,
                        enableUserHoverActivities: en,
                    },
                    e.application.id,
                ),
            ),
            Z.map((e) => {
                let a = e.application_id;
                return (null != W && (a = W), es && null != a && D.sQ.has(a))
                    ? (0, i.jsxs)(
                          s.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(L.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: et,
                                      onAction: l,
                                      enableUserHoverActivities: en,
                                  }),
                                  (0, i.jsx)(I.A, {
                                      className: G.L,
                                      applicationId: a,
                                      rewardOfferNoticeClassName: G.Nh,
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
                          L.A,
                          { presenceActivity: e, channel: t, members: et, onAction: l, enableUserHoverActivities: en },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
