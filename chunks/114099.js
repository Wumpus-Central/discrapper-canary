n.d(t, { A: () => i });
var r = n(64700);
function i() {
    let e = (0, r.useRef)(new Map()),
        t = (0, r.useCallback)((t, n, r, i) => {
            let a = (null == i ? void 0 : i.once)
                ? (...t) => {
                      e.current.delete(r), r(...t);
                  }
                : r;
            e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: a,
                options: i,
            }),
                t.addEventListener(n, a, i);
        }, []),
        n = (0, r.useCallback)((t, n, r, i) => {
            var a;
            let s = (null == (a = e.current.get(r)) ? void 0 : a.fn) || r;
            t.removeEventListener(n, s, i), e.current.delete(r);
        }, []),
        i = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options);
            });
        }, [n]);
    return (
        (0, r.useEffect)(() => i, [i]),
        {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: i,
        }
    );
}
