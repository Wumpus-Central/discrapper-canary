n.d(t, { J: () => D.J, W: () => U }), n(321073), n(134528), n(947204);
var i = n(627968),
    r = n(64700),
    l = n(485845),
    a = n(379834),
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
    E = n(961350),
    I = n(734057),
    b = n(994500),
    T = n(967198),
    v = n(287809),
    S = n(486020),
    y = n(204776),
    N = n(725606),
    j = n(572211),
    L = n(178910),
    R = n(354287),
    P = n(138175),
    M = n(112150),
    w = n(574660),
    D = n(768349),
    O = n(985018),
    k = n(355208);
function U(e) {
    let { app: t, linkType: n, activityCustomId: l, activityReferrerId: a, message: o, onView: g } = e,
        { name: f, bot: C } = (t = (0, P.b)(t)),
        b = C?.id,
        T = (0, h.Ag)(t),
        v = S.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: C }),
        { staticBannerSrc: y, videoBannerSrc: L, bannerAspectRatio: D } = (0, M.f)(t),
        k = (0, s.bG)([E.default], () => a ?? E.default.getId(), [a]),
        { analyticsLocations: U } = (0, _.Ay)(u.A.APP_MESSAGE_EMBED),
        { currentChannelId: F, instanceId: H, isCurrentlyInInstance: V, canLaunchInChannel: W } = (0, N.w)(t.id),
        q = (0, c.A)(),
        Y = (0, p.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: C?.id }),
        z = null != b && T && Y,
        Q = W && T,
        K = (0, x.e)(t),
        J = (0, w.F)(t),
        X = (0, w.t)(t),
        Z = r.useMemo(() => {
            let e = [];
            return (
                T
                    ? K
                        ? e.push({
                              label: O.intl.string(O.t.RscU7I),
                              trackingArea: R.kY.PLAY,
                              onClick() {
                                  A.A.launchFrame({ applicationId: t.id });
                              },
                          })
                        : (Q &&
                              e.push({
                                  label:
                                      null == H
                                          ? O.intl.string(O.t.RscU7I)
                                          : V
                                            ? O.intl.string(O.t.DPfdsq)
                                            : O.intl.string(O.t.sqe0hj),
                                  trackingArea: R.kY.PLAY,
                                  onClick() {
                                      (0, d.su)({
                                          channelId: F ?? void 0,
                                          applicationId: t.id,
                                          isStart: null == H,
                                          embeddedActivitiesManager: q,
                                          customId: l,
                                          referrerId: k,
                                          analyticsLocations: U,
                                      });
                                  },
                                  disabled: V,
                              }),
                          !Q &&
                              z &&
                              e.push({
                                  label: O.intl.string(O.t.JeK1Wg),
                                  trackingArea: R.kY.PLAY,
                                  onClick() {
                                      (0, m.Q)({
                                          appId: t.id,
                                          botId: b,
                                          analyticsLocations: U,
                                          customId: l,
                                          referrerId: k,
                                      });
                                  },
                              }))
                    : null != X && e.push(X),
                e
            );
        }, [T, X, K, t.id, Q, z, H, V, F, q, l, k, U, b]),
        $ = T ? (0, i.jsx)(B, { app: t }) : (0, i.jsx)(G, { app: t });
    return (0, i.jsx)(j.h, {
        title: f,
        staticBannerSrc: y,
        videoBannerSrc: L,
        onClickBanner: J,
        bannerAspectRatio: D,
        iconSrc: v,
        info: $,
        actions: Z,
        onClickContent: J,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: k,
            activityCustomId: l,
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
            (0, y.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            l.b.GUILD_INSTALL in t.integrationTypesConfig,
        a = (0, s.bG)([C.default], () => C.default.locale, []),
        d = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(a, { notation: "compact", compactDisplay: "short" }),
                i = t.directoryEntry?.guild_count ?? 0;
            return 0 === i ? null : O.intl.format(O.t["6IW6Wi"], { guildCount: e.format(i) });
        }, [t.directoryEntry?.guild_count, n, a]),
        c = t.categories?.at(0)?.name;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != c && (0, i.jsx)(o.Text, { variant: "text-xs/medium", className: k.h_, color: "none", children: c }),
            null != d &&
                (0, i.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    className: k.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, i.jsx)(o.QGJ, { size: "xxs", color: "currentColor" }), d],
                }),
        ],
    });
}
function B(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: l = 0 } = t,
        d = (0, s.bG)([T.A], () => T.A.getGuildId() ?? void 0, []),
        c = (0, f.s)(t.id),
        u = (0, s.yK)([v.default, b.A], () => {
            let e = [];
            for (let [t, n] of c.entries()) {
                if (t >= 5) break;
                let i = v.default.getUser(n.author_id),
                    r = b.A.isFriend(n.author_id);
                null != i && r && e.push(i);
            }
            return e;
        }, [c]),
        _ = r.useMemo(() => {
            if (u.length > 0)
                return (0, i.jsx)(L.$, {
                    activityUsers: u,
                    guildId: d,
                    activityText: O.intl.formatToPlainString(O.t["IJa+46"], { count: u.length }),
                });
            if (c.some((e) => (0, g.CZ)(e) === a.m.GLOBAL))
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.Y3C, { size: "xxs", color: "currentColor" }), O.intl.string(O.t.TsWCdW)],
                });
            let e = l > 0 ? O.intl.format(O.t.z8EAJW, { count: l }) : O.intl.string(O.t.RjceQU);
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.nys, { size: "xxs", color: "currentColor" }), e],
            });
        }, [c, u, d, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n.length > 0 &&
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: k.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, i.jsx)("span", { className: k.Tc, children: e }, t)),
                }),
            (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: k.dS,
                color: "none",
                lineClamp: 1,
                children: _,
            }),
        ],
    });
}
