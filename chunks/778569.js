n.d(t, { Z: () => a }), n(47120);
var l = n(192379),
    i = n(81063);
let r = ['embedded_cover', 'embedded_background'];
function a(e) {
    let { applicationId: t, size: n, names: a = r } = e,
        [s, o] = l.useState(null),
        [c, u] = l.useState(!0),
        d = (0, i.getAssetImage)(t, s, n),
        m = l.useRef(a);
    return (
        l.useEffect(() => {
            m.current = a;
        }),
        l.useEffect(() => {
            let { current: e } = m;
            null != t &&
                (0, i.getAssets)(t).then((t) => {
                    for (let [n, l] of (u(!1), Object.entries(t)))
                        if (null != l && '' !== l.id && e.includes(l.name)) {
                            o(l.id);
                            return;
                        }
                });
        }, [t]),
        {
            url: d,
            state: c ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
