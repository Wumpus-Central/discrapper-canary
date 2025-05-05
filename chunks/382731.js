n.d(t, { Z: () => o });
var r = n(73800),
    i = n(867309);
let a = Object.freeze({ box: 'border-box' });
function o(e) {
    let { ref: t, onUpdate: n, resizeObserver: o, listenerMap: s, key: l } = e;
    (0, r.useLayoutEffect)(() => {
        let e = (e) => {
                (0, i.flushSync)(() => {
                    n(e, l);
                });
            },
            { current: r } = t;
        return (
            null != r && (s.set(r, e), o.observe(r, a)),
            () => {
                null != r && (o.unobserve(r), s.delete(r));
            }
        );
    }, [n, o, t, s, l]);
}
