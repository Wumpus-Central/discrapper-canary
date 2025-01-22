r.r(n),
    r.d(n, {
        default: function () {
            return G;
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
    _ = r(421474),
    m = r(960904),
    g = r(830121),
    E = r(15274),
    v = r(924301),
    y = r(543842),
    b = r(754688),
    I = r(336197),
    T = r(977156),
    S = r(341907),
    A = r(540709),
    C = r(881706),
    N = r(701190),
    R = r(944486),
    O = r(914010),
    D = r(771845),
    L = r(626135),
    x = r(591759),
    w = r(782568),
    P = r(981631),
    M = r(46140);
async function k(e, n) {
    await d.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: n,
        context: P.IlC.APP
    });
}
async function U(e) {
    var n;
    let r = N.Z.getInvite(e.code);
    if (null == r) {
        let { invite: n } = await f.Z.resolveInvite(e.code, 'Markdown Link');
        r = n;
    }
    if (null == r) return;
    if (r.state === P.r2o.EXPIRED || r.state === P.r2o.BANNED || r.state === P.r2o.ERROR) {
        await k(r, e.code);
        return;
    }
    let i = D.ZP.getFlattenedGuildIds(),
        a = null == r ? void 0 : null === (n = r.guild) || void 0 === n ? void 0 : n.id;
    null != a && i.includes(a) ? f.Z.transitionToInviteSync(r) : await k(r, e.code);
}
let B = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function G(e) {
    var n;
    let { skipExtensionCheck: i, analyticsLocations: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B,
        o = (0, g.zO)(e);
    if (null != o && (o.type === m.g.INVITE || o.type === m.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), U(o), !0);
    if (null != o && (o.type === m.g.APP_DIRECTORY_PROFILE || o.type === m.g.APP_DIRECTORY_STOREFRONT || o.type === m.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (n) => {
            var i, a;
            null == n || n.preventDefault();
            let { code: s } = o,
                { applicationId: l, skuId: c } =
                    o.type === m.g.APP_DIRECTORY_PROFILE || o.type === m.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: s,
                              skuId: void 0
                          }
                        : null !== (i = (0, _.Q)(s)) && void 0 !== i
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                d = null !== (a = O.Z.getGuildId()) && void 0 !== a ? a : void 0;
            if (null == l) (0, w.Z)(e);
            else {
                L.default.track(P.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: l,
                    device_platform: u.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: d,
                    channel_id: R.Z.getChannelId()
                });
                r.e('11866')
                    .then(r.bind(r, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: n } = e,
                            { GlobalDiscoveryTab: i } = r(49898),
                            { GlobalDiscoveryAppsSections: a } = r(979007);
                        n({
                            tab: i.APPS,
                            applicationId: l,
                            section: (0, y.Z)(a, o.type === m.g.APP_DIRECTORY_PROFILE ? a.ABOUT : a.STORE),
                            skuId: c
                        });
                    });
            }
            return !0;
        };
    if (null != o && o.type === m.g.GUILD_PRODUCT)
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
    if (null != o && o.type === m.g.QUESTS_EMBED && (0, T.cB)({ location: M.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(r.bind(r, 341907))
                .then((e) => {
                    let { navigateToQuestHome: n } = e;
                    n(M.dr.CODED_LINK, c.j.QUEST_SHARE_LINK, o.code);
                }),
            !0
        );
    let { host: s, hostname: l, pathname: d, search: f, hash: N } = null !== (n = x.Z.toURLSafe(e)) && void 0 !== n ? n : {},
        D = x.Z.isDiscordHostname(null != l ? l : null) || x.Z.isDiscordLocalhost(null != s ? s : null, null != l ? l : null);
    if (D && ((null == d ? void 0 : d.startsWith('/application-directory')) || (null == d ? void 0 : d.startsWith('/discovery/applications')))) {
        let e = d.split('/'),
            n = null == d ? void 0 : d.startsWith('/discovery/applications'),
            i = e[n ? 3 : 2],
            a = 'search' === i,
            o = n && 'categories' === i && 'featured' !== e[4];
        return (n) => {
            let i, s, l;
            if ((null == n || n.preventDefault(), a)) {
                var u, c, d;
                let e = new URLSearchParams(f);
                (i = null !== (u = e.get('q')) && void 0 !== u ? u : void 0), (s = null !== (c = e.get('category_id')) && void 0 !== c ? c : void 0), (l = null !== (d = e.get('page')) && void 0 !== d ? d : void 0);
            } else o && (s = e[4]);
            return (
                r
                    .e('11866')
                    .then(r.bind(r, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: n } = e,
                            { GlobalDiscoveryTab: a } = r(49898);
                        n({
                            tab: a.APPS,
                            categoryId: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            page: null == l || Number.isNaN(l) ? void 0 : Number(l),
                            query: i
                        });
                    }),
                !0
            );
        };
    }
    if (null != d && D && x.Z.isAppRoute(d)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != f && (e.search = f), null != N && (e.hash = N), (n) => (null == n || n.preventDefault(), (0, I.Z)(d, e), !0);
    }
    if (null != d && D) {
        let { getOAuth2AuthorizeProps: n, openOAuth2ModalWithCreateGuildModal: i } = r(69580),
            a = n(e);
        if (null != a) return (e) => (null == e || e.preventDefault(), null != o && o.type === m.g.APP_OAUTH2_LINK && h.ZP.trackWithMetadata(P.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: a.clientId }), i(a), !0);
    }
    let k = (0, b.Ao)(d);
    if (null != d && D && null != k)
        return (e) => {
            null == e || e.preventDefault();
            let n = O.Z.getGuildId();
            null != k.guildId && '' !== k.guildId && k.guildId !== n && (0, I.Z)(P.Z5c.CHANNEL(k.guildId));
            let r = v.ZP.getGuildScheduledEvent(k.guildEventId);
            return null != r && (0, E.bO)({ eventId: r.id }), !0;
        };
    if (D && (null == d ? void 0 : d.startsWith('/settings/'))) {
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
    return D && (null == d ? void 0 : d.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)(M.dr.BADGE, c.j.QUEST_BADGE), !0) : i || null == (0, C.v)(e) ? void 0 : (n) => (null == n || n.preventDefault(), A.Z.show(e), !0);
}
