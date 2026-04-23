function n(t) {
    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
}
r(321073);
let a = `
font-weight: bold;
color: purple;
`,
    i = () => {},
    o = () => {};
class s {
    name;
    nativeLoggerEnabled;
    constructor(t = "default") {
        (this.name = t), (this.nativeLoggerEnabled = !1);
    }
    enableNativeLogger(t) {
        this.nativeLoggerEnabled = t;
    }
    logDangerously = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "log", e, ...n), t.nativeLoggerEnabled && o?.(t.name, "log", e, ...n);
        };
    })();
    log = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
            n(e, ...a), i(t.name, "log", e, ...a), t.nativeLoggerEnabled && o?.(t.name, "log", e, ...a);
        };
    })();
    verboseDangerously = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "debug", e, ...n), t.nativeLoggerEnabled && o?.(t.name, "debug", e, ...n);
        };
    })();
    verbose = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
            n(e, ...a), i(t.name, "debug", e, ...a), t.nativeLoggerEnabled && o?.(t.name, "debug", e, ...a);
        };
    })();
    info = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
            n(e, ...a), i(t.name, "info", e, ...a), t.nativeLoggerEnabled && o?.(t.name, "info", e, ...a);
        };
    })();
    warn = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
            n(e, ...a), i(t.name, "warn", e, ...a), t.nativeLoggerEnabled && o?.(t.name, "warn", e, ...a);
        };
    })();
    error = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
            n(e, ...a), i(t.name, "error", e, ...a), t.nativeLoggerEnabled && o?.(t.name, "error", e, ...a);
        };
    })();
    trace = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "trace", e, ...n), t.nativeLoggerEnabled && o?.(t.name, "trace", e, ...n);
        };
    })();
    time = (t, e) => {
        let r = Date.now(),
            n = e();
        return this.log(t, Date.now() - r), n;
    };
    timeAsync = async (t, e) => {
        let r = Date.now(),
            n = await e();
        return this.log(t, `${Date.now() - r}ms`), n;
    };
    fileOnly = (() => {
        var t = this;
        return function (e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
            i(t.name, "file-only", e, ...n), t.nativeLoggerEnabled && o?.(t.name, "file-only", e, ...n);
        };
    })();
}
var h,
    l = r(677623);
let f = new (r.n(l)())(5e3),
    c = Date.now(),
    p = c;
i = function (t, e, r) {
    for (var n = arguments.length, i = Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) i[o - 3] = arguments[o];
    let s = Date.now(),
        h = ((s - c) / 1e3).toFixed(3),
        l = ((s - p) / 1e3).toFixed(3),
        u = `Σ:${h}s, Δ:${l}s`;
    (p = s),
        (function (t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
            let a = (function (t) {
                let e = "";
                for (let r of t) {
                    let t = typeof r;
                    "string" === t || "number" === t || "boolean" === t
                        ? (e += r + " ")
                        : r instanceof Error
                          ? (e += r.message + "\n" + r.stack + " ")
                          : (e += JSON.stringify(r) + " ");
                }
                return e;
            })(r);
            for (
                "string" == typeof t
                    ? f.push({ time: Date.now(), category: t, message: a })
                    : f.push({ time: Date.now(), category: t.name, timing: t.timing, message: a });
                f.length > 5e3;
            )
                f.shift();
        })({ name: t, timing: u }, r, ...i),
        (function (t, e, r) {
            for (var n = arguments.length, i = Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) i[o - 3] = arguments[o];
            "file-only" !== e && console[e](`%c[${t}]`, a, r, ...i);
        })(t, e, r, ...i);
};
let u = Object.freeze({
    HALF_SECOND: 500,
    SECOND: 1e3,
    MINUTE: 6e4,
    HOUR: 36e5,
    DAY: 864e5,
    WEEK: 6048e5,
    DAYS_30: 2592e6,
});
Object.freeze({ SECOND: 1, MINUTE: 60, HOUR: 3600, DAY: 86400, WEEK: 604800, DAYS_30: 2592e3 }),
    Object.freeze({ MINUTE: 1, HOUR: 60, DAY: 1440, WEEK: 10080, DAYS_30: 43200 }),
    ((h = {})[(h.SECONDS_30 = 30 * u.SECOND)] = "SECONDS_30"),
    (h[(h.MINUTES_1 = u.MINUTE)] = "MINUTES_1"),
    (h[(h.MINUTES_2 = 2 * u.MINUTE)] = "MINUTES_2"),
    u.SECOND;
let y = new s("Clips");
u.DAY,
    self.addEventListener("message", async (t) => {
        let e,
            {
                data: { videoBuffer: n },
            } = t,
            { default: a } = await r.e("25777").then(r.t.bind(r, 293384, 19));
        n.fileStart = 0;
        let i = a.createFile(),
            o = {},
            s = {},
            h = {},
            l = a.createFile(),
            f = new Promise((t) => {
                e = t;
            });
        (i.onError = () => {
            e?.();
        }),
            (i.onReady = (t) => {
                if ((l.init({ duration: t.duration, timescale: t.timescale }), 0 === t.audioTracks.length))
                    return void e?.();
                for (let e of t.audioTracks) {
                    let r = a.createFile();
                    r.init({ duration: t.duration, timescale: t.timescale }),
                        r.addTrack({
                            id: e.id,
                            timescale: e.timescale,
                            hdlr: "soun",
                            type: "mp4a",
                            duration: e.duration,
                            layer: e.layer,
                            channel_count: e.audio.channel_count,
                            samplerate: e.audio.sample_rate,
                            samplesize: e.audio.sample_size,
                            name: e.name,
                        }),
                        l.addTrack({
                            id: e.id,
                            timescale: e.timescale,
                            hdlr: "soun",
                            type: "mp4a",
                            duration: e.duration,
                            layer: e.layer,
                            channel_count: e.audio.channel_count,
                            samplerate: e.audio.sample_rate,
                            samplesize: e.audio.sample_size,
                            name: e.name,
                        }),
                        (o[e.id] = r),
                        (s[e.id] = e),
                        (h[e.id] = e.name.length > 0 ? e.name : `track_${e.id}`),
                        i.setExtractionOptions(e.id, null, { nbSamples: 1 / 0 });
                }
                (i.onSamples = (t, r, n) => {
                    let a = o[t];
                    if (null == a) return void y.warn(`No output file found for track ${t}`);
                    for (let e of n) a.addSample(t, e.data, e), l.addSample(t, e.data, e);
                    i.releaseUsedSamples(t, n.length);
                    let h = a.getTrackById(t),
                        f = l.getTrackById(t),
                        c = i.getTrackById(t);
                    if (null != c.edts) {
                        let t = c.edts.elst;
                        h.add("edts").boxes.push(t), f.add("edts").boxes.push(t);
                    }
                    delete s[t], 0 === Object.keys(s).length && e?.();
                }),
                    i.start();
            }),
            i.appendBuffer(n),
            i.flush(),
            await f;
        let c = [],
            p = l.getBuffer(),
            u = [n, p];
        for (let [t, e] of Object.entries(o)) {
            let r = parseInt(t, 10),
                n = e.getBuffer();
            c.push({ trackId: r, trackName: h[r], buffer: n }), u.push(n);
        }
        self.postMessage({ videoBuffer: n, audioTracks: c, audioBuffer: p }, u);
    });
