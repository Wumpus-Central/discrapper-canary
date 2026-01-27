t.d(l, {
    A: () => s,
    k: () => i,
});
var r = t(567243),
    n = t(652215);

function i(e) {
    return "music.apple.com" === e;
}

function s(e) {
    var l;
    if (
        null == e.url ||
        (null == (l = e.provider) ? void 0 : l.name) !== "Apple Music" ||
        (e.type !== n.Auw.ARTICLE && e.type !== n.Auw.LINK)
    )
        return !1;
    try {
        let l = r.parse(e.url, !0).host;
        return i(l);
    } catch (e) {
        return !1;
    }
}
