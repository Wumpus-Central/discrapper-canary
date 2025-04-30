r.d(e, { x: () => i });
var n = r(192379);
function i() {
    let t = (0, n.useRef)(new Map()),
        e = (0, n.useCallback)((e, r, n, i) => {
            let o = (null == i ? void 0 : i.once)
                ? (...e) => {
                      t.current.delete(n), n(...e);
                  }
                : n;
            t.current.set(n, {
                type: r,
                eventTarget: e,
                fn: o,
                options: i
            }),
                e.addEventListener(r, o, i);
        }, []),
        r = (0, n.useCallback)((e, r, n, i) => {
            var o;
            let a = (null == (o = t.current.get(n)) ? void 0 : o.fn) || n;
            e.removeEventListener(r, a, i), t.current.delete(n);
        }, []),
        i = (0, n.useCallback)(() => {
            t.current.forEach((t, e) => {
                r(t.eventTarget, t.type, e, t.options);
            });
        }, [r]);
    return (
        (0, n.useEffect)(() => i, [i]),
        {
            addGlobalListener: e,
            removeGlobalListener: r,
            removeAllGlobalListeners: i
        }
    );
}
