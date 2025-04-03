n.d(t, { Z: () => a }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(115092);
function a(e) {
    let { sources: t, interval: n, isPaused: a, onLoopEnd: i, className: c, imageRef: l } = e,
        [u, d] = (0, s.useState)(0);
    return (
        (0, s.useEffect)(() => {
            d(0);
        }, [t]),
        (0, o.Z)({
            onInterval: () => {
                u === t.length - 1 ? (null == i || i(), d(0)) : d(u + 1);
            },
            interval: n,
            isPaused: a
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
