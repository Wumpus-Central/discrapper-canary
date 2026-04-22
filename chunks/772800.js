n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(778712),
    d = n(97808),
    c = n(652215),
    u = n(834730),
    h = n(573613),
    A = n(80682),
    _ = n(845056),
    m = n(685399),
    g = n(960076),
    p = n(323073),
    f = n(268218),
    E = n(643501),
    x = n(279250),
    I = n(834757),
    C = n(727353),
    b = n(832163),
    N = n(565688),
    S = n(533562),
    v = n(854627),
    T = n(616356),
    y = n(961350),
    R = n(696451),
    j = n(71393),
    L = n(576705),
    O = n(290863),
    G = n(977997),
    D = n(954571),
    M = n(427262),
    U = n(329554),
    P = n(402313),
    w = n(699976),
    k = n(713983),
    V = n(77006);
let B = (0, f.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("61943"),
            n.e("28367"),
            n.e("27411"),
            n.e("49318"),
            n.e("12721"),
            n.e("37383"),
            n.e("17601"),
            n.e("8087"),
            n.e("55057"),
            n.e("20455"),
            n.e("49141"),
            n.e("48563"),
            n.e("27355"),
            n.e("67876"),
            n.e("18897"),
            n.e("6453"),
            n.e("20667"),
        ]).then(n.bind(n, 93879)),
    webpackId: 93879,
});
function H(e) {
    let { user: t, channel: n, activity: l, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        o = (0, i.jsx)(U.A, { presenceActivity: l, channel: n, userId: t.id, onAction: r });
    return a && null != s
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  o,
                  (0, i.jsx)(B, {
                      className: k.L,
                      applicationId: s,
                      rewardOfferNoticeClassName: k.Nh,
                      userIds: [t.id],
                      location: "voice_channel",
                      guildId: n.guild_id,
                      channelId: n.id,
                      numWishlistItems: 2,
                      cardSpec: w.Z.SIZE_110,
                  }),
              ],
          })
        : o;
}
function F(e) {
    let { user: t, guildId: n } = e,
        l = (0, r.bG)([R.Ay], () => R.Ay.getMember(n, t.id)),
        s = M.Ay.useName(t),
        a = l?.nick ?? s,
        { avatarDecorationSrc: h, avatarSrc: A } = (0, v.A)({ userId: t.id, size: o._3.SIZE_32, guildId: n }),
        {
            status: _,
            isMobileOnline: m,
            activities: p,
        } = (0, r.cf)([O.A], () => ({
            status: O.A.getStatus(t.id, n),
            isMobileOnline: O.A.isMobileOnline(t.id),
            activities: O.A.getActivities(t.id, n),
        }));
    return (0, i.jsxs)("div", {
        className: k.aq,
        children: [
            (0, i.jsx)(d.eu, {
                src: A,
                size: o._3.SIZE_32,
                "aria-label": a,
                avatarDecoration: h,
                status: (0, g.A)(p) ? c.clD.STREAMING : _ === c.clD.OFFLINE ? void 0 : _,
                isMobile: m,
            }),
            (0, i.jsx)(u.E, { variant: "text-sm/medium", children: a }),
        ],
    });
}
function W(e) {
    let t,
        n,
        { channel: s, user: o, onAction: d, excludeActivity: u, onWatchStream: g } = e,
        f = l.useMemo(() => ({ [s.guild_id]: [o.id] }), [s.guild_id, o.id]);
    (0, A.Eq)(f, "VoiceUserActivities");
    let { enabled: v } = P.A.useExperiment({ guildId: s.guild_id, location: "VoiceUserPopout" }),
        [R, M] = (0, r.yK)(
            [T.A],
            () => [T.A.getStreamForUser(o.id, s.getGuildId()), T.A.getActiveStreamForUser(o.id, s.getGuildId())],
            [s, o.id],
        ),
        [w, B] = (0, r.yK)([G.A, j.A, L.A, E.default], () => (0, x.eo)(s, G.A, j.A, L.A, E.default)),
        W = (0, r.bG)([y.default], () => y.default.getId()),
        Y = (0, r.bG)([O.A], () => (0, I.nr)(R, O.A), [R]),
        K = (0, p.r9)() && (0, p.UK)(s.id),
        z =
            ((t = (0, m.Ay)(s)),
            (n = l.useMemo(() => t.filter((e) => e.embeddedActivity.userIds.has(o.id)), [t, o.id])),
            [...(0, m.Rz)(n).values()]),
        q = (0, S.W)(),
        X = (0, N.m)({ location: "voice_channel_activities" }),
        Q = (0, r.bG)([b.A], () => b.A.getDetectableIdsToApplicationIds()),
        J = u ?? Y,
        Z = (0, _.m)(o, J),
        $ = null != R && null != g && !K,
        ee = $ || Z.length > 0 || z.length > 0,
        et = ee || v;
    if (
        (l.useEffect(() => {
            et &&
                D.default.track(c.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: s.id,
                    other_user_id: o.id,
                });
        }, [et, s.id, o.id]),
        !et)
    )
        return null;
    let en = (0, i.jsxs)(i.Fragment, {
        children: [
            $ &&
                (0, i.jsx)(C.P, {
                    stream: R,
                    activeStream: M,
                    streamActivity: Y,
                    user: o,
                    currentUserId: W,
                    canWatch: w,
                    unavailableReason: B,
                    onWatchStream: g,
                    onAction: d,
                    showHeader: !0,
                }),
            z.map((e) =>
                (0, i.jsx)(
                    U.A,
                    {
                        userId: o.id,
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: s,
                        onAction: d,
                    },
                    e.application.id,
                ),
            ),
            Z.map((e) => {
                let t = q ?? e.application_id;
                return (0, i.jsx)(
                    H,
                    {
                        user: o,
                        channel: s,
                        activityApplicationId: t,
                        activity: e,
                        withGiftingBreadcrumb: X && null != t && null != Q[t],
                        onAction: d,
                    },
                    e.application_id,
                );
            }),
        ],
    });
    return v
        ? (0, i.jsxs)("div", {
              className: a()(V.popover, k.Db),
              children: [
                  (0, i.jsx)(F, { user: o, guildId: s.guild_id }),
                  ee && (0, i.jsx)(h.Ip, { className: a()(V.popover, k.XG), children: en }),
              ],
          })
        : (0, i.jsx)(h.Ip, { className: a()(V.popover, k.kL), children: en });
}
