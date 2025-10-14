n.r(t),
    n.d(t, { default: () => H }),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
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
    _ = n(421474),
    p = n(812206),
    h = n(506895),
    m = n(960904),
    g = n(830121),
    E = n(836768),
    b = n(15274),
    y = n(924301),
    O = n(543842),
    v = n(754688),
    I = n(336197),
    T = n(937797),
    S = n(36243),
    A = n(977156),
    C = n(110560),
    N = n(703656),
    R = n(540709),
    P = n(881706);
n(812513);
var w = n(701190),
    D = n(944486),
    L = n(914010),
    x = n(771845),
    M = n(626135),
    j = n(591759),
    k = n(782568),
    U = n(981631);
n(215023);
var G = n(49898),
    B = n(46140);
async function Z(e, t) {
    await a.Z.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: e,
        code: t,
        context: U.IlC.APP,
    });
}
async function F(e) {
    var t;
    let n = w.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.ZP.resolveInvite(e.code, "Markdown Link");
        n = t;
    }
    if (null == n) return;
    if (n.state === U.r2o.EXPIRED || n.state === U.r2o.BANNED || n.state === U.r2o.ERROR)
        return void (await Z(n, e.code));
    let r = x.ZP.getFlattenedGuildIds(),
        i = null == n || null == (t = n.guild) ? void 0 : t.id;
    null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await Z(n, e.code);
}
let V = {
    skipExtensionCheck: void 0,
    analyticsLocations: [],
};
function H(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
        w = (0, g.zO)(e);
    if (null != w && (w.type === m.g.INVITE || w.type === m.g.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (null == e || e.preventDefault(), F(w), !0);
    if (
        null != w &&
        (w.type === m.g.APP_DIRECTORY_PROFILE ||
            w.type === m.g.APP_DIRECTORY_STOREFRONT ||
            w.type === m.g.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            var i, a;
            null == t || t.preventDefault();
            let { code: o } = w,
                { applicationId: s, skuId: l } =
                    w.type === m.g.APP_DIRECTORY_PROFILE || w.type === m.g.APP_DIRECTORY_STOREFRONT
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
                c = null != (a = L.Z.getGuildId()) ? a : void 0;
            return (
                null == s
                    ? (0, k.Z)(e)
                    : (M.default.track(U.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
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
                                  section: (0, O.Z)(i, w.type === m.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l,
                              });
                          })),
                !0
            );
        };
    if (null != w && w.type === m.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n;
            null == e || e.preventDefault();
            let { code: r, url: i } = w,
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
    if (null != w && w.type === m.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = w.code.split("-");
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
    if (null != w && w.type === m.g.QUESTS_EMBED && (0, A.c)({ location: B.dr.EMBED_MOBILE }))
        return (e) => {
            var t, r, a;
            let o, s;
            null == e || e.preventDefault();
            let { search: l } = null != (t = j.Z.toURLSafe(w.url)) ? t : {};
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
                            questId: w.code,
                        });
                    }),
                !0
            );
        };
    let { host: x, hostname: Z, pathname: H, search: Y, hash: W } = null != (t = j.Z.toURLSafe(e)) ? t : {},
        K =
            j.Z.isDiscordHostname(null != Z ? Z : null) ||
            j.Z.isDiscordLocalhost(null != x ? x : null, null != Z ? Z : null);
    if (
        K &&
        ((null == H ? void 0 : H.startsWith("/application-directory")) ||
            (null == H ? void 0 : H.startsWith("/discovery/applications")))
    ) {
        let e = H.split("/"),
            t = null == H ? void 0 : H.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            a = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, o, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(Y);
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
    if (null != H && K && j.Z.isAppRoute(H)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0,
        };
        return (
            null != Y && (e.search = Y),
            null != W && (e.hash = W),
            (t) => (null == t || t.preventDefault(), (0, I.Z)(H, e), !0)
        );
    }
    if (null != H && K) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i)
            return (e) => (
                null == e || e.preventDefault(),
                null != w &&
                    w.type === m.g.APP_OAUTH2_LINK &&
                    f.ZP.trackWithMetadata(U.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let z = (0, v.Ao)(H);
    if (null != H && K && null != z)
        return (e) => {
            null == e || e.preventDefault();
            let t = L.Z.getGuildId();
            null != z.guildId && "" !== z.guildId && z.guildId !== t && (0, I.Z)(U.Z5c.CHANNEL(z.guildId));
            let n = y.ZP.getGuildScheduledEvent(z.guildEventId);
            return null != n && (0, b.bO)({ eventId: n.id }), !0;
        };
    if (K && (null == H ? void 0 : H.startsWith("/settings/"))) {
        let { default: e } = n(722589),
            { openUserSettingsFromParsedUrl: t } = n(518596),
            r = e(H, Y);
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
    return K && (null == H ? void 0 : H.startsWith("/discovery/quests"))
        ? (e) => (null == e || e.preventDefault(), (0, C.navigateToQuestHome)({ fromContent: i.j.QUEST_BADGE }), !0)
        : K && (null == H ? void 0 : H.startsWith("/quest-home"))
          ? (e) => {
                null == e || e.preventDefault();
                let { enabled: t } = T.m8.getConfig({ location: B.dr.NAVIGATE_TO_QUEST_HOME_UTIL });
                return (
                    t || E.Z.setState({ selectedTab: G.GlobalDiscoveryTab.QUESTS }),
                    (0, N.uL)((t ? U.Z5c.QUEST_HOME_V2 : U.Z5c.QUEST_HOME) + (null != Y ? Y : "")),
                    !0
                );
            }
          : K && (null == H ? void 0 : H.startsWith("/quest-preview"))
            ? (e) => {
                  null == e || e.preventDefault();
                  let { enabled: t } = T.m8.getConfig({ location: B.dr.NAVIGATE_TO_QUEST_HOME_UTIL }),
                      n = (0, S.T)({ location: B.dr.NAVIGATE_TO_QUEST_HOME_UTIL });
                  if ((t || E.Z.setState({ selectedTab: G.GlobalDiscoveryTab.QUESTS }), n))
                      return (
                          (0, N.uL)(
                              (t ? U.Z5c.QUEST_HOME_V2 : U.Z5c.QUEST_HOME) +
                                  "?tab=preview_tool&quest_id=".concat(H.split("/").at(-1)),
                          ),
                          !0
                      );
              }
            : K && (null == H ? void 0 : H.startsWith("/discovery/servers"))
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
              : a || null == (0, P.v)(e)
                ? void 0
                : (t) => (null == t || t.preventDefault(), R.Z.show(e), !0);
}
