t.d(n, {
    NN: () => m,
    b1: () => d
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
    r = t(304809),
    i = t(586826),
    s = t(943351);
let o = new Worker(new URL('/assets/' + t.u('14315'), t.b)),
    u = (0, r.N)();
async function c(e) {
    let n = await e.arrayBuffer();
    return (await u.decodeAudioData(n)).getChannelData(0);
}
function d(e) {
    let [n, t] = l.useState(null),
        [a, r] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == e) return;
            let n = (0, s.hp)(e);
            n !== a && (r(n), t(null), c(e).then(t));
        }, [a, e]),
        n
    );
}
let f = (function (e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
})({}, s.nl);
function m(e, n, t) {
    let [r, u] = l.useState(null),
        [c, d] = l.useState(null),
        [m, h] = l.useState(1),
        { setMaxVolume: g } = (0, i.p)(),
        p = l.useCallback(
            (e, n) => {
                var l;
                d(null),
                    ((l = n.offsetWidth),
                    new Promise((n) => {
                        let r = (0, a.Z)(),
                            i = (e) => {
                                let {
                                    data: { waveform: t, id: l, normalizedVolumeMultipler: a }
                                } = e;
                                r === l && (n(t), h(a)), null == o || o.removeEventListener('message', i);
                            };
                        null == o || o.addEventListener('message', i),
                            null == o ||
                                o.postMessage({
                                    id: r,
                                    options: t,
                                    config: f,
                                    width: l,
                                    rawBufferData: e
                                });
                    })).then(d);
            },
            [t]
        );
    return (
        l.useEffect(() => {
            if (null == e || null == n) return;
            let l = (0, s.V3)(e, t);
            r !== l && (u(l), p(e, n));
        }, [e, p, n, t, r]),
        l.useEffect(() => {
            g(m);
        }, [m, g]),
        c
    );
}
