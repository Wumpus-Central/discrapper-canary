"use strict";
let r;
n.d(t, { A: () => d });
var i = n(311907),
    a = n(73153),
    s = n(15285),
    o = n(760751);
function l(e) {
    r = e.currentGame;
}
function u(e) {
    r = e.associatedGame;
}
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(o.A, s.Ay);
    }
    static displayName = "OverlayRunningGameStore";
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = s.Ay.getGameOrTransformedSubgameForPID(e);
        return o.A.getGameByName(t?.name);
    }
    getGame() {
        return r;
    }
}
let d = new c(a.h, { OVERLAY_INITIALIZE: l, OVERLAY_SET_ASSOCIATED_GAME: u });
