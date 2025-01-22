n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(192379),
    i = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function a(e) {
    let { applicationId: t, size: n, names: a = l } = e,
        [u, o] = r.useState(null),
        [s, c] = r.useState(!0),
        d = (0, i.getAssetImage)(t, u, n),
        f = r.useRef(a);
    return (
        r.useEffect(() => {
            f.current = a;
        }),
        r.useEffect(() => {
            let { current: e } = f;
            null != t &&
                (0, i.getAssets)(t).then((t) => {
                    for (let [n, r] of (c(!1), Object.entries(t)))
                        if (null != r && '' !== r.id && e.includes(r.name)) {
                            o(r.id);
                            return;
                        }
                });
        }, [t]),
        {
            url: d,
            state: s ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
