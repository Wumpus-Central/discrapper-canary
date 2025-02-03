t.d(n, {
    NN: () => m,
    b1: () => c
}),
    t(315314),
    t(309749),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var l = t(192379),
    a = t(772848),
    i = t(304809),
    s = t(586826),
    r = t(943351);
let u = new Worker(new URL('/assets/' + t.u('14315'), t.b)),
    o = (0, i.N)();
async function d(e) {
    let n = await e.arrayBuffer();
    return (await o.decodeAudioData(n)).getChannelData(0);
}
function c(e) {
    let [n, t] = l.useState(null),
        [a, i] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = (0, r.hp)(e);
            n !== a && (i(n), t(null), d(e).then(t));
        }, [a, e]),
        n
    );
}
let f = { ...r.nl };
function m(e, n, t) {
    let [i, o] = l.useState(null),
        [d, c] = l.useState(null),
        [m, h] = l.useState(1),
        { setMaxVolume: g } = (0, s.p)(),
        p = l.useCallback(
            (e, n) => {
                var l;
                c(null),
                    ((l = n.offsetWidth),
                    new Promise((n) => {
                        let i = (0, a.Z)(),
                            s = (e) => {
                                let {
                                    data: { waveform: t, id: l, normalizedVolumeMultipler: a }
                                } = e;
                                i === l && (n(t), h(a)), null == u || u.removeEventListener('message', s);
                            };
                        null == u || u.addEventListener('message', s),
                            null == u ||
                                u.postMessage({
                                    id: i,
                                    options: t,
                                    config: f,
                                    width: l,
                                    rawBufferData: e
                                });
                    })).then(c);
            },
            [t]
        );
    return (
        l.useEffect(() => {
            if (null == e || null == n) return;
            let l = (0, r.V3)(e, t);
            i !== l && (o(l), p(e, n));
        }, [e, p, n, t, i]),
        l.useEffect(() => {
            g(m);
        }, [m, g]),
        d
    );
}
