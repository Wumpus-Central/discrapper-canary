"use strict";
n.d(t, { A: () => p });
var r = n(982520),
    i = n.n(r),
    s = n(439372);
let a = (0, n(400492).Qh)("vibing_wumpus", "vibing_wumpus", 0),
    o = 0,
    l = 0,
    u = null;
function d(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * l),
        s = Math.round(100 * o);
    (n > 0 && s >= r) || (n < 0 && s <= r)
        ? (clearInterval(u), 0 === r && null != t && t())
        : ((s += n), (o = s / 100), (a.volume = i()(o, 0, 0.5)));
}
function c(e) {
    null != u && clearInterval(u), (l = 0);
    let t = (function () {
        return 0.2 * (l - o);
    })();
    u = setInterval(() => {
        d(t, e);
    }, 100);
}
function _() {
    null != u && clearInterval(u), a.loop(), (l = 0.5);
    let e = (function () {
        return 0.2 * (l - o);
    })();
    u = setInterval(() => d(e), 100);
}
function f() {
    c(a.pause.bind(a));
}
function E() {
    c(a.stop.bind(a));
}
class h extends s.A {
    actions = { VIBING_WUMPUS_PLAY_MUSIC: _, VIBING_WUMPUS_STOP_MUSIC: E, VIBING_WUMPUS_PAUSE_MUSIC: f };
}
let p = new h();
