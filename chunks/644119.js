t.d(l, { A: () => i, b: () => n });
var r = t(567243),
    s = t(652215);
function n(e) {
    return null != e && "open.spotify.com" === e;
}
function i(e) {
    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== s.Auw.LINK) return !1;
    try {
        let l = r.parse(e.url, !0).host;
        return n(l);
    } catch (e) {
        return !1;
    }
}
