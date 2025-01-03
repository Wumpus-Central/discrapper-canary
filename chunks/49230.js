n.d(t, {
    $: function () {
        return h;
    },
    h: function () {
        return m;
    }
}),
    n(47120);
var i = n(512722),
    r = n.n(i),
    l = n(46973),
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
                n.context === l.Yn.DEFAULT &&
                    (a(),
                    r()(null != o, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, o, i, () => {
                        e();
                    }));
            });
    });
}
function m(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: l } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise((e) => {
        let a = new Audio(i);
        (a.volume = (0, o.Z)(r)),
            a.addEventListener('canplaythrough', () => {
                l(), t.set(n, a), a.play();
            }),
            a.addEventListener('ended', () => {
                t.delete(n), (a.src = ''), e();
            });
    });
}
