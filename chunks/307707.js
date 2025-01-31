n.d(t, { Z: () => s });
var i = n(399606),
    r = n(339085),
    a = n(633302);
function s(e, t) {
    return {
        customEmoji: (0, i.e7)([r.ZP], () => (null != e ? r.ZP.getCustomEmojiById(e) : null), [e]),
        unicodeEmoji: null != t ? a.ZP.getByName(a.ZP.convertSurrogateToName(t, !1)) : null
    };
}
