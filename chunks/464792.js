"use strict";
n.r(t), n.d(t, { default: () => H }), n(323874), n(14289), n(35956), n(134528), n(947204);
var i = n(607399),
    r = n(696292),
    s = n(228366),
    a = n(308528),
    o = n(376728),
    l = n(795816),
    _ = n(956549),
    d = n(257269),
    u = n(574152),
    c = n(58149),
    E = n(121401),
    h = n(587895),
    m = n(725606),
    f = n(167189),
    g = n(833291),
    I = n(707592),
    A = n(698441),
    p = n(268313),
    T = n(21599),
    S = n(376943),
    N = n(22007),
    O = n(971276),
    R = n(545986),
    C = n(976860),
    y = n(788995),
    D = n(432e3);
n(809733),
    n(885973),
    (0, n(250105).Ay)({
        name: "2026-03-mobile-orbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var L = n(495544),
    v = n(696451),
    w = n(299091),
    P = n(309010),
    b = n(967198),
    k = n(711014),
    U = n(954571),
    M = n(998218),
    G = n(975807),
    x = n(652215);
async function V(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: x.BRT.APP, invite_instance_id: n });
}
async function F(e, t) {
    let n = (0, T._U)(e.code, t),
        i = w.A.getInvite(e.code);
    if (null == i) {
        let { invite: t } = await o.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        i = t;
    }
    if (null == i) return;
    if (i.state === x.elq.EXPIRED || i.state === x.elq.BANNED || i.state === x.elq.ERROR)
        return void (await V(i, e.code, n));
    let r = k.Ay.getFlattenedGuildIds(),
        s = i?.guild?.id,
        a = null != s && r.includes(s),
        l = !1;
    if (a && null != i.roles && i.roles.length > 0) {
        let e = L.default.getId(),
            t = v.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        l = i.roles.some((e) => !n.has(e.id));
    }
    a && !l ? o.Ay.transitionToInviteSync(i) : await V(i, e.code, n);
}
n(758836);
let B = { skipExtensionCheck: void 0, analyticsLocations: [] };
function H(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B,
        T = (0, g.br)(e);
    if (null != T && (T.type === f.I.INVITE || T.type === f.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), F(T, o), !0);
    if (
        null != T &&
        (T.type === f.I.APP_DIRECTORY_PROFILE ||
            T.type === f.I.APP_DIRECTORY_STOREFRONT ||
            T.type === f.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = T,
                { applicationId: s, skuId: a } =
                    T.type === f.I.APP_DIRECTORY_PROFILE || T.type === f.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, E.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                o = b.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, G.A)(e)
                    : (U.default.track(x.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: P.A.getChannelId(),
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
                                  section: (0, p.A)(r, T.type === f.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != T && T.type === f.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = T,
                i = h.A.getApplication(t),
                r = new URL(n),
                o = r.searchParams.get("referrer_id") ?? void 0,
                c = (0, u.A)(),
                { currentChannelId: E, instanceId: f, isCurrentlyInInstance: g, canLaunchInChannel: I } = (0, m.t)(t);
            if (I)
                return (
                    !g &&
                    null != E &&
                    ((0, d.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, l.su)({
                                channelId: E,
                                applicationId: t,
                                isStart: null == f,
                                embeddedActivitiesManager: c,
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
                            (0, _.A)({
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
    if (null != T && T.type === f.I.GUILD_PRODUCT)
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
    if (null != T && T.type === f.I.SOCIAL_LAYER_STOREFRONT)
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
    if (null != T && T.type === f.I.QUESTS_EMBED && (0, O.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = M.A.toURLSafe(T.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                e.get("sort"), e.get("filter");
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 545986))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({ fromContent: r.u.QUEST_SHARE_LINK, questId: T.code });
                    }),
                !0
            );
        };
    let { host: L, hostname: v, pathname: w, search: k, hash: V } = M.A.toURLSafe(e) ?? {},
        H = M.A.isDiscordHostname(v ?? null) || M.A.isDiscordLocalhost(L ?? null, v ?? null);
    if (H && (w?.startsWith("/application-directory") || w?.startsWith("/discovery/applications"))) {
        let e = w.split("/"),
            t = w?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            s = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, a, o;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(k);
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
    if (null != w && H && M.A.isAppRoute(w)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != k && (e.search = k), null != V && (e.hash = V), (t) => (t?.preventDefault(), (0, N.A)(w, e), !0);
    }
    if (null != w && H) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(200330),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != T &&
                    T.type === f.I.APP_OAUTH2_LINK &&
                    c.Ay.trackWithMetadata(x.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let Y = (0, S.SK)(w);
    if (null != w && H && null != Y)
        return (e) => {
            e?.preventDefault();
            let t = b.A.getGuildId();
            null != Y.guildId && "" !== Y.guildId && Y.guildId !== t && (0, N.A)(x.BVt.CHANNEL(Y.guildId));
            let n = A.Ay.getGuildScheduledEvent(Y.guildEventId);
            return null != n && (0, I.uR)({ eventId: n.id }), !0;
        };
    if (H && w?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(858897),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: w, search: k });
            return i(r, "link_click"), e(r.target, { analyticsLocations: s, path: r.path, searchParams: r.params }), !0;
        };
    }
    if (H && w?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: i, story: r } = e(w);
        return (e) => (e?.preventDefault(), t(i, r), !0);
    }
    return H && w?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, R.navigateToQuestHome)({ fromContent: r.u.QUEST_BADGE }), !0)
        : H && w?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, C.pX)(x.BVt.QUEST_HOME + (k ?? "")), !0)
          : H && w?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, C.pX)(x.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${w.split("/").at(-1)}`),
                  !0
              )
            : H && w?.startsWith("/discovery/servers")
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
              : t || null == (0, D.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), y.A.show(e), !0);
}
