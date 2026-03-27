r(321073);
var n = r(696016);
self.addEventListener("message", async (t) => {
    let e,
        {
            data: { videoBuffer: a },
        } = t,
        { default: i } = await r.e("25777").then(r.t.bind(r, 293384, 19));
    a.fileStart = 0;
    let o = i.createFile(),
        s = {},
        h = {},
        l = {},
        f = i.createFile(),
        c = new Promise((t) => {
            e = t;
        });
    (o.onError = () => {
        e?.();
    }),
        (o.onReady = (t) => {
            if ((f.init({ duration: t.duration, timescale: t.timescale }), 0 === t.audioTracks.length))
                return void e?.();
            for (let e of t.audioTracks) {
                let r = i.createFile();
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
                    f.addTrack({
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
                    (s[e.id] = r),
                    (h[e.id] = e),
                    (l[e.id] = e.name.length > 0 ? e.name : `track_${e.id}`),
                    o.setExtractionOptions(e.id, null, { nbSamples: 1 / 0 });
            }
            (o.onSamples = (t, r, a) => {
                let i = s[t];
                if (null == i) return void n.nx.warn(`No output file found for track ${t}`);
                for (let e of a) i.addSample(t, e.data, e), f.addSample(t, e.data, e);
                o.releaseUsedSamples(t, a.length);
                let l = i.getTrackById(t),
                    c = f.getTrackById(t),
                    p = o.getTrackById(t);
                if (null != p.edts) {
                    let t = p.edts.elst;
                    l.add("edts").boxes.push(t), c.add("edts").boxes.push(t);
                }
                delete h[t], 0 === Object.keys(h).length && e?.();
            }),
                o.start();
        }),
        o.appendBuffer(a),
        o.flush(),
        await c;
    let p = [],
        u = f.getBuffer(),
        y = [a, u];
    for (let [t, e] of Object.entries(s)) {
        let r = parseInt(t, 10),
            n = e.getBuffer();
        p.push({ trackId: r, trackName: l[r], buffer: n }), y.push(n);
    }
    self.postMessage({ videoBuffer: a, audioTracks: p, audioBuffer: u }, y);
});
