n.d(t, { J: () => P.J, W: () => w }), n(321073), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(485845),
    r = n(379834),
    s = n(311907),
    o = n(397927),
    d = n(795816),
    c = n(574152),
    u = n(793574),
    m = n(688810),
    _ = n(522305),
    h = n(735991),
    p = n(361926),
    g = n(583846),
    A = n(625180),
    f = n(207371),
    x = n(205184),
    E = n(773669),
    C = n(961350),
    I = n(734057),
    T = n(994500),
    v = n(967198),
    N = n(287809),
    S = n(486020),
    b = n(204776),
    j = n(725606),
    y = n(572211),
    R = n(178910),
    L = n(354287),
    M = n(138175),
    O = n(112150),
    D = n(574660),
    P = n(768349),
    k = n(985018),
    U = n(355208);
function w(e) {
    let { app: t, linkType: n, activityCustomId: a, activityReferrerId: r, message: o, onView: g } = e,
        { name: x, bot: E } = (t = (0, M.b)(t)),
        T = E?.id,
        v = (0, h.Ag)(t),
        N = S.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: E }),
        { staticBannerSrc: b, videoBannerSrc: R, bannerAspectRatio: P } = (0, O.f)(t),
        U = (0, s.bG)([C.default], () => r ?? C.default.getId(), [r]),
        { analyticsLocations: w } = (0, m.Ay)(u.A.APP_MESSAGE_EMBED),
        { currentChannelId: F, instanceId: H, isCurrentlyInInstance: V, canLaunchInChannel: z } = (0, j.w)(t.id),
        W = (0, c.A)(),
        Y = (0, p.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: E?.id }),
        q = null != T && v && Y,
        K = z && v,
        Q = (0, f.e)(t),
        J = (0, D.F)(t),
        X = (0, D.t)(t),
        Z = l.useMemo(() => {
            let e = [];
            return (
                v
                    ? Q
                        ? e.push({
                              label: k.intl.string(k.t.RscU7I),
                              trackingArea: L.kY.PLAY,
                              onClick() {
                                  A.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (K &&
                              e.push({
                                  label:
                                      null == H
                                          ? k.intl.string(k.t.RscU7I)
                                          : V
                                            ? k.intl.string(k.t.DPfdsq)
                                            : k.intl.string(k.t.sqe0hj),
                                  trackingArea: L.kY.PLAY,
                                  onClick() {
                                      (0, d.su)({
                                          channelId: F ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == H,
                                          embeddedActivitiesManager: W,
                                          customId: a,
                                          referrerId: U,
                                          analyticsLocations: w,
                                      });
                                  },
                                  disabled: V,
                              }),
                          !K &&
                              q &&
                              e.push({
                                  label: k.intl.string(k.t.JeK1Wg),
                                  trackingArea: L.kY.PLAY,
                                  onClick() {
                                      (0, _.Q)({
                                          appId: t.id,
                                          botId: T,
                                          analyticsLocations: w,
                                          customId: a,
                                          referrerId: U,
                                      });
                                  },
                              }))
                    : null != X && e.push(X),
                e
            );
        }, [v, X, Q, t.id, K, q, H, V, F, W, a, U, w, T]),
        $ = v ? (0, i.jsx)(B, { app: t }) : (0, i.jsx)(G, { app: t });
    return (0, i.jsx)(y.h, {
        title: x,
        staticBannerSrc: b,
        videoBannerSrc: R,
        onClickBanner: J,
        bannerAspectRatio: P,
        iconSrc: N,
        info: $,
        actions: Z,
        onClickContent: J,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: U,
            activityCustomId: a,
            onView: g,
            guildId: I.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function G(e) {
    let { app: t } = e,
        n =
            (0, b.Ie)({
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
            return 0 === i ? null : k.intl.format(k.t["6IW6Wi"], { guildCount: e.format(i) });
        }, [t.directoryEntry?.guild_count, n, r]),
        c = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != c && (0, i.jsx)(o.Text, { variant: "text-xs/medium", className: U.h_, color: "none", children: c }),
            null != d &&
                (0, i.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    className: U.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, i.jsx)(o.QGJ, { size: "xxs", color: "currentColor" }), d],
                }),
        ],
    });
}
function B(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: a = 0 } = t,
        d = (0, s.bG)([v.A], () => v.A.getGuildId() ?? void 0, []),
        c = (0, x.s)(t.id),
        u = (0, s.yK)([N.default, T.A], () => {
            let e = [];
            for (let [t, n] of c.entries()) {
                if (t >= 5) break;
                let i = N.default.getUser(n.author_id),
                    l = T.A.isFriend(n.author_id);
                null != i && l && e.push(i);
            }
            return e;
        }, [c]),
        m = l.useMemo(() => {
            if (u.length > 0)
                return (0, i.jsx)(R.$, {
                    activityUsers: u,
                    guildId: d,
                    activityText: k.intl.formatToPlainString(k.t["IJa+46"], { count: u.length }),
                });
            if (c.some((e) => (0, g.CZ)(e) === r.m.GLOBAL))
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.Y3C, { size: "xxs", color: "currentColor" }), k.intl.string(k.t.TsWCdW)],
                });
            let e = a > 0 ? k.intl.format(k.t.z8EAJW, { count: a }) : k.intl.string(k.t.RjceQU);
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.nys, { size: "xxs", color: "currentColor" }), e],
            });
        }, [c, u, d, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: U.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, i.jsx)("span", { className: U.Tc, children: e }, t)),
                }),
            (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: U.dS,
                color: "none",
                lineClamp: 1,
                children: m,
            }),
        ],
    });
}
