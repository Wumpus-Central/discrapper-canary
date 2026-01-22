n.d(t, {
    X: () => i,
});
var r = n(73153);

function i(e) {
    let { emojiId: t, userImage: n } = e;
    r.h.dispatch({
        type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
        emojiId: t,
        userImage: n,
    });
}
