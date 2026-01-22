r(896048), r(321073);
var n = r(696016);
self.addEventListener("message", async (t) => {
    let {
            data: { videoBuffer: e },
        } = t,
        { default: i } = await r.e("25777").then(r.t.bind(r, 293384, 19));
    e.fileStart = 0;
    let a = i.createFile(),
        o = {},
        s = {},
        l = {},
        h = i.createFile();
    a.onReady = (t) => {
        for (let e of (h.init({
            duration: t.duration,
            timescale: t.timescale,
        }),
        t.audioTracks)) {
            let r = i.createFile();
            r.init({
                duration: t.duration,
                timescale: t.timescale,
            }),
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
                (l[e.id] = e.name.length > 0 ? e.name : "track_".concat(e.id)),
                a.setExtractionOptions(e.id, null, {
                    nbSamples: 1 / 0,
                });
        }
        a.start();
    };
    let f = new Promise((t) => {
        a.onSamples = (e, r, i) => {
            let l = o[e];
            if (null == l) return void n.nx.warn("No output file found for track ".concat(e));
            for (let t of i) l.addSample(e, t.data, t), h.addSample(e, t.data, t);
            a.releaseUsedSamples(e, i.length);
            let f = l.getTrackById(e),
                u = h.getTrackById(e),
                c = a.getTrackById(e);
            if (null != c.edts) {
                let t = c.edts.elst;
                f.add("edts").boxes.push(t), u.add("edts").boxes.push(t);
            }
            delete s[e], 0 === Object.keys(s).length && t();
        };
    });
    a.appendBuffer(e), a.flush(), await f;
    let u = [],
        c = h.getBuffer(),
        p = [e, c];
    for (let [t, e] of Object.entries(o)) {
        let r = parseInt(t, 10),
            n = e.getBuffer();
        u.push({
            trackId: r,
            trackName: l[r],
            buffer: n,
        }),
            p.push(n);
    }
    self.postMessage(
        {
            videoBuffer: e,
            audioTracks: u,
            audioBuffer: c,
        },
        p,
    );
});
