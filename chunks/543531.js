"use strict";
n.d(t, { Xt: () => a, wR: () => r, zK: () => s });
var i = n(228366);
function r(e, t, n) {
    i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_SEEN", id: e, feedItemId: t, timestampMillis: n });
}
function s(e, t, n) {
    i.h.dispatch({ type: "ANALYTICS_FEED_ITEM_UNSEEN", id: e, feedItemId: t, timestampMillis: n });
}
function a(e, t) {
    i.h.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
}
