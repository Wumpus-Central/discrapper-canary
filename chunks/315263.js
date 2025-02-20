n.r(t), n.d(t, { default: () => k }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(873546),
    i = n(636977),
    o = n(570140),
    a = n(493683),
    s = n(447543),
    l = n(230711),
    c = n(122613),
    u = n(367907),
    d = n(421474),
    f = n(812206),
    p = n(960904),
    _ = n(830121),
    h = n(15274),
    m = n(924301),
    g = n(543842),
    E = n(754688),
    v = n(336197),
    b = n(977156),
    y = n(341907),
    O = n(540709),
    S = n(881706),
    I = n(701190),
    T = n(944486),
    N = n(914010),
    A = n(771845),
    C = n(626135),
    R = n(591759),
    P = n(782568),
    w = n(981631),
    D = n(46140);
async function x(e, t) {
    await o.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: w.IlC.APP
    });
}
async function L(e) {
    var t;
    let n = I.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === w.r2o.EXPIRED || n.state === w.r2o.BANNED || n.state === w.r2o.ERROR) {
        await x(n, e.code);
        return;
    }
    let r = A.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? s.Z.transitionToInviteSync(n) : await x(n, e.code);
}
let M = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function k(e) {
    var t;
    let { skipExtensionCheck: o, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
        I = (0, _.zO)(e);
    if (null != I && (I.type === p.g.INVITE || I.type === p.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), L(I), !0);
    if (null != I && (I.type === p.g.APP_DIRECTORY_PROFILE || I.type === p.g.APP_DIRECTORY_STOREFRONT || I.type === p.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (t) => {
            var i, o;
            null == t || t.preventDefault();
            let { code: a } = I,
                { applicationId: s, skuId: l } =
                    I.type === p.g.APP_DIRECTORY_PROFILE || I.type === p.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: a,
                              skuId: void 0
                          }
                        : null !== (i = (0, d.Q)(a)) && void 0 !== i
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                c = null !== (o = N.Z.getGuildId()) && void 0 !== o ? o : void 0;
            return (
                null == s
                    ? (0, P.Z)(e)
                    : (C.default.track(w.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.tq ? 'mobile_web' : 'desktop_web',
                          guild_id: c,
                          channel_id: T.Z.getChannelId()
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
                                  section: (0, g.Z)(i, I.type === p.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l
                              });
                          })),
                !0
            );
        };
    if (null != I && I.type === p.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n, r;
            null == e || e.preventDefault();
            let { code: i, url: o } = I,
                l = f.Z.getApplication(i),
                u = null == l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.id;
            if (null == u) return !1;
            let d = new URL(o),
                p = null !== (n = d.searchParams.get('custom_id')) && void 0 !== n ? n : void 0,
                _ = null !== (r = d.searchParams.get('referrer_id')) && void 0 !== r ? r : void 0;
            return (
                a.Z.openPrivateChannel(u)
                    .then((e) =>
                        (0, c.Z)({
                            targetApplicationId: i,
                            channelId: e,
                            analyticsLocations: s,
                            customId: p,
                            referrerId: _
                        })
                    )
                    .catch(() => {}),
                !0
            );
        };
    if (null != I && I.type === p.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = I.code.split('-');
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
    if (null != I && I.type === p.g.QUESTS_EMBED && (0, b.cB)({ location: D.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t({
                        fromContent: i.j.QUEST_SHARE_LINK,
                        questId: I.code
                    });
                }),
            !0
        );
    let { host: A, hostname: x, pathname: k, search: j, hash: U } = null !== (t = R.Z.toURLSafe(e)) && void 0 !== t ? t : {},
        G = R.Z.isDiscordHostname(null != x ? x : null) || R.Z.isDiscordLocalhost(null != A ? A : null, null != x ? x : null);
    if (G && ((null == k ? void 0 : k.startsWith('/application-directory')) || (null == k ? void 0 : k.startsWith('/discovery/applications')))) {
        let e = k.split('/'),
            t = null == k ? void 0 : k.startsWith('/discovery/applications'),
            r = e[t ? 3 : 2],
            i = 'search' === r,
            o = t && 'categories' === r && 'featured' !== e[4];
        return (t) => {
            let r, a, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(j);
                (r = null !== (l = e.get('q')) && void 0 !== l ? l : void 0), (a = null !== (c = e.get('category_id')) && void 0 !== c ? c : void 0), (s = null !== (u = e.get('page')) && void 0 !== u ? u : void 0);
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
    if (null != k && G && R.Z.isAppRoute(k)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != j && (e.search = j), null != U && (e.hash = U), (t) => (null == t || t.preventDefault(), (0, v.Z)(k, e), !0);
    }
    if (null != k && G) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != I && I.type === p.g.APP_OAUTH2_LINK && u.ZP.trackWithMetadata(w.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let B = (0, E.Ao)(k);
    if (null != k && G && null != B)
        return (e) => {
            null == e || e.preventDefault();
            let t = N.Z.getGuildId();
            null != B.guildId && '' !== B.guildId && B.guildId !== t && (0, v.Z)(w.Z5c.CHANNEL(B.guildId));
            let n = m.ZP.getGuildScheduledEvent(B.guildEventId);
            return null != n && (0, h.bO)({ eventId: n.id }), !0;
        };
    if (G && (null == k ? void 0 : k.startsWith('/settings/'))) {
        let { default: e } = n(722589),
            t = e(k);
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
    return G && (null == k ? void 0 : k.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, y.navigateToQuestHome)({ fromContent: i.j.QUEST_BADGE }), !0) : o || null == (0, S.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), O.Z.show(e), !0);
}
