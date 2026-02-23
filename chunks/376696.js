"use strict";
n.d(t, { A: () => U });
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
    E = n(93879),
    I = n(178213),
    b = n(616356),
    N = n(961350),
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
        [Y, z] = (0, a.yK)(
            [b.A],
            () => [b.A.getStreamForUser(n.id, t.getGuildId()), b.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [X, q] = (0, a.yK)([v.A, S.A, T.A, A.default], () => (0, p.eo)(t, v.A, S.A, T.A, A.default)),
        J = (0, a.bG)([N.default], () => N.default.getId()),
        Q = (0, a.bG)([y.A], () => (0, g.nr)(Y, y.A), [Y]),
        $ = (0, d.m)(n, U ?? Q),
        Z = (0, a.bG)([j.Ay], () => j.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        ee = s.useMemo(() => (null != Z ? [Z] : []), [Z]),
        { enableUserHoverActivities: et } = (0, O.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: en } = (0, _.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        ei = (0, I.G)("voice_channel_activities"),
        es = (0, x.m)({ location: "voice_channel_activities" }),
        el = (0, h.r9)() && (0, h.UK)(t.id),
        er = null != Y && !el,
        ea = $.length + K.length > 0,
        eo = null != w,
        ec = n.id === N.default.getId(),
        ed = er || ea || (eo && en);
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
        if (en) return k({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!ed) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: r()(G.kL, { [G.iA]: V, [G.XK]: ei }),
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
            null == Y || null == P || el
                ? null
                : (0, i.jsx)(m.P, {
                      stream: Y,
                      activeStream: z,
                      streamActivity: Q,
                      user: n,
                      currentUserId: J,
                      canWatch: X,
                      unavailableReason: q,
                      onWatchStream: P,
                      onAction: l,
                      showHeader: et,
                  }),
            K.map((e) =>
                (0, i.jsx)(
                    L.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: l,
                        enableUserHoverActivities: et,
                    },
                    e.application.id,
                ),
            ),
            $.map((e) => {
                let r = e.application_id;
                return (null != W && (r = W), es && null != r && D.sQ.has(r))
                    ? (0, i.jsxs)(
                          s.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(L.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: ee,
                                      onAction: l,
                                      enableUserHoverActivities: et,
                                  }),
                                  (0, i.jsx)(E.A, {
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
                          L.A,
                          { presenceActivity: e, channel: t, members: ee, onAction: l, enableUserHoverActivities: et },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
