var l = n(839214),
    i = n(914853);
let r = (0, l.D)((e, t) => ({
    activeTab: i.x.FRIENDS,
    recentlyAddedFavoriteTimestampMsByKey: {},
    setActiveTab: (n) => {
        t().activeTab !== n && e({ activeTab: n });
    },
    markFavoriteAdded: (t, n) => {
        let l = n ?? Date.now();
        e((e) => ({ recentlyAddedFavoriteTimestampMsByKey: { ...e.recentlyAddedFavoriteTimestampMsByKey, [t]: l } }));
    },
    clearFavoriteAdded: (t) => {
        e((e) =>
            null == e.recentlyAddedFavoriteTimestampMsByKey[t]
                ? {}
                : {
                      recentlyAddedFavoriteTimestampMsByKey: {
                          ...e.recentlyAddedFavoriteTimestampMsByKey,
                          [t]: void 0,
                      },
                  },
        );
    },
}));
n.d(
    t,
    {},
    {
        A: r,
        h: function (e) {
            return r.useState((t) => t.recentlyAddedFavoriteTimestampMsByKey[e] ?? null);
        },
    },
);
