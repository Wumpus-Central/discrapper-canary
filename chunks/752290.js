n.d(t, { Z: () => O }), n(388685);
var r = n(729357),
    i = n.n(r),
    a = n(147913),
    o = n(460181);
function s(e, t, n) {
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
    c = 0.5,
    u = 500,
    d = (0, o.tu)('vibing_wumpus', 'vibing_wumpus', 0),
    f = 0,
    _ = 0,
    p = null;
function h(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * _),
        a = Math.round(100 * f);
    (n > 0 && a >= r) || (n < 0 && a <= r) ? (clearInterval(p), 0 === r && null != t && t()) : ((a += n), (f = a / 100), (d.volume = i()(f, 0, c)));
}
function m(e) {
    null != p && clearInterval(p), (_ = 0);
    let t = y();
    p = setInterval(() => {
        h(t, e);
    }, l);
}
function g() {
    null != p && clearInterval(p), d.loop(), (_ = c);
    let e = y();
    p = setInterval(() => h(e), l);
}
function E() {
    m(d.pause.bind(d));
}
function b() {
    m(d.stop.bind(d));
}
function y() {
    return (l / u) * (_ - f);
}
class v extends a.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                VIBING_WUMPUS_PLAY_MUSIC: g,
                VIBING_WUMPUS_STOP_MUSIC: b,
                VIBING_WUMPUS_PAUSE_MUSIC: E
            });
    }
}
let O = new v();
