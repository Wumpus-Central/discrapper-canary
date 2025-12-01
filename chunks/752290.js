n.d(t, { Z: () => v }), n(388685);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = 100,
    c = 0.5,
    u = 500,
    d = (0, o.tu)("vibing_wumpus", "vibing_wumpus", 0),
    f = 0,
    p = 0,
    _ = null;
function m(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * p),
        a = Math.round(100 * f);
    (n > 0 && a >= r) || (n < 0 && a <= r)
        ? (clearInterval(_), 0 === r && null != t && t())
        : ((a += n), (f = a / 100), (d.volume = i()(f, 0, c)));
}
function h(e) {
    null != _ && clearInterval(_), (p = 0);
    let t = y();
    _ = setInterval(() => {
        m(t, e);
    }, l);
}
function g() {
    null != _ && clearInterval(_), d.loop(), (p = c);
    let e = y();
    _ = setInterval(() => m(e), l);
}
function E() {
    h(d.pause.bind(d));
}
function b() {
    h(d.stop.bind(d));
}
function y() {
    return (l / u) * (p - f);
}
class O extends a.Z {
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                VIBING_WUMPUS_PLAY_MUSIC: g,
                VIBING_WUMPUS_STOP_MUSIC: b,
                VIBING_WUMPUS_PAUSE_MUSIC: E,
            });
    }
}
let v = new O();
