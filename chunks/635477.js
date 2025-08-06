n.d(t, {
    L: () => a,
    Z: () => s,
});
var r = n(729594),
    i = n(981631);
let o = "music.apple.com";
function a(e) {
    return e === o;
}
function s(e) {
    var t;
    if (
        null == e.url ||
        (null == (t = e.provider) ? void 0 : t.name) !== "Apple Music" ||
        (e.type !== i.hBH.ARTICLE && e.type !== i.hBH.LINK)
    )
        return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return a(t);
    } catch (e) {
        return !1;
    }
}
