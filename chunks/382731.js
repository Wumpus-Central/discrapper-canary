n.d(t, { Z: () => s });
var i = n(192379),
    r = n(995295);
let a = Object.freeze({ box: 'border-box' });
function s(e) {
    let { ref: t, onUpdate: n, resizeObserver: s, listenerMap: o, key: l } = e;
    (0, i.useLayoutEffect)(() => {
        let e = (e) => {
                (0, r.flushSync)(() => {
                    n(e, l);
                });
            },
            { current: i } = t;
        return (
            null != i && (o.set(i, e), s.observe(i, a)),
            () => {
                null != i && (s.unobserve(i), o.delete(i));
            }
        );
    }, [n, s, t, o, l]);
}
