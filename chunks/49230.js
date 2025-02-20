n.d(t, {
    $: () => g,
    h: () => f
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(46973),
    o = n(481060),
    a = n(304809),
    s = n(131951),
    c = n(747071),
    u = n(388032);
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
function g(e) {
    let { soundKey: t, soundURL: n, soundVolume: r, reportSoundStartedPlaying: o } = e;
    return new Promise(async (e) => {
        let a = await h(n);
        null == a && e(),
            s.Z.getMediaEngine().eachConnection((n) => {
                n.context === l.Yn.DEFAULT &&
                    (o(),
                    i()(null != a, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, a, r, () => {
                        e();
                    }));
            });
    });
}
function f(e, t) {
    let { soundKey: n, soundURL: r, soundVolume: i, reportSoundStartedPlaying: l } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise((e) => {
        let a = new Audio(r);
        (a.volume = (0, c.Z)(i)),
            a.addEventListener('canplaythrough', () => {
                l(), t.set(n, a), a.play();
            }),
            'Safari' === platform.name &&
                a.addEventListener('error', (t) => {
                    var n;
                    let r = t.target;
                    (null == r ? void 0 : null === (n = r.error) || void 0 === n ? void 0 : n.code) === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED && (0, o.showToast)((0, o.createToast)(u.NW.string(u.t.qAsyjI), o.ToastType.FAILURE)), e();
                }),
            a.addEventListener('ended', () => {
                t.delete(n), (a.src = ''), e();
            });
    });
}
