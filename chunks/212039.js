a.d(t, { w: () => l }), a(47120), a(653041);
var n = a(735630);
async function l(e) {
    let t = n.createFile(),
        a = n.createFile(),
        l = {};
    (e.fileStart = 0),
        (t.onReady = (e) => {
            for (let n of (a.init({
                duration: e.duration,
                timescale: e.timescale
            }),
            e.audioTracks))
                (l[n.id] = n),
                    t.setExtractionOptions(n.id, null, { nbSamples: 1 / 0 }),
                    a.addTrack({
                        id: n.id,
                        timescale: n.timescale,
                        hdlr: 'soun',
                        type: 'mp4a',
                        duration: n.duration,
                        layer: n.layer,
                        channel_count: n.audio.channel_count,
                        samplerate: n.audio.sample_rate,
                        samplesize: n.audio.sample_size,
                        name: n.name
                    });
            t.start();
        });
    let i = new Promise((e) => {
        t.onSamples = (n, i, r) => {
            for (let e of r) a.addSample(n, e.data, e);
            t.releaseUsedSamples(n, r.length), delete l[n];
            let o = a.getTrackById(n),
                s = t.getTrackById(n);
            if (null != s.edts) {
                let e = s.edts.elst;
                o.add('edts').boxes.push(e);
            }
            0 === Object.keys(l).length && e();
        };
    });
    return t.appendBuffer(e), t.flush(), await i, a.getBuffer();
}
