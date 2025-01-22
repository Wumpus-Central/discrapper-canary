n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    r = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function a(e) {
    let { applicationId: t, size: n, names: a = l } = e,
        [o, s] = i.useState(null),
        [c, u] = i.useState(!0),
        d = (0, r.getAssetImage)(t, o, n),
        m = i.useRef(a);
    return (
        i.useEffect(() => {
            m.current = a;
        }),
        i.useEffect(() => {
            let { current: e } = m;
            null != t &&
                (0, r.getAssets)(t).then((t) => {
                    for (let [n, i] of (u(!1), Object.entries(t)))
                        if (null != i && '' !== i.id && e.includes(i.name)) {
                            s(i.id);
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
