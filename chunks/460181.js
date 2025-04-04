let r;
n.d(t, {
    GN: () => _,
    tu: () => f,
    uk: () => d
});
var i = n(259443),
    o = n(292619),
    a = n(474873),
    s = n(135906),
    l = n(246946),
    c = n(509571);
{
    let e = (0, o.w)({ location: 'SoundUtils' }),
        t = n(146779);
    r = e ? t.WebAudioAPISound : t.WebAudioSound;
}
let u = new i.Yd('SoundUtils');
function d(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.w.DEFAULT;
    return f(null != (n = (0, s.Z)(t)[e]) ? n : e, e, r, i);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.w.DEFAULT;
    return new r(e, t, n, i);
}
function _(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.w.DEFAULT;
    if (l.Z.disableSounds) return;
    let d = (0, s.Z)(null != i ? i : a.Z.getSoundpack());
    null == d && u.log('Unable to find sound for pack name: '.concat(i));
    let _ = f(null != (t = d[e]) ? t : e, e, n, o);
    return (
        null != r
            ? _.playWithListener().then((e) => {
                  e && r();
              })
            : _.play(),
        _
    );
}
