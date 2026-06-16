t.d(i, { X: () => a });
var n = t(228366);
function a(e) {
    let { emojiId: i, userImage: t } = e;
    n.h.dispatch({ type: "EMOJI_CACHE_RAW_EMOJI_ASSET", emojiId: i, userImage: t });
}
