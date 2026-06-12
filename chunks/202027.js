"use strict";
n.d(t, { A: () => a });
var i = n(702841),
    r = n(159273),
    s = n(7584);
function a(e, t) {
    return {
        customEmoji: (0, i.bG)([r.Ay], () => (null != e ? r.Ay.getCustomEmojiById(e) : null), [e]),
        unicodeEmoji: null != t ? s.Ay.getByName(s.Ay.convertSurrogateToName(t, !1)) : null,
    };
}
