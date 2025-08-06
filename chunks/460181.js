let r;
n.d(t, {
    GN: () => f,
    tu: () => d,
    uk: () => u
});
var i = n(710845),
    o = n(474873),
    a = n(135906),
    s = n(246946),
    l = n(509571);
r = n(146779).WebAudioSound;
let c = new i.Z('SoundUtils');
function u(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.w.DEFAULT;
    return d(null != (n = (0, a.Z)(t)[e]) ? n : e, e, r, i);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.w.DEFAULT;
    return new r(e, t, n, i);
}
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.w.DEFAULT;
    if (s.Z.disableSounds) return;
    let f = (0, a.Z)(null != i ? i : o.Z.getSoundpack());
    null == f && c.log('Unable to find sound for pack name: '.concat(i));
    let _ = d(null != (t = f[e]) ? t : e, e, n, u);
    return (
        null != r
            ? _.playWithListener().then((e) => {
                  e && r();
              })
            : _.play(),
        _
    );
}
