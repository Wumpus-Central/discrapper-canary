n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(81063);
let u = ['embedded_cover', 'embedded_background'];
function l(e) {
    let { applicationId: t, size: n, names: l = u } = e,
        [o, s] = r.useState(null),
        [a, c] = r.useState(!0),
        d = (0, i.getAssetImage)(t, o, n),
        E = r.useRef(l);
    return (
        r.useEffect(() => {
            E.current = l;
        }),
        r.useEffect(() => {
            let { current: e } = E;
            (0, i.getAssets)(t).then((t) => {
                for (let [n, r] of (c(!1), Object.entries(t)))
                    if (null != r && '' !== r.id && e.includes(r.name)) {
                        s(r.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: d,
            state: a ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
