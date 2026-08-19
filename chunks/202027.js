"use strict";
n.d(t, { A: () => r });
var l = n(702841),
    i = n(236285),
    s = n(7584);
function r(e, t) {
    return {
        customEmoji: (0, l.bG)([i.Ay], () => (null != e ? i.Ay.getCustomEmojiById(e) : null), [e]),
        unicodeEmoji: null != t ? s.Ay.getByName(s.Ay.convertSurrogateToName(t, !1)) : null,
    };
}
