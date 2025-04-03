t.d(l, {
    L: () => i,
    Z: () => s
});
var n = t(729594),
    r = t(981631);
function i(e) {
    return 'music.apple.com' === e;
}
function s(e) {
    var l;
    if (null == e.url || (null == (l = e.provider) ? void 0 : l.name) !== 'Apple Music' || (e.type !== r.hBH.ARTICLE && e.type !== r.hBH.LINK)) return !1;
    try {
        let l = n.parse(e.url, !0).host;
        return i(l);
    } catch (e) {
        return !1;
    }
}
