"use strict";
n.r(t), n.d(t, { default: () => $ }), n(323874), n(14289), n(35956), n(134528), n(947204);
var i = n(607399),
    r = n(696292),
    s = n(228366),
    a = n(308528),
    o = n(66834),
    l = n(376728),
    u = n(795816),
    c = n(956549),
    d = n(257269),
    _ = n(574152),
    h = n(95561),
    f = n(121401),
    E = n(587895),
    p = n(725606),
    m = n(167189),
    g = n(833291),
    A = n(707592),
    I = n(698441),
    T = n(268313),
    S = n(842241),
    N = n(376943),
    C = n(741231),
    y = n(971276),
    O = n(216934),
    R = n(976860),
    v = n(832163),
    b = n(788995),
    L = n(432e3);
n(809733),
    (0, n(240921).Ay)({
        name: "2026-03-mobile-orbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var D = n(280450),
    w = n(696451),
    P = n(71393),
    M = n(299091),
    x = n(232835),
    U = n(309010),
    k = n(967198),
    G = n(711014),
    V = n(174459),
    F = n(998218),
    B = n(975807),
    H = n(652215);
async function j(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: H.BRT.APP, invite_instance_id: n });
}
async function W(e, t) {
    let n = e.code,
        i = (0, S._U)(n, t),
        r = M.A.getInvite(n);
    if (null == r) {
        let { invite: e } = await l.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
        r = e ?? void 0;
    }
    if (null == r) return;
    if (r.state === H.elq.EXPIRED || r.state === H.elq.BANNED || r.state === H.elq.ERROR)
        return void (await j(r, n, i));
    let s = G.Ay.getFlattenedGuildIds(),
        a = r?.guild?.id,
        o = null != a && s.includes(a),
        u = !1;
    if (o && null != r.roles && r.roles.length > 0) {
        let e = D.default.getId(),
            t = w.Ay.getMember(a, e),
            n = new Set(t?.roles ?? []);
        u = r.roles.some((e) => !n.has(e.id));
    }
    o && !u ? l.Ay.transitionToInviteSync(r) : await j(r, n, i);
}
async function Y(e, t) {
    function i() {
        {
            let { showInaccessibleLinkModal: e } = n(9588);
            e({ kind: "channel" });
        }
    }
    if (null == e || "" === e) return void i();
    let r = I.Ay.getGuildScheduledEvent(t);
    if (null == r)
        try {
            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
            r = await i.fetchGuildEvent(e, t);
        } catch {
            i();
            return;
        }
    if (null == r) return void i();
    if (null == P.A.getGuild(e))
        try {
            await o.A.joinGuild(e, { lurker: !0, source: H.Q4z.GUILD_EVENT_EMBED }), await o.A.transitionToGuildSync(e);
        } catch (e) {
            e.body?.code === H.t02.UNKNOWN_GUILD && i();
            return;
        }
    k.A.getGuildId() !== e && (0, C.A)(H.BVt.CHANNEL(e)), (0, A.uR)({ eventId: r.id });
}
n(758836);
let K = { skipExtensionCheck: void 0, analyticsLocations: [] };
function $(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
            channelId: l,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
        A = (0, g.br)(e);
    if (null != A && (A.type === m.I.INVITE || A.type === m.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), W(A, o), !0);
    if (
        null != A &&
        (A.type === m.I.APP_DIRECTORY_PROFILE ||
            A.type === m.I.APP_DIRECTORY_STOREFRONT ||
            A.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = A,
                { applicationId: s, skuId: a } =
                    A.type === m.I.APP_DIRECTORY_PROFILE || A.type === m.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, f.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                o = k.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, B.A)(e)
                    : (V.default.track(H.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: U.A.getChannelId(),
                      }),
                      n
                          .e("38042")
                          .then(n.bind(n, 837057))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: i } = n(488995),
                                  { GlobalDiscoveryAppsSections: r } = n(435220);
                              t({
                                  tab: i.APPS,
                                  applicationId: s,
                                  section: (0, T.A)(r, A.type === m.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != A && A.type === m.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = A,
                i = E.A.getApplication(t),
                r = new URL(n),
                o = r.searchParams.get("referrer_id") ?? void 0,
                l = (0, _.A)(),
                { currentChannelId: h, instanceId: f, isCurrentlyInInstance: m, canLaunchInChannel: g } = (0, p.t)(t);
            if (g)
                return (
                    !m &&
                    null != h &&
                    ((0, d.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, u.su)({
                                channelId: h,
                                applicationId: t,
                                isStart: null == f,
                                embeddedActivitiesManager: l,
                                customId: n,
                                referrerId: o,
                                analyticsLocations: s,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                let e = i?.bot?.id;
                return (
                    null != e &&
                    (a.A.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: n } = await (0, d.d9)(
                                t,
                                r.searchParams.get("link_id"),
                                r.searchParams.get("custom_id"),
                            );
                            (0, c.A)({
                                targetApplicationId: t,
                                channelId: e,
                                analyticsLocations: s,
                                customId: n,
                                referrerId: o,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != A && A.type === m.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = A.code.split("-");
            return (
                Promise.all([n.e("21574"), n.e("49607")])
                    .then(n.bind(n, 811546))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, i);
                    }),
                !0
            );
        };
    if (null != A && A.type === m.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = A.code.split("-");
            return (
                n
                    .e("31445")
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { navigateToSocialLayerStorefrontWithGuildPreview: n } = e;
                        n({ guildId: i, skuId: t });
                    }),
                !0
            );
        };
    if (null != A && A.type === m.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            e?.preventDefault();
            let [t, i] = A.code.split("-"),
                r = v.A.getGuildIdFromApplicationId(i);
            if (null != r)
                return (
                    n
                        .e("31445")
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: n } = e;
                            n({ guildId: r, skuId: t });
                        }),
                    !0
                );
        };
    if (null != A && A.type === m.I.QUESTS_EMBED && (0, y.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = F.A.toURLSafe(A.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                e.get("sort"), e.get("filter");
            }
            return (0, O.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: A.code }), !0;
        };
    if (null != A && A.type === m.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = A.code,
                r = null != l && null != o ? x.A.getMessage(l, o)?.author.id : void 0;
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
    let { host: I, hostname: S, pathname: D, search: w, hash: P } = F.A.toURLSafe(e) ?? {},
        M = F.A.isDiscordHostname(S ?? null) || F.A.isDiscordLocalhost(I ?? null, S ?? null);
    if (M && (D?.startsWith("/application-directory") || D?.startsWith("/discovery/applications"))) {
        let e = D.split("/"),
            t = D?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            s = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, a, o;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(w);
                (i = e.get("q") ?? void 0), (a = e.get("category_id") ?? void 0), (o = e.get("page") ?? void 0);
            } else s && (a = e[4]);
            return (
                n
                    .e("38042")
                    .then(n.bind(n, 837057))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: r } = n(488995);
                        t({
                            tab: r.APPS,
                            categoryId: null == a || Number.isNaN(a) ? void 0 : Number(a),
                            page: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            query: i,
                        });
                    }),
                !0
            );
        };
    }
    if (null != D && M && F.A.isAppRoute(D)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != w && (e.search = w), null != P && (e.hash = P), (t) => (t?.preventDefault(), (0, C.A)(D, e), !0);
    }
    if (M && D?.startsWith("/users/")) {
        let e = D.match(/^\/users\/(\d+)/);
        if (null != e) {
            let t = e[1];
            return (e) => (
                e?.preventDefault(),
                Promise.resolve()
                    .then(n.bind(n, 975732))
                    .then((e) => {
                        let { openUserProfileModal: n } = e;
                        n({ userId: t, sourceAnalyticsLocations: s });
                    }),
                !0
            );
        }
    }
    if (null != D && M) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != A &&
                    A.type === m.I.APP_OAUTH2_LINK &&
                    h.Ay.trackWithMetadata(H.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let G = (0, N.SK)(D);
    if (null != D && M && null != G)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: n } = G;
            return Y(t, n), !0;
        };
    if (M && D?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: D, search: w });
            return i(r, "link_click"), e(r.target, { analyticsLocations: s, path: r.path, searchParams: r.params }), !0;
        };
    }
    if (M && D?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: i, story: r, controlOverrides: s } = e(D, w);
        return (e) => (e?.preventDefault(), t(i, r, s), !0);
    }
    return M && D?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, O.m)({ fromContent: r.u.QUEST_BADGE }), !0)
        : M && D?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, R.pX)(H.BVt.QUEST_HOME + (w ?? "")), !0)
          : M && D?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, R.pX)(H.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${D.split("/").at(-1)}`),
                  !0
              )
            : M && D?.startsWith("/discovery/servers")
              ? (e) => (
                    e?.preventDefault(),
                    n
                        .e("38042")
                        .then(n.bind(n, 837057))
                        .then((e) => {
                            let { transitionToGlobalDiscovery: t } = e,
                                { GlobalDiscoveryTab: i } = n(488995);
                            t({ tab: i.SERVERS });
                        }),
                    !0
                )
              : t || null == (0, L.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), b.A.show(e), !0);
}
