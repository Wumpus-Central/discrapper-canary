r(321073);
var n = r(696016);
self.addEventListener("message", async (t) => {
    let {
            data: { videoBuffer: e },
        } = t,
        { default: a } = await r.e("25777").then(r.t.bind(r, 293384, 19));
    e.fileStart = 0;
    let i = a.createFile(),
        o = {},
        s = {},
        l = {},
        h = a.createFile();
    i.onReady = (t) => {
        for (let e of (h.init({ duration: t.duration, timescale: t.timescale }), t.audioTracks)) {
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
                h.addTrack({
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
                (l[e.id] = e.name.length > 0 ? e.name : `track_${e.id}`),
                i.setExtractionOptions(e.id, null, { nbSamples: 1 / 0 });
        }
        i.start();
    };
    let f = new Promise((t) => {
        i.onSamples = (e, r, a) => {
            let l = o[e];
            if (null == l) return void n.nx.warn(`No output file found for track ${e}`);
            for (let t of a) l.addSample(e, t.data, t), h.addSample(e, t.data, t);
            i.releaseUsedSamples(e, a.length);
            let f = l.getTrackById(e),
                c = h.getTrackById(e),
                p = i.getTrackById(e);
            if (null != p.edts) {
                let t = p.edts.elst;
                f.add("edts").boxes.push(t), c.add("edts").boxes.push(t);
            }
            delete s[e], 0 === Object.keys(s).length && t();
        };
    });
    i.appendBuffer(e), i.flush(), await f;
    let c = [],
        p = h.getBuffer(),
        u = [e, p];
    for (let [t, e] of Object.entries(o)) {
        let r = parseInt(t, 10),
            n = e.getBuffer();
        c.push({ trackId: r, trackName: l[r], buffer: n }), u.push(n);
    }
    self.postMessage({ videoBuffer: e, audioTracks: c, audioBuffer: p }, u);
});
