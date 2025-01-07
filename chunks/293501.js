t.d(n, {
    NN: function () {
        return m;
    },
    b1: function () {
        return d;
    }
}),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var l = t(192379),
    a = t(772848),
    i = t(304809),
    r = t(586826),
    s = t(943351);
let o = new Worker(new URL('/assets/' + t.u('14315'), t.b)),
    u = (0, i.N)();
async function c(e) {
    let n = await e.arrayBuffer();
    return (await u.decodeAudioData(n)).getChannelData(0);
}
function d(e) {
    let [n, t] = l.useState(null),
        [a, i] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = (0, s.hp)(e);
            n !== a && (i(n), t(null), c(e).then(t));
        }, [a, e]),
        n
    );
}
let f = { ...s.nl };
function m(e, n, t) {
    let [i, u] = l.useState(null),
        [c, d] = l.useState(null),
        [m, h] = l.useState(1),
        { setMaxVolume: g } = (0, r.p)(),
        p = l.useCallback(
            (e, n) => {
                var l, i, r, s, u;
                d(null),
                    ((l = e),
                    (i = n.offsetWidth),
                    (r = t),
                    (s = f),
                    (u = h),
                    new Promise((e) => {
                        let n = (0, a.Z)(),
                            t = (l) => {
                                let {
                                    data: { waveform: a, id: i, normalizedVolumeMultipler: r }
                                } = l;
                                n === i && (e(a), u(r)), null == o || o.removeEventListener('message', t);
                            };
                        null == o || o.addEventListener('message', t),
                            null == o ||
                                o.postMessage({
                                    id: n,
                                    options: r,
                                    config: s,
                                    width: i,
                                    rawBufferData: l
                                });
                    })).then(d);
            },
            [t]
        );
    return (
        l.useEffect(() => {
            if (null == e || null == n) return;
            let l = (0, s.V3)(e, t);
            i !== l && (u(l), p(e, n));
        }, [e, p, n, t, i]),
        l.useEffect(() => {
            g(m);
        }, [m, g]),
        c
    );
}
