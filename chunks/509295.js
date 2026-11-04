var l = n(73153),
    i = n(576420);
n.d(
    t,
    {},
    {
        k: async function (e) {
            let { tab: t, targetId: n, isFavorite: r } = e;
            (await l.h.dispatch({
                type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
                tab: t,
                targetId: n,
                isFavorite: r,
                addedTimestampMs: r ? Date.now() : void 0,
            }),
                r
                    ? (i.A.getState().setActiveTab(t), i.A.getState().markFavoriteAdded(n))
                    : i.A.getState().clearFavoriteAdded(n));
        },
    },
);
