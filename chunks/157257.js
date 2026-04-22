"use strict";
let r;
n.d(t, { A: () => u });
var i = n(311907),
    s = n(73153),
    a = n(15285),
    o = n(760751);
class l extends i.Ay.Store {
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
        return r;
    }
}
let u = new l(s.h, {
    OVERLAY_INITIALIZE: function (e) {
        r = e.currentGame;
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        r = e.associatedGame;
    },
});
