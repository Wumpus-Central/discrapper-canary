let i;
n.d(t, { A: () => d });
var r = n(17928),
    a = n(228366),
    s = n(952818),
    l = n(760751);
class o extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A, s.Ay);
    }
    static displayName = "OverlayRunningGameStore";
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = s.Ay.getGameOrTransformedSubgameForPID(e);
        return null != t ? l.A.findGame(t) : null;
    }
    getGame() {
        return i;
    }
}
let d = new o(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        i = e.currentGame;
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        i = e.associatedGame;
    },
});
