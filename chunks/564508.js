(n.d(t, { default: () => K }), n(323874), n(14289), n(35956), n(134528), n(947204));
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
    I = n(734057),
    p = n(366430),
    m = n(707592),
    T = n(698441),
    g = n(268313),
    S = n(21599),
    N = n(376943),
    C = n(362280),
    O = n(971276),
    R = n(216934),
    L = n(976860),
    y = n(832163),
    D = n(227327),
    b = n(788995),
    v = n(432518);
n(809733);
var P = n(46653),
    M = n(696451),
    U = n(71393),
    w = n(299091),
    G = n(596344),
    x = n(309010),
    k = n(967198),
    F = n(711014),
    B = n(129230),
    V = n(998218),
    H = n(975807),
    j = n(652215);
async function W(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: j.BRT.APP, invite_instance_id: n });
}
(n(758836), n(188275));
let Y = { skipExtensionCheck: void 0, analyticsLocations: [] };
function K(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: K,
            channelId: $,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y,
        X = (0, h.br)(e);
    if (null != X && (X.type === f.I.INVITE || X.type === f.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (
            e?.preventDefault(),
            !(async function (e, t) {
                let n = e.code,
                    i = (0, S._U)(n, t),
                    r = w.A.getInvite(n);
                if (null == r || r.state === j.elq.ERROR) {
                    let { invite: e } = await o.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
                    r = e ?? void 0;
                }
                if (null == r) return;
                if (r.state === j.elq.EXPIRED || r.state === j.elq.BANNED || r.state === j.elq.ERROR)
                    return void (await W(r, n, i));
                let a = F.Ay.getFlattenedGuildIds(),
                    s = r?.guild?.id,
                    l = null != s && a.includes(s),
                    d = !1;
                if (l && null != r.roles && r.roles.length > 0) {
                    let e = P.default.getId(),
                        t = M.Ay.getMember(s, e),
                        n = new Set(t?.roles ?? []);
                    d = r.roles.some((e) => !n.has(e.id));
                }
                l && !d ? o.Ay.transitionToInvite(r, { forceTransition: !0 }) : await W(r, n, i);
            })(X, K),
            !0
        );
    if (
        null != X &&
        (X.type === f.I.APP_DIRECTORY_PROFILE ||
            X.type === f.I.APP_DIRECTORY_STOREFRONT ||
            X.type === f.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = X,
                { applicationId: a, skuId: s } =
                    X.type === f.I.APP_DIRECTORY_PROFILE || X.type === f.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, u.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                l = k.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, H.A)(e)
                    : (B.default.track(j.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: x.Ay.getChannelId(),
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
                                  section: (0, g.A)(r, X.type === f.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != X && X.type === f.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = X,
                i = _.A.getApplication(t),
                r = new URL(n),
                l = r.searchParams.get("referrer_id") ?? void 0,
                { currentChannelId: o, isCurrentlyInInstance: c, canLaunchInChannel: u } = (0, A.t)(t);
            return (
                !c &&
                (!!u || i?.bot != null || !!(0, p.U4)(i)) &&
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
    if (null != X && X.type === f.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = X.code.split("-");
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
    if (null != X && X.type === f.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            let t = (0, D.rg)(X.code);
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
    if (null != X && X.type === f.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            let t = (0, D.rg)(X.code);
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
                a = y.A.getGuildIdFromApplicationId(i);
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
    if (null != X && X.type === f.I.QUESTS_EMBED && (0, O.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = V.A.toURLSafe(X.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                (e.get("sort"), e.get("filter"));
            }
            return ((0, R.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: X.code }), !0);
        };
    if (null != X && X.type === f.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = X.code,
                r = null != $ && null != K ? G.A.getMessage($, K)?.author.id : void 0;
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
    if (null != X && X.type === f.I.CONJURE_PROJECT)
        return (e) => (
            e?.preventDefault(),
            !(async function (e, t) {
                {
                    let { default: i } = await n.e(330724).then(n.bind(n, 77135));
                    i(e, t);
                }
            })(
                X.code,
                null == $
                    ? { guildId: null, channelId: null }
                    : { guildId: I.A.getChannel($)?.guild_id ?? null, channelId: $ },
            ),
            !0
        );
    let { host: z, hostname: q, pathname: Q, search: Z, hash: J } = V.A.toURLSafe(e) ?? {},
        ee = V.A.isDiscordHostname(q ?? null) || V.A.isDiscordLocalhost(z ?? null, q ?? null);
    if (ee && (Q?.startsWith("/application-directory") || Q?.startsWith("/discovery/applications"))) {
        let e = Q.split("/"),
            t = Q?.startsWith("/discovery/applications"),
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
    if (null != Q && ee && V.A.isAppRoute(Q)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return (
            null != Z && (e.search = Z), null != J && (e.hash = J), (t) => (t?.preventDefault(), (0, C.A)(Q, e), !0)
        );
    }
    if (ee && Q?.startsWith("/users/")) {
        let e = Q.match(/^\/users\/(\d+)/);
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
    if (null != Q && ee) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(610056),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != X &&
                    X.type === f.I.APP_OAUTH2_LINK &&
                    c.Ay.trackWithMetadata(j.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let et = (0, N.SK)(Q);
    if (null != Q && ee && null != et)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: i } = et;
            return (
                !(async function (e, t) {
                    function i() {
                        {
                            let { showInaccessibleLinkModal: e } = n(9588);
                            e({ kind: "channel" });
                        }
                    }
                    if (null == e || "" === e) return void i();
                    let r = T.Ay.getGuildScheduledEvent(t);
                    if (null == r)
                        try {
                            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
                            r = await i.fetchGuildEvent(e, t, { priority: "foreground" });
                        } catch {
                            i();
                            return;
                        }
                    if (null == r) return void i();
                    if (null == U.A.getGuild(e))
                        try {
                            (await l.A.joinGuild(e, { lurker: !0, source: j.Q4z.GUILD_EVENT_EMBED }),
                                await l.A.transitionToGuildSync(e));
                        } catch (e) {
                            e.body?.code === j.t02.UNKNOWN_GUILD && i();
                            return;
                        }
                    (k.A.getGuildId() !== e && (0, C.A)(j.BVt.CHANNEL(e)), (0, m.uR)({ eventId: r.id }));
                })(t, i),
                !0
            );
        };
    if (ee && Q?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: Q, search: Z });
            return (
                i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0
            );
        };
    }
    if (ee && Q === j.BVt.FEATURE("badges"))
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
    if (ee && Q?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { collection: t, story: i, controlOverrides: r } = e(Q, Z);
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
    if (ee && Q?.startsWith("/discovery/quests"))
        return (e) => (e?.preventDefault(), (0, R.m)({ fromContent: r.u.QUEST_BADGE }), !0);
    if (ee && Q?.startsWith("/quest-home"))
        return (e) => (e?.preventDefault(), (0, L.pX)(j.BVt.QUEST_HOME, { search: Z, hash: J }), !0);
    if (ee && Q?.startsWith("/quest-bar-preview")) {
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
    return ee && Q?.startsWith("/quest-preview")
        ? (e) => (
              e?.preventDefault(),
              (0, L.pX)(j.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${Q.split("/").at(-1)}`),
              !0
          )
        : ee && Q?.startsWith("/discovery/servers")
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
          : t || null == (0, v.m)(e)
            ? void 0
            : (t) => (t?.preventDefault(), b.A.show(e), !0);
}
