let i;
n.d(t, {
    GN: () => f,
    tu: () => d,
    uk: () => c
});
var r = n(259443),
    a = n(292619),
    s = n(474873),
    o = n(135906),
    l = n(246946);
{
    let e = (0, a.w)({ location: 'SoundUtils' }),
        t = n(146779);
    i = e ? t.WebAudioAPISound : t.WebAudioSound;
}
let u = new r.Yd('SoundUtils');
function c(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return d(null !== (n = (0, o.Z)(t)[e]) && void 0 !== n ? n : e, e, i);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return new i(e, t, n);
}
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (l.Z.disableSounds) return;
    let a = (0, o.Z)(null != r ? r : s.Z.getSoundpack());
    null == a && u.log('Unable to find sound for pack name: '.concat(r));
    let c = d(null !== (t = a[e]) && void 0 !== t ? t : e, e, n);
    return (
        null != i
            ? c.playWithListener().then((e) => {
                  e && i();
              })
            : c.play(),
        c
    );
}
