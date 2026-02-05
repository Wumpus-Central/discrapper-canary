"use strict";
n.d(t, { X: () => s });
var i = n(73153);
function s(e) {
    let { emojiId: t, userImage: n } = e;
    i.h.dispatch({ type: "EMOJI_CACHE_RAW_EMOJI_ASSET", emojiId: t, userImage: n });
}
