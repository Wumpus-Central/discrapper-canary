"use strict";
n.d(t, { h: () => i, p: () => s });
var r = n(73153);
function i(e, t, n, i) {
    r.h.dispatch({
        type: "BURST_REACTION_PICKER_ANIMATION_ADD",
        messageId: e,
        emojiName: t,
        emojiId: n,
        startPosition: i,
    });
}
function s(e, t, n) {
    r.h.dispatch({ type: "BURST_REACTION_PICKER_ANIMATION_CLEAR", messageId: e, emojiName: t, emojiId: n });
}
