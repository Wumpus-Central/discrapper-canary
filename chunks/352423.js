"use strict";
n.r(t), n.d(t, { default: () => Y }), n(323874), n(14289), n(35956), n(134528), n(947204);
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
    C = n(971276),
    R = n(545986),
    O = n(976860),
    b = n(788995),
    D = n(556022);
n(345953);
var L = n(961350),
    w = n(696451),
    M = n(299091),
    x = n(309010),
    P = n(967198),
    k = n(711014),
    U = n(954571),
    G = n(998218),
    F = n(975807),
    V = n(652215);
async function B(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: V.BRT.APP, invite_instance_id: n });
}
async function H(e, t) {
    let n = (0, y._U)(e.code, t),
        r = M.A.getInvite(e.code);
    if (null == r) {
        let { invite: t } = await o.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        r = t;
    }
    if (null == r) return;
    if (r.state === V.elq.EXPIRED || r.state === V.elq.BANNED || r.state === V.elq.ERROR)
        return void (await B(r, e.code, n));
    let i = k.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        a = null != s && i.includes(s),
        l = !1;
    if (a && null != r.roles && r.roles.length > 0) {
        let e = L.default.getId(),
            t = w.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        l = r.roles.some((e) => !n.has(e.id));
    }
    a && !l ? o.Ay.transitionToInviteSync(r) : await B(r, e.code, n);
}
n(758836);
let j = { skipExtensionCheck: void 0, analyticsLocations: [] };
function Y(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j,
        y = (0, E.br)(e);
    if (null != y && (y.type === m.I.INVITE || y.type === m.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), H(y, o), !0);
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
                o = P.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, F.A)(e)
                    : (U.default.track(V.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: x.A.getChannelId(),
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
    if (null != y && y.type === m.I.QUESTS_EMBED && (0, C.s)())
        return (e) => {
            let t, r;
            e?.preventDefault();
            let { search: s } = G.A.toURLSafe(y.url) ?? {};
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
    let { host: L, hostname: w, pathname: M, search: k, hash: B } = G.A.toURLSafe(e) ?? {},
        Y = G.A.isDiscordHostname(w ?? null) || G.A.isDiscordLocalhost(L ?? null, w ?? null);
    if (Y && (M?.startsWith("/application-directory") || M?.startsWith("/discovery/applications"))) {
        let e = M.split("/"),
            t = M?.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            s = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, a, o;
            if ((t?.preventDefault(), i)) {
                let e = new URLSearchParams(k);
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
    if (null != M && Y && G.A.isAppRoute(M)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != k && (e.search = k), null != B && (e.hash = B), (t) => (t?.preventDefault(), (0, N.A)(M, e), !0);
    }
    if (null != M && Y) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(200330),
            i = t(e);
        if (null != i)
            return (e) => (
                e?.preventDefault(),
                null != y &&
                    y.type === m.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(V.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let W = (0, v.SK)(M);
    if (null != M && Y && null != W)
        return (e) => {
            e?.preventDefault();
            let t = P.A.getGuildId();
            null != W.guildId && "" !== W.guildId && W.guildId !== t && (0, N.A)(V.BVt.CHANNEL(W.guildId));
            let n = T.Ay.getGuildScheduledEvent(W.guildEventId);
            return null != n && (0, I.uR)({ eventId: n.id }), !0;
        };
    if (Y && M?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(858897),
            { parseSettingsUrl: t, trackParseSettingsUrl: r } = n(718446);
        return (n) => {
            n?.preventDefault();
            let i = t({ path: M, search: k });
            return r(i, "link_click"), e(i.target, { analyticsLocations: s, path: i.path, searchParams: i.params }), !0;
        };
    }
    if (Y && M?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: r, story: i } = e(M);
        return (e) => (e?.preventDefault(), t(r, i), !0);
    }
    return Y && M?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, R.navigateToQuestHome)({ fromContent: i.u.QUEST_BADGE }), !0)
        : Y && M?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, O.pX)(V.BVt.QUEST_HOME + (k ?? "")), !0)
          : Y && M?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, O.pX)(V.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${M.split("/").at(-1)}`),
                  !0
              )
            : Y && M?.startsWith("/discovery/servers")
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
                : (t) => (t?.preventDefault(), b.A.show(e), !0);
}
