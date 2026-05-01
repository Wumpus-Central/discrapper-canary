n.d(t, {
    Cf: () => p,
    PU: () => I,
    Z2: () => u,
    br: () => S,
    cf: () => m,
    fd: () => h,
    gp: () => T,
    jE: () => A,
    jb: () => N,
    jm: () => O,
    uf: () => f,
}),
    n(488428);
var i = n(636537),
    a = n(686956),
    r = n(22007),
    s = n(857071),
    l = n(976860),
    o = n(345942),
    d = n(498642),
    c = n(71393),
    _ = n(954571),
    E = n(652215);
async function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 ? arguments[3] : void 0,
        { channelId: s, onSuccess: d, joinSource: _, loadId: u, shouldNavigate: A = !0 } = n,
        I = (0, l.JK)(),
        T = c.A.getGuild(e),
        h = { sourceLocationStack: i, state: { analyticsSource: t } };
    null != T && null != T.joinedAt
        ? A &&
          (null == s
              ? (0, o.u)(e, h)
              : (0, r.A)(E.BVt.CHANNEL(e, s, n.messageId), { ...h, navigationReplace: !0, openChannel: !0 }))
        : (await a.A.joinGuild(e, { lurker: !0, source: _, loadId: u, lurkLocation: i?.[i.length - 1] ?? t?.page }),
          A &&
              (await a.A.transitionToGuildSync(
                  e,
                  {
                      ...h,
                      welcomeModalChannelId: s,
                      navigationReplace: null != s,
                      openChannel: null != s,
                      search: I.location.search,
                  },
                  s,
                  n.messageId,
              ))),
        d?.();
}
function A(e) {
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
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    _.default.track(E.HAw.GUILD_DISCOVERY_EXITED, { load_id: e, guild_ids_viewed: t, recommendations_source: n });
}
function T(e) {
    _.default.track(E.HAw.SEARCH_CLOSED, { load_id: e });
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    _.default.track(E.HAw.SEARCH_STARTED, {
        search_type: E.I4_.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t,
    });
}
function S(e) {
    let { withCounts: t, offset: n } = e;
    _.default.track(E.HAw.GUILD_DISCOVERY_SEARCH_START, { with_counts: t, offset: n });
}
function N(e) {
    let { categoryId: t, error: n, willRequestRetry: i, isRequestRetry: a } = e;
    _.default.track(E.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: i,
        is_request_retry: a,
    });
}
function f(e) {
    let { categoryId: t } = e;
    _.default.track(E.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function p(e) {
    let { loadId: t, searchId: n, query: i, guildResults: a, analyticsContext: r, categoryId: s, isTagSearch: l } = e;
    _.default.track(E.HAw.SEARCH_RESULT_VIEWED, {
        search_type: l ? E.I4_.GUILD_DISCOVERY_TAG : E.I4_.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== a ? a.length : null,
        guild_ids: void 0 !== a ? a.map((e) => e.id) : null,
        query: i,
        location: r.location,
        category_id: s,
    });
}
function m(e) {
    let t = s.A.getLoadId(e);
    _.default.track(E.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: d.A.getMemberCount(e),
    });
}
async function O(e) {
    try {
        let t = (await i.Bo.get({ url: E.Rsh.GUILD_DISCOVERY_SLUG(String(e)), oldFormErrors: !0, rejectWithError: !0 }))
            .body;
        if (t?.guild == null || t?.slug == null) return null;
        return { guild: t.guild, slug: t.slug };
    } catch {
        return null;
    }
}
