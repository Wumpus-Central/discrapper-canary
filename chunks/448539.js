"use strict";
n.d(t, { A: () => l, F: () => a });
var i = n(64700),
    r = n(340287);
let a = { observe() {}, unobserve() {} },
    s = Object.freeze({ box: "border-box" });
function l(e) {
    let { ref: t, onUpdate: n, resizeObserver: a, listenerMap: l, key: o } = e;
    (0, i.useLayoutEffect)(() => {
        let { current: e } = t;
        return (
            null != e &&
                (l.set(e, (e) => {
                    (0, r.flushSync)(() => {
                        n(e, o);
                    });
                }),
                a.observe(e, s)),
            () => {
                null != e && (a.unobserve(e), l.delete(e));
            }
        );
    }, [n, a, t, l, o]);
}
