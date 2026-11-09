var l = n(582128),
    r = n(855986),
    s = n(793574),
    a = n(688810),
    i = n(739053),
    o = n(82498),
    u = n(129230),
    c = n(722178),
    d = n(870216),
    m = n(758836),
    g = n(652215),
    h = n(682901);
function p(e) {
    let { analyticsSource: t, analyticsLocations: n } = (0, r.cf)([d.A], () => d.A.getAnalytics()),
        l = (function (e) {
            switch (e) {
                case m.G2.ORBS:
                    return s.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case m.G2.HOME:
                    return s.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case m.G2.BUNDLES:
                    return s.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case m.G2.AVATAR_DECORATIONS:
                    return s.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case m.G2.PROFILE_EFFECTS:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case m.G2.NAMEPLATES:
                    return s.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case m.G2.PROFILE_FRAMES:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case m.G2.COLLECTION_INDEX:
                    return s.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                case m.G2.PROMOTION:
                case m.G2.COLLABS:
                case m.G2.OFFER_ELIGIBLE:
                case m.G2.CATALOG:
                    return s.A.COLLECTIBLES_SHOP;
                case m.G2.GAME_SHOPS:
                    return s.A.SLAYER_STOREFRONT_SHOP_TAB;
                case m.G2.GAME_SERVERS:
                    return s.A.COLLECTIBLES_SHOP_GAME_SERVERS_TAB;
            }
        })(e),
        { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...n, s.A.COLLECTIBLES_SHOP, l]);
    return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: l };
}
n.d(
    t,
    {},
    {
        N0: function (e, t) {
            let { analyticsLocations: n } = p(e);
            l.useEffect(() => {
                null == t ||
                    c.Ay.canUseCollectibles(t) ||
                    (u.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, { type: h.e.COLLECTIBLES_SHOP, location_stack: n }),
                    (0, i.sq)(g.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, o.uq)(h.e.COLLECTIBLES_SHOP)));
            }, [n, t]);
        },
        lC: p,
        uS: function (e, t, n, r) {
            let { sourceButton: s, enabled: a = !0 } =
                    arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                { analyticsLocations: i, analyticsSource: o, currentTabLocation: c, newestAnalyticsLocation: d } = p(t);
            l.useEffect(() => {
                if (!a || r !== m.Pf.VISIBLE || d !== c) return;
                let l = t === m.G2.CATALOG ? s : o;
                u.default.track(g.HAw.COLLECTIBLES_SHOP_VIEWED, {
                    location_stack: i,
                    source: l,
                    page_session_id: e,
                    page_type: t === m.G2.CATALOG ? "full" : t,
                    category: t === m.G2.HOME ? void 0 : n,
                });
            }, [i, e, t, n, c, r, s, o, d, a]);
        },
    },
);
