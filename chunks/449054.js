(n(323874), n(14289), n(35956), n(488428), n(620632));
var i = n(778858),
    r = n(362280),
    a = n(857071),
    s = n(976860),
    l = n(345942),
    o = n(498642),
    d = n(71393),
    c = n(129230),
    u = n(652215);
n.d(
    t,
    {},
    {
        Cf: function (e) {
            let {
                loadId: t,
                searchId: n,
                query: i,
                guildResults: r,
                analyticsContext: a,
                categoryId: s,
                isTagSearch: l,
            } = e;
            c.default.track(u.HAw.SEARCH_RESULT_VIEWED, {
                search_type: l ? u.I4_.GUILD_DISCOVERY_TAG : u.I4_.GUILD_DISCOVERY,
                load_id: t,
                search_id: n,
                total_results: void 0 !== r ? r.length : null,
                guild_ids: void 0 !== r ? r.map((e) => e.id) : null,
                query: i,
                location: a.location,
                category_id: s,
            });
        },
        PU: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            c.default.track(u.HAw.GUILD_DISCOVERY_EXITED, {
                load_id: e,
                guild_ids_viewed: t,
                recommendations_source: n,
            });
        },
        Z2: async function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 ? arguments[3] : void 0,
                {
                    channelId: c,
                    onSuccess: _,
                    joinSource: E,
                    loadId: A,
                    shouldNavigate: h = !0,
                    openChannel: f = !1,
                } = n,
                I = (0, s.JK)(),
                p = d.A.getGuild(e),
                m = { sourceLocationStack: o, state: { analyticsSource: t } };
            if (null != p && null != p.joinedAt)
                h &&
                    (null == c
                        ? (0, l.u)(e, { ...m, openChannel: f })
                        : (0, r.A)(u.BVt.CHANNEL(e, c, n.messageId), { ...m, navigationReplace: !0, openChannel: !0 }));
            else if (null != p && a.A.isLurking(e))
                h &&
                    (await i.A.transitionToGuildSync(
                        e,
                        {
                            ...m,
                            welcomeModalChannelId: c,
                            navigationReplace: null != c,
                            openChannel: f || null != c,
                            search: I.location.search,
                        },
                        c,
                        n.messageId,
                    ));
            else {
                let r = o?.[o.length - 1] ?? t?.page;
                (await i.A.joinGuild(e, { lurker: !0, source: E, loadId: A, lurkLocation: r }),
                    h &&
                        (await i.A.transitionToGuildSync(
                            e,
                            {
                                ...m,
                                welcomeModalChannelId: c,
                                navigationReplace: null != c,
                                openChannel: f || null != c,
                                search: I.location.search,
                            },
                            c,
                            n.messageId,
                        )));
            }
            _?.();
        },
        br: function (e) {
            let { withCounts: t, offset: n } = e;
            c.default.track(u.HAw.GUILD_DISCOVERY_SEARCH_START, { with_counts: t, offset: n });
        },
        cf: function (e) {
            let t = a.A.getLoadId(e);
            c.default.track(u.HAw.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                guild_id: e,
                load_id: t,
                guild_size: o.A.getMemberCount(e),
            });
        },
        fd: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            c.default.track(u.HAw.SEARCH_STARTED, {
                search_type: u.I4_.GUILD_DISCOVERY,
                load_id: e,
                location: n.location,
                category_id: t,
            });
        },
        gp: function (e) {
            c.default.track(u.HAw.SEARCH_CLOSED, { load_id: e });
        },
        jE: function (e) {
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
        },
        jb: function (e) {
            let { categoryId: t, error: n, willRequestRetry: i, isRequestRetry: r } = e;
            c.default.track(u.HAw.GUILD_DISCOVERY_SEARCH_FAILED, {
                category_id: t,
                request_status: n.status,
                request_error_code: n.code,
                will_request_retry: i,
                is_request_retry: r,
            });
        },
        uf: function (e) {
            let { categoryId: t } = e;
            c.default.track(u.HAw.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
        },
    },
);
