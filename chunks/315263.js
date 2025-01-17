r.r(n),
    r.d(n, {
        default: function () {
            return F;
        }
    });
var i = r(47120);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(873546),
    c = r(636977),
    d = r(570140),
    f = r(447543),
    _ = r(230711),
    h = r(367907),
    p = r(132871),
    m = r(421474),
    g = r(960904),
    E = r(830121),
    v = r(926061),
    I = r(15274),
    T = r(924301),
    b = r(543842),
    y = r(754688),
    S = r(336197),
    A = r(977156),
    N = r(341907),
    C = r(540709),
    R = r(881706),
    O = r(701190),
    D = r(944486),
    L = r(914010),
    x = r(771845),
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
    let i = x.ZP.getFlattenedGuildIds(),
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
        s = (0, E.zO)(e);
    if (null != s && (s.type === g.g.INVITE || s.type === g.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), G(s), !0);
    if (null != s && (s.type === g.g.APP_DIRECTORY_PROFILE || s.type === g.g.APP_DIRECTORY_STOREFRONT || s.type === g.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (n) => {
            var i, a;
            null == n || n.preventDefault();
            let { code: o } = s,
                { applicationId: l, skuId: c } =
                    s.type === g.g.APP_DIRECTORY_PROFILE || s.type === g.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: o,
                              skuId: void 0
                          }
                        : null !== (i = (0, m.Q)(o)) && void 0 !== i
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                d = null !== (a = L.Z.getGuildId()) && void 0 !== a ? a : void 0;
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
                                  section: (0, b.Z)(a, s.type === g.g.APP_DIRECTORY_PROFILE ? a.ABOUT : a.STORE),
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
                                  applicationSection: (0, b.Z)(a, s.type === g.g.APP_DIRECTORY_PROFILE ? a.ABOUT : a.STORE),
                                  entrypoint: { name: p.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                                  skuId: c
                              });
                          });
            }
            return !0;
        };
    if (null != s && s.type === g.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [n, i] = s.code.split('-');
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
    if (null != s && s.type === g.g.QUESTS_EMBED && (0, A.cB)({ location: U.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(r.bind(r, 341907))
                .then((e) => {
                    let { navigateToQuestHome: n } = e;
                    n(U.dr.CODED_LINK, c.j.QUEST_SHARE_LINK, s.code);
                }),
            !0
        );
    let { host: o, hostname: l, pathname: d, search: f, hash: O } = null !== (n = P.Z.toURLSafe(e)) && void 0 !== n ? n : {},
        x = P.Z.isDiscordHostname(null != l ? l : null) || P.Z.isDiscordLocalhost(null != o ? o : null, null != l ? l : null);
    if (x && ((null == d ? void 0 : d.startsWith('/application-directory')) || (null == d ? void 0 : d.startsWith('/discovery/applications')))) {
        let e = d.split('/'),
            n = null == d ? void 0 : d.startsWith('/discovery/applications'),
            i = e[n ? 3 : 2],
            a = 'search' === i,
            s = n && 'categories' === i && 'featured' !== e[4];
        return (n) => {
            var i, o, l, u;
            if ((null == n || n.preventDefault(), (0, v.l5)({ location: 'embedded_link' }))) {
                let n, u, c;
                if (a) {
                    let e = new URLSearchParams(f);
                    (n = null !== (i = e.get('q')) && void 0 !== i ? i : void 0), (u = null !== (o = e.get('category_id')) && void 0 !== o ? o : void 0), (c = null !== (l = e.get('page')) && void 0 !== l ? l : void 0);
                } else s && (u = e[4]);
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
                    n = null !== (u = L.Z.getGuildId()) && void 0 !== u ? u : void 0,
                    i = a || s ? e.SEARCH : e.HOME;
                r.e('56630')
                    .then(r.bind(r, 147890))
                    .then((e) => {
                        let { goToAppDirectory: r } = e;
                        r({
                            view: i,
                            guildId: n,
                            entrypoint: { name: p.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    });
            }
            return !0;
        };
    }
    if (null != d && x && P.Z.isAppRoute(d)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != f && (e.search = f), null != O && (e.hash = O), (n) => (null == n || n.preventDefault(), (0, S.Z)(d, e), !0);
    }
    if (null != d && x) {
        let { getOAuth2AuthorizeProps: n, openOAuth2ModalWithCreateGuildModal: i } = r(69580),
            a = n(e);
        if (null != a) return (e) => (null == e || e.preventDefault(), null != s && s.type === g.g.APP_OAUTH2_LINK && h.ZP.trackWithMetadata(k.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: a.clientId }), i(a), !0);
    }
    let B = (0, y.Ao)(d);
    if (null != d && x && null != B)
        return (e) => {
            null == e || e.preventDefault();
            let n = L.Z.getGuildId();
            null != B.guildId && '' !== B.guildId && B.guildId !== n && (0, S.Z)(k.Z5c.CHANNEL(B.guildId));
            let r = T.ZP.getGuildScheduledEvent(B.guildEventId);
            return null != r && (0, I.bO)({ eventId: r.id }), !0;
        };
    if (x && (null == d ? void 0 : d.startsWith('/settings/'))) {
        let { default: e } = r(357269),
            n = e(d);
        if (null != n)
            return (e) => (
                null == e || e.preventDefault(),
                _.Z.open(n.section, n.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: n.source,
                    analyticsLocations: a
                }),
                !0
            );
    }
    return x && (null == d ? void 0 : d.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, N.navigateToQuestHome)(U.dr.BADGE, c.j.QUEST_BADGE), !0) : i || null == (0, R.v)(e) ? void 0 : (n) => (null == n || n.preventDefault(), C.Z.show(e), !0);
}
