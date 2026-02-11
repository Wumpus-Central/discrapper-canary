n.d(t, { A: () => R });
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
    m = n(834757),
    p = n(727353),
    g = n(636920),
    _ = n(565688),
    f = n(93879),
    x = n(616356),
    C = n(961350),
    E = n(71393),
    I = n(576705),
    b = n(290863),
    N = n(977997),
    S = n(607567),
    T = n(338234),
    v = n(667936),
    y = n(188275),
    j = n(962966);
function R(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: R,
            onWatchStream: O,
            hangStatusActivity: L,
            renderSelfHangStatus: M,
            isHoveringHangStatus: D,
            isStandardGap: G = !1,
        } = e,
        U = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.E)(U, "VoiceUserActivities");
    let P = (0, u.Ay)(t),
        w = l.useMemo(() => P.filter((e) => e.embeddedActivity.userIds.has(n.id)), [P, n.id]),
        k = Array.from((0, u.Rz)(w).values()),
        [V, B] = (0, r.yK)(
            [x.A],
            () => [x.A.getStreamForUser(n.id, t.getGuildId()), x.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [H, F] = (0, r.yK)([N.A, E.A, I.A, h.default], () => (0, A.eo)(t, N.A, E.A, I.A, h.default)),
        K = (0, r.bG)([C.default], () => C.default.getId()),
        W = (0, r.bG)([b.A], () => (0, m.nr)(V, b.A), [V]),
        Y = (0, c.m)(n, R ?? W),
        z = (0, r.bG)([S.Ay], () => S.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        q = l.useMemo(() => (null != z ? [z] : []), [z]),
        { enableUserHoverActivities: X } = (0, T.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        J = (0, _.m)({ location: "voice_channel_activities" }),
        Q = null != V,
        $ = Y.length + k.length > 0,
        Z = null != L,
        ee = n.id === C.default.getId();
    return Q || $ || ee || Z
        ? ee && ((!Q && !$) || D)
            ? M({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} })
            : (0, i.jsxs)(o.HOs, {
                  className: a()(j.kL, { [j.iA]: G }),
                  children: [
                      Z && null != L
                          ? (0, i.jsx)(g.Z, {
                                hangStatusActivity: L,
                                channel: t,
                                userId: n.id,
                                isSelf: ee,
                                analyticsSource: "VoiceUserActivities",
                                onAction: s,
                                className: j.AF,
                                iconClassName: j.W9,
                                textClassName: j.YJ,
                            })
                          : null,
                      null == V || null == O
                          ? null
                          : (0, i.jsx)(p.P, {
                                stream: V,
                                activeStream: B,
                                streamActivity: W,
                                user: n,
                                currentUserId: K,
                                canWatch: H,
                                unavailableReason: F,
                                onWatchStream: O,
                                onAction: s,
                                showHeader: X,
                            }),
                      k.map((e) =>
                          (0, i.jsx)(
                              v.A,
                              {
                                  embeddedApp: e,
                                  presenceActivity: e.presenceActivity ?? void 0,
                                  channel: t,
                                  onAction: s,
                                  enableUserHoverActivities: X,
                              },
                              e.application.id,
                          ),
                      ),
                      Y.map((e) =>
                          J && null != e.application_id && y.sQ.has(e.application_id)
                              ? (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            (0, i.jsx)(v.A, {
                                                presenceActivity: e,
                                                channel: t,
                                                members: q,
                                                onAction: s,
                                                enableUserHoverActivities: X,
                                            }),
                                            (0, i.jsx)(f.A, {
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
                                    v.A,
                                    {
                                        presenceActivity: e,
                                        channel: t,
                                        members: q,
                                        onAction: s,
                                        enableUserHoverActivities: X,
                                    },
                                    `${e.application_id}`,
                                ),
                      ),
                  ],
              })
        : null;
}
