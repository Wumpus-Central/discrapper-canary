"use strict";
n.d(t, { A: () => a });
var l = n(702841),
    i = n(159273),
    s = n(7584);
function a(e, t) {
    return {
        customEmoji: (0, l.bG)([i.Ay], () => (null != e ? i.Ay.getCustomEmojiById(e) : null), [e]),
        unicodeEmoji: null != t ? s.Ay.getByName(s.Ay.convertSurrogateToName(t, !1)) : null,
    };
}
