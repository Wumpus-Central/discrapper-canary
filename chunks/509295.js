n.d(t, { k: () => s });
var l = n(73153),
    i = n(576420);
async function s(e) {
    let { tab: t, targetId: n, isFavorite: s } = e;
    await l.h.dispatch({
        type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
        tab: t,
        targetId: n,
        isFavorite: s,
        addedTimestampMs: s ? Date.now() : void 0,
    }),
        s
            ? (i.Ay.getState().setActiveTab(t), i.Ay.getState().markFavoriteAdded(n))
            : i.Ay.getState().clearFavoriteAdded(n);
}
