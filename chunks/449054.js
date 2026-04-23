n.d(t, {
    Cf: () => f,
    PU: () => A,
    Z2: () => u,
    br: () => N,
    cf: () => C,
    fd: () => S,
    gp: () => T,
    jE: () => I,
    jb: () => O,
    jm: () => p,
    uf: () => R,
}),
    n(488428);
var i = n(636537),
    r = n(686956),
    a = n(22007),
    s = n(857071),
    _ = n(976860),
    l = n(345942),
    o = n(498642),
    E = n(71393),
    d = n(954571),
    c = n(652215);
async function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 ? arguments[3] : void 0,
        { channelId: s, onSuccess: o, joinSource: d, loadId: u, shouldNavigate: I = !0 } = n,
        A = (0, _.JK)(),
        T = E.A.getGuild(e),
        S = { sourceLocationStack: i, state: { analyticsSource: t } };
    null != T && null != T.joinedAt
        ? I &&
          (null == s
              ? (0, l.u)(e, S)
              : (0, a.A)(c.BVt.CHANNEL(e, s, n.messageId), { ...S, navigationReplace: !0, openChannel: !0 }))
        : (await r.A.joinGuild(e, { lurker: !0, source: d, loadId: u, lurkLocation: i?.[i.length - 1] ?? t?.page }),
          I &&
              (await r.A.transitionToGuildSync(
                  e,
                  {
                      ...S,
                      welcomeModalChannelId: s,
                      navigationReplace: null != s,
                      openChannel: null != s,
                      search: A.location.search,
                  },
                  s,
                  n.messageId,
              ))),
        o?.();
}
function I(e) {
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
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    d.default.track(c.HAw.GUILD_DISCOVERY_EXITED, { load_id: e, guild_ids_viewed: t, recommendations_source: n });
}
function T(e) {
    d.default.track(c.HAw.SEARCH_CLOSED, { load_id: e });
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    d.default.track(c.HAw.SEARCH_STARTED, {
        search_type: c.I4_.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t,
    });
}
function N(e) {
    let { withCounts: t, offset: n } = e;
    d.default.track(c.HAw.GUILD_DISCOVERY_SEARCH_START, { with_counts: t, offset: n });
}
function O(e) {
    let { categoryId: t, error: n, willRequestRetry: i, isRequestRetry: r } = e;
    d.default.track(c.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: i,
        is_request_retry: r,
    });
}
function R(e) {
    let { categoryId: t } = e;
    d.default.track(c.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function f(e) {
    let { loadId: t, searchId: n, query: i, guildResults: r, analyticsContext: a, categoryId: s, isTagSearch: _ } = e;
    d.default.track(c.HAw.SEARCH_RESULT_VIEWED, {
        search_type: _ ? c.I4_.GUILD_DISCOVERY_TAG : c.I4_.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== r ? r.length : null,
        guild_ids: void 0 !== r ? r.map((e) => e.id) : null,
        query: i,
        location: a.location,
        category_id: s,
    });
}
function C(e) {
    let t = s.A.getLoadId(e);
    d.default.track(c.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: o.A.getMemberCount(e),
    });
}
async function p(e) {
    try {
        let t = (await i.Bo.get({ url: c.Rsh.GUILD_DISCOVERY_SLUG(String(e)), oldFormErrors: !0, rejectWithError: !0 }))
            .body;
        if (t?.guild == null || t?.slug == null) return null;
        return { guild: t.guild, slug: t.slug };
    } catch {
        return null;
    }
}
