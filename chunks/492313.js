n.d(t, { P: () => i });
var r = n(64700);
function i(e, t, n) {
    let [i, a] = (0, r.useState)(e || t),
        s = (0, r.useRef)(void 0 !== e),
        o = void 0 !== e;
    (0, r.useEffect)(() => {
        s.current, (s.current = o);
    }, [o]);
    let l = o ? e : i,
        c = (0, r.useCallback)(
            (e, ...t) => {
                let r = (e, ...t) => {
                    n && !Object.is(l, e) && n(e, ...t), o || (l = e);
                };
                "function" == typeof e
                    ? a((n, ...i) => {
                          let a = e(o ? l : n, ...i);
                          return (r(a, ...t), o) ? n : a;
                      })
                    : (o || a(e), r(e, ...t));
            },
            [o, l, n],
        );
    return [l, c];
}
