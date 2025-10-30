r(388685), r(539854);
var n = r(356659);
self.addEventListener("message", async (t) => {
    let {
            data: { videoBuffer: e },
        } = t,
        { default: i } = await r.e("32990").then(r.t.bind(r, 735630, 19));
    e.fileStart = 0;
    let a = i.createFile(),
        o = {},
        s = {},
        l = {},
        c = i.createFile();
    a.onReady = (t) => {
        for (let e of (c.init({
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
                c.addTrack({
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
                a.setExtractionOptions(e.id, null, { nbSamples: 1 / 0 });
        }
        a.start();
    };
    let u = new Promise((t) => {
        a.onSamples = (e, r, i) => {
            let l = o[e];
            if (null == l) return void n.jF.warn("No output file found for track ".concat(e));
            for (let t of i) l.addSample(e, t.data, t), c.addSample(e, t.data, t);
            a.releaseUsedSamples(e, i.length);
            let u = l.getTrackById(e),
                f = c.getTrackById(e),
                h = a.getTrackById(e);
            if (null != h.edts) {
                let t = h.edts.elst;
                u.add("edts").boxes.push(t), f.add("edts").boxes.push(t);
            }
            delete s[e], 0 === Object.keys(s).length && t();
        };
    });
    a.appendBuffer(e), a.flush(), await u;
    let f = [],
        h = c.getBuffer(),
        p = [e, h];
    for (let [t, e] of Object.entries(o)) {
        let r = parseInt(t, 10),
            n = e.getBuffer();
        f.push({
            trackId: r,
            trackName: l[r],
            buffer: n,
        }),
            p.push(n);
    }
    self.postMessage(
        {
            videoBuffer: e,
            audioTracks: f,
            audioBuffer: h,
        },
        p,
    );
});
