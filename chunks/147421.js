n.d(t, { h: () => s, p: () => l });
var i = n(73153);
function s(e, t, n, s) {
    i.h.dispatch({
        type: "BURST_REACTION_PICKER_ANIMATION_ADD",
        messageId: e,
        emojiName: t,
        emojiId: n,
        startPosition: s,
    });
}
function l(e, t, n) {
    i.h.dispatch({ type: "BURST_REACTION_PICKER_ANIMATION_CLEAR", messageId: e, emojiName: t, emojiId: n });
}
