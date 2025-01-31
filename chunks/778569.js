t.d(e, { Z: () => i }), t(47120);
var o = t(192379),
    a = t(81063);
let r = ['embedded_cover', 'embedded_background'];
function i(n) {
    let { applicationId: e, size: t, names: i = r } = n,
        [c, _] = o.useState(null),
        [d, l] = o.useState(!0),
        s = (0, a.getAssetImage)(e, c, t),
        p = o.useRef(i);
    return (
        o.useEffect(() => {
            p.current = i;
        }),
        o.useEffect(() => {
            let { current: n } = p;
            null != e &&
                (0, a.getAssets)(e).then((e) => {
                    for (let [t, o] of (l(!1), Object.entries(e)))
                        if (null != o && '' !== o.id && n.includes(o.name)) {
                            _(o.id);
                            return;
                        }
                });
        }, [e]),
        {
            url: s,
            state: d ? 'loading' : null != s ? 'fetched' : 'not-found'
        }
    );
}
