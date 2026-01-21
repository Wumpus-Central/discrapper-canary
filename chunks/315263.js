n.r(t),
    n.d(t, { default: () => H }),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(35282),
    n(784620),
    n(973216);
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
    p = n(421474),
    _ = n(812206),
    h = n(506895),
    m = n(960904),
    g = n(830121),
    E = n(15274),
    b = n(924301),
    y = n(543842),
    O = n(754688),
    v = n(336197),
    S = n(787695),
    I = n(36243),
    T = n(110560),
    C = n(703656),
    A = n(540709),
    N = n(881706);
n(812513);
var P = n(314897),
    w = n(271383),
    R = n(701190),
    D = n(944486),
    x = n(914010),
    L = n(771845),
    j = n(626135),
    M = n(455971),
    k = n(591759),
    U = n(782568),
    G = n(981631);
n(215023);
var Z = n(324805);
async function F(e, t) {
    await a.Z.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: e,
        code: t,
        context: G.IlC.APP,
    });
}
async function B(e) {
    var t, n;
    let r = R.Z.getInvite(e.code);
    if (null == r) {
        let { invite: t } = await s.ZP.resolveInvite(e.code, "Markdown Link");
        r = t;
    }
    if (null == r) return;
    if (r.state === G.r2o.EXPIRED || r.state === G.r2o.BANNED || r.state === G.r2o.ERROR)
        return void (await F(r, e.code));
    let i = L.ZP.getFlattenedGuildIds(),
        a = null == r || null == (t = r.guild) ? void 0 : t.id,
        o = null != a && i.includes(a),
        l = !1;
    if (o && null != r.roles && r.roles.length > 0) {
        let e = P.default.getId(),
            t = w.ZP.getMember(a, e),
            i = new Set(null != (n = null == t ? void 0 : t.roles) ? n : []);
        l = r.roles.some((e) => !i.has(e.id));
    }
    o && !l ? s.ZP.transitionToInviteSync(r) : await F(r, e.code);
}
let V = {
    skipExtensionCheck: void 0,
    analyticsLocations: [],
};
function H(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
        P = (0, g.zO)(e);
    if (null != P && (P.type === m.g.INVITE || P.type === m.g.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (null == e || e.preventDefault(), B(P), !0);
    if (
        null != P &&
        (P.type === m.g.APP_DIRECTORY_PROFILE ||
            P.type === m.g.APP_DIRECTORY_STOREFRONT ||
            P.type === m.g.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            var i, a;
            null == t || t.preventDefault();
            let { code: o } = P,
                { applicationId: s, skuId: l } =
                    P.type === m.g.APP_DIRECTORY_PROFILE || P.type === m.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: o,
                              skuId: void 0,
                          }
                        : null != (i = (0, p.Q)(o))
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0,
                            },
                c = null != (a = x.Z.getGuildId()) ? a : void 0;
            return (
                null == s
                    ? (0, U.Z)(e)
                    : (j.default.track(G.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.tq ? "mobile_web" : "desktop_web",
                          guild_id: c,
                          channel_id: D.Z.getChannelId(),
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
                                  section: (0, y.Z)(i, P.type === m.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l,
                              });
                          })),
                !0
            );
        };
    if (null != P && P.type === m.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n;
            null == e || e.preventDefault();
            let { code: r, url: i } = P,
                a = _.Z.getApplication(r),
                f = new URL(i),
                p = null != (t = f.searchParams.get("referrer_id")) ? t : void 0,
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
                                referrerId: p,
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
                                referrerId: p,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != P && P.type === m.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = P.code.split("-");
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
    if (null != P && P.type === m.g.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = P.code.split("-");
            return (
                Promise.resolve()
                    .then(n.bind(n, 705338))
                    .then((e) => {
                        let { default: n } = e;
                        n({
                            guildId: r,
                            skuId: t,
                        });
                    }),
                !0
            );
        };
    if (null != P && P.type === m.g.QUESTS_EMBED && (0, S.c)({ location: Z.dr.EMBED_MOBILE }) && !(0, M.C)())
        return (e) => {
            var t, r, a;
            let o, s;
            null == e || e.preventDefault();
            let { search: l } = null != (t = k.Z.toURLSafe(P.url)) ? t : {};
            if (null != l) {
                let e = new URLSearchParams(l);
                (o = null != (r = e.get("sort")) ? r : void 0), (s = null != (a = e.get("filter")) ? a : void 0);
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 110560))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({
                            fromContent: i.j.QUEST_SHARE_LINK,
                            questId: P.code,
                        });
                    }),
                !0
            );
        };
    let { host: w, hostname: R, pathname: L, search: F, hash: H } = null != (t = k.Z.toURLSafe(e)) ? t : {},
        Y =
            k.Z.isDiscordHostname(null != R ? R : null) ||
            k.Z.isDiscordLocalhost(null != w ? w : null, null != R ? R : null);
    if (
        Y &&
        ((null == L ? void 0 : L.startsWith("/application-directory")) ||
            (null == L ? void 0 : L.startsWith("/discovery/applications")))
    ) {
        let e = L.split("/"),
            t = null == L ? void 0 : L.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            a = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, o, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(F);
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
    if (null != L && Y && k.Z.isAppRoute(L)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0,
        };
        return (
            null != F && (e.search = F),
            null != H && (e.hash = H),
            (t) => (null == t || t.preventDefault(), (0, v.Z)(L, e), !0)
        );
    }
    if (null != L && Y) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i)
            return (e) => (
                null == e || e.preventDefault(),
                null != P &&
                    P.type === m.g.APP_OAUTH2_LINK &&
                    f.ZP.trackWithMetadata(G.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let W = (0, O.Ao)(L);
    if (null != L && Y && null != W)
        return (e) => {
            null == e || e.preventDefault();
            let t = x.Z.getGuildId();
            null != W.guildId && "" !== W.guildId && W.guildId !== t && (0, v.Z)(G.Z5c.CHANNEL(W.guildId));
            let n = b.ZP.getGuildScheduledEvent(W.guildEventId);
            return null != n && (0, E.bO)({ eventId: n.id }), !0;
        };
    if (Y && (null == L ? void 0 : L.startsWith("/settings/"))) {
        let { default: e } = n(722589),
            { openUserSettingsFromParsedUrl: t } = n(518596),
            r = e(L, F);
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
    if (Y && (null == L ? void 0 : L.startsWith("/playground"))) {
        let { parsePlaygroundUrl: e } = n(857494),
            { openPlayground: t } = n(2419),
            { collection: r, story: i } = e(L);
        return (e) => (null == e || e.preventDefault(), t(r, i), !0);
    }
    return Y && (null == L ? void 0 : L.startsWith("/discovery/quests"))
        ? (e) => (null == e || e.preventDefault(), (0, T.navigateToQuestHome)({ fromContent: i.j.QUEST_BADGE }), !0)
        : Y && (null == L ? void 0 : L.startsWith("/quest-home"))
          ? (e) => (null == e || e.preventDefault(), (0, C.uL)(G.Z5c.QUEST_HOME_V2 + (null != F ? F : "")), !0)
          : Y && (null == L ? void 0 : L.startsWith("/quest-preview"))
            ? (e) => {
                  if ((null == e || e.preventDefault(), (0, I.T)({ location: Z.dr.NAVIGATE_TO_QUEST_HOME_UTIL })))
                      return (
                          (0, C.uL)(G.Z5c.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(L.split("/").at(-1))), !0
                      );
              }
            : Y && (null == L ? void 0 : L.startsWith("/discovery/servers"))
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
              : a || null == (0, N.v)(e)
                ? void 0
                : (t) => (null == t || t.preventDefault(), A.Z.show(e), !0);
}
