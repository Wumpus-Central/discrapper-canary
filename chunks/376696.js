"use strict";
n.d(t, { A: () => w });
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
    m = n(279250),
    p = n(834757),
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
    v = n(290863),
    y = n(977997),
    j = n(607567),
    R = n(954571),
    O = n(338234),
    L = n(667936),
    M = n(652215),
    D = n(188275),
    G = n(699976),
    U = n(962966),
    P = n(248789);
function w(e) {
    let {
            channel: t,
            user: n,
            onAction: l,
            excludeActivity: w,
            onWatchStream: k,
            hangStatusActivity: V,
            renderSelfHangStatus: B,
        } = e,
        H = s.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, c.Eq)(H, "VoiceUserActivities");
    let F = (0, u.Ay)(t),
        K = s.useMemo(() => F.filter((e) => e.embeddedActivity.userIds.has(n.id)), [F, n.id]),
        W = Array.from((0, u.Rz)(K).values()),
        Y = (0, C.W)(),
        z = (0, E.i)((e) => e.showSelfActivity),
        [q, X] = (0, a.yK)(
            [N.A],
            () => [N.A.getStreamForUser(n.id, t.getGuildId()), N.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [J, Q] = (0, a.yK)([y.A, S.A, T.A, A.default], () => (0, m.eo)(t, y.A, S.A, T.A, A.default)),
        $ = (0, a.bG)([b.default], () => b.default.getId()),
        Z = (0, a.bG)([v.A], () => (0, p.nr)(q, v.A), [q]),
        ee = (0, d.me)(n, w ?? Z),
        et = (0, a.bG)([j.Ay], () => j.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        en = s.useMemo(() => (null != et ? [et] : []), [et]),
        { enableUserHoverActivities: ei } = (0, O.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: es } = (0, _.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        el = (0, x.m)({ location: "voice_channel_activities" }),
        er = (0, h.r9)() && (0, h.UK)(t.id),
        ea = null != q && !er,
        eo = ee.length + W.length > 0,
        ec = null != V,
        ed = n.id === b.default.getId() && !z,
        eu = ea || eo || (ec && es);
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
        if (es) return B({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!eu) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: r()(P.popover, U.kL),
        children: [
            ec && es && null != V
                ? (0, i.jsx)(f.Z, {
                      hangStatusActivity: V,
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
            null == q || null == k || er
                ? null
                : (0, i.jsx)(g.P, {
                      stream: q,
                      activeStream: X,
                      streamActivity: Z,
                      user: n,
                      currentUserId: $,
                      canWatch: J,
                      unavailableReason: Q,
                      onWatchStream: k,
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
                let r = e.application_id;
                return (null != Y && (r = Y), el && null != r && D.sQ.has(r))
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
                                      applicationId: r,
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
