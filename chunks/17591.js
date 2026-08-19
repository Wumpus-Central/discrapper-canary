"use strict";
n.d(t, { V: () => l });
var i = n(287809),
    r = n(236285),
    a = n(354430),
    s = n(451731);
function l(e) {
    if (null == e || null == i.default.getCurrentUser()) return;
    let t = r.Ay.getTopEmojisMetadata(e);
    if (null != t) {
        let { topEmojisTTL: e } = t;
        if (null == e || Date.now() < e) return;
    }
    a.A.getIsFetching(e) || (0, s.l2)(e);
}
