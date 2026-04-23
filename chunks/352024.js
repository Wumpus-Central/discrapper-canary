n.d(t, { JX: () => c, R_: () => p, YK: () => f, Yo: () => _ }),
    n(321073),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var a = n(284009),
    r = n.n(a),
    i = n(602674),
    o = n(927813),
    l = n(796774),
    s = n(858013);
let u = null;
try {
    let e = (0, i.v)();
    if (null == e) throw Error("Failed to create media audio context");
    u = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48e3) });
} catch (e) {}
async function d(e) {
    if (null == u) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return u.decodeAudioData(t);
}
async function f(e) {
    var t;
    let n = await ((t = (t) => {
        t.readAsDataURL(e);
    }),
    new Promise((e, n) => {
        let a = new FileReader(),
            r = () => {
                a.removeEventListener("load", r), a.removeEventListener("error", n), e(a.result);
            };
        a.addEventListener("load", r), a.addEventListener("error", n), t(a);
    }));
    if ("string" != typeof n) throw Error("Unexpected file type");
    return n;
}
async function c(e) {
    let { readPromise: t, guildId: n, name: a, volume: r, emojiId: i, emojiName: o } = e;
    return (0, l.lT)({ guildId: n, name: a, sound: await t, volume: r, emojiId: i, emojiName: o });
}
async function h(e) {
    let t = [],
        n = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let t = e[0],
                    n = e[1],
                    a = [];
                for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
                let r = new Float32Array(a.length);
                return r.set(a), r;
            }
            throw Error("Only handles up to 2 channels");
        })(
            (function (e) {
                let { numberOfChannels: t } = e,
                    n = [];
                for (let a = 0; a < t; a++) n.push(e.getChannelData(a));
                return n;
            })(e),
        ),
        a = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1e3 * e.duration * 1e3,
            data: n,
        }),
        i = new AudioEncoder({
            output: function (n) {
                r()(null != n.duration, "Chunk duration must not be null");
                let a = (n.duration / 1e6) * e.sampleRate,
                    i = new Uint8Array(n.byteLength);
                n.copyTo(i), t.push({ buffer: i, numSamples: a });
            },
            error: (e) => {
                throw Error(`Audio encoding error: ${e.message}`);
            },
        });
    return (
        i.configure({ codec: "opus", sampleRate: e.sampleRate, numberOfChannels: e.numberOfChannels }),
        i.encode(a),
        await i.flush(),
        new Blob(
            [
                (0, s.A)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0,
                }),
            ],
            { type: "audio/ogg" },
        )
    );
}
async function _(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: a } = t,
            { sampleRate: r, numberOfChannels: i, duration: l } = e,
            s = l * o.A.Millis.SECOND,
            d = Math.min(a, s);
        if (0 === n && d === s) return e;
        if (null == u) throw Error("Failed to create audio context");
        let f = Math.floor((n / s) * e.length),
            c = Math.floor((d / s) * e.length),
            h = u.createBuffer(i, c - f, r);
        for (let t = 0; t < i; t++) {
            let n = h.getChannelData(t),
                a = e.getChannelData(t),
                r = 0;
            for (let e = f; e <= c; e++) (n[r] = a[e]), r++;
        }
        return h;
    })(await d(e), t);
    return new File([await h(n)], "sound.ogg", { type: "audio/ogg" });
}
async function p(e) {
    let t = new File([e], "audio.mp4", { type: e.type }),
        n = await d(t);
    return await h(n);
}
