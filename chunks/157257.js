"use strict";
let r;
n.d(t, { A: () => d });
var i = n(311907),
    s = n(73153),
    a = n(15285),
    o = n(760751);
function l(e) {
    r = e.currentGame;
}
function u(e) {
    r = e.associatedGame;
}
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(o.A, a.Ay);
    }
    static displayName = "OverlayRunningGameStore";
    getGameForPID(e) {
        if (__OVERLAY__ || null == e) return null;
        let t = a.Ay.getGameOrTransformedSubgameForPID(e);
        return o.A.getGameByName_DEPRECATED_DO_NOT_USE(t?.name);
    }
    getGame() {
        return r;
    }
}
let d = new c(s.h, { OVERLAY_INITIALIZE: l, OVERLAY_SET_ASSOCIATED_GAME: u });
