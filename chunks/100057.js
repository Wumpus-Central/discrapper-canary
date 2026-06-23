"use strict";
n.d(t, { t: () => a, z: () => o });
var i,
    r = n(174459),
    s = n(652215),
    a =
        (((i = {}).SHOP_MOUNTED = "shop_mounted"),
        (i.CATEGORIES_FETCH_STARTED = "categories_fetch_started"),
        (i.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed"),
        (i.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started"),
        (i.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed"),
        (i.SHOP_RENDERED = "shop_rendered"),
        i);
function o(e) {
    let { sessionId: t, checkpoint: n, tab: i, unpublishedCategoriesShown: a, cacheDisabled: o } = e;
    r.default.track(s.HAw.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: i,
        unpublished_categories_shown: a,
        cache_disabled: o,
    });
}
