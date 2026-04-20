n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(80682),
    c = n(845056),
    u = n(685399),
    h = n(960076),
    A = n(323073),
    _ = n(643501),
    m = n(279250),
    p = n(834757),
    g = n(727353),
    f = n(832163),
    E = n(565688),
    x = n(533562),
    I = n(93879),
    C = n(854627),
    N = n(616356),
    T = n(961350),
    S = n(696451),
    b = n(71393),
    y = n(576705),
    v = n(290863),
    R = n(977997),
    j = n(954571),
    O = n(427262),
    L = n(329554),
    M = n(402313),
    D = n(652215),
    U = n(699976),
    G = n(415679),
    P = n(824078);
function k(e) {
    let { user: t, channel: n, activity: l, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        o = (0, i.jsx)(L.A, { presenceActivity: l, channel: n, userId: t.id, onAction: r });
    return a && null != s
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  o,
                  (0, i.jsx)(I.A, {
                      className: G.L,
                      applicationId: s,
                      rewardOfferNoticeClassName: G.Nh,
                      userIds: [t.id],
                      location: "voice_channel",
                      guildId: n.guild_id,
                      channelId: n.id,
                      numWishlistItems: 2,
                      cardSpec: U.Z.SIZE_110,
                  }),
              ],
          })
        : o;
}
function w(e) {
    let { user: t, guildId: n } = e,
        l = (0, r.bG)([S.Ay], () => S.Ay.getMember(n, t.id)),
        s = O.Ay.useName(t),
        a = l?.nick ?? s,
        { avatarDecorationSrc: d, avatarSrc: c } = (0, C.A)({ userId: t.id, size: o._3J.SIZE_32, guildId: n }),
        {
            status: u,
            isMobileOnline: A,
            activities: _,
        } = (0, r.cf)([v.A], () => ({
            status: v.A.getStatus(t.id, n),
            isMobileOnline: v.A.isMobileOnline(t.id),
            activities: v.A.getActivities(t.id, n),
        }));
    return (0, i.jsxs)("div", {
        className: G.aq,
        children: [
            (0, i.jsx)(o.euF, {
                src: c,
                size: o._3J.SIZE_32,
                "aria-label": a,
                avatarDecoration: d,
                status: (0, h.A)(_) ? o.clD.STREAMING : u === o.clD.OFFLINE ? void 0 : u,
                isMobile: A,
            }),
            (0, i.jsx)(o.Text, { variant: "text-sm/medium", children: a }),
        ],
    });
}
function B(e) {
    let t,
        n,
        { channel: s, user: h, onAction: I, excludeActivity: C, onWatchStream: S } = e,
        O = l.useMemo(() => ({ [s.guild_id]: [h.id] }), [s.guild_id, h.id]);
    (0, d.Eq)(O, "VoiceUserActivities");
    let { enabled: U } = M.A.useExperiment({ guildId: s.guild_id, location: "VoiceUserPopout" }),
        [B, V] = (0, r.yK)(
            [N.A],
            () => [N.A.getStreamForUser(h.id, s.getGuildId()), N.A.getActiveStreamForUser(h.id, s.getGuildId())],
            [s, h.id],
        ),
        [H, F] = (0, r.yK)([R.A, b.A, y.A, _.default], () => (0, m.eo)(s, R.A, b.A, y.A, _.default)),
        W = (0, r.bG)([T.default], () => T.default.getId()),
        K = (0, r.bG)([v.A], () => (0, p.nr)(B, v.A), [B]),
        Y = (0, A.r9)() && (0, A.UK)(s.id),
        z =
            ((t = (0, u.Ay)(s)),
            (n = l.useMemo(() => t.filter((e) => e.embeddedActivity.userIds.has(h.id)), [t, h.id])),
            [...(0, u.Rz)(n).values()]),
        q = (0, x.W)(),
        X = (0, E.m)({ location: "voice_channel_activities" }),
        $ = (0, r.bG)([f.A], () => f.A.getDetectableIdsToApplicationIds()),
        J = C ?? K,
        Q = (0, c.m)(h, J),
        Z = null != B && null != S && !Y,
        ee = Z || Q.length > 0 || z.length > 0,
        et = ee || U;
    if (
        (l.useEffect(() => {
            et &&
                j.default.track(D.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: s.id,
                    other_user_id: h.id,
                });
        }, [et, s.id, h.id]),
        !et)
    )
        return null;
    let en = (0, i.jsxs)(i.Fragment, {
        children: [
            Z &&
                (0, i.jsx)(g.P, {
                    stream: B,
                    activeStream: V,
                    streamActivity: K,
                    user: h,
                    currentUserId: W,
                    canWatch: H,
                    unavailableReason: F,
                    onWatchStream: S,
                    onAction: I,
                    showHeader: !0,
                }),
            z.map((e) =>
                (0, i.jsx)(
                    L.A,
                    {
                        userId: h.id,
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: s,
                        onAction: I,
                    },
                    e.application.id,
                ),
            ),
            Q.map((e) => {
                let t = q ?? e.application_id;
                return (0, i.jsx)(
                    k,
                    {
                        user: h,
                        channel: s,
                        activityApplicationId: t,
                        activity: e,
                        withGiftingBreadcrumb: X && null != t && null != $[t],
                        onAction: I,
                    },
                    e.application_id,
                );
            }),
        ],
    });
    return U
        ? (0, i.jsxs)("div", {
              className: a()(P.popover, G.Db),
              children: [
                  (0, i.jsx)(w, { user: h, guildId: s.guild_id }),
                  ee && (0, i.jsx)(o.HOs, { className: a()(P.popover, G.XG), children: en }),
              ],
          })
        : (0, i.jsx)(o.HOs, { className: a()(P.popover, G.kL), children: en });
}
