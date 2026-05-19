"use strict";
n.r(t), n.d(t, { default: () => j }), n(323874), n(14289), n(35956), n(134528), n(947204);
var i = n(607399),
    r = n(696292),
    s = n(228366),
    a = n(308528),
    o = n(376728),
    l = n(795816),
    u = n(956549),
    c = n(257269),
    d = n(574152),
    _ = n(95561),
    f = n(121401),
    h = n(587895),
    p = n(725606),
    E = n(167189),
    m = n(833291),
    g = n(707592),
    A = n(698441),
    I = n(268313),
    T = n(842241),
    S = n(376943),
    N = n(741231),
    y = n(971276),
    C = n(617986),
    v = n(976860),
    O = n(832163),
    R = n(788995),
    b = n(432e3);
n(809733),
    (0, n(240921).Ay)({
        name: "2026-03-mobile-orbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var D = n(495544),
    L = n(696451),
    w = n(299091),
    M = n(309010),
    P = n(967198),
    x = n(711014),
    U = n(174459),
    k = n(998218),
    G = n(975807),
    F = n(652215);
async function V(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: F.BRT.APP, invite_instance_id: n });
}
async function B(e, t) {
    let n = (0, T._U)(e.code, t),
        i = w.A.getInvite(e.code);
    if (null == i) {
        let { invite: t } = await o.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        i = t;
    }
    if (null == i) return;
    if (i.state === F.elq.EXPIRED || i.state === F.elq.BANNED || i.state === F.elq.ERROR)
        return void (await V(i, e.code, n));
    let r = x.Ay.getFlattenedGuildIds(),
        s = i?.guild?.id,
        a = null != s && r.includes(s),
        l = !1;
    if (a && null != i.roles && i.roles.length > 0) {
        let e = D.default.getId(),
            t = L.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        l = i.roles.some((e) => !n.has(e.id));
    }
    a && !l ? o.Ay.transitionToInviteSync(i) : await V(i, e.code, n);
}
n(758836);
let H = { skipExtensionCheck: void 0, analyticsLocations: [] };
function j(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H,
        T = (0, m.br)(e);
    if (null != T && (T.type === E.I.INVITE || T.type === E.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), B(T, o), !0);
    if (
        null != T &&
        (T.type === E.I.APP_DIRECTORY_PROFILE ||
            T.type === E.I.APP_DIRECTORY_STOREFRONT ||
            T.type === E.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = T,
                { applicationId: s, skuId: a } =
                    T.type === E.I.APP_DIRECTORY_PROFILE || T.type === E.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, f.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                o = P.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, G.A)(e)
                    : (U.default.track(F.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: M.A.getChannelId(),
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
                                  section: (0, I.A)(r, T.type === E.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != T && T.type === E.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = T,
                i = h.A.getApplication(t),
                r = new URL(n),
                o = r.searchParams.get("referrer_id") ?? void 0,
                _ = (0, d.A)(),
                { currentChannelId: f, instanceId: E, isCurrentlyInInstance: m, canLaunchInChannel: g } = (0, p.t)(t);
            if (g)
                return (
                    !m &&
                    null != f &&
                    ((0, c.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, l.su)({
                                channelId: f,
                                applicationId: t,
                                isStart: null == E,
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
                let e = i?.bot?.id;
                return (
                    null != e &&
                    (a.A.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: n } = await (0, c.d9)(
                                t,
                                r.searchParams.get("link_id"),
                                r.searchParams.get("custom_id"),
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
    if (null != T && T.type === E.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = T.code.split("-");
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
    if (null != T && T.type === E.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = T.code.split("-");
            return (
                n
                    .e("31445")
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { default: n } = e;
                        n({ guildId: i, skuId: t });
                    }),
                !0
            );
        };
    if (null != T && T.type === E.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            e?.preventDefault();
            let [t, i] = T.code.split("-"),
                r = O.A.getGuildIdFromApplicationId(i);
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
    if (null != T && T.type === E.I.QUESTS_EMBED && (0, y.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = k.A.toURLSafe(T.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                e.get("sort"), e.get("filter");
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 617986))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({ fromContent: r.u.QUEST_SHARE_LINK, questId: T.code });
                    }),
                !0
            );
        };
    let { host: D, hostname: L, pathname: w, search: x, hash: V } = k.A.toURLSafe(e) ?? {},
        j = k.A.isDiscordHostname(L ?? null) || k.A.isDiscordLocalhost(D ?? null, L ?? null);
    if (j && (w?.startsWith("/application-directory") || w?.startsWith("/discovery/applications"))) {
        let e = w.split("/"),
            t = w?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            s = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, a, o;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(x);
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
    if (null != w && j && k.A.isAppRoute(w)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != x && (e.search = x), null != V && (e.hash = V), (t) => (t?.preventDefault(), (0, N.A)(w, e), !0);
    }
    if (null != w && j) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != T &&
                    T.type === E.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(F.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let Y = (0, S.SK)(w);
    if (null != w && j && null != Y)
        return (e) => {
            e?.preventDefault();
            let t = P.A.getGuildId();
            null != Y.guildId && "" !== Y.guildId && Y.guildId !== t && (0, N.A)(F.BVt.CHANNEL(Y.guildId));
            let n = A.Ay.getGuildScheduledEvent(Y.guildEventId);
            return null != n && (0, g.uR)({ eventId: n.id }), !0;
        };
    if (j && w?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: w, search: x });
            return i(r, "link_click"), e(r.target, { analyticsLocations: s, path: r.path, searchParams: r.params }), !0;
        };
    }
    if (j && w?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: i, story: r } = e(w);
        return (e) => (e?.preventDefault(), t(i, r), !0);
    }
    return j && w?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, C.navigateToQuestHome)({ fromContent: r.u.QUEST_BADGE }), !0)
        : j && w?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, v.pX)(F.BVt.QUEST_HOME + (x ?? "")), !0)
          : j && w?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, v.pX)(F.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${w.split("/").at(-1)}`),
                  !0
              )
            : j && w?.startsWith("/discovery/servers")
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
              : t || null == (0, b.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), R.A.show(e), !0);
}
