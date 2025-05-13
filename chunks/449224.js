let r;
n.d(t, { Z: () => _ });
var i,
    a = n(442837),
    o = n(570140),
    s = n(594190),
    l = n(77498);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    r = e.currentGame;
}
function d(e) {
    r = e.associatedGame;
}
class f extends (i = a.ZP.Store) {
    getGameForPID(e) {
        var t;
        if (__OVERLAY__ || null == e) return null;
        let n = null == (t = s.ZP.getGameForPID(e)) ? void 0 : t.name;
        return l.Z.getGameByName(n);
    }
    getGame() {
        return r;
    }
}
c(f, 'displayName', 'OverlayRunningGameStore');
let _ = new f(o.Z, {
    OVERLAY_INITIALIZE: u,
    OVERLAY_SET_ASSOCIATED_GAME: d
});
