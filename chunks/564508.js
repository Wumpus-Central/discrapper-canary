(n.d(t, { default: () => $ }), n(323874), n(14289), n(35956), n(134528), n(947204));
var i = n(607399),
    r = n(696292),
    a = n(73153),
    s = n(273626),
    l = n(778858),
    o = n(574332),
    d = n(257269),
    c = n(149468),
    u = n(121401),
    _ = n(587895),
    E = n(909338),
    A = n(725606),
    f = n(167189),
    h = n(486889),
    I = n(729160),
    p = n(734057),
    m = n(366430),
    T = n(707592),
    g = n(698441),
    S = n(268313),
    N = n(21599),
    C = n(376943),
    O = n(362280),
    R = n(971276),
    L = n(216934),
    y = n(976860),
    D = n(832163),
    b = n(227327),
    v = n(788995),
    P = n(432518);
n(809733);
var M = n(46653),
    U = n(696451),
    w = n(71393),
    G = n(299091),
    x = n(596344),
    k = n(309010),
    F = n(967198),
    B = n(711014),
    V = n(129230),
    H = n(998218),
    j = n(975807),
    W = n(652215);
async function Y(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: W.BRT.APP, invite_instance_id: n });
}
(n(758836), n(188275));
let K = { skipExtensionCheck: void 0, analyticsLocations: [] };
function $(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: $,
            channelId: X,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
        z = (0, h.br)(e);
    if (null != z && (z.type === f.I.INVITE || z.type === f.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (
            e?.preventDefault(),
            !(async function (e, t) {
                let n = e.code,
                    i = (0, N._U)(n, t),
                    r = G.A.getInvite(n);
                if (null == r || r.state === W.elq.ERROR) {
                    let { invite: e } = await o.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
                    r = e ?? void 0;
                }
                if (null == r) return;
                if (r.state === W.elq.EXPIRED || r.state === W.elq.BANNED || r.state === W.elq.ERROR)
                    return void (await Y(r, n, i));
                let a = B.Ay.getFlattenedGuildIds(),
                    s = r?.guild?.id,
                    l = null != s && a.includes(s),
                    d = !1;
                if (l && null != r.roles && r.roles.length > 0) {
                    let e = M.default.getId(),
                        t = U.Ay.getMember(s, e),
                        n = new Set(t?.roles ?? []);
                    d = r.roles.some((e) => !n.has(e.id));
                }
                l && !d ? o.Ay.transitionToInvite(r, { forceTransition: !0 }) : await Y(r, n, i);
            })(z, $),
            !0
        );
    if (
        null != z &&
        (z.type === f.I.APP_DIRECTORY_PROFILE ||
            z.type === f.I.APP_DIRECTORY_STOREFRONT ||
            z.type === f.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = z,
                { applicationId: a, skuId: s } =
                    z.type === f.I.APP_DIRECTORY_PROFILE || z.type === f.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, u.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                l = F.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, j.A)(e)
                    : (V.default.track(W.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: k.Ay.getChannelId(),
                      }),
                      Promise.resolve()
                          .then(n.bind(n, 837057))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: i } = n(488995),
                                  { GlobalDiscoveryAppsSections: r } = n(435220);
                              t({
                                  tab: i.APPS,
                                  applicationId: a,
                                  section: (0, S.A)(r, z.type === f.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != z && z.type === f.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = z,
                i = _.A.getApplication(t),
                r = new URL(n),
                l = r.searchParams.get("referrer_id") ?? void 0,
                { currentChannelId: o, isCurrentlyInInstance: c, canLaunchInChannel: u } = (0, A.t)(t);
            return (
                !c &&
                (!!u || i?.bot != null || !!(0, m.U4)(i)) &&
                ((0, d.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                    .then((e) => {
                        let { customId: n } = e;
                        return s.A.launch({
                            applicationId: t,
                            channelId: u ? o : null,
                            fromLink: !0,
                            linkChannelId: (0, E.D)(r),
                            customId: n,
                            referrerId: l,
                            analyticsLocations: a,
                        });
                    })
                    .catch(() => {}),
                !0)
            );
        };
    if (null != z && z.type === f.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = z.code.split("-");
            return (
                Promise.all([n.e(521574), n.e(749607)])
                    .then(n.bind(n, 811546))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, i);
                    }),
                !0
            );
        };
    if (null != z && z.type === f.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            let t = (0, b.rg)(z.code);
            if (null == t) return !1;
            let i = t.scopeId;
            if (t.skuIds.length > 1)
                return (
                    e?.preventDefault(),
                    n
                        .e(831445)
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: t } = e;
                            t({ guildId: i });
                        }),
                    !0
                );
            e?.preventDefault();
            let [r] = t.skuIds;
            return (
                n
                    .e(831445)
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { navigateToSocialLayerStorefrontWithGuildPreview: t } = e;
                        t({ guildId: i, skuId: r });
                    }),
                !0
            );
        };
    if (null != z && z.type === f.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            let t = (0, b.rg)(z.code);
            if (null == t) return !1;
            let i = t.scopeId;
            if (t.skuIds.length > 1)
                return (
                    e?.preventDefault(),
                    n
                        .e(831445)
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: t } = e;
                            t({ applicationId: i });
                        }),
                    !0
                );
            e?.preventDefault();
            let [r] = t.skuIds,
                a = D.A.getGuildIdFromApplicationId(i);
            if (null != a)
                return (
                    n
                        .e(831445)
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: t } = e;
                            t({ guildId: a, skuId: r });
                        }),
                    !0
                );
        };
    if (null != z && z.type === f.I.QUESTS_EMBED && (0, R.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = H.A.toURLSafe(z.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                (e.get("sort"), e.get("filter"));
            }
            return ((0, L.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: z.code }), !0);
        };
    if (null != z && z.type === f.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = z.code,
                r = null != X && null != $ ? x.A.getMessage(X, $)?.author.id : void 0;
            return (
                Promise.resolve()
                    .then(n.bind(n, 60465))
                    .then((e) => {
                        let { default: n } = e;
                        n.openGameProfileModal({
                            gameId: i,
                            source: t.Deeplink,
                            sourceUserId: r,
                            gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: i },
                        });
                    }),
                !0
            );
        };
    if (null != z && z.type === f.I.CONJURE_PROJECT)
        return (e) => (
            e?.preventDefault(),
            !(async function (e, t) {
                {
                    let { default: i } = await n.e(330724).then(n.bind(n, 77135));
                    i(e.code, t, (0, I.iW)(e.url));
                }
            })(
                z,
                null == X
                    ? { guildId: null, channelId: null }
                    : { guildId: p.A.getChannel(X)?.guild_id ?? null, channelId: X },
            ),
            !0
        );
    let { host: q, hostname: Q, pathname: J, search: Z, hash: ee } = H.A.toURLSafe(e) ?? {},
        et = H.A.isDiscordHostname(Q ?? null) || H.A.isDiscordLocalhost(q ?? null, Q ?? null);
    if (et && (J?.startsWith("/application-directory") || J?.startsWith("/discovery/applications"))) {
        let e = J.split("/"),
            t = J?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            a = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, s, l;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(Z);
                ((i = e.get("q") ?? void 0), (s = e.get("category_id") ?? void 0), (l = e.get("page") ?? void 0));
            } else a && (s = e[4]);
            return (
                Promise.resolve()
                    .then(n.bind(n, 837057))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: r } = n(488995);
                        t({
                            tab: r.APPS,
                            categoryId: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            page: null == l || Number.isNaN(l) ? void 0 : Number(l),
                            query: i,
                        });
                    }),
                !0
            );
        };
    }
    if (null != J && et && H.A.isAppRoute(J)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return (
            null != Z && (e.search = Z), null != ee && (e.hash = ee), (t) => (t?.preventDefault(), (0, O.A)(J, e), !0)
        );
    }
    if (et && J?.startsWith("/users/")) {
        let e = J.match(/^\/users\/(\d+)/);
        if (null != e) {
            let t = e[1];
            return (e) => (
                e?.preventDefault(),
                Promise.resolve()
                    .then(n.bind(n, 702476))
                    .then((e) => {
                        let { openUserProfileModal: n } = e;
                        n({ userId: t, sourceAnalyticsLocations: a });
                    }),
                !0
            );
        }
    }
    if (null != J && et) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(610056),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != z &&
                    z.type === f.I.APP_OAUTH2_LINK &&
                    c.Ay.trackWithMetadata(W.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let en = (0, C.SK)(J);
    if (null != J && et && null != en)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: i } = en;
            return (
                !(async function (e, t) {
                    function i() {
                        {
                            let { showInaccessibleLinkModal: e } = n(9588);
                            e({ kind: "channel" });
                        }
                    }
                    if (null == e || "" === e) return void i();
                    let r = g.Ay.getGuildScheduledEvent(t);
                    if (null == r)
                        try {
                            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
                            r = await i.fetchGuildEvent(e, t, { priority: "foreground" });
                        } catch {
                            i();
                            return;
                        }
                    if (null == r) return void i();
                    if (null == w.A.getGuild(e))
                        try {
                            (await l.A.joinGuild(e, { lurker: !0, source: W.Q4z.GUILD_EVENT_EMBED }),
                                await l.A.transitionToGuildSync(e));
                        } catch (e) {
                            e.body?.code === W.t02.UNKNOWN_GUILD && i();
                            return;
                        }
                    (F.A.getGuildId() !== e && (0, O.A)(W.BVt.CHANNEL(e)), (0, T.uR)({ eventId: r.id }));
                })(t, i),
                !0
            );
        };
    if (et && J?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: J, search: Z });
            return (
                i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0
            );
        };
    }
    if (et && J === W.BVt.FEATURE("badges"))
        return (e) => (
            e?.preventDefault(),
            n
                .e(644816)
                .then(n.bind(n, 470739))
                .then((e) => {
                    let { openBadgeDirectoryModal: t } = e;
                    t({ viewingCurrentUserBadges: !0 });
                }),
            !0
        );
    if (et && J?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { collection: t, story: i, controlOverrides: r } = e(J, Z);
        return (e) => (
            e?.preventDefault(),
            Promise.all([n.e(60800), n.e(129263)])
                .then(n.bind(n, 965042))
                .then((e) => {
                    let { openPlayground: n } = e;
                    return n(t, i, r);
                }),
            !0
        );
    }
    if (et && J?.startsWith("/discovery/quests"))
        return (e) => (e?.preventDefault(), (0, L.m)({ fromContent: r.u.QUEST_BADGE }), !0);
    if (et && J?.startsWith("/quest-home"))
        return (e) => (e?.preventDefault(), (0, y.pX)(W.BVt.QUEST_HOME, { search: Z, hash: ee }), !0);
    if (et && J?.startsWith("/quest-bar-preview")) {
        let e = new URLSearchParams(Z ?? "").get("ad_creative_ids");
        if (null != e)
            return (t) => (
                t?.preventDefault(),
                Promise.all([n.e(276863), n.e(601169)])
                    .then(n.bind(n, 638376))
                    .then((t) => {
                        let { openQuestBarPreview: n } = t;
                        return n(e);
                    }),
                !0
            );
    }
    return et && J?.startsWith("/quest-preview")
        ? (e) => (
              e?.preventDefault(),
              (0, y.pX)(W.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${J.split("/").at(-1)}`),
              !0
          )
        : et && J?.startsWith("/discovery/servers")
          ? (e) => (
                e?.preventDefault(),
                Promise.resolve()
                    .then(n.bind(n, 837057))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(488995);
                        t({ tab: i.SERVERS });
                    }),
                !0
            )
          : t || null == (0, P.m)(e)
            ? void 0
            : (t) => (t?.preventDefault(), v.A.show(e), !0);
}
