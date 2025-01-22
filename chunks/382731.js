r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(995295);
let o = Object.freeze({ box: 'border-box' });
function s(e) {
    let { ref: n, onUpdate: r, resizeObserver: s, listenerMap: l, key: u } = e;
    (0, i.useLayoutEffect)(() => {
        let e = (e) => {
                (0, a.flushSync)(() => {
                    r(e, u);
                });
            },
            { current: i } = n;
        return (
            null != i && (l.set(i, e), s.observe(i, o)),
            () => {
                null != i && (s.unobserve(i), l.delete(i));
            }
        );
    }, [r, s, n, l, u]);
}
