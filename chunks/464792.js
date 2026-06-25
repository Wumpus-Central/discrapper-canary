"use strict";
n.r(t), n.d(t, { default: () => K }), n(323874), n(14289), n(35956), n(134528), n(947204);
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
    p = n(587895),
    E = n(725606),
    m = n(167189),
    g = n(833291),
    A = n(707592),
    I = n(698441),
    T = n(268313),
    S = n(842241),
    y = n(376943),
    C = n(741231),
    N = n(971276),
    v = n(617986),
    R = n(976860),
    O = n(832163),
    b = n(788995),
    D = n(432e3);
n(809733),
    (0, n(240921).Ay)({
        name: "2026-03-mobile-orbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var L = n(495544),
    w = n(696451),
    M = n(71393),
    P = n(299091),
    x = n(309010),
    k = n(967198),
    U = n(711014),
    G = n(174459),
    F = n(998218),
    V = n(975807),
    B = n(652215);
async function j(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: B.BRT.APP, invite_instance_id: n });
}
async function H(e, t) {
    let n = (0, S._U)(e.code, t),
        i = P.A.getInvite(e.code);
    if (null == i) {
        let { invite: t } = await l.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        i = t;
    }
    if (null == i) return;
    if (i.state === B.elq.EXPIRED || i.state === B.elq.BANNED || i.state === B.elq.ERROR)
        return void (await j(i, e.code, n));
    let r = U.Ay.getFlattenedGuildIds(),
        s = i?.guild?.id,
        a = null != s && r.includes(s),
        o = !1;
    if (a && null != i.roles && i.roles.length > 0) {
        let e = L.default.getId(),
            t = w.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        o = i.roles.some((e) => !n.has(e.id));
    }
    a && !o ? l.Ay.transitionToInviteSync(i) : await j(i, e.code, n);
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
    if (null == M.A.getGuild(e))
        try {
            await o.A.joinGuild(e, { lurker: !0, source: B.Q4z.GUILD_EVENT_EMBED }), await o.A.transitionToGuildSync(e);
        } catch (e) {
            e.body?.code === B.t02.UNKNOWN_GUILD && i();
            return;
        }
    k.A.getGuildId() !== e && (0, C.A)(B.BVt.CHANNEL(e)), (0, A.uR)({ eventId: r.id });
}
n(758836);
let W = { skipExtensionCheck: void 0, analyticsLocations: [] };
function K(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
        l = (0, g.br)(e);
    if (null != l && (l.type === m.I.INVITE || l.type === m.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), H(l, o), !0);
    if (
        null != l &&
        (l.type === m.I.APP_DIRECTORY_PROFILE ||
            l.type === m.I.APP_DIRECTORY_STOREFRONT ||
            l.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = l,
                { applicationId: s, skuId: a } =
                    l.type === m.I.APP_DIRECTORY_PROFILE || l.type === m.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, f.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                o = k.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, V.A)(e)
                    : (G.default.track(B.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: x.A.getChannelId(),
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
                                  section: (0, T.A)(r, l.type === m.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != l && l.type === m.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = l,
                i = p.A.getApplication(t),
                r = new URL(n),
                o = r.searchParams.get("referrer_id") ?? void 0,
                h = (0, _.A)(),
                { currentChannelId: f, instanceId: m, isCurrentlyInInstance: g, canLaunchInChannel: A } = (0, E.t)(t);
            if (A)
                return (
                    !g &&
                    null != f &&
                    ((0, d.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, u.su)({
                                channelId: f,
                                applicationId: t,
                                isStart: null == m,
                                embeddedActivitiesManager: h,
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
    if (null != l && l.type === m.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = l.code.split("-");
            return (
                n
                    .e("49607")
                    .then(n.bind(n, 811546))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, i);
                    }),
                !0
            );
        };
    if (null != l && l.type === m.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = l.code.split("-");
            return (
                Promise.resolve()
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { navigateToSocialLayerStorefrontWithGuildPreview: n } = e;
                        n({ guildId: i, skuId: t });
                    }),
                !0
            );
        };
    if (null != l && l.type === m.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            e?.preventDefault();
            let [t, i] = l.code.split("-"),
                r = O.A.getGuildIdFromApplicationId(i);
            if (null != r)
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
    if (null != l && l.type === m.I.QUESTS_EMBED && (0, N.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = F.A.toURLSafe(l.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                e.get("sort"), e.get("filter");
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 617986))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({ fromContent: r.u.QUEST_SHARE_LINK, questId: l.code });
                    }),
                !0
            );
        };
    let { host: A, hostname: I, pathname: S, search: L, hash: w } = F.A.toURLSafe(e) ?? {},
        M = F.A.isDiscordHostname(I ?? null) || F.A.isDiscordLocalhost(A ?? null, I ?? null);
    if (M && (S?.startsWith("/application-directory") || S?.startsWith("/discovery/applications"))) {
        let e = S.split("/"),
            t = S?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            s = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, a, o;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(L);
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
    if (null != S && M && F.A.isAppRoute(S)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != L && (e.search = L), null != w && (e.hash = w), (t) => (t?.preventDefault(), (0, C.A)(S, e), !0);
    }
    if (M && S?.startsWith("/users/")) {
        let e = S.match(/^\/users\/(\d+)/);
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
    if (null != S && M) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != l &&
                    l.type === m.I.APP_OAUTH2_LINK &&
                    h.Ay.trackWithMetadata(B.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let P = (0, y.SK)(S);
    if (null != S && M && null != P)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: n } = P;
            return Y(t, n), !0;
        };
    if (M && S?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: S, search: L });
            return i(r, "link_click"), e(r.target, { analyticsLocations: s, path: r.path, searchParams: r.params }), !0;
        };
    }
    if (M && S?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: i, story: r, controlOverrides: s } = e(S, L);
        return (e) => (e?.preventDefault(), t(i, r, s), !0);
    }
    return M && S?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, v.navigateToQuestHome)({ fromContent: r.u.QUEST_BADGE }), !0)
        : M && S?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, R.pX)(B.BVt.QUEST_HOME + (L ?? "")), !0)
          : M && S?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, R.pX)(B.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${S.split("/").at(-1)}`),
                  !0
              )
            : M && S?.startsWith("/discovery/servers")
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
                : (t) => (t?.preventDefault(), b.A.show(e), !0);
}
