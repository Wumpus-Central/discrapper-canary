n.d(t, {
    $: () => f,
    h: () => h,
}),
    n(388685),
    n(415506);
var r = n(512722),
    i = n.n(r),
    l = n(46973),
    a = n(304809),
    s = n(399882),
    o = n(545511),
    c = n(131951),
    u = n(747071);
let d = new Map();
async function p(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        r = (0, a.N)(),
        i = await (null == r ? void 0 : r.decodeAudioData(n));
    return null != i && d.set(e, i), i;
}
function f(e) {
    let { soundKey: t, soundURL: n, soundVolume: r, reportSoundStartedPlaying: a } = e;
    return new Promise(async (e, s) => {
        let o = await p(n);
        null == o && e(),
            c.Z.getMediaEngine().eachConnection((n) => {
                n.context === l.Yn.DEFAULT &&
                    (a(),
                    i()(null != o, "audioBuffer cannot be null here"),
                    n.startSamplesLocalPlayback(t, o, r, (t, n) => {
                        0 !== t ? s(Error("".concat(n))) : e();
                    }));
            });
    });
}
function h(e, t) {
    let { soundKey: n, soundURL: r, soundVolume: i, reportSoundStartedPlaying: l } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let a = new (await (0, o.Z)(r))();
        (a.src = r),
            (a.volume = (0, u.Z)(i)),
            a.addEventListener(a instanceof s.Z.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
                l(), t.set(n, a), a.play();
            }),
            a.addEventListener("ended", () => {
                t.delete(n), (a.src = ""), e();
            });
    });
}
