(n.d(t, { default: () => Y }), n(323874), n(14289), n(35956), n(134528), n(947204));
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
    I = n(366430),
    p = n(707592),
    m = n(698441),
    T = n(268313),
    g = n(21599),
    S = n(376943),
    N = n(362280),
    C = n(971276),
    O = n(216934),
    R = n(976860),
    L = n(832163),
    y = n(227327),
    D = n(788995),
    b = n(432518);
n(809733);
var v = n(46653),
    P = n(696451),
    M = n(71393),
    U = n(299091),
    w = n(596344),
    G = n(309010),
    x = n(967198),
    k = n(711014),
    F = n(129230),
    B = n(998218),
    V = n(975807),
    H = n(652215);
async function j(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: H.BRT.APP, invite_instance_id: n });
}
(n(758836), n(188275));
let W = { skipExtensionCheck: void 0, analyticsLocations: [] };
function Y(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: Y,
            channelId: K,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
        $ = (0, h.br)(e);
    if (null != $ && ($.type === f.I.INVITE || $.type === f.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (
            e?.preventDefault(),
            !(async function (e, t) {
                let n = e.code,
                    i = (0, g._U)(n, t),
                    r = U.A.getInvite(n);
                if (null == r || r.state === H.elq.ERROR) {
                    let { invite: e } = await o.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
                    r = e ?? void 0;
                }
                if (null == r) return;
                if (r.state === H.elq.EXPIRED || r.state === H.elq.BANNED || r.state === H.elq.ERROR)
                    return void (await j(r, n, i));
                let a = k.Ay.getFlattenedGuildIds(),
                    s = r?.guild?.id,
                    l = null != s && a.includes(s),
                    d = !1;
                if (l && null != r.roles && r.roles.length > 0) {
                    let e = v.default.getId(),
                        t = P.Ay.getMember(s, e),
                        n = new Set(t?.roles ?? []);
                    d = r.roles.some((e) => !n.has(e.id));
                }
                l && !d ? o.Ay.transitionToInvite(r, { forceTransition: !0 }) : await j(r, n, i);
            })($, Y),
            !0
        );
    if (
        null != $ &&
        ($.type === f.I.APP_DIRECTORY_PROFILE ||
            $.type === f.I.APP_DIRECTORY_STOREFRONT ||
            $.type === f.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = $,
                { applicationId: a, skuId: s } =
                    $.type === f.I.APP_DIRECTORY_PROFILE || $.type === f.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, u.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                l = x.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, V.A)(e)
                    : (F.default.track(H.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: G.Ay.getChannelId(),
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
                                  section: (0, T.A)(r, $.type === f.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != $ && $.type === f.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = $,
                i = _.A.getApplication(t),
                r = new URL(n),
                l = r.searchParams.get("referrer_id") ?? void 0,
                { currentChannelId: o, isCurrentlyInInstance: c, canLaunchInChannel: u } = (0, A.t)(t);
            return (
                !c &&
                (!!u || i?.bot != null || !!(0, I.U4)(i)) &&
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
    if (null != $ && $.type === f.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = $.code.split("-");
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
    if (null != $ && $.type === f.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            let t = (0, y.rg)($.code);
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
    if (null != $ && $.type === f.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            let t = (0, y.rg)($.code);
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
                a = L.A.getGuildIdFromApplicationId(i);
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
    if (null != $ && $.type === f.I.QUESTS_EMBED && (0, C.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = B.A.toURLSafe($.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                (e.get("sort"), e.get("filter"));
            }
            return ((0, O.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: $.code }), !0);
        };
    if (null != $ && $.type === f.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = $.code,
                r = null != K && null != Y ? w.A.getMessage(K, Y)?.author.id : void 0;
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
    if (null != $ && $.type === f.I.CONJURE_PROJECT)
        return (e) => (
            e?.preventDefault(),
            !(async function (e, t) {
                {
                    let { default: i } = await n.e(330724).then(n.bind(n, 77135));
                    i(e, t);
                }
            })($.code, x.A.getGuildId() ?? null),
            !0
        );
    let { host: X, hostname: z, pathname: q, search: Q, hash: Z } = B.A.toURLSafe(e) ?? {},
        J = B.A.isDiscordHostname(z ?? null) || B.A.isDiscordLocalhost(X ?? null, z ?? null);
    if (J && (q?.startsWith("/application-directory") || q?.startsWith("/discovery/applications"))) {
        let e = q.split("/"),
            t = q?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            a = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, s, l;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(Q);
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
    if (null != q && J && B.A.isAppRoute(q)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return (
            null != Q && (e.search = Q), null != Z && (e.hash = Z), (t) => (t?.preventDefault(), (0, N.A)(q, e), !0)
        );
    }
    if (J && q?.startsWith("/users/")) {
        let e = q.match(/^\/users\/(\d+)/);
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
    if (null != q && J) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(610056),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != $ &&
                    $.type === f.I.APP_OAUTH2_LINK &&
                    c.Ay.trackWithMetadata(H.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let ee = (0, S.SK)(q);
    if (null != q && J && null != ee)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: i } = ee;
            return (
                !(async function (e, t) {
                    function i() {
                        {
                            let { showInaccessibleLinkModal: e } = n(9588);
                            e({ kind: "channel" });
                        }
                    }
                    if (null == e || "" === e) return void i();
                    let r = m.Ay.getGuildScheduledEvent(t);
                    if (null == r)
                        try {
                            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
                            r = await i.fetchGuildEvent(e, t, { priority: "foreground" });
                        } catch {
                            i();
                            return;
                        }
                    if (null == r) return void i();
                    if (null == M.A.getGuild(e))
                        try {
                            (await l.A.joinGuild(e, { lurker: !0, source: H.Q4z.GUILD_EVENT_EMBED }),
                                await l.A.transitionToGuildSync(e));
                        } catch (e) {
                            e.body?.code === H.t02.UNKNOWN_GUILD && i();
                            return;
                        }
                    (x.A.getGuildId() !== e && (0, N.A)(H.BVt.CHANNEL(e)), (0, p.uR)({ eventId: r.id }));
                })(t, i),
                !0
            );
        };
    if (J && q?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: q, search: Q });
            return (
                i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0
            );
        };
    }
    if (J && q === H.BVt.FEATURE("badges"))
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
    if (J && q?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { collection: t, story: i, controlOverrides: r } = e(q, Q);
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
    if (J && q?.startsWith("/discovery/quests"))
        return (e) => (e?.preventDefault(), (0, O.m)({ fromContent: r.u.QUEST_BADGE }), !0);
    if (J && q?.startsWith("/quest-home"))
        return (e) => (e?.preventDefault(), (0, R.pX)(H.BVt.QUEST_HOME, { search: Q, hash: Z }), !0);
    if (J && q?.startsWith("/quest-bar-preview")) {
        let e = new URLSearchParams(Q ?? "").get("ad_creative_ids");
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
    return J && q?.startsWith("/quest-preview")
        ? (e) => (
              e?.preventDefault(),
              (0, R.pX)(H.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${q.split("/").at(-1)}`),
              !0
          )
        : J && q?.startsWith("/discovery/servers")
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
          : t || null == (0, b.m)(e)
            ? void 0
            : (t) => (t?.preventDefault(), D.A.show(e), !0);
}
