let i;
n.d(t, { Z: () => _ });
var r,
    a = n(442837),
    s = n(570140),
    o = n(594190),
    l = n(77498);
function u(e, t, n) {
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
function c(e) {
    i = e.currentGame;
}
function d(e) {
    i = e.associatedGame;
}
class f extends (r = a.ZP.Store) {
    getGameForPID(e) {
        var t;
        if (__OVERLAY__ || null == e) return null;
        let n = null === (t = o.ZP.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
        return l.Z.getGameByName(n);
    }
    getGame() {
        return i;
    }
}
u(f, 'displayName', 'OverlayRunningGameStore');
let _ = new f(s.Z, {
    OVERLAY_INITIALIZE: c,
    OVERLAY_SET_ASSOCIATED_GAME: d
});
