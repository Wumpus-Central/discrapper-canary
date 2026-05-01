"use strict";
let i;
n.d(t, { A: () => u });
var r = n(17928),
    s = n(228366),
    a = n(328153),
    o = n(760751);
class l extends r.Ay.Store {
    initialize() {
        this.waitFor(o.A, a.Ay);
    }
    static displayName = "OverlayRunningGameStore";
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = a.Ay.getGameOrTransformedSubgameForPID(e);
        return null != t ? o.A.findGame(t) : null;
    }
    getGame() {
        return i;
    }
}
let u = new l(s.h, {
    OVERLAY_INITIALIZE: function (e) {
        i = e.currentGame;
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        i = e.associatedGame;
    },
});
