n.d(t, { J: () => U.J, W: () => B }), n(321073), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    s = n(485845),
    a = n(379834),
    r = n(17928),
    o = n(834730),
    d = n(836480),
    c = n(825860),
    u = n(950305),
    m = n(795816),
    h = n(574152),
    g = n(793574),
    A = n(688810),
    p = n(522305),
    x = n(735991),
    f = n(361926),
    C = n(583846),
    E = n(625180),
    v = n(375802),
    I = n(205184),
    _ = n(773669),
    j = n(495544),
    N = n(734057),
    T = n(994500),
    y = n(967198),
    S = n(287809),
    b = n(486020),
    k = n(204776),
    L = n(725606),
    R = n(572211),
    P = n(178910),
    M = n(354287),
    D = n(138175),
    w = n(112150),
    O = n(574660),
    U = n(768349),
    G = n(985018),
    V = n(734093);
function B(e) {
    let { app: t, linkType: n, activityCustomId: s, activityReferrerId: a, message: o, onView: d } = e,
        { name: c, bot: u } = (t = (0, D.b)(t)),
        C = u?.id,
        I = (0, x.Ag)(t),
        _ = b.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: u }),
        { staticBannerSrc: T, videoBannerSrc: y, bannerAspectRatio: S } = (0, w.f)(t),
        k = (0, r.bG)([j.default], () => a ?? j.default.getId(), [a]),
        { analyticsLocations: P } = (0, A.Ay)(g.A.APP_MESSAGE_EMBED),
        { currentChannelId: U, instanceId: V, isCurrentlyInInstance: B, canLaunchInChannel: z } = (0, L.w)(t.id),
        Y = (0, h.A)(),
        W = (0, f.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: u?.id }),
        K = null != C && I && W,
        J = z && I,
        q = (0, v.e)(t),
        Z = (0, O.F)(t),
        X = (0, O.t)(t),
        $ = l.useMemo(() => {
            let e = [];
            return (
                I
                    ? q
                        ? e.push({
                              label: G.intl.string(G.t.RscU7I),
                              trackingArea: M.kY.PLAY,
                              onClick() {
                                  E.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (J &&
                              e.push({
                                  label:
                                      null == V
                                          ? G.intl.string(G.t.RscU7I)
                                          : B
                                            ? G.intl.string(G.t.DPfdsq)
                                            : G.intl.string(G.t.sqe0hj),
                                  trackingArea: M.kY.PLAY,
                                  onClick() {
                                      (0, m.su)({
                                          channelId: U ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == V,
                                          embeddedActivitiesManager: Y,
                                          customId: s,
                                          referrerId: k,
                                          analyticsLocations: P,
                                      });
                                  },
                                  disabled: B,
                              }),
                          !J &&
                              K &&
                              e.push({
                                  label: G.intl.string(G.t.JeK1Wg),
                                  trackingArea: M.kY.PLAY,
                                  onClick() {
                                      (0, p.Q)({
                                          appId: t.id,
                                          botId: C,
                                          analyticsLocations: P,
                                          customId: s,
                                          referrerId: k,
                                      });
                                  },
                              }))
                    : null != X && e.push(X),
                e
            );
        }, [I, X, q, t.id, J, K, V, B, U, Y, s, k, P, C]),
        Q = I ? (0, i.jsx)(F, { app: t }) : (0, i.jsx)(H, { app: t });
    return (0, i.jsx)(R.h, {
        title: c,
        staticBannerSrc: T,
        videoBannerSrc: y,
        onClickBanner: Z,
        bannerAspectRatio: S,
        iconSrc: _,
        info: Q,
        actions: $,
        onClickContent: Z,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: k,
            activityCustomId: s,
            onView: d,
            guildId: N.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function H(e) {
    let { app: t } = e,
        n =
            (0, k.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            s.b.GUILD_INSTALL in t.integrationTypesConfig,
        a = (0, r.bG)([_.default], () => _.default.locale, []),
        c = l.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(a, { notation: "compact", compactDisplay: "short" }),
                i = t.directoryEntry?.guild_count ?? 0;
            return 0 === i ? null : G.intl.format(G.t["6IW6Wi"], { guildCount: e.format(i) });
        }, [t.directoryEntry?.guild_count, n, a]),
        u = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != u && (0, i.jsx)(o.E, { variant: "text-xs/medium", className: V.h_, color: "none", children: u }),
            null != c &&
                (0, i.jsxs)(o.E, {
                    variant: "text-xs/normal",
                    className: V.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, i.jsx)(d.Q, { size: "xxs", color: "currentColor" }), c],
                }),
        ],
    });
}
function F(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: s = 0 } = t,
        d = (0, r.bG)([y.A], () => y.A.getGuildId() ?? void 0, []),
        m = (0, I.s)(t.id),
        h = (0, r.yK)([S.default, T.A], () => {
            let e = [];
            for (let [t, n] of m.entries()) {
                if (t >= 5) break;
                let i = S.default.getUser(n.author_id),
                    l = T.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [m]),
        g = l.useMemo(() => {
            if (h.length > 0)
                return (0, i.jsx)(P.$, {
                    activityUsers: h,
                    guildId: d,
                    activityText: G.intl.formatToPlainString(G.t["IJa+46"], { count: h.length }),
                });
            if (m.some((e) => (0, C.CZ)(e) === a.m.GLOBAL))
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Y, { size: "xxs", color: "currentColor" }), G.intl.string(G.t.TsWCdW)],
                });
            let e = s > 0 ? G.intl.format(G.t.z8EAJW, { count: s }) : G.intl.string(G.t.RjceQU);
            return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u.n, { size: "xxs", color: "currentColor" }), e] });
        }, [m, h, d, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsx)(o.E, {
                    variant: "text-xs/medium",
                    className: V.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, i.jsx)("span", { className: V.Tc, children: e }, t)),
                }),
            (0, i.jsx)(o.E, { variant: "text-xs/normal", className: V.dS, color: "none", lineClamp: 1, children: g }),
        ],
    });
}
