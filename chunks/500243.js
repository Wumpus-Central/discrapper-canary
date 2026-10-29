r.d(t, { P: () => o });
var n = r(582128);
let i = "u" > typeof document ? (n.useInsertionEffect ?? n.useLayoutEffect) : () => {};
function o(e, t, r) {
    let [o, a] = (0, n.useState)(e || t),
        s = (0, n.useRef)(o),
        l = (0, n.useRef)(void 0 !== e),
        u = void 0 !== e;
    (0, n.useEffect)(() => {
        (l.current, (l.current = u));
    }, [u]);
    let c = u ? e : o;
    i(() => {
        s.current = c;
    });
    let [, f] = (0, n.useReducer)(() => ({}), {});
    return [
        c,
        (0, n.useCallback)(
            function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                let o = "function" == typeof e ? e(s.current) : e;
                Object.is(s.current, o) || ((s.current = o), a(o), f(), r?.(o, ...n));
            },
            [r],
        ),
    ];
}
