r(321073);
var a,
    o = r(941426),
    n = r(677623);
let i = new (r.n(n)())(5e3),
    l = Date.now(),
    s = l;
(0, o.$o)(function (e, t, r) {
    for (var a = arguments.length, n = Array(a > 3 ? a - 3 : 0), d = 3; d < a; d++) n[d - 3] = arguments[d];
    let u = Date.now(),
        c = ((u - l) / 1e3).toFixed(3),
        f = ((u - s) / 1e3).toFixed(3),
        p = `\u{3A3}:${c}s, \u{394}:${f}s`;
    (s = u),
        (function (e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
            let o = (function (e) {
                let t = "";
                for (let r of e) {
                    let e = typeof r;
                    "string" === e || "number" === e || "boolean" === e
                        ? (t += r + " ")
                        : r instanceof Error
                          ? (t += r.message + "\n" + r.stack + " ")
                          : (t += JSON.stringify(r) + " ");
                }
                return t;
            })(r);
            for (
                "string" == typeof e
                    ? i.push({ time: Date.now(), category: e, message: o })
                    : i.push({ time: Date.now(), category: e.name, timing: e.timing, message: o });
                i.length > 5e3;
            )
                i.shift();
        })({ name: e, timing: p }, r, ...n),
        (0, o.gZ)(e, t, r, ...n);
});
let d = o.Vy,
    u = Object.freeze({
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
    ((a = {})[(a.SECONDS_30 = 30 * u.SECOND)] = "SECONDS_30"),
    (a[(a.MINUTES_1 = u.MINUTE)] = "MINUTES_1"),
    (a[(a.MINUTES_2 = 2 * u.MINUTE)] = "MINUTES_2"),
    u.SECOND;
let c = new d("Clips");
u.DAY,
    self.addEventListener("message", async (e) => {
        let t,
            {
                data: { videoBuffer: a },
            } = e,
            { default: o } = await r.e("25777").then(r.t.bind(r, 293384, 19));
        a.fileStart = 0;
        let n = o.createFile(),
            i = {},
            l = {},
            s = {},
            d = o.createFile(),
            u = new Promise((e) => {
                t = e;
            });
        (n.onError = () => {
            t?.();
        }),
            (n.onReady = (e) => {
                if ((d.init({ duration: e.duration, timescale: e.timescale }), 0 === e.audioTracks.length))
                    return void t?.();
                for (let t of e.audioTracks) {
                    let r = o.createFile();
                    r.init({ duration: e.duration, timescale: e.timescale }),
                        r.addTrack({
                            id: t.id,
                            timescale: t.timescale,
                            hdlr: "soun",
                            type: "mp4a",
                            duration: t.duration,
                            layer: t.layer,
                            channel_count: t.audio.channel_count,
                            samplerate: t.audio.sample_rate,
                            samplesize: t.audio.sample_size,
                            name: t.name,
                        }),
                        d.addTrack({
                            id: t.id,
                            timescale: t.timescale,
                            hdlr: "soun",
                            type: "mp4a",
                            duration: t.duration,
                            layer: t.layer,
                            channel_count: t.audio.channel_count,
                            samplerate: t.audio.sample_rate,
                            samplesize: t.audio.sample_size,
                            name: t.name,
                        }),
                        (i[t.id] = r),
                        (l[t.id] = t),
                        (s[t.id] = t.name.length > 0 ? t.name : `track_${t.id}`),
                        n.setExtractionOptions(t.id, null, { nbSamples: 1 / 0 });
                }
                (n.onSamples = (e, r, a) => {
                    let o = i[e];
                    if (null == o) return void c.warn(`No output file found for track ${e}`);
                    for (let t of a) o.addSample(e, t.data, t), d.addSample(e, t.data, t);
                    n.releaseUsedSamples(e, a.length);
                    let s = o.getTrackById(e),
                        u = d.getTrackById(e),
                        f = n.getTrackById(e);
                    if (null != f.edts) {
                        let e = f.edts.elst;
                        s.add("edts").boxes.push(e), u.add("edts").boxes.push(e);
                    }
                    delete l[e], 0 === Object.keys(l).length && t?.();
                }),
                    n.start();
            }),
            n.appendBuffer(a),
            n.flush(),
            await u;
        let f = [],
            p = d.getBuffer(),
            m = [a, p];
        for (let [e, t] of Object.entries(i)) {
            let r = parseInt(e, 10),
                a = t.getBuffer();
            f.push({ trackId: r, trackName: s[r], buffer: a }), m.push(a);
        }
        self.postMessage({ videoBuffer: a, audioTracks: f, audioBuffer: p }, m);
    });
