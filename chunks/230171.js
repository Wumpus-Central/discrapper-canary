(n.d(t, {
    O: () => R,
    U: () => T.Un
}),
    n(539854),
    n(784620),
    n(973216),
    n(953529),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(373793),
    a = n(705512),
    o = n(442837),
    s = n(481060),
    c = n(566620),
    u = n(574952),
    d = n(100527),
    p = n(906732),
    m = n(915346),
    f = n(783097),
    _ = n(812236),
    h = n(561308),
    g = n(567409),
    b = n(706454),
    E = n(314897),
    y = n(699516),
    x = n(914010),
    C = n(594174),
    v = n(768581),
    O = n(433534),
    j = n(506895),
    I = n(758199),
    S = n(943762),
    T = n(914498),
    N = n(172109),
    P = n(880251),
    A = n(515344),
    w = n(388032),
    Z = n(758364);
function R(e) {
    let { app: t, embedUrl: n, linkType: l, activityCustomId: a, activityReferrerId: s, onView: h } = e,
        { name: g, bot: b } = (t = (0, N.O)(t)),
        y = null == b ? void 0 : b.id,
        x = (0, f.ye)(t),
        C = v.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: b
        }),
        { staticBannerSrc: O, videoBannerSrc: S, bannerAspectRatio: Z } = (0, P.E)(t),
        R = (0, o.e7)([E.default], () => (null != s ? s : E.default.getId()), [s]),
        { analyticsLocations: D } = (0, p.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: M, instanceId: U, isCurrentlyInInstance: F, canLaunchInChannel: B } = (0, j.c)(t.id),
        G = (0, u.Z)(),
        H = (0, _.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == b ? void 0 : b.id
        }),
        V = null != y && x && H,
        z = B && x,
        W = (0, A.G)(t),
        K = (0, A.z)(t),
        Y = i.useMemo(() => {
            let e = [];
            return (
                x
                    ? (z &&
                          e.push({
                              label: null == U ? w.intl.string(w.t.RscU7O) : w.intl.string(w.t.VJlc0d),
                              trackingArea: T.j_.PLAY,
                              onClick() {
                                  (0, c.G6)({
                                      channelId: null != M ? M : void 0,
                                      applicationId: t.id,
                                      isStart: null == U,
                                      embeddedActivitiesManager: G,
                                      customId: a,
                                      referrerId: R,
                                      analyticsLocations: D
                                  });
                              },
                              disabledReason: F ? w.intl.string(w.t.wJNK8P) : void 0
                          }),
                      !z &&
                          V &&
                          e.push({
                              label: w.intl.string(w.t.JeK1Wl),
                              trackingArea: T.j_.PLAY,
                              onClick() {
                                  (0, m.W)({
                                      appId: t.id,
                                      botId: y,
                                      analyticsLocations: D,
                                      customId: a,
                                      referrerId: R
                                  });
                              }
                          }))
                    : null != K && e.push(K),
                e
            );
        }, [z, V, U, F, M, t.id, G, a, R, D, x, K, y]),
        X = x ? (0, r.jsx)(L, { app: t }) : (0, r.jsx)(k, { app: t });
    return (0, r.jsx)(I.W, {
        title: g,
        staticBannerSrc: O,
        videoBannerSrc: S,
        onClickBanner: W,
        bannerAspectRatio: Z,
        iconSrc: C,
        embedUrl: n,
        info: X,
        actions: Y,
        onClickContent: W,
        trackingConfig: {
            id: t.id,
            linkType: l,
            referrerId: R,
            activityCustomId: a,
            onView: h
        }
    });
}
function k(e) {
    var t, n, a;
    let { app: c } = e,
        u =
            (0, O.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig
            }) &&
            null != c.integrationTypesConfig &&
            l.Y.GUILD_INSTALL in c.integrationTypesConfig,
        d = (0, o.e7)([b.default], () => b.default.locale, []),
        p = i.useMemo(() => {
            var e, t;
            if (!u) return null;
            let n = new Intl.NumberFormat(d, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null != (t = null == (e = c.directoryEntry) ? void 0 : e.guild_count) ? t : 0;
            return 0 === r ? null : w.intl.format(w.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]),
        m = null == (a = c.categories) || null == (n = a.at(0)) ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != m &&
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    className: Z.description,
                    color: 'none',
                    children: m
                }),
            null != p &&
                (0, r.jsxs)(s.Text, {
                    variant: 'text-xs/normal',
                    className: Z.tagline,
                    color: 'none',
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(s.Jmo, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        p
                    ]
                })
        ]
    });
}
function L(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: l = 0 } = t,
        c = (0, o.e7)(
            [x.Z],
            () => {
                var e;
                return null != (e = x.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        u = (0, g.N)(t.id),
        d = (0, o.Wu)(
            [C.default, y.Z],
            () => {
                let e = [];
                for (let [t, n] of u.entries()) {
                    if (t >= 5) break;
                    let r = C.default.getUser(n.author_id),
                        i = y.Z.isFriend(n.author_id);
                    null != r && i && e.push(r);
                }
                return e;
            },
            [u]
        ),
        p = i.useMemo(() => {
            if (d.length > 0)
                return (0, r.jsx)(S.K, {
                    activityUsers: d,
                    guildId: c,
                    activityText: w.intl.formatToPlainString(w.t['IJa+4+'], { count: d.length })
                });
            if (u.some((e) => (0, h.ig)(e) === a.o.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.YqE, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        w.intl.string(w.t.TsWCdX)
                    ]
                });
            let e = l > 0 ? w.intl.format(w.t.z8EAJS, { count: l }) : w.intl.string(w.t.RjceQU);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.tBG, {
                        size: 'xxs',
                        color: 'currentColor'
                    }),
                    e
                ]
            });
        }, [u, d, c, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n.length > 0 &&
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    className: Z.description,
                    color: 'none',
                    lineClamp: 1,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            'span',
                            {
                                className: Z.tag,
                                children: e
                            },
                            t
                        )
                    )
                }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                className: Z.tagline,
                color: 'none',
                lineClamp: 1,
                children: p
            })
        ]
    });
}
