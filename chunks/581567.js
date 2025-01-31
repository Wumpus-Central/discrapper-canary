n.d(t, {
    G8: () => o,
    N6: () => s,
    vp: () => l
});
var i = n(77498),
    r = n(358085);
function a(e) {
    return (e = e.toLowerCase()).endsWith('/') && (e = e.slice(0, -1)), e;
}
function s(e) {
    return a(e).split('/').slice(-2).join('/');
}
function o(e) {
    var t, n;
    if (null == e)
        return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
    let r = i.Z.getGameByName(e.name),
        a = 'exePath' in e ? e.exePath : e.exe;
    return {
        gameName: null !== (t = e.name) && void 0 !== t ? t : void 0,
        gameId: null == r ? void 0 : r.id,
        exe: null != a ? s(a) : void 0,
        distributor: null !== (n = e.distributor) && void 0 !== n ? n : void 0
    };
}
function l(e, t) {
    if (null == e || null == t) return !1;
    let n = s(e),
        i = (0, r.getPlatformName)();
    return t.some((e) => e.os === i && (null == n ? void 0 : n.endsWith(e.name)));
}
