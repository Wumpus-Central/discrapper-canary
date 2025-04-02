l.d(t, {
    L: () => i,
    Z: () => s
});
var n = l(729594),
    r = l(981631);
function i(e) {
    return 'music.apple.com' === e;
}
function s(e) {
    var t;
    if (null == e.url || (null === (t = e.provider) || void 0 === t ? void 0 : t.name) !== 'Apple Music' || (e.type !== r.hBH.ARTICLE && e.type !== r.hBH.LINK)) return !1;
    try {
        let t = n.parse(e.url, !0).host;
        return i(t);
    } catch (e) {
        return !1;
    }
}
