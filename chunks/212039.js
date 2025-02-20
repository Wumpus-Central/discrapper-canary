n.d(t, { w: () => a }), n(47120), n(653041);
var r = n(735630);
async function a(e) {
    let t = r.createFile(),
        n = r.createFile(),
        a = {};
    (e.fileStart = 0),
        (t.onReady = (e) => {
            for (let r of (n.init({
                duration: e.duration,
                timescale: e.timescale
            }),
            e.audioTracks))
                (a[r.id] = r),
                    t.setExtractionOptions(r.id, null, { nbSamples: 1 / 0 }),
                    n.addTrack({
                        id: r.id,
                        timescale: r.timescale,
                        hdlr: 'soun',
                        type: 'mp4a',
                        duration: r.duration,
                        layer: r.layer,
                        channel_count: r.audio.channel_count,
                        samplerate: r.audio.sample_rate,
                        samplesize: r.audio.sample_size,
                        name: r.name
                    });
            t.start();
        });
    let l = new Promise((e) => {
        t.onSamples = (r, l, i) => {
            for (let e of i) n.addSample(r, e.data, e);
            t.releaseUsedSamples(r, i.length), delete a[r];
            let o = n.getTrackById(r),
                s = t.getTrackById(r);
            if (null != s.edts) {
                let e = s.edts.elst;
                o.add('edts').boxes.push(e);
            }
            0 === Object.keys(a).length && e();
        };
    });
    return t.appendBuffer(e), t.flush(), await l, n.getBuffer();
}
