n.d(t, { T: () => o });
var a = n(64700),
    r = n(311907),
    l = n(775602),
    i = n(531685);
let o = (e, t) => {
    let n = (0, r.bG)([l.A], () => l.A.useReducedMotion),
        o = (0, r.bG)([i.A], () => i.A.isFocused()),
        [s, c] = a.useState(!1),
        u = a.useRef(null);
    return (
        a.useEffect(() => {
            null !== u.current && (clearTimeout(u.current), (u.current = null));
            let a = o && (e || (!n && !t));
            a && n
                ? (u.current = window.setTimeout(() => {
                      c(!0);
                  }, 1e3))
                : c(a);
        }, [o, e, n, t]),
        a.useEffect(
            () => () => {
                null !== u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        { canAnimate: s }
    );
};
