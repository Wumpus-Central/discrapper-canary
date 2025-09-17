n.r(t),
    n.d(t, { default: () => G }),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282);
var r = n(873546),
    i = n(636977),
    a = n(570140),
    o = n(493683),
    s = n(447543),
    l = n(566620),
    c = n(122613),
    u = n(649256),
    d = n(574952),
    f = n(367907),
    _ = n(421474),
    p = n(812206),
    h = n(506895),
    m = n(960904),
    g = n(830121),
    E = n(15274),
    b = n(924301),
    y = n(543842),
    O = n(754688),
    v = n(336197),
    I = n(977156),
    T = n(110560),
    S = n(540709),
    A = n(881706),
    C = n(701190),
    N = n(944486),
    R = n(914010),
    P = n(771845),
    w = n(626135),
    D = n(591759),
    x = n(782568),
    L = n(981631);
n(215023);
var j = n(46140);
async function M(e, t) {
    await a.Z.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: e,
        code: t,
        context: L.IlC.APP,
    });
}
async function k(e) {
    var t;
    let n = C.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.ZP.resolveInvite(e.code, "Markdown Link");
        n = t;
    }
    if (null == n) return;
    if (n.state === L.r2o.EXPIRED || n.state === L.r2o.BANNED || n.state === L.r2o.ERROR)
        return void (await M(n, e.code));
    let r = P.ZP.getFlattenedGuildIds(),
        i = null == n || null == (t = n.guild) ? void 0 : t.id;
    null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await M(n, e.code);
}
let U = {
    skipExtensionCheck: void 0,
    analyticsLocations: [],
};
function G(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
        C = (0, g.zO)(e);
    if (null != C && (C.type === m.g.INVITE || C.type === m.g.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (null == e || e.preventDefault(), k(C), !0);
    if (
        null != C &&
        (C.type === m.g.APP_DIRECTORY_PROFILE ||
            C.type === m.g.APP_DIRECTORY_STOREFRONT ||
            C.type === m.g.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            var i, a;
            null == t || t.preventDefault();
            let { code: o } = C,
                { applicationId: s, skuId: l } =
                    C.type === m.g.APP_DIRECTORY_PROFILE || C.type === m.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: o,
                              skuId: void 0,
                          }
                        : null != (i = (0, _.Q)(o))
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0,
                            },
                c = null != (a = R.Z.getGuildId()) ? a : void 0;
            return (
                null == s
                    ? (0, x.Z)(e)
                    : (w.default.track(L.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.tq ? "mobile_web" : "desktop_web",
                          guild_id: c,
                          channel_id: N.Z.getChannelId(),
                      }),
                      Promise.resolve()
                          .then(n.bind(n, 749681))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: r } = n(49898),
                                  { GlobalDiscoveryAppsSections: i } = n(979007);
                              t({
                                  tab: r.APPS,
                                  applicationId: s,
                                  section: (0, y.Z)(i, C.type === m.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l,
                              });
                          })),
                !0
            );
        };
    if (null != C && C.type === m.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n;
            null == e || e.preventDefault();
            let { code: r, url: i } = C,
                a = p.Z.getApplication(r),
                f = new URL(i),
                _ = null != (t = f.searchParams.get("referrer_id")) ? t : void 0,
                m = (0, d.Z)(),
                { currentChannelId: g, instanceId: E, isCurrentlyInInstance: b, canLaunchInChannel: y } = (0, h.v)(r);
            if (y)
                return (
                    !b &&
                    null != g &&
                    ((0, u.ur)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: t } = e;
                            await (0, l.G6)({
                                channelId: g,
                                applicationId: r,
                                isStart: null == E,
                                embeddedActivitiesManager: m,
                                customId: t,
                                referrerId: _,
                                analyticsLocations: s,
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
                            let { customId: t } = await (0, u.ur)(
                                r,
                                f.searchParams.get("link_id"),
                                f.searchParams.get("custom_id"),
                            );
                            (0, c.Z)({
                                targetApplicationId: r,
                                channelId: e,
                                analyticsLocations: s,
                                customId: t,
                                referrerId: _,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != C && C.type === m.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = C.code.split("-");
            return (
                n
                    .e("84239")
                    .then(n.bind(n, 838433))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, r);
                    }),
                !0
            );
        };
    if (null != C && C.type === m.g.QUESTS_EMBED && (0, I.c)({ location: j.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 110560))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t({
                        fromContent: i.j.QUEST_SHARE_LINK,
                        questId: C.code,
                    });
                }),
            !0
        );
    let { host: P, hostname: M, pathname: G, search: B, hash: Z } = null != (t = D.Z.toURLSafe(e)) ? t : {},
        F =
            D.Z.isDiscordHostname(null != M ? M : null) ||
            D.Z.isDiscordLocalhost(null != P ? P : null, null != M ? M : null);
    if (
        F &&
        ((null == G ? void 0 : G.startsWith("/application-directory")) ||
            (null == G ? void 0 : G.startsWith("/discovery/applications")))
    ) {
        let e = G.split("/"),
            t = null == G ? void 0 : G.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            a = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, o, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(B);
                (r = null != (l = e.get("q")) ? l : void 0),
                    (o = null != (c = e.get("category_id")) ? c : void 0),
                    (s = null != (u = e.get("page")) ? u : void 0);
            } else a && (o = e[4]);
            return (
                Promise.resolve()
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(49898);
                        t({
                            tab: i.APPS,
                            categoryId: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            page: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            query: r,
                        });
                    }),
                !0
            );
        };
    }
    if (null != G && F && D.Z.isAppRoute(G)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0,
        };
        return (
            null != B && (e.search = B),
            null != Z && (e.hash = Z),
            (t) => (null == t || t.preventDefault(), (0, v.Z)(G, e), !0)
        );
    }
    if (null != G && F) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i)
            return (e) => (
                null == e || e.preventDefault(),
                null != C &&
                    C.type === m.g.APP_OAUTH2_LINK &&
                    f.ZP.trackWithMetadata(L.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let V = (0, O.Ao)(G);
    if (null != G && F && null != V)
        return (e) => {
            null == e || e.preventDefault();
            let t = R.Z.getGuildId();
            null != V.guildId && "" !== V.guildId && V.guildId !== t && (0, v.Z)(L.Z5c.CHANNEL(V.guildId));
            let n = b.ZP.getGuildScheduledEvent(V.guildEventId);
            return null != n && (0, E.bO)({ eventId: n.id }), !0;
        };
    if (F && (null == G ? void 0 : G.startsWith("/settings/"))) {
        let { default: e } = n(722589),
            { openUserSettingsFromParsedUrl: t } = n(518596),
            r = e(G, B);
        if (null != r)
            return (e) => (
                null == e || e.preventDefault(),
                t({
                    match: r,
                    analyticsLocations: s,
                    urlOrigin: "link_click",
                }),
                !0
            );
    }
    return F && (null == G ? void 0 : G.startsWith("/discovery/quests"))
        ? (e) => (null == e || e.preventDefault(), (0, T.navigateToQuestHome)({ fromContent: i.j.QUEST_BADGE }), !0)
        : F && (null == G ? void 0 : G.startsWith("/discovery/servers"))
          ? (e) => (
                null == e || e.preventDefault(),
                Promise.resolve()
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: r } = n(49898);
                        t({ tab: r.SERVERS });
                    }),
                !0
            )
          : a || null == (0, A.v)(e)
            ? void 0
            : (t) => (null == t || t.preventDefault(), S.Z.show(e), !0);
}
