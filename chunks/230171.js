n.d(t, {
    O: () => x,
    U: () => C.Un,
}),
    n(539854),
    n(784620),
    n(973216),
    n(953529),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(373793),
    a = n(705512),
    s = n(442837),
    l = n(481060),
    c = n(566620),
    u = n(574952),
    d = n(100527),
    f = n(906732),
    _ = n(915346),
    p = n(783097),
    h = n(812236),
    m = n(561308),
    g = n(567409),
    E = n(706454),
    b = n(314897),
    y = n(699516),
    O = n(914010),
    v = n(594174),
    I = n(768581),
    T = n(433534),
    S = n(506895),
    A = n(758199),
    N = n(943762),
    C = n(914498),
    R = n(172109),
    P = n(880251),
    w = n(515344),
    D = n(388032),
    L = n(758364);
function x(e) {
    let { app: t, embedUrl: n, linkType: o, activityCustomId: a, activityReferrerId: l, onView: m } = e,
        { name: g, bot: E } = (t = (0, R.O)(t)),
        y = null == E ? void 0 : E.id,
        O = (0, p.ye)(t),
        v = I.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: E,
        }),
        { staticBannerSrc: T, videoBannerSrc: N, bannerAspectRatio: L } = (0, P.E)(t),
        x = (0, s.e7)([b.default], () => (null != l ? l : b.default.getId()), [l]),
        { analyticsLocations: j } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: U, instanceId: G, isCurrentlyInInstance: B, canLaunchInChannel: Z } = (0, S.c)(t.id),
        F = (0, u.Z)(),
        V = (0, h.ms)({
            context: { type: "contextless" },
            applicationId: t.id,
            botUserId: null == E ? void 0 : E.id,
        }),
        H = null != y && O && V,
        Y = Z && O,
        W = (0, w.G)(t),
        K = (0, w.z)(t),
        z = i.useMemo(() => {
            let e = [];
            return (
                O
                    ? (Y &&
                          e.push({
                              label: null == G ? D.intl.string(D.t.RscU7O) : D.intl.string(D.t.VJlc0d),
                              trackingArea: C.j_.PLAY,
                              onClick() {
                                  (0, c.G6)({
                                      channelId: null != U ? U : void 0,
                                      applicationId: t.id,
                                      isStart: null == G,
                                      embeddedActivitiesManager: F,
                                      customId: a,
                                      referrerId: x,
                                      analyticsLocations: j,
                                  });
                              },
                              disabledReason: B ? D.intl.string(D.t.wJNK8P) : void 0,
                          }),
                      !Y &&
                          H &&
                          e.push({
                              label: D.intl.string(D.t.JeK1Wl),
                              trackingArea: C.j_.PLAY,
                              onClick() {
                                  (0, _.W)({
                                      appId: t.id,
                                      botId: y,
                                      analyticsLocations: j,
                                      customId: a,
                                      referrerId: x,
                                  });
                              },
                          }))
                    : null != K && e.push(K),
                e
            );
        }, [Y, H, G, B, U, t.id, F, a, x, j, O, K, y]),
        q = O ? (0, r.jsx)(k, { app: t }) : (0, r.jsx)(M, { app: t });
    return (0, r.jsx)(A.W, {
        title: g,
        staticBannerSrc: T,
        videoBannerSrc: N,
        onClickBanner: W,
        bannerAspectRatio: L,
        iconSrc: v,
        embedUrl: n,
        info: q,
        actions: z,
        onClickContent: W,
        trackingConfig: {
            id: t.id,
            linkType: o,
            referrerId: x,
            activityCustomId: a,
            onView: m,
        },
    });
}
function M(e) {
    var t, n, a;
    let { app: c } = e,
        u =
            (0, T.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig,
            }) &&
            null != c.integrationTypesConfig &&
            o.Y.GUILD_INSTALL in c.integrationTypesConfig,
        d = (0, s.e7)([E.default], () => E.default.locale, []),
        f = i.useMemo(() => {
            var e, t;
            if (!u) return null;
            let n = new Intl.NumberFormat(d, {
                    notation: "compact",
                    compactDisplay: "short",
                }),
                r = null != (t = null == (e = c.directoryEntry) ? void 0 : e.guild_count) ? t : 0;
            return 0 === r ? null : D.intl.format(D.t["6IW6Wl"], { guildCount: n.format(r) });
        }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]),
        _ = null == (a = c.categories) || null == (n = a.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != _ &&
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: L.description,
                    color: "none",
                    children: _,
                }),
            null != f &&
                (0, r.jsxs)(l.Text, {
                    variant: "text-xs/normal",
                    className: L.tagline,
                    color: "none",
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.Jmo, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        f,
                    ],
                }),
        ],
    });
}
function k(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: o = 0 } = t,
        c = (0, s.e7)([O.Z], () => {
            var e;
            return null != (e = O.Z.getGuildId()) ? e : void 0;
        }, []),
        u = (0, g.N)(t.id),
        d = (0, s.Wu)([v.default, y.Z], () => {
            let e = [];
            for (let [t, n] of u.entries()) {
                if (t >= 5) break;
                let r = v.default.getUser(n.author_id),
                    i = y.Z.isFriend(n.author_id);
                null != r && i && e.push(r);
            }
            return e;
        }, [u]),
        f = i.useMemo(() => {
            if (d.length > 0)
                return (0, r.jsx)(N.K, {
                    activityUsers: d,
                    guildId: c,
                    activityText: D.intl.formatToPlainString(D.t["IJa+4+"], { count: d.length }),
                });
            if (u.some((e) => (0, m.ig)(e) === a.o.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.YqE, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                        D.intl.string(D.t.TsWCdX),
                    ],
                });
            let e = o > 0 ? D.intl.format(D.t.z8EAJS, { count: o }) : D.intl.string(D.t.RjceQU);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.tBG, {
                        size: "xxs",
                        color: "currentColor",
                    }),
                    e,
                ],
            });
        }, [u, d, c, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n.length > 0 &&
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: L.description,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            "span",
                            {
                                className: L.tag,
                                children: e,
                            },
                            t,
                        ),
                    ),
                }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: L.tagline,
                color: "none",
                lineClamp: 1,
                children: f,
            }),
        ],
    });
}
