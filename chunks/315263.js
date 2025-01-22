r.r(n),
    r.d(n, {
        default: function () {
            return F;
        }
    });
var i = r(47120);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(873546),
    c = r(636977),
    d = r(570140),
    f = r(447543),
    p = r(230711),
    h = r(367907),
    _ = r(132871),
    m = r(421474),
    g = r(960904),
    E = r(830121),
    v = r(926061),
    y = r(15274),
    b = r(924301),
    I = r(543842),
    T = r(754688),
    S = r(336197),
    A = r(977156),
    C = r(341907),
    N = r(540709),
    R = r(881706),
    O = r(701190),
    D = r(944486),
    x = r(914010),
    L = r(771845),
    w = r(626135),
    P = r(591759),
    M = r(782568),
    k = r(981631),
    U = r(46140);
async function B(e, n) {
    await d.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: n,
        context: k.IlC.APP
    });
}
async function G(e) {
    var n;
    let r = O.Z.getInvite(e.code);
    if (null == r) {
        let { invite: n } = await f.Z.resolveInvite(e.code, 'Markdown Link');
        r = n;
    }
    if (null == r) return;
    if (r.state === k.r2o.EXPIRED || r.state === k.r2o.BANNED || r.state === k.r2o.ERROR) {
        await B(r, e.code);
        return;
    }
    let i = L.ZP.getFlattenedGuildIds(),
        a = null == r ? void 0 : null === (n = r.guild) || void 0 === n ? void 0 : n.id;
    null != a && i.includes(a) ? f.Z.transitionToInviteSync(r) : await B(r, e.code);
}
let Z = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function F(e) {
    var n;
    let { skipExtensionCheck: i, analyticsLocations: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z,
        o = (0, E.zO)(e);
    if (null != o && (o.type === g.g.INVITE || o.type === g.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), G(o), !0);
    if (null != o && (o.type === g.g.APP_DIRECTORY_PROFILE || o.type === g.g.APP_DIRECTORY_STOREFRONT || o.type === g.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (n) => {
            var i, a;
            null == n || n.preventDefault();
            let { code: s } = o,
                { applicationId: l, skuId: c } =
                    o.type === g.g.APP_DIRECTORY_PROFILE || o.type === g.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: s,
                              skuId: void 0
                          }
                        : null !== (i = (0, m.Q)(s)) && void 0 !== i
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                d = null !== (a = x.Z.getGuildId()) && void 0 !== a ? a : void 0;
            if (null == l) (0, M.Z)(e);
            else {
                w.default.track(k.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: l,
                    device_platform: u.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: d,
                    channel_id: D.Z.getChannelId()
                });
                (0, v.l5)({ location: 'embedded_link' })
                    ? r
                          .e('11866')
                          .then(r.bind(r, 749681))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: n } = e,
                                  { GlobalDiscoveryTab: i } = r(49898),
                                  { GlobalDiscoveryAppsSections: a } = r(979007);
                              n({
                                  tab: i.APPS,
                                  applicationId: l,
                                  section: (0, I.Z)(a, o.type === g.g.APP_DIRECTORY_PROFILE ? a.ABOUT : a.STORE),
                                  skuId: c
                              });
                          })
                    : r
                          .e('56630')
                          .then(r.bind(r, 147890))
                          .then((e) => {
                              let { goToAppDirectory: n } = e,
                                  { ApplicationDirectoryViews: i } = r(132871),
                                  { ApplicationDirectoryProfileSections: a } = r(272242);
                              n({
                                  view: i.APPLICATION,
                                  applicationId: l,
                                  guildId: d,
                                  applicationSection: (0, I.Z)(a, o.type === g.g.APP_DIRECTORY_PROFILE ? a.ABOUT : a.STORE),
                                  entrypoint: { name: _.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                                  skuId: c
                              });
                          });
            }
            return !0;
        };
    if (null != o && o.type === g.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [n, i] = o.code.split('-');
            return (
                r
                    .e('84239')
                    .then(r.bind(r, 838433))
                    .then((e) => {
                        let { openGuildProductLink: r } = e;
                        r(n, i);
                    }),
                !0
            );
        };
    if (null != o && o.type === g.g.QUESTS_EMBED && (0, A.cB)({ location: U.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(r.bind(r, 341907))
                .then((e) => {
                    let { navigateToQuestHome: n } = e;
                    n(U.dr.CODED_LINK, c.j.QUEST_SHARE_LINK, o.code);
                }),
            !0
        );
    let { host: s, hostname: l, pathname: d, search: f, hash: O } = null !== (n = P.Z.toURLSafe(e)) && void 0 !== n ? n : {},
        L = P.Z.isDiscordHostname(null != l ? l : null) || P.Z.isDiscordLocalhost(null != s ? s : null, null != l ? l : null);
    if (L && ((null == d ? void 0 : d.startsWith('/application-directory')) || (null == d ? void 0 : d.startsWith('/discovery/applications')))) {
        let e = d.split('/'),
            n = null == d ? void 0 : d.startsWith('/discovery/applications'),
            i = e[n ? 3 : 2],
            a = 'search' === i,
            o = n && 'categories' === i && 'featured' !== e[4];
        return (n) => {
            var i, s, l, u;
            if ((null == n || n.preventDefault(), (0, v.l5)({ location: 'embedded_link' }))) {
                let n, u, c;
                if (a) {
                    let e = new URLSearchParams(f);
                    (n = null !== (i = e.get('q')) && void 0 !== i ? i : void 0), (u = null !== (s = e.get('category_id')) && void 0 !== s ? s : void 0), (c = null !== (l = e.get('page')) && void 0 !== l ? l : void 0);
                } else o && (u = e[4]);
                r.e('11866')
                    .then(r.bind(r, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: i } = e,
                            { GlobalDiscoveryTab: a } = r(49898);
                        i({
                            tab: a.APPS,
                            categoryId: null == u || Number.isNaN(u) ? void 0 : Number(u),
                            page: null == c || Number.isNaN(c) ? void 0 : Number(c),
                            query: n
                        });
                    });
            } else {
                let { ApplicationDirectoryViews: e } = r(132871),
                    n = null !== (u = x.Z.getGuildId()) && void 0 !== u ? u : void 0,
                    i = a || o ? e.SEARCH : e.HOME;
                r.e('56630')
                    .then(r.bind(r, 147890))
                    .then((e) => {
                        let { goToAppDirectory: r } = e;
                        r({
                            view: i,
                            guildId: n,
                            entrypoint: { name: _.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    });
            }
            return !0;
        };
    }
    if (null != d && L && P.Z.isAppRoute(d)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != f && (e.search = f), null != O && (e.hash = O), (n) => (null == n || n.preventDefault(), (0, S.Z)(d, e), !0);
    }
    if (null != d && L) {
        let { getOAuth2AuthorizeProps: n, openOAuth2ModalWithCreateGuildModal: i } = r(69580),
            a = n(e);
        if (null != a) return (e) => (null == e || e.preventDefault(), null != o && o.type === g.g.APP_OAUTH2_LINK && h.ZP.trackWithMetadata(k.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: a.clientId }), i(a), !0);
    }
    let B = (0, T.Ao)(d);
    if (null != d && L && null != B)
        return (e) => {
            null == e || e.preventDefault();
            let n = x.Z.getGuildId();
            null != B.guildId && '' !== B.guildId && B.guildId !== n && (0, S.Z)(k.Z5c.CHANNEL(B.guildId));
            let r = b.ZP.getGuildScheduledEvent(B.guildEventId);
            return null != r && (0, y.bO)({ eventId: r.id }), !0;
        };
    if (L && (null == d ? void 0 : d.startsWith('/settings/'))) {
        let { default: e } = r(357269),
            n = e(d);
        if (null != n)
            return (e) => (
                null == e || e.preventDefault(),
                p.Z.open(n.section, n.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: n.source,
                    analyticsLocations: a
                }),
                !0
            );
    }
    return L && (null == d ? void 0 : d.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, C.navigateToQuestHome)(U.dr.BADGE, c.j.QUEST_BADGE), !0) : i || null == (0, R.v)(e) ? void 0 : (n) => (null == n || n.preventDefault(), N.Z.show(e), !0);
}
