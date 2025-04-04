n.d(t, {
    G8: () => s,
    N6: () => a,
    vp: () => l
}),
    n(301563);
var r = n(77498),
    i = n(358085);
function o(e) {
    return (e = e.toLowerCase()).endsWith('/') && (e = e.slice(0, -1)), e;
}
function a(e) {
    return o(e).split('/').slice(-2).join('/');
}
function s(e) {
    var t, n;
    if (null == e)
        return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
    let i = r.Z.getGameByName(e.name),
        o = 'exePath' in e ? e.exePath : e.exe;
    return {
        gameName: null != (t = e.name) ? t : void 0,
        gameId: null == i ? void 0 : i.id,
        exe: null != o ? a(o) : void 0,
        distributor: null != (n = e.distributor) ? n : void 0
    };
}
function l(e, t) {
    if (null == e || null == t) return !1;
    let n = a(e),
        r = (0, i.getPlatformName)();
    return t.some((e) => e.os === r && (null == n ? void 0 : n.endsWith(e.name)));
}
