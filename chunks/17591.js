"use strict";
n.d(t, { V: () => o });
var r = n(287809),
    i = n(508675),
    a = n(354430),
    s = n(451731);
function o(e) {
    if (null == e || null == r.default.getCurrentUser()) return;
    let t = i.Ay.getTopEmojisMetadata(e);
    if (null != t) {
        let { topEmojisTTL: e } = t;
        if (null == e || Date.now() < e) return;
    }
    a.A.getIsFetching(e) || (0, s.l2)(e);
}
