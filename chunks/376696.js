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
    m = n(279250),
    _ = n(834757),
    p = n(727353),
    g = n(140547),
    f = n(636920),
    x = n(832163),
    C = n(565688),
    E = n(533562),
    I = n(760716),
    N = n(93879),
    b = n(616356),
    S = n(961350),
    T = n(71393),
    v = n(576705),
    y = n(290863),
    j = n(977997),
    R = n(607567),
    O = n(954571),
    L = n(667936),
    M = n(652215),
    D = n(699976),
    G = n(962966),
    U = n(248789);
function P(e) {
    let {
            channel: t,
            user: n,
            onAction: l,
            excludeActivity: P,
            onWatchStream: k,
            hangStatusActivity: w,
            renderSelfHangStatus: V,
        } = e,
        B = s.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.Eq)(B, "VoiceUserActivities");
    let H = (0, u.Ay)(t),
        F = s.useMemo(() => H.filter((e) => e.embeddedActivity.userIds.has(n.id)), [H, n.id]),
        K = Array.from((0, u.Rz)(F).values()),
        W = (0, E.W)(),
        Y = (0, I.i)((e) => e.showSelfActivity),
        [z, q] = (0, r.yK)(
            [b.A],
            () => [b.A.getStreamForUser(n.id, t.getGuildId()), b.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [X, J] = (0, r.yK)([j.A, T.A, v.A, A.default], () => (0, m.eo)(t, j.A, T.A, v.A, A.default)),
        Q = (0, r.bG)([S.default], () => S.default.getId()),
        $ = (0, r.bG)([y.A], () => (0, _.nr)(z, y.A), [z]),
        Z = (0, d.m)(n, P ?? $),
        ee = (0, r.bG)([R.Ay], () => R.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        et = s.useMemo(() => (null != ee ? [ee] : []), [ee]),
        { enableHangStatus: en } = (0, g.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        ei = (0, C.m)({ location: "voice_channel_activities" }),
        es = (0, r.bG)([x.A], () => x.A.getDetectableIdsToApplicationIds()),
        el = (0, h.r9)() && (0, h.UK)(t.id),
        ea = null != z && !el,
        er = Z.length + K.length > 0,
        eo = null != w,
        ec = n.id === S.default.getId() && !Y,
        ed = ea || er || (eo && en);
    if (
        (s.useEffect(() => {
            ed &&
                O.default.track(M.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [ed, t.id, n.id]),
        !ed && !ec)
    )
        return null;
    if (ec) {
        if (en) return V({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!ed) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: a()(U.popover, G.kL),
        children: [
            eo && en && null != w
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
            null == z || null == k || el
                ? null
                : (0, i.jsx)(p.P, {
                      stream: z,
                      activeStream: q,
                      streamActivity: $,
                      user: n,
                      currentUserId: Q,
                      canWatch: X,
                      unavailableReason: J,
                      onWatchStream: k,
                      onAction: l,
                      showHeader: !0,
                  }),
            K.map((e) =>
                (0, i.jsx)(
                    L.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: l,
                        enableUserHoverActivities: !0,
                    },
                    e.application.id,
                ),
            ),
            Z.map((e) => {
                let a = e.application_id;
                return (null != W && (a = W), ei && null != a && null != es[a])
                    ? (0, i.jsxs)(
                          s.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(L.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: et,
                                      onAction: l,
                                      enableUserHoverActivities: !0,
                                  }),
                                  (0, i.jsx)(N.A, {
                                      className: G.L,
                                      applicationId: a,
                                      rewardOfferNoticeClassName: G.Nh,
                                      userIds: [n.id],
                                      location: "voice_channel",
                                      guildId: t.guild_id,
                                      channelId: t.id,
                                      numWishlistItems: 2,
                                      cardSpec: D.Z.SIZE_110,
                                  }),
                              ],
                          },
                          `${e.application_id}-with-gifting-breadcrumb`,
                      )
                    : (0, i.jsx)(
                          L.A,
                          { presenceActivity: e, channel: t, members: et, onAction: l, enableUserHoverActivities: !0 },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
