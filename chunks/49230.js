n.d(t, {
    $: () => h,
    h: () => m
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    r = n(46973),
    a = n(304809),
    s = n(131951),
    o = n(747071);
let c = null;
try {
    c = (0, a.N)();
} catch {}
let d = new Map();
async function u(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = await (null == c ? void 0 : c.decodeAudioData(n));
    return null != i && d.set(e, i), i;
}
function h(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: a } = e;
    return new Promise(async (e) => {
        let o = await u(n);
        null == o && e(),
            s.Z.getMediaEngine().eachConnection((n) => {
                n.context === r.Yn.DEFAULT &&
                    (a(),
                    l()(null != o, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, o, i, () => {
                        e();
                    }));
            });
    });
}
function m(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: l, reportSoundStartedPlaying: r } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise((e) => {
        let a = new Audio(i);
        (a.volume = (0, o.Z)(l)),
            a.addEventListener('canplaythrough', () => {
                r(), t.set(n, a), a.play();
            }),
            a.addEventListener('ended', () => {
                t.delete(n), (a.src = ''), e();
            });
    });
}
