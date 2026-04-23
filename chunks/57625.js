"use strict";
n.d(t, { Y: () => i, d: () => s });
var r = n(73153);
function i(e, t) {
    r.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t });
}
function s(e, t, n) {
    r.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: e, position: t, duration: n });
}
