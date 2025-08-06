n.d(t, { O: () => s });
var r = n(594174),
    i = n(339085),
    o = n(396352),
    a = n(664437);
function s(e) {
    if (null == e || null == r.default.getCurrentUser()) return;
    let t = i.ZP.getTopEmojisMetadata(e);
    if (null != t) {
        let { topEmojisTTL: e } = t;
        if (null == e || Date.now() < e) return;
    }
    o.Z.getIsFetching(e) || (0, a.pj)(e);
}
