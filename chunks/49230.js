n.d(t, {
    $: () => p,
    h: () => g
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    r = n(46973),
    a = n(481060),
    s = n(304809),
    o = n(131951),
    d = n(747071),
    c = n(388032);
let u = null;
try {
    u = (0, s.N)();
} catch {}
let h = new Map();
async function m(e) {
    let t = h.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = await (null == u ? void 0 : u.decodeAudioData(n));
    return null != i && h.set(e, i), i;
}
function p(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: a } = e;
    return new Promise(async (e) => {
        let s = await m(n);
        null == s && e(),
            o.Z.getMediaEngine().eachConnection((n) => {
                n.context === r.Yn.DEFAULT &&
                    (a(),
                    l()(null != s, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, s, i, () => {
                        e();
                    }));
            });
    });
}
function g(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: l, reportSoundStartedPlaying: r } = e,
        s = t.get(n);
    if (null != s) {
        s.currentTime = 0;
        return;
    }
    return new Promise((e) => {
        let s = new Audio(i);
        (s.volume = (0, d.Z)(l)),
            s.addEventListener('canplaythrough', () => {
                r(), t.set(n, s), s.play();
            }),
            'Safari' === platform.name &&
                s.addEventListener('error', (t) => {
                    var n;
                    let i = t.target;
                    (null == i ? void 0 : null === (n = i.error) || void 0 === n ? void 0 : n.code) === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED && (0, a.showToast)((0, a.createToast)(c.intl.string(c.t.qAsyjI), a.ToastType.FAILURE)), e();
                }),
            s.addEventListener('ended', () => {
                t.delete(n), (s.src = ''), e();
            });
    });
}
