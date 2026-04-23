"use strict";
n.d(t, { Xt: () => a, wR: () => i, zK: () => s });
var r = n(73153);
function i(e, t, n) {
    r.h.dispatch({ type: "ANALYTICS_FEED_ITEM_SEEN", id: e, feedItemId: t, timestampMillis: n });
}
function s(e, t, n) {
    r.h.dispatch({ type: "ANALYTICS_FEED_ITEM_UNSEEN", id: e, feedItemId: t, timestampMillis: n });
}
function a(e, t) {
    r.h.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
}
