n.d(t, { A: () => D });
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
    p = n(834757),
    m = n(727353),
    g = n(140547),
    _ = n(636920),
    f = n(565688),
    x = n(533562),
    C = n(93879),
    E = n(616356),
    I = n(961350),
    b = n(71393),
    N = n(576705),
    S = n(290863),
    T = n(977997),
    v = n(607567),
    y = n(954571),
    j = n(338234),
    R = n(667936),
    O = n(652215),
    L = n(188275),
    M = n(962966);
function D(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: D,
            onWatchStream: G,
            hangStatusActivity: U,
            renderSelfHangStatus: P,
            isStandardGap: w = !1,
        } = e,
        k = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.E)(k, "VoiceUserActivities");
    let V = (0, u.Ay)(t),
        B = l.useMemo(() => V.filter((e) => e.embeddedActivity.userIds.has(n.id)), [V, n.id]),
        H = Array.from((0, u.Rz)(B).values()),
        F = (0, x.W)(),
        [K, W] = (0, r.yK)(
            [E.A],
            () => [E.A.getStreamForUser(n.id, t.getGuildId()), E.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [Y, z] = (0, r.yK)([T.A, b.A, N.A, h.default], () => (0, A.eo)(t, T.A, b.A, N.A, h.default)),
        X = (0, r.bG)([I.default], () => I.default.getId()),
        q = (0, r.bG)([S.A], () => (0, p.nr)(K, S.A), [K]),
        J = (0, c.m)(n, D ?? q),
        Q = (0, r.bG)([v.Ay], () => v.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        $ = l.useMemo(() => (null != Q ? [Q] : []), [Q]),
        { enableUserHoverActivities: Z } = (0, j.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: ee } = (0, g.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        et = (0, f.m)({ location: "voice_channel_activities" }),
        en = null != K,
        ei = J.length + H.length > 0,
        el = null != U,
        es = n.id === I.default.getId(),
        ea = en || ei || (el && ee);
    if (
        (l.useEffect(() => {
            ea &&
                y.default.track(O.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [ea, t.id, n.id]),
        !ea && !es)
    )
        return null;
    if (es) {
        if (ee) return P({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!ea) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: a()(M.kL, { [M.iA]: w }),
        children: [
            el && ee && null != U
                ? (0, i.jsx)(_.Z, {
                      hangStatusActivity: U,
                      channel: t,
                      userId: n.id,
                      isSelf: es,
                      analyticsSource: "VoiceUserActivities",
                      onAction: s,
                      className: M.AF,
                      iconClassName: M.W9,
                      textClassName: M.YJ,
                  })
                : null,
            null == K || null == G
                ? null
                : (0, i.jsx)(m.P, {
                      stream: K,
                      activeStream: W,
                      streamActivity: q,
                      user: n,
                      currentUserId: X,
                      canWatch: Y,
                      unavailableReason: z,
                      onWatchStream: G,
                      onAction: s,
                      showHeader: Z,
                  }),
            H.map((e) =>
                (0, i.jsx)(
                    R.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: s,
                        enableUserHoverActivities: Z,
                    },
                    e.application.id,
                ),
            ),
            J.map((e) => {
                let a = e.application_id;
                return (null != F && (a = F), et && null != a && L.sQ.has(a))
                    ? (0, i.jsxs)(
                          l.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(R.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: $,
                                      onAction: s,
                                      enableUserHoverActivities: Z,
                                  }),
                                  (0, i.jsx)(C.A, {
                                      applicationId: a,
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
                          R.A,
                          { presenceActivity: e, channel: t, members: $, onAction: s, enableUserHoverActivities: Z },
                          `${e.application_id}`,
                      );
            }),
        ],
    });
}
