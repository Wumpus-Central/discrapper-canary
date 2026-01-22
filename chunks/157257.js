let r;
n.d(t, { A: () => p });
var i,
    a = n(311907),
    s = n(73153),
    o = n(15285),
    l = n(760751);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
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
class f extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(l.A, o.Ay);
    }
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = o.Ay.getGameOrTransformedSubgameForPID(e);
        return l.A.getGameByName(null == t ? void 0 : t.name);
    }
    getGame() {
        return r;
    }
}
c(f, "displayName", "OverlayRunningGameStore");
let p = new f(s.h, {
    OVERLAY_INITIALIZE: u,
    OVERLAY_SET_ASSOCIATED_GAME: d,
});
