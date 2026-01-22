let r;
n.d(t, {
    Ak: () => f,
    Qh: () => d,
    aN: () => u,
});
var i = n(626584),
    a = n(312671),
    s = n(458640),
    o = n(351906),
    l = n(257645);
r = n(946261).WebAudioSound;
let c = new i.A("SoundUtils");
function u(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.DEFAULT;
    return d(null != (n = (0, s.A)(t)[e]) ? n : e, e, r, i);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.DEFAULT;
    return new r(e, t, n, i);
}
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.a.DEFAULT;
    if (o.A.disableSounds) return;
    let f = (0, s.A)(null != i ? i : a.A.getSoundpack());
    null == f && c.log("Unable to find sound for pack name: ".concat(i));
    let p = d(null != (t = f[e]) ? t : e, e, n, u);
    return (
        null != r
            ? p.playWithListener().then((e) => {
                  e && r();
              })
            : p.play(),
        p
    );
}
