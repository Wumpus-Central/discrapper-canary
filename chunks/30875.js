l.d(t, { $t: () => f, AX: () => c }), l(323874), l(14289), l(35956);
var n = l(64700),
    a = l(835245),
    i = l(602674),
    s = l(236972),
    r = l(335416);
let u = new Worker(new URL("/assets/" + l.u("58777"), l.b)),
    o = (0, i.v)();
async function d(e) {
    if (null == o) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    return (await o.decodeAudioData(t)).getChannelData(0);
}
function c(e) {
    let [t, l] = n.useState(null),
        [a, i] = n.useState(null);
    return (
        n.useEffect(() => {
            if (null == e) return;
            let t = (0, r.Ux)(e);
            t !== a && (i(t), l(null), d(e).then(l));
        }, [a, e]),
        t
    );
}
let m = { ...r.Jh };
function f(e, t, l) {
    let [i, o] = n.useState(null),
        [d, c] = n.useState(null),
        [f, h] = n.useState(1),
        { setMaxVolume: g } = (0, s.L)(),
        x = n.useCallback(
            (e, t) => {
                var n;
                c(null),
                    ((n = t.offsetWidth),
                    new Promise((t) => {
                        let i = (0, a.A)(),
                            s = (e) => {
                                let {
                                    data: { waveform: l, id: n, normalizedVolumeMultipler: a },
                                } = e;
                                i === n && (t(l), h(a)), u?.removeEventListener("message", s);
                            };
                        u?.addEventListener("message", s),
                            u?.postMessage({ id: i, options: l, config: m, width: n, rawBufferData: e });
                    })).then(c);
            },
            [l],
        );
    return (
        n.useEffect(() => {
            if (null == e || null == t) return;
            let n = (0, r.HL)(e, l);
            i !== n && (o(n), x(e, t));
        }, [e, x, t, l, i]),
        n.useEffect(() => {
            g(f);
        }, [f, g]),
        d
    );
}
