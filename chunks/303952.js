n.d(t, {
    a: () => a,
    n: () => o
});
var r = n(626135),
    i = n(981631),
    a = (function (e) {
        return (e.SHOP_MOUNTED = 'shop_mounted'), (e.CATEGORIES_FETCH_STARTED = 'categories_fetch_started'), (e.CATEGORIES_FETCH_COMPLETED = 'categories_fetch_completed'), (e.SHOP_HOME_FETCH_STARTED = 'shop_home_fetch_started'), (e.SHOP_HOME_FETCH_COMPLETED = 'shop_home_fetch_completed'), (e.SHOP_RENDERED = 'shop_rendered'), e;
    })({});
let o = (e) => {
    let { sessionId: t, checkpoint: n, tab: a, isFullScreen: o, unpublishedCategoriesShown: s, cacheDisabled: l } = e;
    r.default.track(i.rMx.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: a,
        is_full_screen: o,
        unpublished_categories_shown: s,
        cache_disabled: l
    });
};
