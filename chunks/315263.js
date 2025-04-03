n.r(t), n.d(t, { default: () => B }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(873546),
    i = n(636977),
    o = n(570140),
    a = n(493683),
    s = n(447543),
    l = n(230711),
    c = n(566620),
    u = n(122613),
    d = n(508686),
    f = n(574952),
    _ = n(367907),
    p = n(421474),
    h = n(812206),
    m = n(506895),
    g = n(960904),
    E = n(830121),
    b = n(15274),
    y = n(924301),
    v = n(543842),
    O = n(754688),
    I = n(336197),
    S = n(977156),
    T = n(341907),
    N = n(540709),
    A = n(881706),
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
    await o.Z.dispatch({
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
    let { skipExtensionCheck: o, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
        C = (0, E.zO)(e);
    if (null != C && (C.type === g.g.INVITE || C.type === g.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), U(C), !0);
    if (null != C && (C.type === g.g.APP_DIRECTORY_PROFILE || C.type === g.g.APP_DIRECTORY_STOREFRONT || C.type === g.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (t) => {
            var i, o;
            null == t || t.preventDefault();
            let { code: a } = C,
                { applicationId: s, skuId: l } =
                    C.type === g.g.APP_DIRECTORY_PROFILE || C.type === g.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: a,
                              skuId: void 0
                          }
                        : null != (i = (0, p.Q)(a))
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                c = null != (o = P.Z.getGuildId()) ? o : void 0;
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
                                  section: (0, v.Z)(i, C.type === g.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l
                              });
                          })),
                !0
            );
        };
    if (null != C && C.type === g.g.ACTIVITY_BOOKMARK)
        return (e) => {
            null == e || e.preventDefault();
            let { code: t, url: n } = C,
                r = h.Z.getApplication(t),
                i = new URL(n),
                o = (0, f.Z)(),
                { currentChannelId: l, instanceId: _, isCurrentlyInInstance: p, canLaunchInChannel: g } = (0, m.v)(t);
            if (g)
                return (
                    !p &&
                    null != l &&
                    ((0, d.u)(t, i.searchParams.get('link_id'), i.searchParams.get('custom_id'), i.searchParams.get('referrer_id'))
                        .then(async (e) => {
                            let { customId: n, referrerId: r } = e;
                            await (0, c.G6)({
                                channelId: l,
                                applicationId: t,
                                isStart: null == _,
                                instanceId: null != _ ? _ : void 0,
                                embeddedActivitiesManager: o,
                                customId: n,
                                referrerId: r,
                                analyticsLocations: s
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                var E;
                let e = null == r || null == (E = r.bot) ? void 0 : E.id;
                return (
                    null != e &&
                    (a.Z.openPrivateChannel(e)
                        .then(async (e) => {
                            let { customId: n, referrerId: r } = await (0, d.u)(t, i.searchParams.get('link_id'), i.searchParams.get('custom_id'), i.searchParams.get('referrer_id'));
                            (0, u.Z)({
                                targetApplicationId: t,
                                channelId: e,
                                analyticsLocations: s,
                                customId: n,
                                referrerId: r
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
    let { host: w, hostname: j, pathname: B, search: F, hash: V } = null != (t = L.Z.toURLSafe(e)) ? t : {},
        Z = L.Z.isDiscordHostname(null != j ? j : null) || L.Z.isDiscordLocalhost(null != w ? w : null, null != j ? j : null);
    if (Z && ((null == B ? void 0 : B.startsWith('/application-directory')) || (null == B ? void 0 : B.startsWith('/discovery/applications')))) {
        let e = B.split('/'),
            t = null == B ? void 0 : B.startsWith('/discovery/applications'),
            r = e[t ? 3 : 2],
            i = 'search' === r,
            o = t && 'categories' === r && 'featured' !== e[4];
        return (t) => {
            let r, a, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(F);
                (r = null != (l = e.get('q')) ? l : void 0), (a = null != (c = e.get('category_id')) ? c : void 0), (s = null != (u = e.get('page')) ? u : void 0);
            } else o && (a = e[4]);
            return (
                n
                    .e('11866')
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(49898);
                        t({
                            tab: i.APPS,
                            categoryId: null == a || Number.isNaN(a) ? void 0 : Number(a),
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
        return null != F && (e.search = F), null != V && (e.hash = V), (t) => (null == t || t.preventDefault(), (0, I.Z)(B, e), !0);
    }
    if (null != B && Z) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != C && C.type === g.g.APP_OAUTH2_LINK && _.ZP.trackWithMetadata(M.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let H = (0, O.Ao)(B);
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
          : o || null == (0, A.v)(e)
            ? void 0
            : (t) => (null == t || t.preventDefault(), N.Z.show(e), !0);
}
