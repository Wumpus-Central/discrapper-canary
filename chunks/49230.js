n.d(t, {
    $: () => f,
    h: () => g
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(46973),
    o = n(304809),
    a = n(399882),
    s = n(545511),
    c = n(131951),
    u = n(747071);
let d = null;
try {
    d = (0, o.N)();
} catch (e) {}
let p = new Map();
async function h(e) {
    let t = p.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        r = await (null == d ? void 0 : d.decodeAudioData(n));
    return null != r && p.set(e, r), r;
}
function f(e) {
    let { soundKey: t, soundURL: n, soundVolume: r, reportSoundStartedPlaying: o } = e;
    return new Promise(async (e) => {
        let a = await h(n);
        null == a && e(),
            c.Z.getMediaEngine().eachConnection((n) => {
                n.context === l.Yn.DEFAULT &&
                    (o(),
                    i()(null != a, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, a, r, () => {
                        e();
                    }));
            });
    });
}
function g(e, t) {
    let { soundKey: n, soundURL: r, soundVolume: i, reportSoundStartedPlaying: l } = e,
        o = t.get(n);
    if (null != o) {
        o.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let o = new (await (0, s.Z)(r))();
        (o.src = r),
            (o.volume = (0, u.Z)(i)),
            o.addEventListener(o instanceof a.Z.OGVPlayer ? 'loadedmetadata' : 'canplaythrough', () => {
                l(), t.set(n, o), o.play();
            }),
            o.addEventListener('ended', () => {
                t.delete(n), (o.src = ''), e();
            });
    });
}
