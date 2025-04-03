n.d(t, {
    $: () => f,
    h: () => g
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(46973),
    a = n(304809),
    o = n(399882),
    s = n(545511),
    c = n(131951),
    u = n(747071);
let d = null;
try {
    d = (0, a.N)();
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
    let { soundKey: t, soundURL: n, soundVolume: r, reportSoundStartedPlaying: a } = e;
    return new Promise(async (e) => {
        let o = await h(n);
        null == o && e(),
            c.Z.getMediaEngine().eachConnection((n) => {
                n.context === l.Yn.DEFAULT &&
                    (a(),
                    i()(null != o, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, o, r, () => {
                        e();
                    }));
            });
    });
}
function g(e, t) {
    let { soundKey: n, soundURL: r, soundVolume: i, reportSoundStartedPlaying: l } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let a = new (await (0, s.Z)(r))();
        (a.src = r),
            (a.volume = (0, u.Z)(i)),
            a.addEventListener(a instanceof o.Z.OGVPlayer ? 'loadedmetadata' : 'canplaythrough', () => {
                l(), t.set(n, a), a.play();
            }),
            a.addEventListener('ended', () => {
                t.delete(n), (a.src = ''), e();
            });
    });
}
