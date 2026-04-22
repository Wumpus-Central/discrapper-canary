"use strict";
n.r(t), n.d(t, { default: () => H }), n(323874), n(14289), n(35956), n(134528), n(947204);
var r = n(607399),
    i = n(696292),
    s = n(73153),
    a = n(308528),
    o = n(846293),
    l = n(795816),
    u = n(956549),
    d = n(257269),
    c = n(574152),
    _ = n(58149),
    f = n(121401),
    E = n(587895),
    h = n(725606),
    p = n(167189),
    m = n(833291),
    g = n(707592),
    A = n(698441),
    I = n(268313),
    T = n(21599),
    S = n(376943),
    y = n(22007),
    N = n(971276),
    O = n(545986),
    R = n(976860),
    v = n(788995),
    C = n(556022);
n(345953);
var b = n(961350),
    D = n(696451),
    L = n(299091),
    w = n(309010),
    M = n(967198),
    P = n(711014),
    U = n(954571),
    k = n(998218),
    x = n(975807),
    G = n(652215);
async function V(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: G.BRT.APP, invite_instance_id: n });
}
async function F(e, t) {
    let n = (0, T._U)(e.code, t),
        r = L.A.getInvite(e.code);
    if (null == r) {
        let { invite: t } = await o.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        r = t;
    }
    if (null == r) return;
    if (r.state === G.elq.EXPIRED || r.state === G.elq.BANNED || r.state === G.elq.ERROR)
        return void (await V(r, e.code, n));
    let i = P.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        a = null != s && i.includes(s),
        l = !1;
    if (a && null != r.roles && r.roles.length > 0) {
        let e = b.default.getId(),
            t = D.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        l = r.roles.some((e) => !n.has(e.id));
    }
    a && !l ? o.Ay.transitionToInviteSync(r) : await V(r, e.code, n);
}
n(758836);
let B = { skipExtensionCheck: void 0, analyticsLocations: [] };
function H(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B,
        T = (0, m.br)(e);
    if (null != T && (T.type === p.I.INVITE || T.type === p.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), F(T, o), !0);
    if (
        null != T &&
        (T.type === p.I.APP_DIRECTORY_PROFILE ||
            T.type === p.I.APP_DIRECTORY_STOREFRONT ||
            T.type === p.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: i } = T,
                { applicationId: s, skuId: a } =
                    T.type === p.I.APP_DIRECTORY_PROFILE || T.type === p.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: i, skuId: void 0 }
                        : ((0, f.u)(i) ?? { applicationId: void 0, skuId: void 0 }),
                o = M.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, x.A)(e)
                    : (U.default.track(G.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: w.A.getChannelId(),
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
                                  section: (0, I.A)(i, T.type === p.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != T && T.type === p.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = T,
                r = E.A.getApplication(t),
                i = new URL(n),
                o = i.searchParams.get("referrer_id") ?? void 0,
                _ = (0, c.A)(),
                { currentChannelId: f, instanceId: p, isCurrentlyInInstance: m, canLaunchInChannel: g } = (0, h.t)(t);
            if (g)
                return (
                    !m &&
                    null != f &&
                    ((0, d.d9)(t, i.searchParams.get("link_id"), i.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, l.su)({
                                channelId: f,
                                applicationId: t,
                                isStart: null == p,
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
                            let { customId: n } = await (0, d.d9)(
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
    if (null != T && T.type === p.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = T.code.split("-");
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
    if (null != T && T.type === p.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = T.code.split("-");
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
    if (null != T && T.type === p.I.QUESTS_EMBED && (0, N.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = k.A.toURLSafe(T.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                e.get("sort"), e.get("filter");
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 545986))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({ fromContent: i.u.QUEST_SHARE_LINK, questId: T.code });
                    }),
                !0
            );
        };
    let { host: b, hostname: D, pathname: L, search: P, hash: V } = k.A.toURLSafe(e) ?? {},
        H = k.A.isDiscordHostname(D ?? null) || k.A.isDiscordLocalhost(b ?? null, D ?? null);
    if (H && (L?.startsWith("/application-directory") || L?.startsWith("/discovery/applications"))) {
        let e = L.split("/"),
            t = L?.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            s = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, a, o;
            if ((t?.preventDefault(), i)) {
                let e = new URLSearchParams(P);
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
    if (null != L && H && k.A.isAppRoute(L)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != P && (e.search = P), null != V && (e.hash = V), (t) => (t?.preventDefault(), (0, y.A)(L, e), !0);
    }
    if (null != L && H) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(200330),
            i = t(e);
        if (null != i)
            return (e) => (
                e?.preventDefault(),
                null != T &&
                    T.type === p.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(G.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let Y = (0, S.SK)(L);
    if (null != L && H && null != Y)
        return (e) => {
            e?.preventDefault();
            let t = M.A.getGuildId();
            null != Y.guildId && "" !== Y.guildId && Y.guildId !== t && (0, y.A)(G.BVt.CHANNEL(Y.guildId));
            let n = A.Ay.getGuildScheduledEvent(Y.guildEventId);
            return null != n && (0, g.uR)({ eventId: n.id }), !0;
        };
    if (H && L?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(858897),
            { parseSettingsUrl: t, trackParseSettingsUrl: r } = n(718446);
        return (n) => {
            n?.preventDefault();
            let i = t({ path: L, search: P });
            return r(i, "link_click"), e(i.target, { analyticsLocations: s, path: i.path, searchParams: i.params }), !0;
        };
    }
    if (H && L?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: r, story: i } = e(L);
        return (e) => (e?.preventDefault(), t(r, i), !0);
    }
    return H && L?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, O.navigateToQuestHome)({ fromContent: i.u.QUEST_BADGE }), !0)
        : H && L?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, R.pX)(G.BVt.QUEST_HOME + (P ?? "")), !0)
          : H && L?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, R.pX)(G.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${L.split("/").at(-1)}`),
                  !0
              )
            : H && L?.startsWith("/discovery/servers")
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
              : t || null == (0, C.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), v.A.show(e), !0);
}
