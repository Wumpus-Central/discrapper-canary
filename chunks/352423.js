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
    g = n(707592),
    A = n(698441),
    I = n(268313),
    T = n(21599),
    S = n(376943),
    y = n(22007),
    v = n(807876),
    N = n(971276),
    C = n(545986),
    R = n(976860),
    O = n(788995),
    b = n(556022);
n(345953);
var D = n(961350),
    L = n(696451),
    w = n(299091),
    M = n(309010),
    P = n(967198),
    x = n(711014),
    k = n(954571),
    U = n(998218),
    G = n(975807),
    F = n(652215);
n(758836);
var V = n(654487);
async function B(e, t, n) {
    await s.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: F.BRT.APP, invite_instance_id: n });
}
async function H(e, t) {
    let n = (0, T._U)(e.code, t),
        r = w.A.getInvite(e.code);
    if (null == r) {
        let { invite: t } = await o.Ay.resolveInvite(e.code, "Markdown Link", { inviteInstanceId: n });
        r = t;
    }
    if (null == r) return;
    if (r.state === F.elq.EXPIRED || r.state === F.elq.BANNED || r.state === F.elq.ERROR)
        return void (await B(r, e.code, n));
    let i = x.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        a = null != s && i.includes(s),
        l = !1;
    if (a && null != r.roles && r.roles.length > 0) {
        let e = D.default.getId(),
            t = L.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        l = r.roles.some((e) => !n.has(e.id));
    }
    a && !l ? o.Ay.transitionToInviteSync(r) : await B(r, e.code, n);
}
let j = { skipExtensionCheck: void 0, analyticsLocations: [] };
function Y(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: s,
            messageId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j,
        T = (0, E.br)(e);
    if (null != T && (T.type === m.I.INVITE || T.type === m.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), H(T, o), !0);
    if (
        null != T &&
        (T.type === m.I.APP_DIRECTORY_PROFILE ||
            T.type === m.I.APP_DIRECTORY_STOREFRONT ||
            T.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: i } = T,
                { applicationId: s, skuId: a } =
                    T.type === m.I.APP_DIRECTORY_PROFILE || T.type === m.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: i, skuId: void 0 }
                        : ((0, f.u)(i) ?? { applicationId: void 0, skuId: void 0 }),
                o = P.A.getGuildId() ?? void 0;
            return (
                null == s
                    ? (0, G.A)(e)
                    : (k.default.track(F.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.Fr ? "mobile_web" : "desktop_web",
                          guild_id: o,
                          channel_id: M.A.getChannelId(),
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
                                  section: (0, I.A)(i, T.type === m.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: a,
                              });
                          })),
                !0
            );
        };
    if (null != T && T.type === m.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = T,
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
    if (null != T && T.type === m.I.GUILD_PRODUCT)
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
    if (null != T && T.type === m.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            e?.preventDefault();
            let [t, r] = T.code.split("-");
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
    if (null != T && T.type === m.I.QUESTS_EMBED && (0, N.s)())
        return (e) => {
            let t, r;
            e?.preventDefault();
            let { search: s } = U.A.toURLSafe(T.url) ?? {};
            if (null != s) {
                let e = new URLSearchParams(s);
                (t = e.get("sort") ?? void 0), (r = e.get("filter") ?? void 0);
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
    let { host: D, hostname: L, pathname: w, search: x, hash: B } = U.A.toURLSafe(e) ?? {},
        Y = U.A.isDiscordHostname(L ?? null) || U.A.isDiscordLocalhost(D ?? null, L ?? null);
    if (Y && (w?.startsWith("/application-directory") || w?.startsWith("/discovery/applications"))) {
        let e = w.split("/"),
            t = w?.startsWith("/discovery/applications"),
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
    if (null != w && Y && U.A.isAppRoute(w)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != x && (e.search = x), null != B && (e.hash = B), (t) => (t?.preventDefault(), (0, y.A)(w, e), !0);
    }
    if (null != w && Y) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(200330),
            i = t(e);
        if (null != i)
            return (e) => (
                e?.preventDefault(),
                null != T &&
                    T.type === m.I.APP_OAUTH2_LINK &&
                    _.Ay.trackWithMetadata(F.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let W = (0, S.SK)(w);
    if (null != w && Y && null != W)
        return (e) => {
            e?.preventDefault();
            let t = P.A.getGuildId();
            null != W.guildId && "" !== W.guildId && W.guildId !== t && (0, y.A)(F.BVt.CHANNEL(W.guildId));
            let n = A.Ay.getGuildScheduledEvent(W.guildEventId);
            return null != n && (0, g.uR)({ eventId: n.id }), !0;
        };
    if (Y && w?.startsWith("/settings/")) {
        let { default: e, trackParseSettingsUrl: t } = n(849823),
            { openUserSettings: r } = n(840065);
        return (n) => {
            n?.preventDefault();
            let i = e({ path: w, search: x });
            return t(i, "link_click"), r(i.target, { analyticsLocations: s, path: i.path, searchParams: i.params }), !0;
        };
    }
    if (Y && w?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: r, story: i } = e(w);
        return (e) => (e?.preventDefault(), t(r, i), !0);
    }
    return Y && w?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, C.navigateToQuestHome)({ fromContent: i.u.QUEST_BADGE }), !0)
        : Y && w?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, R.pX)(F.BVt.QUEST_HOME + (x ?? "")), !0)
          : Y && w?.startsWith("/quest-preview")
            ? (e) => {
                  if ((e?.preventDefault(), (0, v.U)({ location: V.rE.NAVIGATE_TO_QUEST_HOME_UTIL })))
                      return (0, R.pX)(F.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${w.split("/").at(-1)}`), !0;
              }
            : Y && w?.startsWith("/discovery/servers")
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
              : t || null == (0, b.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), O.A.show(e), !0);
}
