var i = n(73153);
n.d(
    t,
    {},
    {
        Xt: function (e, t) {
            i.h.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
        },
        wR: function (e, t, n) {
            i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_SEEN", id: e, feedItemId: t, timestampMillis: n });
        },
        zK: function (e, t, n) {
            i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_UNSEEN", id: e, feedItemId: t, timestampMillis: n });
        },
    },
);
