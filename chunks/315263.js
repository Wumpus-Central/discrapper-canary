n.r(t), n.d(t, { default: () => B }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(873546),
    i = n(636977),
    a = n(570140),
    o = n(493683),
    s = n(447543),
    l = n(230711),
    c = n(566620),
    u = n(122613),
    d = n(649256),
    f = n(574952),
    _ = n(367907),
    p = n(421474),
    h = n(812206),
    m = n(506895),
    g = n(960904),
    E = n(830121),
    b = n(15274),
    y = n(924301),
    O = n(543842),
    v = n(754688),
    I = n(336197),
    S = n(977156),
    T = n(341907),
    A = n(540709),
    N = n(881706),
    C = n(701190),
    R = n(944486),
    P = n(914010),
    w = n(771845),
    D = n(626135),
    L = n(591759),
    x = n(782568),
    M = n(981631),
    k = n(46140);
async function j(e, t) {
    await a.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: M.IlC.APP
    });
}
async function U(e) {
    var t;
    let n = C.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.ZP.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === M.r2o.EXPIRED || n.state === M.r2o.BANNED || n.state === M.r2o.ERROR) return void (await j(n, e.code));
    let r = w.ZP.getFlattenedGuildIds(),
        i = null == n || null == (t = n.guild) ? void 0 : t.id;
    null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await j(n, e.code);
}
let G = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function B(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
        C = (0, E.zO)(e);
    if (null != C && (C.type === g.g.INVITE || C.type === g.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), U(C), !0);
    if (null != C && (C.type === g.g.APP_DIRECTORY_PROFILE || C.type === g.g.APP_DIRECTORY_STOREFRONT || C.type === g.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (t) => {
            var i, a;
            null == t || t.preventDefault();
            let { code: o } = C,
                { applicationId: s, skuId: l } =
                    C.type === g.g.APP_DIRECTORY_PROFILE || C.type === g.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: o,
                              skuId: void 0
                          }
                        : null != (i = (0, p.Q)(o))
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                c = null != (a = P.Z.getGuildId()) ? a : void 0;
            return (
                null == s
                    ? (0, x.Z)(e)
                    : (D.default.track(M.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.tq ? 'mobile_web' : 'desktop_web',
                          guild_id: c,
                          channel_id: R.Z.getChannelId()
                      }),
                      n
                          .e('11866')
                          .then(n.bind(n, 749681))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: r } = n(49898),
                                  { GlobalDiscoveryAppsSections: i } = n(979007);
                              t({
                                  tab: r.APPS,
                                  applicationId: s,
                                  section: (0, O.Z)(i, C.type === g.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l
                              });
                          })),
                !0
            );
        };
    if (null != C && C.type === g.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n;
            null == e || e.preventDefault();
            let { code: r, url: i } = C,
                a = h.Z.getApplication(r),
                l = new URL(i),
                _ = null != (t = l.searchParams.get('referrer_id')) ? t : void 0,
                p = (0, f.Z)(),
                { currentChannelId: g, instanceId: E, isCurrentlyInInstance: b, canLaunchInChannel: y } = (0, m.v)(r);
            if (y)
                return (
                    !b &&
                    null != g &&
                    ((0, d.ur)(r, l.searchParams.get('link_id'), l.searchParams.get('custom_id'))
                        .then(async (e) => {
                            let { customId: t } = e;
                            await (0, c.G6)({
                                channelId: g,
                                applicationId: r,
                                isStart: null == E,
                                instanceId: null != E ? E : void 0,
                                embeddedActivitiesManager: p,
                                customId: t,
                                referrerId: _,
                                analyticsLocations: s
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                let e = null == a || null == (n = a.bot) ? void 0 : n.id;
                return (
                    null != e &&
                    (o.Z.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: t } = await (0, d.ur)(r, l.searchParams.get('link_id'), l.searchParams.get('custom_id'));
                            (0, u.Z)({
                                targetApplicationId: r,
                                channelId: e,
                                analyticsLocations: s,
                                customId: t,
                                referrerId: _
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != C && C.type === g.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = C.code.split('-');
            return (
                n
                    .e('84239')
                    .then(n.bind(n, 838433))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, r);
                    }),
                !0
            );
        };
    if (null != C && C.type === g.g.QUESTS_EMBED && (0, S.cB)({ location: k.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t({
                        fromContent: i.j.QUEST_SHARE_LINK,
                        questId: C.code
                    });
                }),
            !0
        );
    let { host: w, hostname: j, pathname: B, search: V, hash: F } = null != (t = L.Z.toURLSafe(e)) ? t : {},
        Z = L.Z.isDiscordHostname(null != j ? j : null) || L.Z.isDiscordLocalhost(null != w ? w : null, null != j ? j : null);
    if (Z && ((null == B ? void 0 : B.startsWith('/application-directory')) || (null == B ? void 0 : B.startsWith('/discovery/applications')))) {
        let e = B.split('/'),
            t = null == B ? void 0 : B.startsWith('/discovery/applications'),
            r = e[t ? 3 : 2],
            i = 'search' === r,
            a = t && 'categories' === r && 'featured' !== e[4];
        return (t) => {
            let r, o, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(V);
                (r = null != (l = e.get('q')) ? l : void 0), (o = null != (c = e.get('category_id')) ? c : void 0), (s = null != (u = e.get('page')) ? u : void 0);
            } else a && (o = e[4]);
            return (
                n
                    .e('11866')
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(49898);
                        t({
                            tab: i.APPS,
                            categoryId: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            page: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            query: r
                        });
                    }),
                !0
            );
        };
    }
    if (null != B && Z && L.Z.isAppRoute(B)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != V && (e.search = V), null != F && (e.hash = F), (t) => (null == t || t.preventDefault(), (0, I.Z)(B, e), !0);
    }
    if (null != B && Z) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != C && C.type === g.g.APP_OAUTH2_LINK && _.ZP.trackWithMetadata(M.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let H = (0, v.Ao)(B);
    if (null != B && Z && null != H)
        return (e) => {
            null == e || e.preventDefault();
            let t = P.Z.getGuildId();
            null != H.guildId && '' !== H.guildId && H.guildId !== t && (0, I.Z)(M.Z5c.CHANNEL(H.guildId));
            let n = y.ZP.getGuildScheduledEvent(H.guildEventId);
            return null != n && (0, b.bO)({ eventId: n.id }), !0;
        };
    if (Z && (null == B ? void 0 : B.startsWith('/settings/'))) {
        let { default: e } = n(722589),
            t = e(B);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                l.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: s
                }),
                !0
            );
    }
    return Z && (null == B ? void 0 : B.startsWith('/discovery/quests'))
        ? (e) => (null == e || e.preventDefault(), (0, T.navigateToQuestHome)({ fromContent: i.j.QUEST_BADGE }), !0)
        : Z && (null == B ? void 0 : B.startsWith('/discovery/servers'))
          ? (e) => (
                null == e || e.preventDefault(),
                n
                    .e('11866')
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: r } = n(49898);
                        t({ tab: r.SERVERS });
                    }),
                !0
            )
          : a || null == (0, N.v)(e)
            ? void 0
            : (t) => (null == t || t.preventDefault(), A.Z.show(e), !0);
}
