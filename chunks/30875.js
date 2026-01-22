n.d(t, {
    $t: () => m,
    AX: () => d,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(65821);
var l = n(64700),
    i = n(835245),
    a = n(602674),
    r = n(236972),
    s = n(335416);
let u = new Worker(new URL("/assets/" + n.u("58777"), n.b)),
    o = (0, a.v)();
async function c(e) {
    if (null == o) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    return (await o.decodeAudioData(t)).getChannelData(0);
}

function d(e) {
    let [t, n] = l.useState(null),
        [i, a] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == e) return;
            let t = (0, s.Ux)(e);
            t !== i && (a(t), n(null), c(e).then(n));
        }, [i, e]),
        t
    );
}
let f = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
})({}, s.Jh);

function m(e, t, n) {
    let [a, o] = l.useState(null),
        [c, d] = l.useState(null),
        [m, g] = l.useState(1),
        { setMaxVolume: h } = (0, r.L)(),
        v = l.useCallback(
            (e, t) => {
                var l;
                d(null),
                    ((l = t.offsetWidth),
                    new Promise((t) => {
                        let a = (0, i.A)(),
                            r = (e) => {
                                let {
                                    data: { waveform: n, id: l, normalizedVolumeMultipler: i },
                                } = e;
                                a === l && (t(n), g(i)), null == u || u.removeEventListener("message", r);
                            };
                        null == u || u.addEventListener("message", r),
                            null == u ||
                                u.postMessage({
                                    id: a,
                                    options: n,
                                    config: f,
                                    width: l,
                                    rawBufferData: e,
                                });
                    })).then(d);
            },
            [n],
        );
    return (
        l.useEffect(() => {
            if (null == e || null == t) return;
            let l = (0, s.HL)(e, n);
            a !== l && (o(l), v(e, t));
        }, [e, v, t, n, a]),
        l.useEffect(() => {
            h(m);
        }, [m, h]),
        c
    );
}
