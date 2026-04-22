"use strict";
n.d(t, { t: () => a, z: () => o });
var r,
    i = n(954571),
    s = n(652215),
    a =
        (((r = {}).SHOP_MOUNTED = "shop_mounted"),
        (r.CATEGORIES_FETCH_STARTED = "categories_fetch_started"),
        (r.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed"),
        (r.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started"),
        (r.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed"),
        (r.SHOP_RENDERED = "shop_rendered"),
        r);
let o = (e) => {
    let { sessionId: t, checkpoint: n, tab: r, unpublishedCategoriesShown: a, cacheDisabled: o } = e;
    i.default.track(s.HAw.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: r,
        unpublished_categories_shown: a,
        cache_disabled: o,
    });
};
