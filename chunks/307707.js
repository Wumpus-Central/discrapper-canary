n.d(t, { Z: () => o });
var r = n(399606),
    i = n(339085),
    a = n(633302);
function o(e, t) {
    return {
        customEmoji: (0, r.e7)([i.ZP], () => (null != e ? i.ZP.getCustomEmojiById(e) : null), [e]),
        unicodeEmoji: null != t ? a.ZP.getByName(a.ZP.convertSurrogateToName(t, !1)) : null
    };
}
