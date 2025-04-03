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
    l = n(705512),
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
    E = n(914010),
    v = n(594174),
    O = n(768581),
    N = n(433534),
    j = n(506895),
    C = n(758199),
    I = n(943762),
    S = n(914498),
    T = n(172109),
    P = n(880251),
    A = n(208444),
    w = n(388032),
    Z = n(758364);
function k(e) {
    let { app: t, embedUrl: n, linkType: a, activityCustomId: l, activityReferrerId: s, onView: g } = e,
        { name: _, bot: b } = (t = (0, T.O)(t)),
        y = null == b ? void 0 : b.id,
        E = (0, f.ye)(t),
        v = O.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: b
        }),
        { staticBannerSrc: N, videoBannerSrc: I, bannerAspectRatio: Z } = (0, P.E)(t),
        k = (0, o.e7)([x.default], () => (null != s ? s : x.default.getId()), [s]),
        { analyticsLocations: L } = (0, p.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: M, instanceId: W, isCurrentlyInInstance: U, canLaunchInChannel: F } = (0, j.c)(t.id),
        B = (0, u.Z)(),
        G = (0, h.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == b ? void 0 : b.id
        }),
        H = null != y && E && G,
        V = F && E && G,
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
                                customId: l,
                                referrerId: k,
                                analyticsLocations: L
                            });
                        },
                        disabledReason: U ? w.NW.string(w.t.wJNK8P) : void 0
                    }),
                !V &&
                    H &&
                    e.push({
                        label: w.NW.string(w.t.JeK1Wl),
                        trackingArea: S.j_.PLAY,
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: y,
                                analyticsLocations: L,
                                customId: l,
                                referrerId: k
                            });
                        }
                    }),
                null != z && e.push(z),
                e
            );
        }, [V, H, z, W, U, M, t.id, B, l, k, L, y]),
        Y = E ? (0, r.jsx)(D, { app: t }) : (0, r.jsx)(R, { app: t });
    return (0, r.jsx)(C.W, {
        title: _,
        staticBannerSrc: N,
        videoBannerSrc: I,
        bannerAspectRatio: Z,
        iconSrc: v,
        embedUrl: n,
        info: Y,
        actions: K,
        trackingConfig: {
            id: t.id,
            linkType: a,
            referrerId: k,
            activityCustomId: l,
            onView: g
        }
    });
}
function R(e) {
    var t, n, l;
    let { app: c } = e,
        u =
            (0, N.E)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig
            }) &&
            null != c.integrationTypesConfig &&
            a.Y.GUILD_INSTALL in c.integrationTypesConfig,
        d = (0, o.e7)([b.default], () => b.default.locale, []),
        p = i.useMemo(() => {
            var e, t;
            if (!u) return null;
            let n = new Intl.NumberFormat(d, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null != (t = null == (e = c.directoryEntry) ? void 0 : e.guild_count) ? t : 0;
            return 0 === r ? null : w.NW.format(w.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null == (t = c.directoryEntry) ? void 0 : t.guild_count, u, d]),
        m = null == (l = c.categories) || null == (n = l.at(0)) ? void 0 : n.name;
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
        c = (0, o.e7)(
            [E.Z],
            () => {
                var e;
                return null != (e = E.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        u = (0, _.Ns)(t.id),
        d = (0, o.Wu)(
            [v.default, y.Z],
            () => {
                let e = [];
                for (let [t, n] of u.entries()) {
                    if (t >= 5) break;
                    let r = v.default.getUser(n.author_id),
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
                    activityText: w.NW.string(w.t['IJa+4+'])
                });
            if (u.some((e) => (0, g.ig)(e) === l.o.GLOBAL))
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
        }, [u, d, c, a]);
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
