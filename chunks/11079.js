"use strict";
r.d(t, { A: () => o });
var n = r(582128);
function o() {
    let e = (0, n.useRef)(new Map()),
        t = (0, n.useCallback)((t, r, n, o) => {
            let i = (null == o ? void 0 : o.once)
                ? (...t) => {
                      e.current.delete(n), n(...t);
                  }
                : n;
            e.current.set(n, { type: r, eventTarget: t, fn: i, options: o }), t.addEventListener(r, i, o);
        }, []),
        r = (0, n.useCallback)((t, r, n, o) => {
            var i;
            let a = (null == (i = e.current.get(n)) ? void 0 : i.fn) || n;
            t.removeEventListener(r, a, o), e.current.delete(n);
        }, []),
        o = (0, n.useCallback)(() => {
            e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options);
            });
        }, [r]);
    return (
        (0, n.useEffect)(() => o, [o]), { addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: o }
    );
}
