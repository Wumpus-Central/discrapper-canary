"use strict";
n.d(t, { A: () => I });
var i = n(404144),
    r = n.n(i),
    a = n(439372);
let s = (0, n(400492).Qh)("vibing_wumpus", "vibing_wumpus", 0),
    l = 0,
    o = 0,
    d = null;
function c(e, t) {
    let n = Math.round(100 * e),
        i = Math.round(100 * o),
        a = Math.round(100 * l);
    (n > 0 && a >= i) || (n < 0 && a <= i)
        ? (clearInterval(d), 0 === i && null != t && t())
        : ((a += n), (l = a / 100), (s.volume = r()(l, 0, 0.5)));
}
function u(e) {
    null != d && clearInterval(d), (o = 0);
    let t = (function () {
        return 0.2 * (o - l);
    })();
    d = setInterval(() => {
        c(t, e);
    }, 100);
}
function _() {
    null != d && clearInterval(d), s.loop(), (o = 0.5);
    let e = (function () {
        return 0.2 * (o - l);
    })();
    d = setInterval(() => c(e), 100);
}
function E() {
    u(s.pause.bind(s));
}
function A() {
    u(s.stop.bind(s));
}
class h extends a.A {
    actions = { VIBING_WUMPUS_PLAY_MUSIC: _, VIBING_WUMPUS_STOP_MUSIC: A, VIBING_WUMPUS_PAUSE_MUSIC: E };
}
let I = new h();
