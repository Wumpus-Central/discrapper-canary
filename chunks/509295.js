n.d(t, {
    k: () => l,
});
var i = n(73153),
    r = n(576420);
async function l(e) {
    let { tab: t, targetId: n, isFavorite: l } = e;
    await i.h.dispatch({
        type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
        tab: t,
        targetId: n,
        isFavorite: l,
        addedTimestampMs: l ? Date.now() : void 0,
    }),
        l
            ? (r.Ay.getState().setActiveTab(t), r.Ay.getState().markFavoriteAdded(n))
            : r.Ay.getState().clearFavoriteAdded(n);
}
