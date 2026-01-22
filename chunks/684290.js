n.d(t, {
    A: () => o,
    k: () => s,
});
var r = n(567243),
    i = n(652215);
let a = "music.apple.com";

function s(e) {
    return e === a;
}

function o(e) {
    var t;
    if (
        null == e.url ||
        (null == (t = e.provider) ? void 0 : t.name) !== "Apple Music" ||
        (e.type !== i.Auw.ARTICLE && e.type !== i.Auw.LINK)
    )
        return !1;
    try {
        let t = r.parse(e.url, !0).host;
        return s(t);
    } catch (e) {
        return !1;
    }
}
