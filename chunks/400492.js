"use strict";
let i;
n.d(t, { Ak: () => _, Qh: () => d, aN: () => c });
var r = n(626584),
    s = n(312671),
    a = n(458640),
    o = n(351906),
    l = n(257645);
i = n(946261).WebAudioSound;
let u = new r.A("SoundUtils");
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.DEFAULT;
    return d((0, a.A)(t)[e] ?? e, e, n, i);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.a.DEFAULT;
    return new i(e, t, n, r);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.a.DEFAULT;
    if (o.A.disableSounds) return;
    let c = (0, a.A)(i ?? s.A.getSoundpack());
    null == c && u.log(`Unable to find sound for pack name: ${i}`);
    let _ = d(c[e] ?? e, e, t, r);
    return (
        null != n
            ? _.playWithListener().then((e) => {
                  e && n();
              })
            : _.play(),
        _
    );
}
