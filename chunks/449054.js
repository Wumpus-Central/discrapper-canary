"use strict";
n.d(t, {
    Cf: () => T,
    PU: () => h,
    Z2: () => f,
    br: () => g,
    cf: () => S,
    fd: () => E,
    gp: () => m,
    jE: () => p,
    jb: () => A,
    jm: () => y,
    uf: () => I,
}),
    n(488428);
var r = n(562465),
    i = n(686956),
    s = n(22007),
    a = n(857071),
    o = n(976860),
    l = n(345942),
    u = n(498642),
    c = n(71393),
    d = n(954571),
    _ = n(652215);
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        { channelId: a, onSuccess: u, joinSource: d, loadId: f, shouldNavigate: p = !0 } = n,
        h = (0, o.JK)(),
        m = c.A.getGuild(e),
        E = { sourceLocationStack: r, state: { analyticsSource: t } };
    null != m && null != m.joinedAt
        ? p &&
          (null == a
              ? (0, l.u)(e, E)
              : (0, s.A)(_.BVt.CHANNEL(e, a, n.messageId), { ...E, navigationReplace: !0, openChannel: !0 }))
        : (await i.A.joinGuild(e, { lurker: !0, source: d, loadId: f, lurkLocation: r?.[r.length - 1] ?? t?.page }),
          p &&
              (await i.A.transitionToGuildSync(
                  e,
                  {
                      ...E,
                      welcomeModalChannelId: a,
                      navigationReplace: null != a,
                      openChannel: null != a,
                      search: h.location.search,
                  },
                  a,
                  n.messageId,
              ))),
        u?.();
}
function p(e) {
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
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    d.default.track(_.HAw.GUILD_DISCOVERY_EXITED, { load_id: e, guild_ids_viewed: t, recommendations_source: n });
}
function m(e) {
    d.default.track(_.HAw.SEARCH_CLOSED, { load_id: e });
}
function E(e, t) {
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
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    d.default.track(_.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i,
    });
}
function I(e) {
    let { categoryId: t } = e;
    d.default.track(_.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function T(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: s, categoryId: a, isTagSearch: o } = e;
    d.default.track(_.HAw.SEARCH_RESULT_VIEWED, {
        search_type: o ? _.I4_.GUILD_DISCOVERY_TAG : _.I4_.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
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
async function y(e) {
    try {
        let t = (await r.Bo.get({ url: _.Rsh.GUILD_DISCOVERY_SLUG(String(e)), oldFormErrors: !0, rejectWithError: !0 }))
            .body;
        if (t?.guild == null || t?.slug == null) return null;
        return { guild: t.guild, slug: t.slug };
    } catch {
        return null;
    }
}
