"use strict";
n.r(t), n.d(t, { default: () => W }), n(323874), n(14289), n(35956), n(134528), n(947204);
var r = n(607399),
    i = n(696292),
    a = n(73153),
    s = n(308528),
    o = n(846293),
    l = n(795816),
    u = n(956549),
    c = n(257269),
    d = n(574152),
    _ = n(58149),
    f = n(121401),
    h = n(587895),
    p = n(725606),
    g = n(167189),
    E = n(833291),
    A = n(809733),
    I = n(707592),
    T = n(698441),
    y = n(268313),
    S = n(376943),
    v = n(22007),
    C = n(677402),
    b = n(807876),
    N = n(545986),
    R = n(976860),
    O = n(788995),
    D = n(556022);
n(345953);
var L = n(961350),
    w = n(696451),
    x = n(299091),
    P = n(309010),
    M = n(967198),
    k = n(711014),
    U = n(954571),
    G = n(998218),
    F = n(975807),
    V = n(652215);
n(758836);
var B = n(654487);
async function j(e, t) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: V.BRT.APP });
}
async function H(e) {
    let t = x.A.getInvite(e.code);
    if (null == t) {
        let { invite: n } = await o.Ay.resolveInvite(e.code, "Markdown Link");
        t = n;
    }
    if (null == t) return;
    if (t.state === V.elq.EXPIRED || t.state === V.elq.BANNED || t.state === V.elq.ERROR)
        return void (await j(t, e.code));
    let n = k.Ay.getFlattenedGuildIds(),
        r = t?.guild?.id,
        i = null != r && n.includes(r),
        a = !1;
    if (i && null != t.roles && t.roles.length > 0) {
        let e = L.default.getId(),
            n = w.Ay.getMember(r, e),
            i = new Set(n?.roles ?? []);
        a = t.roles.some((e) => !i.has(e.id));
    }
    i && !a ? o.Ay.transitionToInviteSync(t) : await j(t, e.code);
}
let Y = { skipExtensionCheck: void 0, analyticsLocations: [] };
function W(e) {
    let { skipExtensionCheck: t, analyticsLocations: a } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y,
        o = (0, E.br)(e);
    if (null != o && (o.type === g.I.INVITE || o.type === g.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), H(o), !0);
    if (
        null != o &&
        (o.type === g.I.APP_DIRECTORY_PROFILE ||
            o.type === g.I.APP_DIRECTORY_STOREFRONT ||
            o.type === g.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: i } = o,
                { applicationId: a, skuId: s } =
                    o.type === g.I.APP_DIRECTORY_PROFILE || o.type === g.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: i, skuId: void 0 }
                        : ((0, f.u)(i) ?? { applicationId: void 0, skuId: void 0 }),
                l = M.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, F.A)(e)
                    : (U.default.track(V.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: r.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: P.A.getChannelId(),
                      }),
                      n
                          .e("38042")
                          .then(n.bind(n, 837057))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: r } = n(488995),
                                  { GlobalDiscoveryAppsSections: i } = n(435220);
                              t({
                                  tab: r.APPS,
                                  applicationId: a,
                                  section: (0, y.A)(i, o.type === g.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != o && o.type === g.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = o,
                r = h.A.getApplication(t),
                i = new URL(n),
                _ = i.searchParams.get("referrer_id") ?? void 0,
                f = (0, d.A)(),
                { currentChannelId: g, instanceId: E, isCurrentlyInInstance: A, canLaunchInChannel: I } = (0, p.t)(t);
            if (I)
                return (
                    !A &&
                    null != g &&
                    ((0, c.d9)(t, i.searchParams.get("link_id"), i.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, l.su)({
                                channelId: g,
                                applicationId: t,
                                isStart: null == E,
                                embeddedActivitiesManager: f,
                                customId: n,
                                referrerId: _,
                                analyticsLocations: a,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                let e = r?.bot?.id;
                return (
                    null != e &&
                    (s.A.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: n } = await (0, c.d9)(
                                t,
                                i.searchParams.get("link_id"),
                                i.searchParams.get("custom_id"),
                            );
                            (0, u.A)({
                                targetApplicationId: t,
                                channelId: e,
                                analyticsLocations: a,
                                customId: n,
                                referrerId: _,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != o && o.type === g.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = o.code.split("-");
            return (
                n
                    .e("49607")
                    .then(n.bind(n, 811546))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, r);
                    }),
                !0
            );
        };
    if (null != o && o.type === g.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = o.code.split("-");
            return (
                Promise.resolve()
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { default: n } = e;
                        n({ guildId: r, skuId: t });
                    }),
                !0
            );
        };
    if (null != o && o.type === g.I.QUESTS_EMBED && (0, C.s)({ location: B.rE.EMBED_MOBILE }) && !(0, A.I)())
        return (e) => {
            let t, r;
            e?.preventDefault();
            let { search: a } = G.A.toURLSafe(o.url) ?? {};
            if (null != a) {
                let e = new URLSearchParams(a);
                (t = e.get("sort") ?? void 0), (r = e.get("filter") ?? void 0);
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 545986))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({ fromContent: i.u.QUEST_SHARE_LINK, questId: o.code });
                    }),
                !0
            );
        };
    let { host: L, hostname: w, pathname: x, search: k, hash: j } = G.A.toURLSafe(e) ?? {},
        W = G.A.isDiscordHostname(w ?? null) || G.A.isDiscordLocalhost(L ?? null, w ?? null);
    if (W && (x?.startsWith("/application-directory") || x?.startsWith("/discovery/applications"))) {
        let e = x.split("/"),
            t = x?.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            a = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, s, o;
            if ((t?.preventDefault(), i)) {
                let e = new URLSearchParams(k);
                (r = e.get("q") ?? void 0), (s = e.get("category_id") ?? void 0), (o = e.get("page") ?? void 0);
            } else a && (s = e[4]);
            return (
                n
                    .e("38042")
                    .then(n.bind(n, 837057))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(488995);
                        t({
                            tab: i.APPS,
                            categoryId: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            page: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            query: r,
                        });
                    }),
                !0
            );
        };
    }
    if (null != x && W && G.A.isAppRoute(x)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != k && (e.search = k), null != j && (e.hash = j), (t) => (t?.preventDefault(), (0, v.A)(x, e), !0);
    }
    if (null != x && W) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(200330),
            i = t(e);
        if (null != i)
            return (e) => (
                e?.preventDefault(),
                null != o &&
                    o.type === g.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(V.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let K = (0, S.SK)(x);
    if (null != x && W && null != K)
        return (e) => {
            e?.preventDefault();
            let t = M.A.getGuildId();
            null != K.guildId && "" !== K.guildId && K.guildId !== t && (0, v.A)(V.BVt.CHANNEL(K.guildId));
            let n = T.Ay.getGuildScheduledEvent(K.guildEventId);
            return null != n && (0, I.uR)({ eventId: n.id }), !0;
        };
    if (W && x?.startsWith("/settings/")) {
        let { default: e } = n(849823),
            { openUserSettingsFromParsedUrl: t } = n(840065),
            r = e(x, k);
        if (null != r)
            return (e) => (e?.preventDefault(), t({ match: r, analyticsLocations: a, urlOrigin: "link_click" }), !0);
    }
    if (W && x?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: r, story: i } = e(x);
        return (e) => (e?.preventDefault(), t(r, i), !0);
    }
    return W && x?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, N.navigateToQuestHome)({ fromContent: i.u.QUEST_BADGE }), !0)
        : W && x?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, R.pX)(V.BVt.QUEST_HOME_V2 + (k ?? "")), !0)
          : W && x?.startsWith("/quest-preview")
            ? (e) => {
                  if ((e?.preventDefault(), (0, b.U)({ location: B.rE.NAVIGATE_TO_QUEST_HOME_UTIL })))
                      return (0, R.pX)(V.BVt.QUEST_HOME_V2 + `?tab=preview_tool&quest_id=${x.split("/").at(-1)}`), !0;
              }
            : W && x?.startsWith("/discovery/servers")
              ? (e) => (
                    e?.preventDefault(),
                    n
                        .e("38042")
                        .then(n.bind(n, 837057))
                        .then((e) => {
                            let { transitionToGlobalDiscovery: t } = e,
                                { GlobalDiscoveryTab: r } = n(488995);
                            t({ tab: r.SERVERS });
                        }),
                    !0
                )
              : t || null == (0, D.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), O.A.show(e), !0);
}
