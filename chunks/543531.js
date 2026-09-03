n.d(t, { Xt: () => s, wR: () => r, zK: () => a });
var i = n(228366);
function r(e, t, n) {
    i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_SEEN", id: e, feedItemId: t, timestampMillis: n });
}
function a(e, t, n) {
    i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_UNSEEN", id: e, feedItemId: t, timestampMillis: n });
}
function s(e, t) {
    i.h.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
}
