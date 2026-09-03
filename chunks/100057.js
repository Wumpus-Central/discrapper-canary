n.d(t, { t: () => s, z: () => l });
var i,
    r = n(174459),
    a = n(652215),
    s =
        (((i = {}).SHOP_MOUNTED = "shop_mounted"),
        (i.CATEGORIES_FETCH_STARTED = "categories_fetch_started"),
        (i.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed"),
        (i.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started"),
        (i.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed"),
        (i.SHOP_RENDERED = "shop_rendered"),
        i);
function l(e) {
    let { sessionId: t, checkpoint: n, tab: i, unpublishedCategoriesShown: s, cacheDisabled: l } = e;
    r.default.track(a.HAw.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: i,
        unpublished_categories_shown: s,
        cache_disabled: l,
    });
}
