"use strict";
n.d(t, { A: () => E });
var i = n(982520),
    r = n.n(i),
    s = n(439372);
let a = (0, n(400492).Qh)("vibing_wumpus", "vibing_wumpus", 0),
    o = 0,
    l = 0,
    u = null;
function c(e, t) {
    let n = Math.round(100 * e),
        i = Math.round(100 * l),
        s = Math.round(100 * o);
    (n > 0 && s >= i) || (n < 0 && s <= i)
        ? (clearInterval(u), 0 === i && null != t && t())
        : ((s += n), (o = s / 100), (a.volume = r()(o, 0, 0.5)));
}
function d(e) {
    null != u && clearInterval(u), (l = 0);
    let t = (function () {
        return 0.2 * (l - o);
    })();
    u = setInterval(() => {
        c(t, e);
    }, 100);
}
function _() {
    null != u && clearInterval(u), a.loop(), (l = 0.5);
    let e = (function () {
        return 0.2 * (l - o);
    })();
    u = setInterval(() => c(e), 100);
}
function h() {
    d(a.pause.bind(a));
}
function f() {
    d(a.stop.bind(a));
}
class p extends s.A {
    actions = { VIBING_WUMPUS_PLAY_MUSIC: _, VIBING_WUMPUS_STOP_MUSIC: f, VIBING_WUMPUS_PAUSE_MUSIC: h };
}
let E = new p();
