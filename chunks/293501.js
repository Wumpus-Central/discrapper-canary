n.d(t, {
    NN: () => m,
    b1: () => d
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(415506);
var l = n(192379),
    a = n(772848),
    i = n(304809),
    r = n(586826),
    s = n(943351);
let o = new Worker(new URL('/assets/' + n.u('14315'), n.b)),
    u = (0, i.N)();
async function c(e) {
    if (null == u) throw Error('Failed to create audio context');
    let t = await e.arrayBuffer();
    return (await u.decodeAudioData(t)).getChannelData(0);
}
function d(e) {
    let [t, n] = l.useState(null),
        [a, i] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == e) return;
            let t = (0, s.hp)(e);
            t !== a && (i(t), n(null), c(e).then(n));
        }, [a, e]),
        t
    );
}
let f = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
})({}, s.nl);
function m(e, t, n) {
    let [i, u] = l.useState(null),
        [c, d] = l.useState(null),
        [m, h] = l.useState(1),
        { setMaxVolume: g } = (0, r.p)(),
        p = l.useCallback(
            (e, t) => {
                var l;
                d(null),
                    ((l = t.offsetWidth),
                    new Promise((t) => {
                        let i = (0, a.Z)(),
                            r = (e) => {
                                let {
                                    data: { waveform: n, id: l, normalizedVolumeMultipler: a }
                                } = e;
                                i === l && (t(n), h(a)), null == o || o.removeEventListener('message', r);
                            };
                        null == o || o.addEventListener('message', r),
                            null == o ||
                                o.postMessage({
                                    id: i,
                                    options: n,
                                    config: f,
                                    width: l,
                                    rawBufferData: e
                                });
                    })).then(d);
            },
            [n]
        );
    return (
        l.useEffect(() => {
            if (null == e || null == t) return;
            let l = (0, s.V3)(e, n);
            i !== l && (u(l), p(e, t));
        }, [e, p, t, n, i]),
        l.useEffect(() => {
            g(m);
        }, [m, g]),
        c
    );
}
