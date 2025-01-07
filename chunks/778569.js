n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(81063);
let a = ['embedded_cover', 'embedded_background'];
function o(e) {
    let { applicationId: t, size: n, names: o = a } = e,
        [s, l] = i.useState(null),
        [c, u] = i.useState(!0),
        d = (0, r.getAssetImage)(t, s, n),
        p = i.useRef(o);
    return (
        i.useEffect(() => {
            p.current = o;
        }),
        i.useEffect(() => {
            let { current: e } = p;
            (0, r.getAssets)(t).then((t) => {
                for (let [n, i] of (u(!1), Object.entries(t)))
                    if (null != i && '' !== i.id && e.includes(i.name)) {
                        l(i.id);
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
