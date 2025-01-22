var i = r(47120);
var a = r(729357),
    o = r.n(a),
    s = r(147913),
    l = r(557177);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = 100,
    d = 0.5,
    f = 500,
    p = (0, l.tu)('vibing_wumpus', 'vibing_wumpus', 0),
    h = 0,
    _ = 0,
    m = null;
function g(e, n) {
    let r = Math.round(100 * e),
        i = Math.round(100 * _),
        a = Math.round(100 * h);
    (r > 0 && a >= i) || (r < 0 && a <= i) ? (clearInterval(m), 0 === i && null != n && n()) : ((a += r), (h = a / 100), (p.volume = o()(h, 0, d)));
}
function E(e) {
    null != m && clearInterval(m), (_ = 0);
    let n = I();
    m = setInterval(() => {
        g(n, e);
    }, c);
}
function v() {
    null != m && clearInterval(m), p.loop(), (_ = d);
    let e = I();
    m = setInterval(() => g(e), c);
}
function y() {
    E(p.pause.bind(p));
}
function b() {
    E(p.stop.bind(p));
}
function I() {
    return (c / f) * (_ - h);
}
class T extends s.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                VIBING_WUMPUS_PLAY_MUSIC: v,
                VIBING_WUMPUS_STOP_MUSIC: b,
                VIBING_WUMPUS_PAUSE_MUSIC: y
            });
    }
}
n.Z = new T();
