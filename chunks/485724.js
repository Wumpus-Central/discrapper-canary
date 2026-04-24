n.d(t, { J: () => U.J, W: () => V }), n(321073), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(485845),
    r = n(379834),
    s = n(17928),
    o = n(834730),
    c = n(836480),
    d = n(825860),
    u = n(950305),
    _ = n(795816),
    m = n(574152),
    h = n(793574),
    p = n(688810),
    g = n(522305),
    f = n(735991),
    x = n(361926),
    A = n(583846),
    C = n(625180),
    v = n(375802),
    I = n(205184),
    E = n(773669),
    b = n(495544),
    y = n(734057),
    T = n(994500),
    j = n(967198),
    N = n(287809),
    S = n(486020),
    k = n(204776),
    L = n(725606),
    R = n(572211),
    w = n(178910),
    P = n(354287),
    D = n(138175),
    M = n(112150),
    O = n(574660),
    U = n(768349),
    G = n(985018),
    B = n(734093);
function V(e) {
    let { app: t, linkType: n, activityCustomId: a, activityReferrerId: r, message: o, onView: c } = e,
        { name: d, bot: u } = (t = (0, D.b)(t)),
        A = u?.id,
        I = (0, f.Ag)(t),
        E = S.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: u }),
        { staticBannerSrc: T, videoBannerSrc: j, bannerAspectRatio: N } = (0, M.f)(t),
        k = (0, s.bG)([b.default], () => r ?? b.default.getId(), [r]),
        { analyticsLocations: w } = (0, p.Ay)(h.A.APP_MESSAGE_EMBED),
        { currentChannelId: U, instanceId: B, isCurrentlyInInstance: V, canLaunchInChannel: z } = (0, L.w)(t.id),
        W = (0, m.A)(),
        Y = (0, x.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: u?.id }),
        K = null != A && I && Y,
        q = z && I,
        Z = (0, v.e)(t),
        J = (0, O.F)(t),
        Q = (0, O.t)(t),
        X = l.useMemo(() => {
            let e = [];
            return (
                I
                    ? Z
                        ? e.push({
                              label: G.intl.string(G.t.RscU7I),
                              trackingArea: P.kY.PLAY,
                              onClick() {
                                  C.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (q &&
                              e.push({
                                  label:
                                      null == B
                                          ? G.intl.string(G.t.RscU7I)
                                          : V
                                            ? G.intl.string(G.t.DPfdsq)
                                            : G.intl.string(G.t.sqe0hj),
                                  trackingArea: P.kY.PLAY,
                                  onClick() {
                                      (0, _.su)({
                                          channelId: U ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == B,
                                          embeddedActivitiesManager: W,
                                          customId: a,
                                          referrerId: k,
                                          analyticsLocations: w,
                                      });
                                  },
                                  disabled: V,
                              }),
                          !q &&
                              K &&
                              e.push({
                                  label: G.intl.string(G.t.JeK1Wg),
                                  trackingArea: P.kY.PLAY,
                                  onClick() {
                                      (0, g.Q)({
                                          appId: t.id,
                                          botId: A,
                                          analyticsLocations: w,
                                          customId: a,
                                          referrerId: k,
                                      });
                                  },
                              }))
                    : null != Q && e.push(Q),
                e
            );
        }, [I, Q, Z, t.id, q, K, B, V, U, W, a, k, w, A]),
        $ = I ? (0, i.jsx)(H, { app: t }) : (0, i.jsx)(F, { app: t });
    return (0, i.jsx)(R.h, {
        title: d,
        staticBannerSrc: T,
        videoBannerSrc: j,
        onClickBanner: J,
        bannerAspectRatio: N,
        iconSrc: E,
        info: $,
        actions: X,
        onClickContent: J,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: k,
            activityCustomId: a,
            onView: c,
            guildId: y.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function F(e) {
    let { app: t } = e,
        n =
            (0, k.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            a.b.GUILD_INSTALL in t.integrationTypesConfig,
        r = (0, s.bG)([E.default], () => E.default.locale, []),
        d = l.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short" }),
                i = t.directoryEntry?.guild_count ?? 0;
            return 0 === i ? null : G.intl.format(G.t["6IW6Wi"], { guildCount: e.format(i) });
        }, [t.directoryEntry?.guild_count, n, r]),
        u = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != u && (0, i.jsx)(o.E, { variant: "text-xs/medium", className: B.h_, color: "none", children: u }),
            null != d &&
                (0, i.jsxs)(o.E, {
                    variant: "text-xs/normal",
                    className: B.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, i.jsx)(c.Q, { size: "xxs", color: "currentColor" }), d],
                }),
        ],
    });
}
function H(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: a = 0 } = t,
        c = (0, s.bG)([j.A], () => j.A.getGuildId() ?? void 0, []),
        _ = (0, I.s)(t.id),
        m = (0, s.yK)([N.default, T.A], () => {
            let e = [];
            for (let [t, n] of _.entries()) {
                if (t >= 5) break;
                let i = N.default.getUser(n.author_id),
                    l = T.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [_]),
        h = l.useMemo(() => {
            if (m.length > 0)
                return (0, i.jsx)(w.$, {
                    activityUsers: m,
                    guildId: c,
                    activityText: G.intl.formatToPlainString(G.t["IJa+46"], { count: m.length }),
                });
            if (_.some((e) => (0, A.CZ)(e) === r.m.GLOBAL))
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.Y, { size: "xxs", color: "currentColor" }), G.intl.string(G.t.TsWCdW)],
                });
            let e = a > 0 ? G.intl.format(G.t.z8EAJW, { count: a }) : G.intl.string(G.t.RjceQU);
            return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u.n, { size: "xxs", color: "currentColor" }), e] });
        }, [_, m, c, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsx)(o.E, {
                    variant: "text-xs/medium",
                    className: B.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, i.jsx)("span", { className: B.Tc, children: e }, t)),
                }),
            (0, i.jsx)(o.E, { variant: "text-xs/normal", className: B.dS, color: "none", lineClamp: 1, children: h }),
        ],
    });
}
