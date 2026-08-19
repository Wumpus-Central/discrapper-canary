"use strict";
n.d(t, { h: () => i, p: () => s });
var l = n(228366);
function i(e, t, n, i) {
    l.h.dispatch({
        type: "BURST_REACTION_PICKER_ANIMATION_ADD",
        messageId: e,
        emojiName: t,
        emojiId: n,
        startPosition: i,
    });
}
function s(e, t, n) {
    l.h.dispatch({ type: "BURST_REACTION_PICKER_ANIMATION_CLEAR", messageId: e, emojiName: t, emojiId: n });
}
