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
        d = (0, r.getAssetImage)(t, s, n);
    return (
        i.useEffect(() => {
            (0, r.getAssets)(t).then((e) => {
                for (let [t, n] of (u(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && o.includes(n.name)) {
                        l(n.id);
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
