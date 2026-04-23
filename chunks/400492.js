let i;
n.d(t, { Ak: () => c, Qh: () => d, aN: () => E });
var r = n(626584),
    a = n(312671),
    s = n(458640),
    _ = n(351906),
    l = n(257645);
i = n(946261).WebAudioSound;
let o = new r.A("SoundUtils");
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.DEFAULT;
    return d((0, s.A)(t)[e] ?? e, e, n, i);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.DEFAULT;
    return new i(e, t, n, r);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.a.DEFAULT;
    if (_.A.disableSounds) return;
    let E = (0, s.A)(i ?? a.A.getSoundpack());
    null == E && o.log(`Unable to find sound for pack name: ${i}`);
    let c = d(E[e] ?? e, e, t, r);
    return (
        null != n
            ? c.playWithListener().then((e) => {
                  e && n();
              })
            : c.play(),
        c
    );
}
