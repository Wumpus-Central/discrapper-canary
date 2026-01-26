n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(80682),
    u = n(845056),
    d = n(685399),
    f = n(643501),
    p = n(279250),
    _ = n(834757),
    h = n(727353),
    m = n(636920),
    g = n(565688),
    E = n(93879),
    y = n(616356),
    b = n(961350),
    O = n(71393),
    v = n(576705),
    A = n(290863),
    I = n(977997),
    S = n(607567),
    T = n(338234),
    C = n(667936),
    N = n(188275),
    w = n(962966);

function R(e) {
    let {
            channel: t,
            user: n,
            onAction: a,
            excludeActivity: R,
            onWatchStream: P,
            previewIsOpen: D,
            hangStatusActivity: x,
        } = e,
        L = i.useMemo(
            () => ({
                [t.guild_id]: [n.id],
            }),
            [t.guild_id, n.id],
        );
    (0, c.E)(L, "VoiceUserActivities");
    let j = (0, d.Ay)(t),
        M = i.useMemo(() => j.filter((e) => e.embeddedActivity.userIds.has(n.id)), [j, n.id]),
        k = Array.from((0, d.Rz)(M).values()),
        [U, G] = (0, o.yK)(
            [y.A],
            () => [y.A.getStreamForUser(n.id, t.getGuildId()), y.A.getActiveStreamForUser(n.id, t.getGuildId())],
            [t, n.id],
        ),
        [V, F] = (0, o.yK)([I.A, O.A, v.A, f.default], () => (0, p.eo)(t, I.A, O.A, v.A, f.default)),
        B = (0, o.bG)([b.default], () => b.default.getId()),
        H = (0, o.bG)([A.A], () => (0, _.nr)(U, A.A), [U]),
        Y = (0, _.AO)(U),
        W = null != R ? R : H,
        K = (0, u.m)(n, W),
        z = (0, o.bG)([S.Ay], () => {
            var e;
            return null != (e = S.Ay.getVoiceStatesForChannel(t).find((e) => e.user.id === n.id)) ? e : null;
        }, [t, n.id]),
        q = i.useMemo(() => (null != z ? [z] : []), [z]),
        { enableUserHoverActivities: Z } = (0, T.fC)({
            guildId: t.guild_id,
            location: "VoiceUserActivities",
        }),
        X = (0, g.m)({
            location: "voice_channel_activities",
        }),
        Q = null != U,
        J = K.length + k.length > 0,
        $ = null != x,
        ee = n.id === b.default.getId(),
        et = $;
    if (!Q && !J && !et) return null;
    let en = () =>
            null == U || null == P
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(w.yt, {
                          [w.P0]: D,
                      }),
                      children: [
                          (0, r.jsx)(h.Z, {
                              stream: U,
                              activeStream: G,
                              streamActivity: H,
                              streamApplication: Y,
                              user: n,
                              currentUserId: B,
                              canWatch: V,
                              unavailableReason: F,
                              onWatchStream: P,
                              onAction: a,
                              showHeader: Z,
                              skipContainer: !0,
                          }),
                          J &&
                              (0, r.jsx)("div", {
                                  className: w.zN,
                              }),
                      ],
                  }),
        er = () =>
            et && null != x
                ? (0, r.jsx)("div", {
                      className: w.Ak,
                      children: (0, r.jsx)(m.Z, {
                          hangStatusActivity: x,
                          channel: t,
                          userId: n.id,
                          isSelf: ee,
                          analyticsSource: "VoiceUserActivities",
                          onAction: a,
                          className: w.AF,
                          iconClassName: w.W9,
                          textClassName: w.YJ,
                      }),
                  })
                : null;
    return (0, r.jsxs)(l.HOs, {
        className: w.kL,
        children: [
            er(),
            et &&
                (Q || J) &&
                (0, r.jsx)("div", {
                    className: w.zN,
                }),
            en(),
            k.map((e, n) => {
                var i;
                return (0, r.jsx)(
                    C.A,
                    {
                        embeddedApp: e,
                        presenceActivity: null != (i = e.presenceActivity) ? i : void 0,
                        channel: t,
                        onAction: a,
                    },
                    n,
                );
            }),
            K.map((e, s) =>
                X && null != e.application_id && N.sQ.has(e.application_id)
                    ? (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  (0, r.jsx)(C.A, {
                                      presenceActivity: e,
                                      channel: t,
                                      members: q,
                                      onAction: a,
                                  }),
                                  (0, r.jsx)(E.A, {
                                      className: w.L,
                                      applicationId: e.application_id,
                                      userIds: [n.id],
                                      location: "voice_channel",
                                      guildId: t.guild_id,
                                      channelId: t.id,
                                  }),
                              ],
                          },
                          "".concat(s, "-with-gifting-breadcrumb"),
                      )
                    : (0, r.jsx)(
                          C.A,
                          {
                              presenceActivity: e,
                              channel: t,
                              members: q,
                              onAction: a,
                          },
                          s,
                      ),
            ),
        ],
    });
}
