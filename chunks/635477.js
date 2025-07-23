t.d(l, {
    L: () => i,
    Z: () => s
});
var r = t(729594),
    n = t(981631);
function i(e) {
    return 'music.apple.com' === e;
}
function s(e) {
    var l;
    if (null == e.url || (null == (l = e.provider) ? void 0 : l.name) !== 'Apple Music' || (e.type !== n.hBH.ARTICLE && e.type !== n.hBH.LINK)) return !1;
    try {
        let l = r.parse(e.url, !0).host;
        return i(l);
    } catch (e) {
        return !1;
    }
}
