n.d(t, {
    a: () => i,
    n: () => o
});
var r,
    l = n(626135),
    a = n(981631),
    i = (((r = {}).SHOP_MOUNTED = 'shop_mounted'), (r.SHOP_RENDERED = 'shop_rendered'), r);
let o = (e) => {
    let { sessionId: t, checkpoint: n, tab: r, isFullScreen: i, unpublishedCategoriesShown: o, cacheDisabled: s } = e;
    l.default.track(a.rMx.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: r,
        is_full_screen: i,
        unpublished_categories_shown: o,
        cache_disabled: s
    });
};
