n.d(t, {
    O: () => k,
    U: () => S.Un
}),
    n(653041),
    n(571269),
    n(298267),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(373793),
    o = n(705512),
    l = n(442837),
    s = n(481060),
    c = n(566620),
    d = n(574952),
    u = n(100527),
    p = n(906732),
    m = n(783097),
    f = n(606192),
    h = n(812236),
    g = n(561308),
    _ = n(567409),
    b = n(706454),
    v = n(314897),
    y = n(699516),
    x = n(914010),
    j = n(594174),
    O = n(768581),
    E = n(135431),
    N = n(506895),
    C = n(758199),
    I = n(943762),
    S = n(914498),
    T = n(172109),
    P = n(880251),
    A = n(208444),
    w = n(388032),
    Z = n(390101);
function k(e) {
    let { app: t, embedUrl: n, linkType: a, activityCustomId: o, activityReferrerId: s, onView: g } = e,
        { name: _, bot: b } = (t = (0, T.O)(t)),
        y = null == b ? void 0 : b.id,
        x = (0, m.ye)(t),
        j = O.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: b
        }),
        { staticBannerSrc: E, videoBannerSrc: I, bannerAspectRatio: Z } = (0, P.E)(t),
        k = (0, l.e7)([v.default], () => (null != s ? s : v.default.getId()), [s]),
        { analyticsLocations: L } = (0, p.ZP)(u.Z.APP_MESSAGE_EMBED),
        { currentChannelId: M, instanceId: W, isCurrentlyInInstance: F, canLaunchInChannel: U } = (0, N.c)(t.id),
        B = (0, d.Z)(),
        G = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == b ? void 0 : b.id
        }),
        H = null != y && x && G,
        V = U && x && G,
        z = (0, A.z)(t),
        K = i.useMemo(() => {
            let e = [];
            return (
                V &&
                    e.push({
                        label: null == W ? w.NW.string(w.t.cnBQPD) : w.NW.string(w.t.VJlc0d),
                        trackingArea: S.j_.PLAY,
                        onClick() {
                            (0, c.G6)({
                                channelId: null != M ? M : void 0,
                                applicationId: t.id,
                                isStart: null == W,
                                instanceId: null != W ? W : void 0,
                                embeddedActivitiesManager: B,
                                customId: o,
                                referrerId: k,
                                analyticsLocations: L
                            });
                        },
                        disabledReason: F ? w.NW.string(w.t.wJNK8P) : void 0
                    }),
                !V &&
                    H &&
                    e.push({
                        label: w.NW.string(w.t.JeK1Wl),
                        trackingArea: S.j_.PLAY,
                        onClick() {
                            (0, f.W)({
                                appId: t.id,
                                botId: y,
                                analyticsLocations: L,
                                customId: o,
                                referrerId: k
                            });
                        }
                    }),
                null != z && e.push(z),
                e
            );
        }, [V, H, z, W, F, M, t.id, B, o, k, L, y]),
        Y = x ? (0, r.jsx)(D, { app: t }) : (0, r.jsx)(R, { app: t });
    return (0, r.jsx)(C.W, {
        title: _,
        staticBannerSrc: E,
        videoBannerSrc: I,
        bannerAspectRatio: Z,
        iconSrc: j,
        embedUrl: n,
        info: Y,
        actions: K,
        trackingConfig: {
            id: t.id,
            linkType: a,
            referrerId: k,
            activityCustomId: o,
            onView: g
        }
    });
}
function R(e) {
    var t, n, o;
    let { app: c } = e,
        d =
            (0, E.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig
            }) &&
            null != c.integrationTypesConfig &&
            a.Y.GUILD_INSTALL in c.integrationTypesConfig,
        u = (0, l.e7)([b.default], () => b.default.locale, []),
        p = i.useMemo(() => {
            var e, t;
            if (!d) return null;
            let n = new Intl.NumberFormat(u, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = c.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 === r ? null : w.NW.format(w.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = c.directoryEntry) || void 0 === t ? void 0 : t.guild_count, d, u]),
        m = null === (o = c.categories) || void 0 === o ? void 0 : null === (n = o.at(0)) || void 0 === n ? void 0 : n.name;
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
        { tags: n, maxParticipants: a } = t,
        c = (0, l.e7)(
            [x.Z],
            () => {
                var e;
                return null !== (e = x.Z.getGuildId()) && void 0 !== e ? e : void 0;
            },
            []
        ),
        d = (0, _.Ns)(t.id),
        u = (0, l.Wu)(
            [j.default, y.Z],
            () => {
                let e = [];
                for (let [t, n] of d.entries()) {
                    if (t >= 5) break;
                    let r = j.default.getUser(n.author_id),
                        i = y.Z.isFriend(n.author_id);
                    null != r && i && e.push(r);
                }
                return e;
            },
            [d]
        ),
        p = i.useMemo(() => {
            if (u.length > 0)
                return (0, r.jsx)(I.K, {
                    activityUsers: u,
                    guildId: c,
                    activityText: w.NW.string(w.t['IJa+4+'])
                });
            if (d.some((e) => (0, g.ig)(e) === o.o.GLOBAL))
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.YqE, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        w.NW.string(w.t.TsWCdX)
                    ]
                });
            let e = null != a ? w.NW.format(w.t.z8EAJS, { count: a }) : w.NW.string(w.t.RjceQU);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.tBG, {
                        size: 'xxs',
                        color: 'currentColor'
                    }),
                    e
                ]
            });
        }, [d, u, c, a]);
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
