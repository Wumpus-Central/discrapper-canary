n.d(t, {
    a: () => o,
    n: () => i
});
var r,
    l = n(626135),
    a = n(981631),
    o = (((r = {}).SHOP_MOUNTED = 'shop_mounted'), (r.SHOP_RENDERED = 'shop_rendered'), r);
let i = (e) => {
    let { sessionId: t, checkpoint: n, tab: r, isFullScreen: o, unpublishedCategoriesShown: i, cacheDisabled: s } = e;
    l.default.track(a.rMx.COLLECTIBLES_SHOP_PERF_TRACKED, {
        page_session_id: t,
        checkpoint: n,
        tab: r,
        is_full_screen: o,
        unpublished_categories_shown: i,
        cache_disabled: s
    });
};
