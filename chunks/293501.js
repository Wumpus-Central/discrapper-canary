t.d(n, {
    NN: () => m,
    b1: () => d,
}),
    t(190126),
    t(368063),
    t(65234),
    t(111804),
    t(490233),
    t(97749),
    t(388685),
    t(415506);
var l = t(473749),
    a = t(772848),
    i = t(839514),
    r = t(586826),
    s = t(943351);
let o = new Worker(new URL("/assets/" + t.u("14315"), t.b)),
    u = (0, i.N)();
async function c(e) {
    if (null == u) throw Error("Failed to create audio context");
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
let f = (function (e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
})({}, s.nl);
function m(e, n, t) {
    let [i, u] = l.useState(null),
        [c, d] = l.useState(null),
        [m, g] = l.useState(1),
        { setMaxVolume: h } = (0, r.p)(),
        v = l.useCallback(
            (e, n) => {
                var l;
                d(null),
                    ((l = n.offsetWidth),
                    new Promise((n) => {
                        let i = (0, a.Z)(),
                            r = (e) => {
                                let {
                                    data: { waveform: t, id: l, normalizedVolumeMultipler: a },
                                } = e;
                                i === l && (n(t), g(a)), null == o || o.removeEventListener("message", r);
                            };
                        null == o || o.addEventListener("message", r),
                            null == o ||
                                o.postMessage({
                                    id: i,
                                    options: t,
                                    config: f,
                                    width: l,
                                    rawBufferData: e,
                                });
                    })).then(d);
            },
            [t],
        );
    return (
        l.useEffect(() => {
            if (null == e || null == n) return;
            let l = (0, s.V3)(e, t);
            i !== l && (u(l), v(e, n));
        }, [e, v, n, t, i]),
        l.useEffect(() => {
            h(m);
        }, [m, h]),
        c
    );
}
