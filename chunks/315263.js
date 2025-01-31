n.r(t), n.d(t, { default: () => P }), n(47120), n(610138), n(216116), n(78328), n(815648);
var i = n(873546),
    r = n(636977),
    a = n(570140),
    s = n(447543),
    o = n(230711),
    l = n(367907),
    u = n(421474),
    c = n(960904),
    d = n(830121),
    f = n(15274),
    _ = n(924301),
    p = n(543842),
    h = n(754688),
    m = n(336197),
    g = n(977156),
    E = n(341907),
    v = n(540709),
    y = n(881706),
    I = n(701190),
    b = n(944486),
    T = n(914010),
    S = n(771845),
    A = n(626135),
    N = n(591759),
    C = n(782568),
    R = n(981631),
    O = n(46140);
async function D(e, t) {
    await a.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: R.IlC.APP
    });
}
async function x(e) {
    var t;
    let n = I.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === R.r2o.EXPIRED || n.state === R.r2o.BANNED || n.state === R.r2o.ERROR) {
        await D(n, e.code);
        return;
    }
    let i = S.ZP.getFlattenedGuildIds(),
        r = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != r && i.includes(r) ? s.Z.transitionToInviteSync(n) : await D(n, e.code);
}
let L = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function P(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L,
        I = (0, d.zO)(e);
    if (null != I && (I.type === c.g.INVITE || I.type === c.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), x(I), !0);
    if (null != I && (I.type === c.g.APP_DIRECTORY_PROFILE || I.type === c.g.APP_DIRECTORY_STOREFRONT || I.type === c.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (t) => {
            var r, a;
            null == t || t.preventDefault();
            let { code: s } = I,
                { applicationId: o, skuId: l } =
                    I.type === c.g.APP_DIRECTORY_PROFILE || I.type === c.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: s,
                              skuId: void 0
                          }
                        : null !== (r = (0, u.Q)(s)) && void 0 !== r
                          ? r
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                d = null !== (a = T.Z.getGuildId()) && void 0 !== a ? a : void 0;
            return (
                null == o
                    ? (0, C.Z)(e)
                    : (A.default.track(R.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: o,
                          device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                          guild_id: d,
                          channel_id: b.Z.getChannelId()
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
                                  section: (0, p.Z)(r, I.type === c.g.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: l
                              });
                          })),
                !0
            );
        };
    if (null != I && I.type === c.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, i] = I.code.split('-');
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
    if (null != I && I.type === c.g.QUESTS_EMBED && (0, g.cB)({ location: O.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(O.dr.CODED_LINK, r.j.QUEST_SHARE_LINK, I.code);
                }),
            !0
        );
    let { host: S, hostname: D, pathname: P, search: w, hash: M } = null !== (t = N.Z.toURLSafe(e)) && void 0 !== t ? t : {},
        k = N.Z.isDiscordHostname(null != D ? D : null) || N.Z.isDiscordLocalhost(null != S ? S : null, null != D ? D : null);
    if (k && ((null == P ? void 0 : P.startsWith('/application-directory')) || (null == P ? void 0 : P.startsWith('/discovery/applications')))) {
        let e = P.split('/'),
            t = null == P ? void 0 : P.startsWith('/discovery/applications'),
            i = e[t ? 3 : 2],
            r = 'search' === i,
            a = t && 'categories' === i && 'featured' !== e[4];
        return (t) => {
            let i, s, o;
            if ((null == t || t.preventDefault(), r)) {
                var l, u, c;
                let e = new URLSearchParams(w);
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
    if (null != P && k && N.Z.isAppRoute(P)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != w && (e.search = w), null != M && (e.hash = M), (t) => (null == t || t.preventDefault(), (0, m.Z)(P, e), !0);
    }
    if (null != P && k) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(69580),
            r = t(e);
        if (null != r) return (e) => (null == e || e.preventDefault(), null != I && I.type === c.g.APP_OAUTH2_LINK && l.ZP.trackWithMetadata(R.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }), i(r), !0);
    }
    let U = (0, h.Ao)(P);
    if (null != P && k && null != U)
        return (e) => {
            null == e || e.preventDefault();
            let t = T.Z.getGuildId();
            null != U.guildId && '' !== U.guildId && U.guildId !== t && (0, m.Z)(R.Z5c.CHANNEL(U.guildId));
            let n = _.ZP.getGuildScheduledEvent(U.guildEventId);
            return null != n && (0, f.bO)({ eventId: n.id }), !0;
        };
    if (k && (null == P ? void 0 : P.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(P);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                o.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: s
                }),
                !0
            );
    }
    return k && (null == P ? void 0 : P.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, E.navigateToQuestHome)(O.dr.BADGE, r.j.QUEST_BADGE), !0) : a || null == (0, y.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), v.Z.show(e), !0);
}
