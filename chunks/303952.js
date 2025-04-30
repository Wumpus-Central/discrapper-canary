n.d(t, {
    a: () => o,
    n: () => a
});
var r = n(626135),
    i = n(981631),
    o = (function (e) {
        return (e.SHOP_MOUNTED = 'shop_mounted'), (e.CATEGORIES_FETCH_STARTED = 'categories_fetch_started'), (e.CATEGORIES_FETCH_COMPLETED = 'categories_fetch_completed'), (e.SHOP_HOME_FETCH_STARTED = 'shop_home_fetch_started'), (e.SHOP_HOME_FETCH_COMPLETED = 'shop_home_fetch_completed'), (e.SHOP_RENDERED = 'shop_rendered'), e;
    })({});
let a = (e) => {
    let { sessionId: t, checkpoint: n, tab: o, isFullScreen: a, unpublishedCategoriesShown: s, cacheDisabled: l } = e;
    r.default.track(i.rMx.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: o,
        is_full_screen: a,
        unpublished_categories_shown: s,
        cache_disabled: l
    });
};
