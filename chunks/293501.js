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
var a = t(647438),
    l = t(772848),
    r = t(304809),
    i = t(586826),
    o = t(943351);
let s = new Worker(new URL("/assets/" + t.u("14315"), t.b)),
    u = (0, r.N)();
async function c(e) {
    if (null == u) throw Error("Failed to create audio context");
    let n = await e.arrayBuffer();
    return (await u.decodeAudioData(n)).getChannelData(0);
}
function d(e) {
    let [n, t] = a.useState(null),
        [l, r] = a.useState(null);
    return (
        a.useEffect(() => {
            if (null == e) return;
            let n = (0, o.hp)(e);
            n !== l && (r(n), t(null), c(e).then(t));
        }, [l, e]),
        n
    );
}
let f = (function (e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
            });
    }
    return e;
})({}, o.nl);
function m(e, n, t) {
    let [r, u] = a.useState(null),
        [c, d] = a.useState(null),
        [m, g] = a.useState(1),
        { setMaxVolume: h } = (0, i.p)(),
        p = a.useCallback(
            (e, n) => {
                var a;
                d(null),
                    ((a = n.offsetWidth),
                    new Promise((n) => {
                        let r = (0, l.Z)(),
                            i = (e) => {
                                let {
                                    data: { waveform: t, id: a, normalizedVolumeMultipler: l },
                                } = e;
                                r === a && (n(t), g(l)), null == s || s.removeEventListener("message", i);
                            };
                        null == s || s.addEventListener("message", i),
                            null == s ||
                                s.postMessage({
                                    id: r,
                                    options: t,
                                    config: f,
                                    width: a,
                                    rawBufferData: e,
                                });
                    })).then(d);
            },
            [t],
        );
    return (
        a.useEffect(() => {
            if (null == e || null == n) return;
            let a = (0, o.V3)(e, t);
            r !== a && (u(a), p(e, n));
        }, [e, p, n, t, r]),
        a.useEffect(() => {
            h(m);
        }, [m, h]),
        c
    );
}
