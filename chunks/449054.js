"use strict";
n.d(t, {
    Cf: () => I,
    PU: () => p,
    Z2: () => _,
    br: () => g,
    cf: () => T,
    fd: () => m,
    gp: () => h,
    jE: () => f,
    jb: () => E,
    uf: () => A,
}),
    n(488428),
    n(562465);
var r = n(686956),
    i = n(22007),
    a = n(857071),
    s = n(976860),
    o = n(345942),
    l = n(498642),
    u = n(71393),
    c = n(954571),
    d = n(652215);
async function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: a, onSuccess: l, joinSource: c, loadId: _, shouldNavigate: f = !0 } = n,
        p = (0, s.JK)(),
        h = u.A.getGuild(e),
        m = { state: { analyticsSource: t } };
    null != h && null != h.joinedAt
        ? f &&
          (null == a
              ? (0, o.u)(e, m)
              : (0, i.A)(d.BVt.CHANNEL(e, a, n.messageId), { ...m, navigationReplace: !0, openChannel: !0 }))
        : (await r.A.joinGuild(e, { lurker: !0, source: c, loadId: _, lurkLocation: t?.page }),
          f &&
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
        l?.();
}
function f(e) {
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
    c.default.track(d.HAw.GUILD_DISCOVERY_EXITED, { load_id: e, guild_ids_viewed: t, recommendations_source: n });
}
function h(e) {
    c.default.track(d.HAw.SEARCH_CLOSED, { load_id: e });
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    c.default.track(d.HAw.SEARCH_STARTED, {
        search_type: d.I4_.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t,
    });
}
function g(e) {
    let { withCounts: t, offset: n } = e;
    c.default.track(d.HAw.GUILD_DISCOVERY_SEARCH_START, { with_counts: t, offset: n });
}
function E(e) {
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    c.default.track(d.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i,
    });
}
function A(e) {
    let { categoryId: t } = e;
    c.default.track(d.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function I(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: a, categoryId: s, isTagSearch: o } = e;
    c.default.track(d.HAw.SEARCH_RESULT_VIEWED, {
        search_type: o ? d.I4_.GUILD_DISCOVERY_TAG : d.I4_.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: a.location,
        category_id: s,
    });
}
function T(e) {
    let t = a.A.getLoadId(e);
    c.default.track(d.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: l.A.getMemberCount(e),
    });
}
