n.d(t, {
    O: () => R,
    U: () => N.Un
}),
    n(539854),
    n(784620),
    n(973216),
    n(953529),
    n(388685);
var r = n(200651),
    i = n(192379),
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
    h = n(812236),
    g = n(561308),
    _ = n(567409),
    b = n(706454),
    x = n(314897),
    y = n(699516),
    v = n(914010),
    E = n(594174),
    O = n(768581),
    j = n(433534),
    C = n(506895),
    S = n(758199),
    I = n(943762),
    N = n(914498),
    T = n(172109),
    P = n(880251),
    A = n(208444),
    w = n(388032),
    Z = n(758364);
function R(e) {
    let { app: t, embedUrl: n, linkType: l, activityCustomId: a, activityReferrerId: s, onView: g } = e,
        { name: _, bot: b } = (t = (0, T.O)(t)),
        y = null == b ? void 0 : b.id,
        v = (0, f.ye)(t),
        E = O.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: b
        }),
        { staticBannerSrc: j, videoBannerSrc: I, bannerAspectRatio: Z } = (0, P.E)(t),
        R = (0, o.e7)([x.default], () => (null != s ? s : x.default.getId()), [s]),
        { analyticsLocations: L } = (0, p.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: M, instanceId: U, isCurrentlyInInstance: F, canLaunchInChannel: B } = (0, C.c)(t.id),
        G = (0, u.Z)(),
        H = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == b ? void 0 : b.id
        }),
        V = null != y && v && H,
        z = B && v && H,
        W = (0, A.z)(t),
        K = i.useMemo(() => {
            let e = [];
            return (
                z &&
                    e.push({
                        label: null == U ? w.intl.string(w.t.cnBQPD) : w.intl.string(w.t.VJlc0d),
                        trackingArea: N.j_.PLAY,
                        onClick() {
                            (0, c.G6)({
                                channelId: null != M ? M : void 0,
                                applicationId: t.id,
                                isStart: null == U,
                                instanceId: null != U ? U : void 0,
                                embeddedActivitiesManager: G,
                                customId: a,
                                referrerId: R,
                                analyticsLocations: L
                            });
                        },
                        disabledReason: F ? w.intl.string(w.t.wJNK8P) : void 0
                    }),
                !z &&
                    V &&
                    e.push({
                        label: w.intl.string(w.t.JeK1Wl),
                        trackingArea: N.j_.PLAY,
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: y,
                                analyticsLocations: L,
                                customId: a,
                                referrerId: R
                            });
                        }
                    }),
                null != W && e.push(W),
                e
            );
        }, [z, V, W, U, F, M, t.id, G, a, R, L, y]),
        Y = v ? (0, r.jsx)(D, { app: t }) : (0, r.jsx)(k, { app: t });
    return (0, r.jsx)(S.W, {
        title: _,
        staticBannerSrc: j,
        videoBannerSrc: I,
        bannerAspectRatio: Z,
        iconSrc: E,
        embedUrl: n,
        info: Y,
        actions: K,
        trackingConfig: {
            id: t.id,
            linkType: l,
            referrerId: R,
            activityCustomId: a,
            onView: g
        }
    });
}
function k(e) {
    var t, n, a;
    let { app: c } = e,
        u =
            (0, j.Eb)({
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
function D(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: l } = t,
        c = (0, o.e7)(
            [v.Z],
            () => {
                var e;
                return null != (e = v.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        u = (0, _.Ns)(t.id),
        d = (0, o.Wu)(
            [E.default, y.Z],
            () => {
                let e = [];
                for (let [t, n] of u.entries()) {
                    if (t >= 5) break;
                    let r = E.default.getUser(n.author_id),
                        i = y.Z.isFriend(n.author_id);
                    null != r && i && e.push(r);
                }
                return e;
            },
            [u]
        ),
        p = i.useMemo(() => {
            if (d.length > 0)
                return (0, r.jsx)(I.K, {
                    activityUsers: d,
                    guildId: c,
                    activityText: w.intl.string(w.t['IJa+4+'])
                });
            if (u.some((e) => (0, g.ig)(e) === a.o.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.YqE, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        w.intl.string(w.t.TsWCdX)
                    ]
                });
            let e = null != l ? w.intl.format(w.t.z8EAJS, { count: l }) : w.intl.string(w.t.RjceQU);
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
