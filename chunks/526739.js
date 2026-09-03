r.d(t, { P: () => o });
var n = r(582128);
let i = "u" > typeof document ? (n.useInsertionEffect ?? n.useLayoutEffect) : () => {};
function o(e, t, r) {
    let [o, a] = (0, n.useState)(e || t),
        s = (0, n.useRef)(o),
        l = (0, n.useRef)(void 0 !== e),
        u = void 0 !== e;
    (0, n.useEffect)(() => {
        l.current, (l.current = u);
    }, [u]);
    let c = u ? e : o;
    i(() => {
        s.current = c;
    });
    let [, f] = (0, n.useReducer)(() => ({}), {});
    return [
        c,
        (0, n.useCallback)(
            (e, ...t) => {
                let n = "function" == typeof e ? e(s.current) : e;
                Object.is(s.current, n) || ((s.current = n), a(n), f(), r?.(n, ...t));
            },
            [r],
        ),
    ];
}
