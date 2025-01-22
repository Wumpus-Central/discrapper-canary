r.d(n, {
    G8: function () {
        return l;
    },
    N6: function () {
        return s;
    },
    vp: function () {
        return u;
    }
});
var i = r(77498),
    a = r(358085);
function o(e) {
    return (e = e.toLowerCase()).endsWith('/') && (e = e.slice(0, -1)), e;
}
function s(e) {
    return o(e).split('/').slice(-2).join('/');
}
function l(e) {
    var n, r;
    if (null == e)
        return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0
        };
    let a = i.Z.getGameByName(e.name),
        o = 'exePath' in e ? e.exePath : e.exe;
    return {
        gameName: null !== (n = e.name) && void 0 !== n ? n : void 0,
        gameId: null == a ? void 0 : a.id,
        exe: null != o ? s(o) : void 0,
        distributor: null !== (r = e.distributor) && void 0 !== r ? r : void 0
    };
}
function u(e, n) {
    if (null == e || null == n) return !1;
    let r = s(e),
        i = (0, a.getPlatformName)();
    return n.some((e) => e.os === i && (null == r ? void 0 : r.endsWith(e.name)));
}
