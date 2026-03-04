n.d(t, { JX: () => d, R_: () => g, YK: () => f, Yo: () => h }),
    n(321073),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    a = n.n(i),
    r = n(602674),
    l = n(927813),
    o = n(796774),
    s = n(858013);
let c = null;
try {
    let e = (0, r.v)();
    if (null == e) throw Error("Failed to create media audio context");
    c = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48e3) });
} catch (e) {}
async function u(e) {
    if (null == c) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return c.decodeAudioData(t);
}
async function f(e) {
    var t;
    let n = await ((t = (t) => {
        t.readAsDataURL(e);
    }),
    new Promise((e, n) => {
        let i = new FileReader(),
            a = () => {
                i.removeEventListener("load", a), i.removeEventListener("error", n), e(i.result);
            };
        i.addEventListener("load", a), i.addEventListener("error", n), t(i);
    }));
    if ("string" != typeof n) throw Error("Unexpected file type");
    return n;
}
async function d(e) {
    let { readPromise: t, guildId: n, name: i, volume: a, emojiId: r, emojiName: l } = e;
    return (0, o.lT)({ guildId: n, name: i, sound: await t, volume: a, emojiId: r, emojiName: l });
}
async function p(e) {
    let t = [],
        n = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let t = e[0],
                    n = e[1],
                    i = [];
                for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                let a = new Float32Array(i.length);
                return a.set(i), a;
            }
            throw Error("Only handles up to 2 channels");
        })(
            (function (e) {
                let { numberOfChannels: t } = e,
                    n = [];
                for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                return n;
            })(e),
        ),
        i = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1e3 * e.duration * 1e3,
            data: n,
        }),
        r = new AudioEncoder({
            output: function (n) {
                a()(null != n.duration, "Chunk duration must not be null");
                let i = (n.duration / 1e6) * e.sampleRate,
                    r = new Uint8Array(n.byteLength);
                n.copyTo(r), t.push({ buffer: r, numSamples: i });
            },
            error: (e) => {
                throw Error(`Audio encoding error: ${e.message}`);
            },
        });
    return (
        r.configure({ codec: "opus", sampleRate: e.sampleRate, numberOfChannels: e.numberOfChannels }),
        r.encode(i),
        await r.flush(),
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
async function h(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: i } = t,
            { sampleRate: a, numberOfChannels: r, duration: o } = e,
            s = o * l.A.Millis.SECOND,
            u = Math.min(i, s);
        if (0 === n && u === s) return e;
        if (null == c) throw Error("Failed to create audio context");
        let f = Math.floor((n / s) * e.length),
            d = Math.floor((u / s) * e.length),
            p = c.createBuffer(r, d - f, a);
        for (let t = 0; t < r; t++) {
            let n = p.getChannelData(t),
                i = e.getChannelData(t),
                a = 0;
            for (let e = f; e <= d; e++) (n[a] = i[e]), a++;
        }
        return p;
    })(await u(e), t);
    return new File([await p(n)], "sound.ogg", { type: "audio/ogg" });
}
async function g(e) {
    let t = new File([e], "audio.mp4", { type: e.type }),
        n = await u(t);
    return await p(n);
}
