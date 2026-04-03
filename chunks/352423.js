"use strict";
n.r(t), n.d(t, { default: () => K }), n(323874), n(14289), n(35956), n(134528), n(947204);
var r = n(607399),
    i = n(696292),
    s = n(73153),
    a = n(308528),
    o = n(846293),
    l = n(795816),
    u = n(956549),
    c = n(257269),
    d = n(574152),
    _ = n(58149),
    f = n(121401),
    p = n(587895),
    h = n(725606),
    m = n(167189),
    E = n(833291),
    g = n(352306),
    A = n(829203),
    I = n(707592),
    T = n(698441),
    S = n(268313),
    y = n(21599),
    v = n(376943),
    N = n(22007),
    C = n(807876),
    R = n(971276),
    O = n(545986),
    b = n(976860),
    D = n(788995),
    L = n(556022);
n(345953);
var w = n(961350),
    M = n(696451),
    x = n(299091),
    P = n(309010),
    k = n(967198),
    U = n(711014),
    G = n(954571),
    F = n(998218),
    V = n(975807),
    B = n(652215);
n(758836);
var H = n(654487);
async function j(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: B.BRT.APP, invite_instance_id: n });
}
async function Y(e, t) {
    let n = (0, y._U)(e.code, t),
        r = x.A.getInvite(e.code);
    if (null == r) {
        let { invite: t } = await o.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        r = t;
    }
    if (null == r) return;
    if (r.state === B.elq.EXPIRED || r.state === B.elq.BANNED || r.state === B.elq.ERROR)
        return void (await j(r, e.code, n));
    let i = U.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        a = null != s && i.includes(s),
        l = !1;
    if (a && null != r.roles && r.roles.length > 0) {
        let e = w.default.getId(),
            t = M.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        l = r.roles.some((e) => !n.has(e.id));
    }
    a && !l ? o.Ay.transitionToInviteSync(r) : await j(r, e.code, n);
}
let W = { skipExtensionCheck: void 0, analyticsLocations: [] };
function K(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
        y = (0, E.br)(e);
    if (null != y && (y.type === m.I.INVITE || y.type === m.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), Y(y, o), !0);
    if (
        null != y &&
        (y.type === m.I.APP_DIRECTORY_PROFILE ||
            y.type === m.I.APP_DIRECTORY_STOREFRONT ||
            y.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: i } = y,
                { applicationId: s, skuId: a } =
                    y.type === m.I.APP_DIRECTORY_PROFILE || y.type === m.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: i, skuId: void 0 }
                        : ((0, f.u)(i) ?? { applicationId: void 0, skuId: void 0 }),
                o = k.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, V.A)(e)
                    : (G.default.track(B.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
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
                                  applicationId: s,
                                  section: (0, S.A)(i, y.type === m.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != y && y.type === m.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = y,
                r = p.A.getApplication(t),
                i = new URL(n),
                o = i.searchParams.get("referrer_id") ?? void 0,
                _ = (0, d.A)(),
                { currentChannelId: f, instanceId: m, isCurrentlyInInstance: E, canLaunchInChannel: g } = (0, h.t)(t);
            if (g)
                return (
                    !E &&
                    null != f &&
                    ((0, c.d9)(t, i.searchParams.get("link_id"), i.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, l.su)({
                                channelId: f,
                                applicationId: t,
                                isStart: null == m,
                                embeddedActivitiesManager: _,
                                customId: n,
                                referrerId: o,
                                analyticsLocations: s,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                let e = r?.bot?.id;
                return (
                    null != e &&
                    (a.A.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: n } = await (0, c.d9)(
                                t,
                                i.searchParams.get("link_id"),
                                i.searchParams.get("custom_id"),
                            );
                            (0, u.A)({
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
    if (null != y && y.type === m.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = y.code.split("-");
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
    if (null != y && y.type === m.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = y.code.split("-");
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
    if (null != y && y.type === m.I.QUESTS_EMBED && (0, R.s)())
        return (e) => {
            let t, r;
            e?.preventDefault();
            let { search: s } = F.A.toURLSafe(y.url) ?? {};
            if (null != s) {
                let e = new URLSearchParams(s);
                (t = e.get("sort") ?? void 0), (r = e.get("filter") ?? void 0);
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 545986))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({ fromContent: i.u.QUEST_SHARE_LINK, questId: y.code });
                    }),
                !0
            );
        };
    if (null != y && y.type === m.I.GORILLA_DEEP_LINK)
        return (e) => {
            if ((e?.preventDefault(), g.s.getConfig({ location: "coded_link" }).enabled))
                return (0, A.A)({ source: "coded_link" }), !0;
        };
    let { host: w, hostname: M, pathname: x, search: U, hash: j } = F.A.toURLSafe(e) ?? {},
        K = F.A.isDiscordHostname(M ?? null) || F.A.isDiscordLocalhost(w ?? null, M ?? null);
    if (K && (x?.startsWith("/application-directory") || x?.startsWith("/discovery/applications"))) {
        let e = x.split("/"),
            t = x?.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            s = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, a, o;
            if ((t?.preventDefault(), i)) {
                let e = new URLSearchParams(U);
                (r = e.get("q") ?? void 0), (a = e.get("category_id") ?? void 0), (o = e.get("page") ?? void 0);
            } else s && (a = e[4]);
            return (
                n
                    .e("38042")
                    .then(n.bind(n, 837057))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(488995);
                        t({
                            tab: i.APPS,
                            categoryId: null == a || Number.isNaN(a) ? void 0 : Number(a),
                            page: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            query: r,
                        });
                    }),
                !0
            );
        };
    }
    if (null != x && K && F.A.isAppRoute(x)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != U && (e.search = U), null != j && (e.hash = j), (t) => (t?.preventDefault(), (0, N.A)(x, e), !0);
    }
    if (null != x && K) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(200330),
            i = t(e);
        if (null != i)
            return (e) => (
                e?.preventDefault(),
                null != y &&
                    y.type === m.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(B.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let $ = (0, v.SK)(x);
    if (null != x && K && null != $)
        return (e) => {
            e?.preventDefault();
            let t = k.A.getGuildId();
            null != $.guildId && "" !== $.guildId && $.guildId !== t && (0, N.A)(B.BVt.CHANNEL($.guildId));
            let n = T.Ay.getGuildScheduledEvent($.guildEventId);
            return null != n && (0, I.uR)({ eventId: n.id }), !0;
        };
    if (K && x?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(858897),
            { parseSettingsUrl: t, trackParseSettingsUrl: r } = n(718446);
        return (n) => {
            n?.preventDefault();
            let i = t({ path: x, search: U });
            return r(i, "link_click"), e(i.target, { analyticsLocations: s, path: i.path, searchParams: i.params }), !0;
        };
    }
    if (K && x?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: r, story: i } = e(x);
        return (e) => (e?.preventDefault(), t(r, i), !0);
    }
    return K && x?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, O.navigateToQuestHome)({ fromContent: i.u.QUEST_BADGE }), !0)
        : K && x?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, b.pX)(B.BVt.QUEST_HOME + (U ?? "")), !0)
          : K && x?.startsWith("/quest-preview")
            ? (e) => {
                  if ((e?.preventDefault(), (0, C.U)({ location: H.rE.NAVIGATE_TO_QUEST_HOME_UTIL })))
                      return (0, b.pX)(B.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${x.split("/").at(-1)}`), !0;
              }
            : K && x?.startsWith("/discovery/servers")
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
              : t || null == (0, L.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), D.A.show(e), !0);
}
