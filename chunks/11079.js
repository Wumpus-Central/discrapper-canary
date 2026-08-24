"use strict";
r.d(t, { A: () => i });
var n = r(582128);
function i() {
    let e = (0, n.useRef)(new Map()),
        t = (0, n.useCallback)((t, r, n, i) => {
            let o = (null == i ? void 0 : i.once)
                ? (...t) => {
                      e.current.delete(n), n(...t);
                  }
                : n;
            e.current.set(n, { type: r, eventTarget: t, fn: o, options: i }), t.addEventListener(r, o, i);
        }, []),
        r = (0, n.useCallback)((t, r, n, i) => {
            var o;
            let a = (null == (o = e.current.get(n)) ? void 0 : o.fn) || n;
            t.removeEventListener(r, a, i), e.current.delete(n);
        }, []),
        i = (0, n.useCallback)(() => {
            e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options);
            });
        }, [r]);
    return (
        (0, n.useEffect)(() => i, [i]), { addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: i }
    );
}
