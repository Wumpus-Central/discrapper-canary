let i;
var a,
    o = r(442837),
    s = r(570140),
    l = r(594190),
    u = r(77498);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function d(e) {
    i = e.currentGame;
}
function f(e) {
    i = e.associatedGame;
}
class p extends (a = o.ZP.Store) {
    getGameForPID(e) {
        var n;
        if (__OVERLAY__ || null == e) return null;
        let r = null === (n = l.ZP.getGameForPID(e)) || void 0 === n ? void 0 : n.name;
        return u.Z.getGameByName(r);
    }
    getGame() {
        return i;
    }
}
c(p, 'displayName', 'OverlayRunningGameStore'),
    (n.Z = new p(s.Z, {
        OVERLAY_INITIALIZE: d,
        OVERLAY_SET_ASSOCIATED_GAME: f
    }));
