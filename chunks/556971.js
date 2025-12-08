n.d(t, { b: () => i }), n(388685);
var r = n(473749);
function i(e) {
    let { slideCount: t, intervalMs: n = 3000 } = e,
        [i, l] = (0, r.useState)(0),
        [a, o] = (0, r.useState)(!1),
        s = (0, r.useCallback)(
            (e) => {
                a ||
                    e < 0 ||
                    e >= t ||
                    (o(!0),
                    setTimeout(() => {
                        l(e), o(!1);
                    }, 300));
            },
            [a, t, 300],
        );
    return (
        (0, r.useEffect)(() => {
            if (t <= 1) return;
            let e = setInterval(() => {
                s((i + 1) % t);
            }, n);
            return () => clearInterval(e);
        }, [t, n, i, s]),
        {
            activeSlide: i,
            isTransitioning: a,
        }
    );
}
