"use strict";
n.d(t, { A: () => T });
var r = n(982520),
    i = n.n(r),
    a = n(439372),
    s = n(400492);
let o = 100,
    l = 0.5,
    u = 500,
    c = (0, s.Qh)("vibing_wumpus", "vibing_wumpus", 0),
    d = 0,
    _ = 0,
    f = null;
function p(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * _),
        a = Math.round(100 * d);
    (n > 0 && a >= r) || (n < 0 && a <= r)
        ? (clearInterval(f), 0 === r && null != t && t())
        : ((a += n), (d = a / 100), (c.volume = i()(d, 0, l)));
}
function h(e) {
    null != f && clearInterval(f), (_ = 0);
    let t = A();
    f = setInterval(() => {
        p(t, e);
    }, o);
}
function m() {
    null != f && clearInterval(f), c.loop(), (_ = l);
    let e = A();
    f = setInterval(() => p(e), o);
}
function g() {
    h(c.pause.bind(c));
}
function E() {
    h(c.stop.bind(c));
}
function A() {
    return (o / u) * (_ - d);
}
class I extends a.A {
    actions = { VIBING_WUMPUS_PLAY_MUSIC: m, VIBING_WUMPUS_STOP_MUSIC: E, VIBING_WUMPUS_PAUSE_MUSIC: g };
}
let T = new I();
