t.d(n, { Z: () => a }), t(47120);
var o = t(192379),
    r = t(81063);
let c = ['embedded_cover', 'embedded_background'];
function a(e) {
    let { applicationId: n, size: t, names: a = c } = e,
        [i, l] = o.useState(null),
        [_, d] = o.useState(!0),
        s = (0, r.getAssetImage)(n, i, t),
        p = o.useRef(a);
    return (
        o.useEffect(() => {
            p.current = a;
        }),
        o.useEffect(() => {
            let { current: e } = p;
            null != n &&
                (0, r.getAssets)(n).then((n) => {
                    for (let [t, o] of (d(!1), Object.entries(n)))
                        if (null != o && '' !== o.id && e.includes(o.name)) {
                            l(o.id);
                            return;
                        }
                });
        }, [n]),
        {
            url: s,
            state: _ ? 'loading' : null != s ? 'fetched' : 'not-found'
        }
    );
}
