n.d(t, { J: () => D.J, W: () => U }), n(321073), n(134528), n(947204);
var i = n(627968),
    r = n(64700),
    a = n(485845),
    l = n(379834),
    s = n(311907),
    o = n(397927),
    d = n(795816),
    c = n(574152),
    u = n(793574),
    _ = n(688810),
    m = n(522305),
    h = n(735991),
    p = n(361926),
    g = n(583846),
    A = n(625180),
    x = n(207371),
    f = n(205184),
    C = n(773669),
    I = n(961350),
    E = n(734057),
    v = n(994500),
    b = n(967198),
    T = n(287809),
    y = n(486020),
    S = n(204776),
    N = n(725606),
    j = n(572211),
    L = n(178910),
    R = n(354287),
    P = n(138175),
    M = n(112150),
    w = n(574660),
    D = n(768349),
    k = n(985018),
    O = n(355208);
function U(e) {
    let { app: t, linkType: n, activityCustomId: a, activityReferrerId: l, message: o, onView: g } = e,
        { name: f, bot: C } = (t = (0, P.b)(t)),
        v = C?.id,
        b = (0, h.Ag)(t),
        T = y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: C }),
        { staticBannerSrc: S, videoBannerSrc: L, bannerAspectRatio: D } = (0, M.f)(t),
        O = (0, s.bG)([I.default], () => l ?? I.default.getId(), [l]),
        { analyticsLocations: U } = (0, _.Ay)(u.A.APP_MESSAGE_EMBED),
        { currentChannelId: F, instanceId: H, isCurrentlyInInstance: V, canLaunchInChannel: q } = (0, N.w)(t.id),
        W = (0, c.A)(),
        z = (0, p.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: C?.id }),
        Y = null != v && b && z,
        Q = q && b,
        K = (0, x.e)(t),
        J = (0, w.F)(t),
        X = (0, w.t)(t),
        Z = r.useMemo(() => {
            let e = [];
            return (
                b
                    ? K
                        ? e.push({
                              label: k.intl.string(k.t.RscU7I),
                              trackingArea: R.kY.PLAY,
                              onClick() {
                                  A.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (Q &&
                              e.push({
                                  label:
                                      null == H
                                          ? k.intl.string(k.t.RscU7I)
                                          : V
                                            ? k.intl.string(k.t.DPfdsq)
                                            : k.intl.string(k.t.sqe0hj),
                                  trackingArea: R.kY.PLAY,
                                  onClick() {
                                      (0, d.su)({
                                          channelId: F ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == H,
                                          embeddedActivitiesManager: W,
                                          customId: a,
                                          referrerId: O,
                                          analyticsLocations: U,
                                      });
                                  },
                                  disabled: V,
                              }),
                          !Q &&
                              Y &&
                              e.push({
                                  label: k.intl.string(k.t.JeK1Wg),
                                  trackingArea: R.kY.PLAY,
                                  onClick() {
                                      (0, m.Q)({
                                          appId: t.id,
                                          botId: v,
                                          analyticsLocations: U,
                                          customId: a,
                                          referrerId: O,
                                      });
                                  },
                              }))
                    : null != X && e.push(X),
                e
            );
        }, [b, X, K, t.id, Q, Y, H, V, F, W, a, O, U, v]),
        $ = b ? (0, i.jsx)(G, { app: t }) : (0, i.jsx)(B, { app: t });
    return (0, i.jsx)(j.h, {
        title: f,
        staticBannerSrc: S,
        videoBannerSrc: L,
        onClickBanner: J,
        bannerAspectRatio: D,
        iconSrc: T,
        info: $,
        actions: Z,
        onClickContent: J,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: O,
            activityCustomId: a,
            onView: g,
            guildId: E.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function B(e) {
    let { app: t } = e,
        n =
            (0, S.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            a.b.GUILD_INSTALL in t.integrationTypesConfig,
        l = (0, s.bG)([C.default], () => C.default.locale, []),
        d = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(l, { notation: "compact", compactDisplay: "short" }),
                i = t.directoryEntry?.guild_count ?? 0;
            return 0 === i ? null : k.intl.format(k.t["6IW6Wi"], { guildCount: e.format(i) });
        }, [t.directoryEntry?.guild_count, n, l]),
        c = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != c && (0, i.jsx)(o.Text, { variant: "text-xs/medium", className: O.h_, color: "none", children: c }),
            null != d &&
                (0, i.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    className: O.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, i.jsx)(o.QGJ, { size: "xxs", color: "currentColor" }), d],
                }),
        ],
    });
}
function G(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: a = 0 } = t,
        d = (0, s.bG)([b.A], () => b.A.getGuildId() ?? void 0, []),
        c = (0, f.s)(t.id),
        u = (0, s.yK)([T.default, v.A], () => {
            let e = [];
            for (let [t, n] of c.entries()) {
                if (t >= 5) break;
                let i = T.default.getUser(n.author_id),
                    r = v.A.isFriend(n.author_id);
                null != i && r && e.push(i);
            }
            return e;
        }, [c]),
        _ = r.useMemo(() => {
            if (u.length > 0)
                return (0, i.jsx)(L.$, {
                    activityUsers: u,
                    guildId: d,
                    activityText: k.intl.formatToPlainString(k.t["IJa+46"], { count: u.length }),
                });
            if (c.some((e) => (0, g.CZ)(e) === l.m.GLOBAL))
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
                    className: O.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, i.jsx)("span", { className: O.Tc, children: e }, t)),
                }),
            (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: O.dS,
                color: "none",
                lineClamp: 1,
                children: _,
            }),
        ],
    });
}
