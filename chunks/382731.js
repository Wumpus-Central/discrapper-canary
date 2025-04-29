n.d(t, { Z: () => a });
var r = n(73800),
    i = n(867309);
let o = Object.freeze({ box: 'border-box' });
function a(e) {
    let { ref: t, onUpdate: n, resizeObserver: a, listenerMap: s, key: l } = e;
    (0, r.useLayoutEffect)(() => {
        let e = (e) => {
                (0, i.flushSync)(() => {
                    n(e, l);
                });
            },
            { current: r } = t;
        return (
            null != r && (s.set(r, e), a.observe(r, o)),
            () => {
                null != r && (a.unobserve(r), s.delete(r));
            }
        );
    }, [n, a, t, s, l]);
}
