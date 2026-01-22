n.d(t, {
    t: () => a,
    z: () => s,
});
var r = n(954571),
    i = n(652215),
    a = (function (e) {
        return (
            (e.SHOP_MOUNTED = "shop_mounted"),
            (e.CATEGORIES_FETCH_STARTED = "categories_fetch_started"),
            (e.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed"),
            (e.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started"),
            (e.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed"),
            (e.SHOP_RENDERED = "shop_rendered"),
            e
        );
    })({});
let s = (e) => {
    let { sessionId: t, checkpoint: n, tab: a, unpublishedCategoriesShown: s, cacheDisabled: o } = e;
    r.default.track(i.HAw.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: a,
        unpublished_categories_shown: s,
        cache_disabled: o,
    });
};
