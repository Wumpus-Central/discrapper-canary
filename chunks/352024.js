n.d(t, {
    JX: () => d,
    R_: () => g,
    YK: () => u,
    Yo: () => p,
}),
    n(65821),
    n(927092),
    n(212978),
    n(321073),
    n(648691),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(201528);
var a = n(284009),
    r = n.n(a),
    o = n(602674),
    s = n(927813),
    i = n(796774),
    c = n(80394);
let l = null;
try {
    let e = (0, o.v)();
    if (null == e) throw Error("Failed to create media audio context");
    l = new AudioContext({
        sampleRate: Math.min(e.sampleRate, 48e3),
    });
} catch (e) {}
async function f(e) {
    if (null == l) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return l.decodeAudioData(t);
}
async function u(e) {
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
async function d(e) {
    let { readPromise: t, guildId: n, name: a, volume: r, emojiId: o, emojiName: s } = e;
    return (0, i.lT)({
        guildId: n,
        name: a,
        sound: await t,
        volume: r,
        emojiId: o,
        emojiName: s,
    });
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
        o = new AudioEncoder({
            output: function (n) {
                r()(null != n.duration, "Chunk duration must not be null");
                let a = (n.duration / 1e6) * e.sampleRate,
                    o = new Uint8Array(n.byteLength);
                n.copyTo(o),
                    t.push({
                        buffer: o,
                        numSamples: a,
                    });
            },
            error: (e) => {
                throw Error("Audio encoding error: ".concat(e.message));
            },
        });
    return (
        o.configure({
            codec: "opus",
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels,
        }),
        o.encode(a),
        await o.flush(),
        new Blob(
            [
                (0, c.A)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0,
                }),
            ],
            {
                type: "audio/ogg",
            },
        )
    );
}
async function p(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: a } = t,
            { sampleRate: r, numberOfChannels: o, duration: i } = e,
            c = i * s.A.Millis.SECOND,
            f = Math.min(a, c);
        if (0 === n && f === c) return e;
        if (null == l) throw Error("Failed to create audio context");
        let u = Math.floor((n / c) * e.length),
            d = Math.floor((f / c) * e.length),
            h = l.createBuffer(o, d - u, r);
        for (let t = 0; t < o; t++) {
            let n = h.getChannelData(t),
                a = e.getChannelData(t),
                r = 0;
            for (let e = u; e <= d; e++) (n[r] = a[e]), r++;
        }
        return h;
    })(await f(e), t);
    return new File([await h(n)], "sound.ogg", {
        type: "audio/ogg",
    });
}
async function g(e) {
    let t = new File([e], "audio.mp4", {
            type: e.type,
        }),
        n = await f(t);
    return await h(n);
}
