async function r(e) {
    let { default: t } = await n.e('32990').then(n.t.bind(n, 735630, 19)),
        r = t.createFile(),
        a = t.createFile(),
        l = {};
    (e.fileStart = 0),
        (r.onReady = (e) => {
            for (let t of (a.init({
                duration: e.duration,
                timescale: e.timescale
            }),
            e.audioTracks))
                (l[t.id] = t),
                    r.setExtractionOptions(t.id, null, { nbSamples: 1 / 0 }),
                    a.addTrack({
                        id: t.id,
                        timescale: t.timescale,
                        hdlr: 'soun',
                        type: 'mp4a',
                        duration: t.duration,
                        layer: t.layer,
                        channel_count: t.audio.channel_count,
                        samplerate: t.audio.sample_rate,
                        samplesize: t.audio.sample_size,
                        name: t.name
                    });
            r.start();
        });
    let i = new Promise((e) => {
        r.onSamples = (t, n, i) => {
            for (let e of i) a.addSample(t, e.data, e);
            r.releaseUsedSamples(t, i.length), delete l[t];
            let o = a.getTrackById(t),
                s = r.getTrackById(t);
            if (null != s.edts) {
                let e = s.edts.elst;
                o.add('edts').boxes.push(e);
            }
            0 === Object.keys(l).length && e();
        };
    });
    return r.appendBuffer(e), r.flush(), await i, a.getBuffer();
}
n.d(t, { w: () => r }), n(47120), n(653041);
