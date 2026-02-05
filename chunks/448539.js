"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(340287);
let a = Object.freeze({ box: "border-box" });
function s(e) {
    let { ref: t, onUpdate: n, resizeObserver: s, listenerMap: o, key: l } = e;
    (0, r.useLayoutEffect)(() => {
        let e = (e) => {
                (0, i.flushSync)(() => {
                    n(e, l);
                });
            },
            { current: r } = t;
        return (
            null != r && (o.set(r, e), s.observe(r, a)),
            () => {
                null != r && (s.unobserve(r), o.delete(r));
            }
        );
    }, [n, s, t, o, l]);
}
