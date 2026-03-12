"use strict";
n.r(t), n.d(t, { default: () => j }), n(323874), n(14289), n(35956), n(134528), n(947204);
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
    g = n(707592),
    A = n(698441),
    I = n(268313),
    T = n(376943),
    S = n(22007),
    y = n(677402),
    v = n(807876),
    N = n(545986),
    C = n(976860),
    R = n(788995),
    O = n(556022);
n(345953);
var b = n(961350),
    D = n(696451),
    L = n(299091),
    w = n(309010),
    M = n(967198),
    x = n(711014),
    P = n(954571),
    k = n(998218),
    U = n(975807),
    G = n(652215);
n(758836);
var F = n(654487);
async function V(e, t) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: G.BRT.APP });
}
async function B(e) {
    let t = L.A.getInvite(e.code);
    if (null == t) {
        let { invite: n } = await o.Ay.resolveInvite(e.code, "Markdown Link");
        t = n;
    }
    if (null == t) return;
    if (t.state === G.elq.EXPIRED || t.state === G.elq.BANNED || t.state === G.elq.ERROR)
        return void (await V(t, e.code));
    let n = x.Ay.getFlattenedGuildIds(),
        r = t?.guild?.id,
        i = null != r && n.includes(r),
        s = !1;
    if (i && null != t.roles && t.roles.length > 0) {
        let e = b.default.getId(),
            n = D.Ay.getMember(r, e),
            i = new Set(n?.roles ?? []);
        s = t.roles.some((e) => !i.has(e.id));
    }
    i && !s ? o.Ay.transitionToInviteSync(t) : await V(t, e.code);
}
let H = { skipExtensionCheck: void 0, analyticsLocations: [] };
function j(e) {
    let { skipExtensionCheck: t, analyticsLocations: s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H,
        o = (0, E.br)(e);
    if (null != o && (o.type === m.I.INVITE || o.type === m.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), B(o), !0);
    if (
        null != o &&
        (o.type === m.I.APP_DIRECTORY_PROFILE ||
            o.type === m.I.APP_DIRECTORY_STOREFRONT ||
            o.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: i } = o,
                { applicationId: s, skuId: a } =
                    o.type === m.I.APP_DIRECTORY_PROFILE || o.type === m.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: i, skuId: void 0 }
                        : ((0, f.u)(i) ?? { applicationId: void 0, skuId: void 0 }),
                l = M.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, U.A)(e)
                    : (P.default.track(G.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
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
                                  section: (0, I.A)(i, o.type === m.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != o && o.type === m.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = o,
                r = p.A.getApplication(t),
                i = new URL(n),
                _ = i.searchParams.get("referrer_id") ?? void 0,
                f = (0, d.A)(),
                { currentChannelId: m, instanceId: E, isCurrentlyInInstance: g, canLaunchInChannel: A } = (0, h.t)(t);
            if (A)
                return (
                    !g &&
                    null != m &&
                    ((0, c.d9)(t, i.searchParams.get("link_id"), i.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, l.su)({
                                channelId: m,
                                applicationId: t,
                                isStart: null == E,
                                embeddedActivitiesManager: f,
                                customId: n,
                                referrerId: _,
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
                                referrerId: _,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != o && o.type === m.I.GUILD_PRODUCT)
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
    if (null != o && o.type === m.I.SOCIAL_LAYER_STOREFRONT)
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
    if (null != o && o.type === m.I.QUESTS_EMBED && (0, y.s)({ location: F.rE.EMBED_MOBILE }))
        return (e) => {
            let t, r;
            e?.preventDefault();
            let { search: s } = k.A.toURLSafe(o.url) ?? {};
            if (null != s) {
                let e = new URLSearchParams(s);
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
    let { host: b, hostname: D, pathname: L, search: x, hash: V } = k.A.toURLSafe(e) ?? {},
        j = k.A.isDiscordHostname(D ?? null) || k.A.isDiscordLocalhost(b ?? null, D ?? null);
    if (j && (L?.startsWith("/application-directory") || L?.startsWith("/discovery/applications"))) {
        let e = L.split("/"),
            t = L?.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            s = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, a, o;
            if ((t?.preventDefault(), i)) {
                let e = new URLSearchParams(x);
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
    if (null != L && j && k.A.isAppRoute(L)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != x && (e.search = x), null != V && (e.hash = V), (t) => (t?.preventDefault(), (0, S.A)(L, e), !0);
    }
    if (null != L && j) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(200330),
            i = t(e);
        if (null != i)
            return (e) => (
                e?.preventDefault(),
                null != o &&
                    o.type === m.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(G.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let Y = (0, T.SK)(L);
    if (null != L && j && null != Y)
        return (e) => {
            e?.preventDefault();
            let t = M.A.getGuildId();
            null != Y.guildId && "" !== Y.guildId && Y.guildId !== t && (0, S.A)(G.BVt.CHANNEL(Y.guildId));
            let n = A.Ay.getGuildScheduledEvent(Y.guildEventId);
            return null != n && (0, g.uR)({ eventId: n.id }), !0;
        };
    if (j && L?.startsWith("/settings/")) {
        let { default: e, trackParseSettingsUrl: t } = n(849823),
            { openUserSettings: r } = n(840065);
        return (n) => {
            n?.preventDefault();
            let i = e({ path: L, search: x });
            return t(i, "link_click"), r(i.target, { analyticsLocations: s, path: i.path }), !0;
        };
    }
    if (j && L?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: r, story: i } = e(L);
        return (e) => (e?.preventDefault(), t(r, i), !0);
    }
    return j && L?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, N.navigateToQuestHome)({ fromContent: i.u.QUEST_BADGE }), !0)
        : j && L?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, C.pX)(G.BVt.QUEST_HOME + (x ?? "")), !0)
          : j && L?.startsWith("/quest-preview")
            ? (e) => {
                  if ((e?.preventDefault(), (0, v.U)({ location: F.rE.NAVIGATE_TO_QUEST_HOME_UTIL })))
                      return (0, C.pX)(G.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${L.split("/").at(-1)}`), !0;
              }
            : j && L?.startsWith("/discovery/servers")
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
              : t || null == (0, O.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), R.A.show(e), !0);
}
