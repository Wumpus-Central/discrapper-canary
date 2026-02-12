n.d(t, { A: () => L });
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
    T = n(954571),
    v = n(338234),
    y = n(667936),
    j = n(652215),
    R = n(188275),
    O = n(962966);
function L(e) {
    let {
            channel: t,
            user: n,
            onAction: s,
            excludeActivity: L,
            onWatchStream: M,
            hangStatusActivity: D,
            renderSelfHangStatus: G,
            isHoveringHangStatus: U,
            isStandardGap: P = !1,
        } = e,
        w = l.useMemo(() => ({ [t.guild_id]: [n.id] }), [t.guild_id, n.id]);
    (0, d.E)(w, "VoiceUserActivities");
    let k = (0, u.Ay)(t),
        V = l.useMemo(() => k.filter((e) => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
        B = Array.from((0, u.Rz)(V).values()),
        [H, F] = (0, r.yK)(
            [x.A],
            () => [x.A.getStreamForUser(n.id, t.getGuildId()), x.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [K, W] = (0, r.yK)([N.A, E.A, I.A, h.default], () => (0, A.eo)(t, N.A, E.A, I.A, h.default)),
        Y = (0, r.bG)([C.default], () => C.default.getId()),
        z = (0, r.bG)([b.A], () => (0, m.nr)(H, b.A), [H]),
        q = (0, c.m)(n, L ?? z),
        X = (0, r.bG)([S.Ay], () => S.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id) ?? null, [
            t,
            n.id,
        ]),
        J = l.useMemo(() => (null != X ? [X] : []), [X]),
        { enableUserHoverActivities: Q } = (0, v.fC)({ guildId: t.guild_id, location: "VoiceUserActivities" }),
        $ = (0, _.m)({ location: "voice_channel_activities" }),
        Z = null != H,
        ee = q.length + B.length > 0,
        et = null != D,
        en = n.id === C.default.getId(),
        ei = Z || ee || et;
    return (l.useEffect(() => {
        ei &&
            T.default.track(j.HAw.OPEN_POPOUT, {
                type: "Voice User Activities",
                channel_id: t.id,
                other_user_id: n.id,
            });
    }, [ei, t.id, n.id]),
    Z || ee || en || et)
        ? en && ((!Z && !ee) || U)
            ? G({ position: "right", nudge: 0, closePopout: () => {}, updatePosition: () => {} })
            : (0, i.jsxs)(o.HOs, {
                  className: a()(O.kL, { [O.iA]: P }),
                  children: [
                      et && null != D
                          ? (0, i.jsx)(g.Z, {
                                hangStatusActivity: D,
                                channel: t,
                                userId: n.id,
                                isSelf: en,
                                analyticsSource: "VoiceUserActivities",
                                onAction: s,
                                className: O.AF,
                                iconClassName: O.W9,
                                textClassName: O.YJ,
                            })
                          : null,
                      null == H || null == M
                          ? null
                          : (0, i.jsx)(p.P, {
                                stream: H,
                                activeStream: F,
                                streamActivity: z,
                                user: n,
                                currentUserId: Y,
                                canWatch: K,
                                unavailableReason: W,
                                onWatchStream: M,
                                onAction: s,
                                showHeader: Q,
                            }),
                      B.map((e) =>
                          (0, i.jsx)(
                              y.A,
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
                          $ && null != e.application_id && R.sQ.has(e.application_id)
                              ? (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            (0, i.jsx)(y.A, {
                                                presenceActivity: e,
                                                channel: t,
                                                members: J,
                                                onAction: s,
                                                enableUserHoverActivities: Q,
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
                                    y.A,
                                    {
                                        presenceActivity: e,
                                        channel: t,
                                        members: J,
                                        onAction: s,
                                        enableUserHoverActivities: Q,
                                    },
                                    `${e.application_id}`,
                                ),
                      ),
                  ],
              })
        : null;
}
