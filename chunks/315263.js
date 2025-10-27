n.r(t),
    n.d(t, { default: () => Z }),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(35282),
    n(784620),
    n(973216);
var r = n(873546),
    i = n(636977),
    a = n(570140),
    o = n(493683),
    s = n(447543),
    l = n(566620),
    c = n(122613),
    u = n(649256),
    d = n(574952),
    f = n(367907),
    _ = n(421474),
    p = n(812206),
    h = n(506895),
    m = n(960904),
    g = n(830121),
    E = n(15274),
    b = n(924301),
    y = n(543842),
    O = n(754688),
    v = n(336197),
    I = n(36243),
    T = n(977156),
    S = n(110560),
    A = n(703656),
    C = n(540709),
    N = n(881706);
n(812513);
var R = n(701190),
    P = n(944486),
    D = n(914010),
    w = n(771845),
    L = n(626135),
    x = n(591759),
    M = n(782568),
    k = n(981631);
n(215023);
var j = n(46140);
async function U(e, t) {
    await a.Z.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: e,
        code: t,
        context: k.IlC.APP,
    });
}
async function G(e) {
    var t;
    let n = R.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.ZP.resolveInvite(e.code, "Markdown Link");
        n = t;
    }
    if (null == n) return;
    if (n.state === k.r2o.EXPIRED || n.state === k.r2o.BANNED || n.state === k.r2o.ERROR)
        return void (await U(n, e.code));
    let r = w.ZP.getFlattenedGuildIds(),
        i = null == n || null == (t = n.guild) ? void 0 : t.id;
    null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await U(n, e.code);
}
let B = {
    skipExtensionCheck: void 0,
    analyticsLocations: [],
};
function Z(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B,
        R = (0, g.zO)(e);
    if (null != R && (R.type === m.g.INVITE || R.type === m.g.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (null == e || e.preventDefault(), G(R), !0);
    if (
        null != R &&
        (R.type === m.g.APP_DIRECTORY_PROFILE ||
            R.type === m.g.APP_DIRECTORY_STOREFRONT ||
            R.type === m.g.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            var i, a;
            null == t || t.preventDefault();
            let { code: o } = R,
                { applicationId: s, skuId: l } =
                    R.type === m.g.APP_DIRECTORY_PROFILE || R.type === m.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: o,
                              skuId: void 0,
                          }
                        : null != (i = (0, _.Q)(o))
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0,
                            },
                c = null != (a = D.Z.getGuildId()) ? a : void 0;
            return (
                null == s
                    ? (0, M.Z)(e)
                    : (L.default.track(k.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: s,
                          device_platform: r.tq ? "mobile_web" : "desktop_web",
                          guild_id: c,
                          channel_id: P.Z.getChannelId(),
                      }),
                      Promise.resolve()
                          .then(n.bind(n, 749681))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: r } = n(49898),
                                  { GlobalDiscoveryAppsSections: i } = n(979007);
                              t({
                                  tab: r.APPS,
                                  applicationId: s,
                                  section: (0, y.Z)(i, R.type === m.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l,
                              });
                          })),
                !0
            );
        };
    if (null != R && R.type === m.g.ACTIVITY_BOOKMARK)
        return (e) => {
            var t, n;
            null == e || e.preventDefault();
            let { code: r, url: i } = R,
                a = p.Z.getApplication(r),
                f = new URL(i),
                _ = null != (t = f.searchParams.get("referrer_id")) ? t : void 0,
                m = (0, d.Z)(),
                { currentChannelId: g, instanceId: E, isCurrentlyInInstance: b, canLaunchInChannel: y } = (0, h.v)(r);
            if (y)
                return (
                    !b &&
                    null != g &&
                    ((0, u.ur)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: t } = e;
                            await (0, l.G6)({
                                channelId: g,
                                applicationId: r,
                                isStart: null == E,
                                embeddedActivitiesManager: m,
                                customId: t,
                                referrerId: _,
                                analyticsLocations: s,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                let e = null == a || null == (n = a.bot) ? void 0 : n.id;
                return (
                    null != e &&
                    (o.Z.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: t } = await (0, u.ur)(
                                r,
                                f.searchParams.get("link_id"),
                                f.searchParams.get("custom_id"),
                            );
                            (0, c.Z)({
                                targetApplicationId: r,
                                channelId: e,
                                analyticsLocations: s,
                                customId: t,
                                referrerId: _,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != R && R.type === m.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = R.code.split("-");
            return (
                n
                    .e("84239")
                    .then(n.bind(n, 838433))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, r);
                    }),
                !0
            );
        };
    if (null != R && R.type === m.g.QUESTS_EMBED && (0, T.c)({ location: j.dr.EMBED_MOBILE }))
        return (e) => {
            var t, r, a;
            let o, s;
            null == e || e.preventDefault();
            let { search: l } = null != (t = x.Z.toURLSafe(R.url)) ? t : {};
            if (null != l) {
                let e = new URLSearchParams(l);
                (o = null != (r = e.get("sort")) ? r : void 0), (s = null != (a = e.get("filter")) ? a : void 0);
            }
            return (
                Promise.resolve()
                    .then(n.bind(n, 110560))
                    .then((e) => {
                        let { navigateToQuestHome: t } = e;
                        t({
                            fromContent: i.j.QUEST_SHARE_LINK,
                            questId: R.code,
                        });
                    }),
                !0
            );
        };
    let { host: w, hostname: U, pathname: Z, search: F, hash: V } = null != (t = x.Z.toURLSafe(e)) ? t : {},
        H =
            x.Z.isDiscordHostname(null != U ? U : null) ||
            x.Z.isDiscordLocalhost(null != w ? w : null, null != U ? U : null);
    if (
        H &&
        ((null == Z ? void 0 : Z.startsWith("/application-directory")) ||
            (null == Z ? void 0 : Z.startsWith("/discovery/applications")))
    ) {
        let e = Z.split("/"),
            t = null == Z ? void 0 : Z.startsWith("/discovery/applications"),
            r = e[t ? 3 : 2],
            i = "search" === r,
            a = t && "categories" === r && "featured" !== e[4];
        return (t) => {
            let r, o, s;
            if ((null == t || t.preventDefault(), i)) {
                var l, c, u;
                let e = new URLSearchParams(F);
                (r = null != (l = e.get("q")) ? l : void 0),
                    (o = null != (c = e.get("category_id")) ? c : void 0),
                    (s = null != (u = e.get("page")) ? u : void 0);
            } else a && (o = e[4]);
            return (
                Promise.resolve()
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: i } = n(49898);
                        t({
                            tab: i.APPS,
                            categoryId: null == o || Number.isNaN(o) ? void 0 : Number(o),
                            page: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            query: r,
                        });
                    }),
                !0
            );
        };
    }
    if (null != Z && H && x.Z.isAppRoute(Z)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0,
        };
        return (
            null != F && (e.search = F),
            null != V && (e.hash = V),
            (t) => (null == t || t.preventDefault(), (0, v.Z)(Z, e), !0)
        );
    }
    if (null != Z && H) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i)
            return (e) => (
                null == e || e.preventDefault(),
                null != R &&
                    R.type === m.g.APP_OAUTH2_LINK &&
                    f.ZP.trackWithMetadata(k.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }),
                r(i),
                !0
            );
    }
    let Y = (0, O.Ao)(Z);
    if (null != Z && H && null != Y)
        return (e) => {
            null == e || e.preventDefault();
            let t = D.Z.getGuildId();
            null != Y.guildId && "" !== Y.guildId && Y.guildId !== t && (0, v.Z)(k.Z5c.CHANNEL(Y.guildId));
            let n = b.ZP.getGuildScheduledEvent(Y.guildEventId);
            return null != n && (0, E.bO)({ eventId: n.id }), !0;
        };
    if (H && (null == Z ? void 0 : Z.startsWith("/settings/"))) {
        let { default: e } = n(722589),
            { openUserSettingsFromParsedUrl: t } = n(518596),
            r = e(Z, F);
        if (null != r)
            return (e) => (
                null == e || e.preventDefault(),
                t({
                    match: r,
                    analyticsLocations: s,
                    urlOrigin: "link_click",
                }),
                !0
            );
    }
    return H && (null == Z ? void 0 : Z.startsWith("/discovery/quests"))
        ? (e) => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)({ fromContent: i.j.QUEST_BADGE }), !0)
        : H && (null == Z ? void 0 : Z.startsWith("/quest-home"))
          ? (e) => (null == e || e.preventDefault(), (0, A.uL)(k.Z5c.QUEST_HOME_V2 + (null != F ? F : "")), !0)
          : H && (null == Z ? void 0 : Z.startsWith("/quest-preview"))
            ? (e) => {
                  if ((null == e || e.preventDefault(), (0, I.T)({ location: j.dr.NAVIGATE_TO_QUEST_HOME_UTIL })))
                      return (
                          (0, A.uL)(k.Z5c.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(Z.split("/").at(-1))), !0
                      );
              }
            : H && (null == Z ? void 0 : Z.startsWith("/discovery/servers"))
              ? (e) => (
                    null == e || e.preventDefault(),
                    Promise.resolve()
                        .then(n.bind(n, 749681))
                        .then((e) => {
                            let { transitionToGlobalDiscovery: t } = e,
                                { GlobalDiscoveryTab: r } = n(49898);
                            t({ tab: r.SERVERS });
                        }),
                    !0
                )
              : a || null == (0, N.v)(e)
                ? void 0
                : (t) => (null == t || t.preventDefault(), C.Z.show(e), !0);
}
