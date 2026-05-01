let i;
n.d(t, { A: () => d });
var a = n(17928),
    r = n(228366),
    s = n(328153),
    l = n(760751);
class o extends a.Ay.Store {
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
let d = new o(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        i = e.currentGame;
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        i = e.associatedGame;
    },
});
