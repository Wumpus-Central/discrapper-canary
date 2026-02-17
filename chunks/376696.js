n.d(t, { A: () => M });
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
    x = n(93879),
    C = n(616356),
    E = n(961350),
    I = n(71393),
    b = n(576705),
    N = n(290863),
    S = n(977997),
    T = n(607567),
    v = n(954571),
    y = n(338234),
    j = n(667936),
    R = n(652215),
    O = n(188275),
    L = n(962966);
function M(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: M,
            onWatchStream: D,
            hangStatusActivity: G,
            renderSelfHangStatus: U,
            isStandardGap: P = !1,
        } = e,
        w = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.E)(w, "VoiceUserActivities");
    let k = (0, u.Ay)(t),
        V = l.useMemo(() => k.filter((e) => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
        B = Array.from((0, u.Rz)(V).values()),
        [H, F] = (0, r.yK)(
            [C.A],
            () => [C.A.getStreamForUser(n.id, t.getGuildId()), C.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [K, W] = (0, r.yK)([S.A, I.A, b.A, h.default], () => (0, A.eo)(t, S.A, I.A, b.A, h.default)),
        Y = (0, r.bG)([E.default], () => E.default.getId()),
        z = (0, r.bG)([N.A], () => (0, p.nr)(H, N.A), [H]),
        q = (0, c.m)(n, M ?? z),
        X = (0, r.bG)([T.Ay], () => T.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        J = l.useMemo(() => (null != X ? [X] : []), [X]),
        { enableUserHoverActivities: Q } = (0, y.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        { enableHangStatus: $ } = (0, g.$j)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        Z = (0, f.m)({ location: "voice_channel_activities" }),
        ee = null != H,
        et = q.length + B.length > 0,
        en = null != G,
        ei = n.id === E.default.getId(),
        el = ee || et || (en && $);
    if (
        (l.useEffect(() => {
            el &&
                v.default.track(R.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: t.id,
                    other_user_id: n.id,
                });
        }, [el, t.id, n.id]),
        !el && !ei)
    )
        return null;
    if (ei) {
        if ($) return U({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} });
        if (!el) return null;
    }
    return (0, i.jsxs)(o.HOs, {
        className: a()(L.kL, { [L.iA]: P }),
        children: [
            en && $ && null != G
                ? (0, i.jsx)(_.Z, {
                      hangStatusActivity: G,
                      channel: t,
                      userId: n.id,
                      isSelf: ei,
                      analyticsSource: "VoiceUserActivities",
                      onAction: s,
                      className: L.AF,
                      iconClassName: L.W9,
                      textClassName: L.YJ,
                  })
                : null,
            null == H || null == D
                ? null
                : (0, i.jsx)(m.P, {
                      stream: H,
                      activeStream: F,
                      streamActivity: z,
                      user: n,
                      currentUserId: Y,
                      canWatch: K,
                      unavailableReason: W,
                      onWatchStream: D,
                      onAction: s,
                      showHeader: Q,
                  }),
            B.map((e) =>
                (0, i.jsx)(
                    j.A,
                    {
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: t,
                        onAction: s,
                        enableUserHoverActivities: Q,
                    },
                    e.application.id,
                ),
            ),
            q.map((e) =>
                Z && null != e.application_id && O.sQ.has(e.application_id)
                    ? (0, i.jsxs)(
                          l.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(j.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: J,
                                      onAction: s,
                                      enableUserHoverActivities: Q,
                                  }),
                                  (0, i.jsx)(x.A, {
                                      applicationId: e.application_id,
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
                          j.A,
                          { presenceActivity: e, channel: t, members: J, onAction: s, enableUserHoverActivities: Q },
                          `${e.application_id}`,
                      ),
            ),
        ],
    });
}
