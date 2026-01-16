n.d(t, {
    G8: () => l,
    N6: () => s,
    vp: () => c,
}),
    n(35282);
var r = n(509003),
    i = n(404577),
    a = n(358085);
function o(e) {
    return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e;
}
function s(e) {
    return o(e).split("/").slice(-2).join("/");
}
function l(e) {
    var t, n, a, o, l;
    if (null == e)
        return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0,
            sku: void 0,
            gameMetadata: void 0,
            rawExePath: void 0,
        };
    let c = i.Z.getGameByName(e.name),
        u = "exePath" in e ? e.exePath : e.exe;
    return {
        gameName: null != (t = e.name) ? t : void 0,
        gameId: null != (a = null != (n = e.id) ? n : null == c ? void 0 : c.id) ? a : void 0,
        exe: null != u ? s(u) : void 0,
        distributor: null != (o = e.distributor) ? o : void 0,
        sku: null != (l = e.sku) ? l : void 0,
        gameMetadata: null != e ? (0, r.sD)(e) : void 0,
        rawExePath: u,
    };
}
function c(e, t) {
    if (null == e || null == t) return !1;
    let n = o(e),
        r = (0, a.getPlatformName)();
    return t.some((e) => e.os === r && (null == n ? void 0 : n.endsWith(e.name)));
}
