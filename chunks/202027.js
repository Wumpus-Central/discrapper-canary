n.d(t, { A: () => s });
var l = n(702841),
    i = n(236285),
    r = n(7584);
function s(e, t) {
    return {
        customEmoji: (0, l.bG)([i.Ay], () => (null != e ? i.Ay.getCustomEmojiById(e) : null), [e]),
        unicodeEmoji: null != t ? r.Ay.getByName(r.Ay.convertSurrogateToName(t, !1)) : null,
    };
}
