n.d(t, { J: () => U.J, W: () => F }), n(321073), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(485845),
    s = n(379834),
    r = n(311907),
    o = n(834730),
    d = n(836480),
    c = n(825860),
    u = n(950305),
    m = n(795816),
    _ = n(574152),
    h = n(793574),
    p = n(688810),
    g = n(522305),
    A = n(735991),
    f = n(361926),
    x = n(583846),
    C = n(625180),
    E = n(207371),
    I = n(205184),
    v = n(773669),
    b = n(961350),
    T = n(734057),
    S = n(994500),
    y = n(967198),
    N = n(287809),
    j = n(486020),
    L = n(204776),
    R = n(725606),
    P = n(572211),
    w = n(178910),
    D = n(354287),
    k = n(138175),
    O = n(112150),
    M = n(574660),
    U = n(768349),
    G = n(985018),
    B = n(734093);
function F(e) {
    let { app: t, linkType: n, activityCustomId: a, activityReferrerId: s, message: o, onView: d } = e,
        { name: c, bot: u } = (t = (0, k.b)(t)),
        x = u?.id,
        I = (0, A.Ag)(t),
        v = j.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: u }),
        { staticBannerSrc: S, videoBannerSrc: y, bannerAspectRatio: N } = (0, O.f)(t),
        L = (0, r.bG)([b.default], () => s ?? b.default.getId(), [s]),
        { analyticsLocations: w } = (0, p.Ay)(h.A.APP_MESSAGE_EMBED),
        { currentChannelId: U, instanceId: B, isCurrentlyInInstance: F, canLaunchInChannel: q } = (0, R.w)(t.id),
        W = (0, _.A)(),
        z = (0, f.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: u?.id }),
        Y = null != x && I && z,
        Q = q && I,
        K = (0, E.e)(t),
        Z = (0, M.F)(t),
        J = (0, M.t)(t),
        X = l.useMemo(() => {
            let e = [];
            return (
                I
                    ? K
                        ? e.push({
                              label: G.intl.string(G.t.RscU7I),
                              trackingArea: D.kY.PLAY,
                              onClick() {
                                  C.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (Q &&
                              e.push({
                                  label:
                                      null == B
                                          ? G.intl.string(G.t.RscU7I)
                                          : F
                                            ? G.intl.string(G.t.DPfdsq)
                                            : G.intl.string(G.t.sqe0hj),
                                  trackingArea: D.kY.PLAY,
                                  onClick() {
                                      (0, m.su)({
                                          channelId: U ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == B,
                                          embeddedActivitiesManager: W,
                                          customId: a,
                                          referrerId: L,
                                          analyticsLocations: w,
                                      });
                                  },
                                  disabled: F,
                              }),
                          !Q &&
                              Y &&
                              e.push({
                                  label: G.intl.string(G.t.JeK1Wg),
                                  trackingArea: D.kY.PLAY,
                                  onClick() {
                                      (0, g.Q)({
                                          appId: t.id,
                                          botId: x,
                                          analyticsLocations: w,
                                          customId: a,
                                          referrerId: L,
                                      });
                                  },
                              }))
                    : null != J && e.push(J),
                e
            );
        }, [I, J, K, t.id, Q, Y, B, F, U, W, a, L, w, x]),
        $ = I ? (0, i.jsx)(V, { app: t }) : (0, i.jsx)(H, { app: t });
    return (0, i.jsx)(P.h, {
        title: c,
        staticBannerSrc: S,
        videoBannerSrc: y,
        onClickBanner: Z,
        bannerAspectRatio: N,
        iconSrc: v,
        info: $,
        actions: X,
        onClickContent: Z,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: L,
            activityCustomId: a,
            onView: d,
            guildId: T.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function H(e) {
    let { app: t } = e,
        n =
            (0, L.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            a.b.GUILD_INSTALL in t.integrationTypesConfig,
        s = (0, r.bG)([v.default], () => v.default.locale, []),
        c = l.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(s, { notation: "compact", compactDisplay: "short" }),
                i = t.directoryEntry?.guild_count ?? 0;
            return 0 === i ? null : G.intl.format(G.t["6IW6Wi"], { guildCount: e.format(i) });
        }, [t.directoryEntry?.guild_count, n, s]),
        u = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != u && (0, i.jsx)(o.E, { variant: "text-xs/medium", className: B.h_, color: "none", children: u }),
            null != c &&
                (0, i.jsxs)(o.E, {
                    variant: "text-xs/normal",
                    className: B.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, i.jsx)(d.Q, { size: "xxs", color: "currentColor" }), c],
                }),
        ],
    });
}
function V(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: a = 0 } = t,
        d = (0, r.bG)([y.A], () => y.A.getGuildId() ?? void 0, []),
        m = (0, I.s)(t.id),
        _ = (0, r.yK)([N.default, S.A], () => {
            let e = [];
            for (let [t, n] of m.entries()) {
                if (t >= 5) break;
                let i = N.default.getUser(n.author_id),
                    l = S.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [m]),
        h = l.useMemo(() => {
            if (_.length > 0)
                return (0, i.jsx)(w.$, {
                    activityUsers: _,
                    guildId: d,
                    activityText: G.intl.formatToPlainString(G.t["IJa+46"], { count: _.length }),
                });
            if (m.some((e) => (0, x.CZ)(e) === s.m.GLOBAL))
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Y, { size: "xxs", color: "currentColor" }), G.intl.string(G.t.TsWCdW)],
                });
            let e = a > 0 ? G.intl.format(G.t.z8EAJW, { count: a }) : G.intl.string(G.t.RjceQU);
            return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u.n, { size: "xxs", color: "currentColor" }), e] });
        }, [m, _, d, a]);
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
