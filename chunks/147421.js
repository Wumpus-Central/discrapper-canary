"use strict";
n.d(t, { h: () => r, p: () => s });
var i = n(228366);
function r(e, t, n, r) {
    i.h.dispatch({
        type: "BURST_REACTION_PICKER_ANIMATION_ADD",
        messageId: e,
        emojiName: t,
        emojiId: n,
        startPosition: r,
    });
}
function s(e, t, n) {
    i.h.dispatch({ type: "BURST_REACTION_PICKER_ANIMATION_CLEAR", messageId: e, emojiName: t, emojiId: n });
}
