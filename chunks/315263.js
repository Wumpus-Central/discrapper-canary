n.r(t), n.d(t, { default: () => k }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(873546),
    r = n(636977),
    a = n(570140),
    s = n(493683),
    o = n(447543),
    l = n(230711),
    u = n(122613),
    c = n(367907),
    d = n(421474),
    f = n(812206),
    _ = n(960904),
    p = n(830121),
    h = n(15274),
    m = n(924301),
    g = n(543842),
    E = n(754688),
    v = n(336197),
    y = n(977156),
    I = n(341907),
    b = n(540709),
    T = n(881706),
    S = n(701190),
    A = n(944486),
    N = n(914010),
    C = n(771845),
    R = n(626135),
    O = n(591759),
    D = n(782568),
    x = n(981631),
    L = n(46140);
async function P(e, t) {
    await a.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: x.IlC.APP
    });
}
async function w(e) {
    var t;
    let n = S.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await o.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === x.r2o.EXPIRED || n.state === x.r2o.BANNED || n.state === x.r2o.ERROR) {
        await P(n, e.code);
        return;
    }
    let i = C.ZP.getFlattenedGuildIds(),
        r = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != r && i.includes(r) ? o.Z.transitionToInviteSync(n) : await P(n, e.code);
}
let M = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function k(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
        S = (0, p.zO)(e);
    if (null != S && (S.type === _.g.INVITE || S.type === _.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), w(S), !0);
    if (null != S && (S.type === _.g.APP_DIRECTORY_PROFILE || S.type === _.g.APP_DIRECTORY_STOREFRONT || S.type === _.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (t) => {
            var r, a;
            null == t || t.preventDefault();
            let { code: s } = S,
                { applicationId: o, skuId: l } =
                    S.type === _.g.APP_DIRECTORY_PROFILE || S.type === _.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: s,
                              skuId: void 0
                          }
                        : null !== (r = (0, d.Q)(s)) && void 0 !== r
                          ? r
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                u = null !== (a = N.Z.getGuildId()) && void 0 !== a ? a : void 0;
            return (
                null == o
                    ? (0, D.Z)(e)
                    : (R.default.track(x.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: o,
                          device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                          guild_id: u,
                          channel_id: A.Z.getChannelId()
                      }),
                      n
                          .e('11866')
                          .then(n.bind(n, 749681))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: i } = n(49898),
                                  { GlobalDiscoveryAppsSections: r } = n(979007);
                              t({
                                  tab: i.APPS,
                                  applicationId: o,
                                  section: (0, g.Z)(r, S.type === _.g.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: l
                              });
                          })),
                !0
            );
        };
    if (null != S && S.type === _.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n, i;
            null == e || e.preventDefault();
            let { code: r, url: a } = S,
                l = f.Z.getApplication(r),
                c = null == l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.id;
            if (null == c) return !1;
            let d = new URL(a),
                _ = null !== (n = d.searchParams.get('custom_id')) && void 0 !== n ? n : void 0,
                p = null !== (i = d.searchParams.get('referrer_id')) && void 0 !== i ? i : void 0;
            return (
                s.Z.openPrivateChannel(c)
                    .then((e) =>
                        (0, u.Z)({
                            targetApplicationId: r,
                            channelId: e,
                            analyticsLocations: o,
                            customId: _,
                            referrerId: p
                        })
                    )
                    .catch(() => {}),
                !0
            );
        };
    if (null != S && S.type === _.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, i] = S.code.split('-');
            return (
                n
                    .e('84239')
                    .then(n.bind(n, 838433))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, i);
                    }),
                !0
            );
        };
    if (null != S && S.type === _.g.QUESTS_EMBED && (0, y.cB)({ location: L.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(L.dr.CODED_LINK, r.j.QUEST_SHARE_LINK, S.code);
                }),
            !0
        );
    let { host: C, hostname: P, pathname: k, search: U, hash: G } = null !== (t = O.Z.toURLSafe(e)) && void 0 !== t ? t : {},
        B = O.Z.isDiscordHostname(null != P ? P : null) || O.Z.isDiscordLocalhost(null != C ? C : null, null != P ? P : null);
    if (B && ((null == k ? void 0 : k.startsWith('/application-directory')) || (null == k ? void 0 : k.startsWith('/discovery/applications')))) {
        let e = k.split('/'),
            t = null == k ? void 0 : k.startsWith('/discovery/applications'),
            i = e[t ? 3 : 2],
            r = 'search' === i,
            a = t && 'categories' === i && 'featured' !== e[4];
        return (t) => {
            let i, s, o;
            if ((null == t || t.preventDefault(), r)) {
                var l, u, c;
                let e = new URLSearchParams(U);
                (i = null !== (l = e.get('q')) && void 0 !== l ? l : void 0), (s = null !== (u = e.get('category_id')) && void 0 !== u ? u : void 0), (o = null !== (c = e.get('page')) && void 0 !== c ? c : void 0);
            } else a && (s = e[4]);
            return (
                n
                    .e('11866')
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: r } = n(49898);
                        t({
                            tab: r.APPS,
                            categoryId: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            page: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            query: i
                        });
                    }),
                !0
            );
        };
    }
    if (null != k && B && O.Z.isAppRoute(k)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != U && (e.search = U), null != G && (e.hash = G), (t) => (null == t || t.preventDefault(), (0, v.Z)(k, e), !0);
    }
    if (null != k && B) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(69580),
            r = t(e);
        if (null != r) return (e) => (null == e || e.preventDefault(), null != S && S.type === _.g.APP_OAUTH2_LINK && c.ZP.trackWithMetadata(x.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }), i(r), !0);
    }
    let Z = (0, E.Ao)(k);
    if (null != k && B && null != Z)
        return (e) => {
            null == e || e.preventDefault();
            let t = N.Z.getGuildId();
            null != Z.guildId && '' !== Z.guildId && Z.guildId !== t && (0, v.Z)(x.Z5c.CHANNEL(Z.guildId));
            let n = m.ZP.getGuildScheduledEvent(Z.guildEventId);
            return null != n && (0, h.bO)({ eventId: n.id }), !0;
        };
    if (B && (null == k ? void 0 : k.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(k);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                l.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: o
                }),
                !0
            );
    }
    return B && (null == k ? void 0 : k.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, I.navigateToQuestHome)(L.dr.BADGE, r.j.QUEST_BADGE), !0) : a || null == (0, T.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), b.Z.show(e), !0);
}
