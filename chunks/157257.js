let i;
n.d(t, { A: () => o });
var r = n(17928),
    a = n(228366),
    s = n(328153),
    _ = n(760751);
class l extends r.Ay.Store {
    initialize() {
        this.waitFor(_.A, s.Ay);
    }
    static displayName = "OverlayRunningGameStore";
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = s.Ay.getGameOrTransformedSubgameForPID(e);
        return null != t ? _.A.findGame(t) : null;
    }
    getGame() {
        return i;
    }
}
let o = new l(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        i = e.currentGame;
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        i = e.associatedGame;
    },
});
