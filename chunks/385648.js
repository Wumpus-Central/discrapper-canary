"use strict";
n.d(t, {
    gp: () => p,
    Z2: () => _,
    jb: () => g,
    PU: () => f,
    Cf: () => I,
    br: () => m,
    fd: () => E,
    uf: () => A,
    cf: () => T,
    jE: () => h,
}),
    n(488428),
    n(636537);
var i = n(66834),
    r = n(741231),
    s = n(174459),
    a = n(857071),
    o = n(652215);
n(742872);
var l = n(976860),
    u = n(345942),
    c = n(498642),
    d = n(71393);
async function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = arguments.length > 3 ? arguments[3] : void 0,
        { channelId: c, onSuccess: _, joinSource: h, loadId: f, shouldNavigate: p = !0 } = n,
        E = (0, l.JK)(),
        m = d.A.getGuild(e),
        g = { sourceLocationStack: s, state: { analyticsSource: t } };
    if (null != m && null != m.joinedAt)
        p &&
            (null == c
                ? (0, u.u)(e, g)
                : (0, r.A)(o.BVt.CHANNEL(e, c, n.messageId), { ...g, navigationReplace: !0, openChannel: !0 }));
    else if (null != m && a.A.isLurking(e))
        p &&
            (await i.A.transitionToGuildSync(
                e,
                {
                    ...g,
                    welcomeModalChannelId: c,
                    navigationReplace: null != c,
                    openChannel: null != c,
                    search: E.location.search,
                },
                c,
                n.messageId,
            ));
    else {
        let r = s?.[s.length - 1] ?? t?.page;
        await i.A.joinGuild(e, { lurker: !0, source: h, loadId: f, lurkLocation: r }),
            p &&
                (await i.A.transitionToGuildSync(
                    e,
                    {
                        ...g,
                        welcomeModalChannelId: c,
                        navigationReplace: null != c,
                        openChannel: null != c,
                        search: E.location.search,
                    },
                    c,
                    n.messageId,
                ));
    }
    _?.();
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
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    s.default.track(o.HAw.GUILD_DISCOVERY_EXITED, { load_id: e, guild_ids_viewed: t, recommendations_source: n });
}
function p(e) {
    s.default.track(o.HAw.SEARCH_CLOSED, { load_id: e });
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    s.default.track(o.HAw.SEARCH_STARTED, {
        search_type: o.I4_.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t,
    });
}
function m(e) {
    let { withCounts: t, offset: n } = e;
    s.default.track(o.HAw.GUILD_DISCOVERY_SEARCH_START, { with_counts: t, offset: n });
}
function g(e) {
    let { categoryId: t, error: n, willRequestRetry: i, isRequestRetry: r } = e;
    s.default.track(o.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: i,
        is_request_retry: r,
    });
}
function A(e) {
    let { categoryId: t } = e;
    s.default.track(o.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function I(e) {
    let { loadId: t, searchId: n, query: i, guildResults: r, analyticsContext: a, categoryId: l, isTagSearch: u } = e;
    s.default.track(o.HAw.SEARCH_RESULT_VIEWED, {
        search_type: u ? o.I4_.GUILD_DISCOVERY_TAG : o.I4_.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== r ? r.length : null,
        guild_ids: void 0 !== r ? r.map((e) => e.id) : null,
        query: i,
        location: a.location,
        category_id: l,
    });
}
function T(e) {
    let t = a.A.getLoadId(e);
    s.default.track(o.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: c.A.getMemberCount(e),
    });
}
