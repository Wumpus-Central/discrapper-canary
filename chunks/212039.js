async function a(e) {
    let { default: t } = await n.e('32990').then(n.t.bind(n, 735630, 19)),
        a = t.createFile(),
        r = t.createFile(),
        l = {};
    ((e.fileStart = 0),
        (a.onReady = (e) => {
            for (let t of (r.init({
                duration: e.duration,
                timescale: e.timescale
            }),
            e.audioTracks))
                ((l[t.id] = t),
                    a.setExtractionOptions(t.id, null, { nbSamples: 1 / 0 }),
                    r.addTrack({
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
                    }));
            a.start();
        }));
    let i = new Promise((e) => {
        a.onSamples = (t, n, i) => {
            for (let e of i) r.addSample(t, e.data, e);
            (a.releaseUsedSamples(t, i.length), delete l[t]);
            let o = r.getTrackById(t),
                s = a.getTrackById(t);
            if (null != s.edts) {
                let e = s.edts.elst;
                o.add('edts').boxes.push(e);
            }
            0 === Object.keys(l).length && e();
        };
    });
    return (a.appendBuffer(e), a.flush(), await i, r.getBuffer());
}
(n.d(t, { w: () => a }), n(388685), n(539854));
