"use strict";
n.d(t, {
    Cf: () => T,
    PU: () => p,
    Z2: () => f,
    br: () => g,
    cf: () => S,
    fd: () => m,
    gp: () => E,
    jE: () => h,
    jb: () => A,
    jm: () => N,
    uf: () => I,
}),
    n(488428);
var i = n(636537),
    r = n(66834),
    s = n(741231),
    a = n(857071),
    o = n(976860),
    l = n(345942),
    u = n(498642),
    c = n(71393),
    d = n(174459),
    _ = n(652215);
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 ? arguments[3] : void 0,
        { channelId: a, onSuccess: u, joinSource: d, loadId: f, shouldNavigate: h = !0 } = n,
        p = (0, o.JK)(),
        E = c.A.getGuild(e),
        m = { sourceLocationStack: i, state: { analyticsSource: t } };
    null != E && null != E.joinedAt
        ? h &&
          (null == a
              ? (0, l.u)(e, m)
              : (0, s.A)(_.BVt.CHANNEL(e, a, n.messageId), { ...m, navigationReplace: !0, openChannel: !0 }))
        : (await r.A.joinGuild(e, { lurker: !0, source: d, loadId: f, lurkLocation: i?.[i.length - 1] ?? t?.page }),
          h &&
              (await r.A.transitionToGuildSync(
                  e,
                  {
                      ...m,
                      welcomeModalChannelId: a,
                      navigationReplace: null != a,
                      openChannel: null != a,
                      search: p.location.search,
                  },
                  a,
                  n.messageId,
              ))),
        u?.();
}
function h(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count,
        stickers: e.stickers,
        stickerCount: e.sticker_count,
        keywords: e.keywords,
    };
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    d.default.track(_.HAw.GUILD_DISCOVERY_EXITED, { load_id: e, guild_ids_viewed: t, recommendations_source: n });
}
function E(e) {
    d.default.track(_.HAw.SEARCH_CLOSED, { load_id: e });
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    d.default.track(_.HAw.SEARCH_STARTED, {
        search_type: _.I4_.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t,
    });
}
function g(e) {
    let { withCounts: t, offset: n } = e;
    d.default.track(_.HAw.GUILD_DISCOVERY_SEARCH_START, { with_counts: t, offset: n });
}
function A(e) {
    let { categoryId: t, error: n, willRequestRetry: i, isRequestRetry: r } = e;
    d.default.track(_.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: i,
        is_request_retry: r,
    });
}
function I(e) {
    let { categoryId: t } = e;
    d.default.track(_.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function T(e) {
    let { loadId: t, searchId: n, query: i, guildResults: r, analyticsContext: s, categoryId: a, isTagSearch: o } = e;
    d.default.track(_.HAw.SEARCH_RESULT_VIEWED, {
        search_type: o ? _.I4_.GUILD_DISCOVERY_TAG : _.I4_.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== r ? r.length : null,
        guild_ids: void 0 !== r ? r.map((e) => e.id) : null,
        query: i,
        location: s.location,
        category_id: a,
    });
}
function S(e) {
    let t = a.A.getLoadId(e);
    d.default.track(_.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: u.A.getMemberCount(e),
    });
}
async function N(e) {
    try {
        let t = (await i.Bo.get({ url: _.Rsh.GUILD_DISCOVERY_SLUG(String(e)), oldFormErrors: !0, rejectWithError: !0 }))
            .body;
        if (t?.guild == null || t?.slug == null) return null;
        return { guild: t.guild, slug: t.slug };
    } catch {
        return null;
    }
}
