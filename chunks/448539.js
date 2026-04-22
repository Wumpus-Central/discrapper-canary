"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(340287);
let s = Object.freeze({ box: "border-box" });
function a(e) {
    let { ref: t, onUpdate: n, resizeObserver: a, listenerMap: o, key: l } = e;
    (0, r.useLayoutEffect)(() => {
        let { current: e } = t;
        return (
            null != e &&
                (o.set(e, (e) => {
                    (0, i.flushSync)(() => {
                        n(e, l);
                    });
                }),
                a.observe(e, s)),
            () => {
                null != e && (a.unobserve(e), o.delete(e));
            }
        );
    }, [n, a, t, o, l]);
}
