n.d(t, { Z: () => T }), n(47120);
var i = n(729357),
    r = n.n(i),
    a = n(147913),
    s = n(460181);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = 100,
    u = 0.5,
    c = 500,
    d = (0, s.tu)('vibing_wumpus', 'vibing_wumpus', 0),
    f = 0,
    _ = 0,
    p = null;
function h(e, t) {
    let n = Math.round(100 * e),
        i = Math.round(100 * _),
        a = Math.round(100 * f);
    (n > 0 && a >= i) || (n < 0 && a <= i) ? (clearInterval(p), 0 === i && null != t && t()) : ((a += n), (f = a / 100), (d.volume = r()(f, 0, u)));
}
function m(e) {
    null != p && clearInterval(p), (_ = 0);
    let t = y();
    p = setInterval(() => {
        h(t, e);
    }, l);
}
function g() {
    null != p && clearInterval(p), d.loop(), (_ = u);
    let e = y();
    p = setInterval(() => h(e), l);
}
function E() {
    m(d.pause.bind(d));
}
function v() {
    m(d.stop.bind(d));
}
function y() {
    return (l / c) * (_ - f);
}
class I extends a.Z {
    constructor(...e) {
        super(...e),
            o(this, 'actions', {
                VIBING_WUMPUS_PLAY_MUSIC: g,
                VIBING_WUMPUS_STOP_MUSIC: v,
                VIBING_WUMPUS_PAUSE_MUSIC: E
            });
    }
}
let T = new I();
