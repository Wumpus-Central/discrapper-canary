n.d(t, {
    O: () => I,
    U: () => x.Un
}),
    n(653041),
    n(571269),
    n(298267),
    n(266796);
var r = n(200651),
    i = n(192379),
    a = n(373793),
    o = n(442837),
    l = n(481060),
    s = n(566620),
    c = n(574952),
    d = n(100527),
    u = n(906732),
    p = n(783097),
    m = n(606192),
    f = n(812236),
    h = n(706454),
    g = n(314897),
    _ = n(768581),
    b = n(135431),
    v = n(506895),
    y = n(758199),
    x = n(914498),
    O = n(172109),
    j = n(880251),
    E = n(208444),
    N = n(388032),
    C = n(390101);
function I(e) {
    let { app: t, embedUrl: n, linkType: a, activityCustomId: l, activityReferrerId: h, onView: b } = e,
        { name: C, bot: I } = (t = (0, O.O)(t)),
        P = null == I ? void 0 : I.id,
        A = (0, p.ye)(t),
        w = _.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: I
        }),
        { staticBannerSrc: Z, videoBannerSrc: k, bannerAspectRatio: R } = (0, j.E)(t),
        D = (0, o.e7)([g.default], () => (null != h ? h : g.default.getId()), [h]),
        { analyticsLocations: L } = (0, u.ZP)(d.Z.APP_MESSAGE_EMBED),
        { currentChannelId: M, instanceId: W, isCurrentlyInInstance: F, canLaunchInChannel: U } = (0, v.c)(t.id),
        B = (0, c.Z)(),
        G = (0, f.ms)({
            context: { type: 'contextless' },
            applicationId: t.id,
            botUserId: null == I ? void 0 : I.id
        }),
        H = null != P && A && G,
        V = U && A && G,
        z = (0, E.z)(t),
        K = i.useMemo(() => {
            let e = [];
            return (
                V &&
                    e.push({
                        label: null == W ? N.NW.string(N.t.cnBQPD) : N.NW.string(N.t.VJlc0d),
                        trackingArea: x.j_.PLAY,
                        onClick() {
                            (0, s.G6)({
                                channelId: null != M ? M : void 0,
                                applicationId: t.id,
                                isStart: null == W,
                                instanceId: null != W ? W : void 0,
                                embeddedActivitiesManager: B,
                                customId: l,
                                referrerId: D,
                                analyticsLocations: L
                            });
                        },
                        disabledReason: F ? N.NW.string(N.t.wJNK8P) : void 0
                    }),
                !V &&
                    H &&
                    e.push({
                        label: N.NW.string(N.t.JeK1Wl),
                        trackingArea: x.j_.PLAY,
                        onClick() {
                            (0, m.W)({
                                appId: t.id,
                                botId: P,
                                analyticsLocations: L,
                                customId: l,
                                referrerId: D
                            });
                        }
                    }),
                null != z && e.push(z),
                e
            );
        }, [V, H, z, W, F, M, t.id, B, l, D, L, P]),
        Y = A ? (0, r.jsx)(T, { app: t }) : (0, r.jsx)(S, { app: t });
    return (0, r.jsx)(y.W, {
        title: C,
        staticBannerSrc: Z,
        videoBannerSrc: k,
        bannerAspectRatio: R,
        iconSrc: w,
        embedUrl: n,
        info: Y,
        actions: K,
        trackingConfig: {
            id: t.id,
            linkType: a,
            referrerId: D,
            activityCustomId: l,
            onView: b
        }
    });
}
function S(e) {
    var t, n, s;
    let { app: c } = e,
        d =
            (0, b.Eb)({
                customInstallUrl: c.customInstallUrl,
                installParams: c.installParams,
                integrationTypesConfig: c.integrationTypesConfig
            }) &&
            null != c.integrationTypesConfig &&
            a.Y.GUILD_INSTALL in c.integrationTypesConfig,
        u = (0, o.e7)([h.default], () => h.default.locale, []),
        p = i.useMemo(() => {
            var e, t;
            if (!d) return null;
            let n = new Intl.NumberFormat(u, {
                    notation: 'compact',
                    compactDisplay: 'short'
                }),
                r = null !== (t = null === (e = c.directoryEntry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0;
            return 0 === r ? null : N.NW.format(N.t['6IW6Wl'], { guildCount: n.format(r) });
        }, [null === (t = c.directoryEntry) || void 0 === t ? void 0 : t.guild_count, d, u]),
        m = null === (s = c.categories) || void 0 === s ? void 0 : null === (n = s.at(0)) || void 0 === n ? void 0 : n.name;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != m &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: C.description,
                    color: 'none',
                    children: m
                }),
            null != p &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    className: C.tagline,
                    color: 'none',
                    lineClamp: 1,
                    children: [
                        (0, r.jsx)(l.Jmo, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        p
                    ]
                })
        ]
    });
}
function T(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i } = t,
        a = null != i ? N.NW.format(N.t.z8EAJS, { count: i }) : N.NW.string(N.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n.length > 0 &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: C.description,
                    color: 'none',
                    lineClamp: 1,
                    children: n.map((e, t) =>
                        (0, r.jsx)(
                            'span',
                            {
                                className: C.tag,
                                children: e
                            },
                            t
                        )
                    )
                }),
            (0, r.jsxs)(l.Text, {
                variant: 'text-xs/normal',
                className: C.tagline,
                color: 'none',
                lineClamp: 1,
                children: [
                    (0, r.jsx)(l.tBG, {
                        size: 'xxs',
                        color: 'currentColor'
                    }),
                    a
                ]
            })
        ]
    });
}
