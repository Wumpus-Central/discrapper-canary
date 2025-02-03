let i;
n.d(t, {
    GN: () => d,
    tu: () => c,
    uk: () => u
});
var r = n(259443),
    a = n(474873),
    s = n(135906),
    o = n(246946);
i = n(146779).ExperimentalWebAudioSound;
let l = new r.Yd('SoundUtils');
function u(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return c(null !== (n = (0, s.Z)(t)[e]) && void 0 !== n ? n : e, e, i);
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return new i(e, t, n);
}
function d(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (o.Z.disableSounds) return;
    let u = (0, s.Z)(null != r ? r : a.Z.getSoundpack());
    null == u && l.log('Unable to find sound for pack name: '.concat(r));
    let d = c(null !== (t = u[e]) && void 0 !== t ? t : e, e, n);
    return (
        null != i
            ? d.playWithListener().then((e) => {
                  e && i();
              })
            : d.play(),
        d
    );
}
