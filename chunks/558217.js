n.d(t, { O: () => o });
var i = n(594174),
    r = n(339085),
    a = n(396352),
    s = n(664437);
function o(e) {
    if (null == e || null == i.default.getCurrentUser()) return;
    let t = r.ZP.getTopEmojisMetadata(e);
    if (null != t) {
        let { topEmojisTTL: e } = t;
        if (null == e || Date.now() < e) return;
    }
    !a.Z.getIsFetching(e) && (0, s.pj)(e);
}
