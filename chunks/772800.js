t.d(i, { A: () => K });
var n = t(627968),
    l = t(64700),
    s = t(17928),
    a = t(778712),
    r = t(97808),
    d = t(652215),
    o = t(834730),
    u = t(364522),
    c = t(80682),
    m = t(845056),
    A = t(685399),
    g = t(960076),
    h = t(323073),
    p = t(693879),
    f = t(268218),
    I = t(643501),
    v = t(279250),
    x = t(834757),
    S = t(566668),
    _ = t(832163),
    E = t(565688),
    N = t(533562),
    y = t(854627),
    C = t(616356),
    b = t(495544),
    j = t(696451),
    T = t(71393),
    G = t(576705),
    O = t(290863),
    P = t(977997),
    k = t(174459),
    V = t(927813),
    w = t(427262),
    D = t(329554),
    R = t(402313),
    U = t(699976),
    M = t(415679);
let L = (0, f.Fe)({
    createPromise: () =>
        Promise.all([
            t.e("46953"),
            t.e("38123"),
            t.e("56795"),
            t.e("85723"),
            t.e("77756"),
            t.e("70676"),
            t.e("1316"),
            t.e("9233"),
            t.e("69747"),
            t.e("11133"),
            t.e("49013"),
            t.e("46430"),
            t.e("93461"),
            t.e("90779"),
            t.e("39808"),
            t.e("9763"),
            t.e("20667"),
        ]).then(t.bind(t, 316725)),
    webpackId: 316725,
});
function F(e) {
    let { user: i, channel: t, activity: l, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        d = (0, n.jsx)(D.A, { presenceActivity: l, channel: t, userId: i.id, onAction: r });
    return a && null != s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  d,
                  (0, n.jsx)(L, {
                      className: M.L,
                      applicationId: s,
                      userIds: [i.id],
                      location: "voice_channel",
                      guildId: t.guild_id,
                      channelId: t.id,
                      numWishlistItems: 2,
                      cardSpec: U.Z.SIZE_110,
                  }),
              ],
          })
        : d;
}
function z(e) {
    let { user: i, guildId: t, channelId: l } = e,
        u = (0, s.bG)([j.Ay], () => j.Ay.getMember(t, i.id)),
        c = w.Ay.useName(i),
        m = u?.nick ?? c,
        { avatarDecorationSrc: A, avatarSrc: h } = (0, y.A)({ userId: i.id, size: a._3.SIZE_32, guildId: t }),
        {
            status: f,
            isMobileOnline: I,
            activities: v,
        } = (0, s.cf)([O.A], () => ({
            status: O.A.getStatus(i.id, t),
            isMobileOnline: O.A.isMobileOnline(i.id),
            activities: O.A.getActivities(i.id, t),
        })),
        x = (0, s.bG)([P.A], () => P.A.getVoiceStateForChannel(l, i.id)?.connectedAt),
        S = null != x ? new Date(x * V.A.Millis.SECOND).getTime() : null;
    return (0, n.jsxs)("div", {
        className: M.aq,
        children: [
            (0, n.jsx)(r.eu, {
                src: h,
                size: a._3.SIZE_32,
                "aria-label": m,
                avatarDecoration: A,
                status: (0, g.A)(v) ? d.clD.STREAMING : f === d.clD.OFFLINE ? void 0 : f,
                isMobile: I,
                className: M.my,
            }),
            (0, n.jsxs)("div", {
                className: M.Qq,
                children: [
                    (0, n.jsx)(o.E, { variant: "text-sm/medium", lineClamp: 1, children: m }),
                    null != S && (0, n.jsx)(p.z, { textColor: "text-feedback-positive", entry: { start: S } }),
                ],
            }),
        ],
    });
}
function K(e) {
    let i,
        t,
        { channel: a, user: r, onAction: o, excludeActivity: g, onWatchStream: p } = e,
        f = l.useMemo(() => ({ [a.guild_id]: [r.id] }), [a.guild_id, r.id]);
    (0, c.Eq)(f, "VoiceUserActivities");
    let { enabled: y } = R.A.useExperiment({ guildId: a.guild_id, location: "VoiceUserPopout" }),
        [j, V] = (0, s.yK)(
            [C.A],
            () => [C.A.getStreamForUser(r.id, a.getGuildId()), C.A.getActiveStreamForUser(r.id, a.getGuildId())],
            [a, r.id],
        ),
        [w, U] = (0, s.yK)([P.A, T.A, G.A, I.default], () => (0, v.eo)(a, P.A, T.A, G.A, I.default)),
        L = (0, s.bG)([b.default], () => b.default.getId()),
        K = (0, s.bG)([O.A], () => (0, x.nr)(j, O.A), [j]),
        B = (0, h.r9)() && (0, h.UK)(a.id),
        Y =
            ((i = (0, A.Ay)(a)),
            (t = l.useMemo(() => i.filter((e) => e.embeddedActivity.userIds.has(r.id)), [i, r.id])),
            [...(0, A.Rz)(t).values()]),
        q = (0, N.W)(),
        $ = (0, E.m)({ location: "voice_channel_activities" }),
        H = (0, s.bG)([_.A], () => _.A.getDetectableIdsToApplicationIds()),
        W = g ?? K,
        Z = (0, m.m)(r, W),
        J = null != j && null != p && !B,
        X = J || Z.length > 0 || Y.length > 0,
        Q = X || y;
    if (
        (l.useEffect(() => {
            Q &&
                k.default.track(d.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: a.id,
                    other_user_id: r.id,
                });
        }, [Q, a.id, r.id]),
        !Q)
    )
        return null;
    let ee = (0, n.jsxs)(n.Fragment, {
        children: [
            J &&
                (0, n.jsx)(S.P, {
                    stream: j,
                    activeStream: V,
                    streamActivity: K,
                    user: r,
                    currentUserId: L,
                    canWatch: w,
                    unavailableReason: U,
                    onWatchStream: p,
                    onAction: o,
                    showHeader: !0,
                }),
            Y.map((e) =>
                (0, n.jsx)(
                    D.A,
                    {
                        userId: r.id,
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: a,
                        onAction: o,
                    },
                    e.application.id,
                ),
            ),
            Z.map((e) => {
                let i = q ?? e.application_id;
                return (0, n.jsx)(
                    F,
                    {
                        user: r,
                        channel: a,
                        activityApplicationId: i,
                        activity: e,
                        withGiftingBreadcrumb: $ && null != i && null != H[i],
                        onAction: o,
                    },
                    e.application_id,
                );
            }),
        ],
    });
    return y
        ? (0, n.jsxs)("div", {
              className: M.Db,
              children: [
                  (0, n.jsx)(z, { user: r, guildId: a.guild_id, channelId: a.id }),
                  X && (0, n.jsx)(u.Ip, { className: M.XG, children: ee }),
              ],
          })
        : (0, n.jsx)(u.Ip, { className: M.kL, children: ee });
}
