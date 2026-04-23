n.d(t, { k: () => r });
var l = n(228366),
    i = n(576420);
async function r(e) {
    let { tab: t, targetId: n, isFavorite: r } = e;
    await l.h.dispatch({
        type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
        tab: t,
        targetId: n,
        isFavorite: r,
        addedTimestampMs: r ? Date.now() : void 0,
    }),
        r
            ? (i.Ay.getState().setActiveTab(t), i.Ay.getState().markFavoriteAdded(n))
            : i.Ay.getState().clearFavoriteAdded(n);
}
