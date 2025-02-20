n.d(t, { Z: () => O }), n(47120);
var r = n(729357),
    i = n.n(r),
    o = n(147913),
    a = n(460181);
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
    d = (0, a.tu)('vibing_wumpus', 'vibing_wumpus', 0),
    f = 0,
    p = 0,
    _ = null;
function h(e, t) {
    let n = Math.round(100 * e),
        r = Math.round(100 * p),
        o = Math.round(100 * f);
    (n > 0 && o >= r) || (n < 0 && o <= r) ? (clearInterval(_), 0 === r && null != t && t()) : ((o += n), (f = o / 100), (d.volume = i()(f, 0, c)));
}
function m(e) {
    null != _ && clearInterval(_), (p = 0);
    let t = b();
    _ = setInterval(() => {
        h(t, e);
    }, l);
}
function g() {
    null != _ && clearInterval(_), d.loop(), (p = c);
    let e = b();
    _ = setInterval(() => h(e), l);
}
function E() {
    m(d.pause.bind(d));
}
function v() {
    m(d.stop.bind(d));
}
function b() {
    return (l / u) * (p - f);
}
class y extends o.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                VIBING_WUMPUS_PLAY_MUSIC: g,
                VIBING_WUMPUS_STOP_MUSIC: v,
                VIBING_WUMPUS_PAUSE_MUSIC: E
            });
    }
}
let O = new y();
