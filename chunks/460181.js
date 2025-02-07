let i;
n.d(t, {
    GN: () => _,
    tu: () => f,
    uk: () => d
});
var r = n(259443),
    a = n(292619),
    s = n(474873),
    o = n(135906),
    l = n(246946),
    u = n(509571);
{
    let e = (0, a.w)({ location: 'SoundUtils' }),
        t = n(146779);
    i = e ? t.WebAudioAPISound : t.WebAudioSound;
}
let c = new r.Yd('SoundUtils');
function d(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.w.DEFAULT;
    return f(null !== (n = (0, o.Z)(t)[e]) && void 0 !== n ? n : e, e, i, r);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.w.DEFAULT;
    return new i(e, t, n, r);
}
function _(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.w.DEFAULT;
    if (l.Z.disableSounds) return;
    let d = (0, o.Z)(null != r ? r : s.Z.getSoundpack());
    null == d && c.log('Unable to find sound for pack name: '.concat(r));
    let _ = f(null !== (t = d[e]) && void 0 !== t ? t : e, e, n, a);
    return (
        null != i
            ? _.playWithListener().then((e) => {
                  e && i();
              })
            : _.play(),
        _
    );
}
