let i;
n.d(t, { Ak: () => E, Qh: () => _, aN: () => c });
var a = n(626584),
    r = n(312671),
    s = n(458640),
    l = n(351906),
    o = n(257645);
i = n(946261).WebAudioSound;
let d = new a.A("SoundUtils");
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.a.DEFAULT;
    return _((0, s.A)(t)[e] ?? e, e, n, i);
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.a.DEFAULT;
    return new i(e, t, n, a);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.a.DEFAULT;
    if (l.A.disableSounds) return;
    let c = (0, s.A)(i ?? r.A.getSoundpack());
    null == c && d.log(`Unable to find sound for pack name: ${i}`);
    let E = _(c[e] ?? e, e, t, a);
    return (
        null != n
            ? E.playWithListener().then((e) => {
                  e && n();
              })
            : E.play(),
        E
    );
}
