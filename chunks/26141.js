n.d(t, { Z: () => i }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(115092);
function i(e) {
    let { sources: t, interval: n, isPaused: i, onLoopEnd: a, className: c, imageRef: l } = e,
        [u, d] = (0, s.useState)(0);
    return (
        (0, s.useEffect)(() => {
            d(0);
        }, [t]),
        (0, o.Z)({
            onInterval: () => {
                u === t.length - 1 ? (null == a || a(), d(0)) : d(u + 1);
            },
            interval: n,
            isPaused: i
        }),
        (0, r.jsx)(
            'img',
            {
                ref: l,
                className: c,
                src: t[u],
                alt: ''
            },
            '1'
        )
    );
}
