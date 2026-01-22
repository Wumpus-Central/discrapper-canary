n.d(t, { T: () => l }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(531685);
let o = 1000,
    l = (e, t) => {
        let n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
            l = (0, i.bG)([s.A], () => s.A.isFocused()),
            [c, u] = r.useState(!1),
            d = r.useRef(null);
        return (
            r.useEffect(() => {
                clearTimeout(d.current), (d.current = null);
                let r = !n && !t,
                    i = l && (e || r);
                i && n
                    ? (d.current = window.setTimeout(() => {
                          u(!0);
                      }, o))
                    : u(i);
            }, [l, e, n, t]),
            r.useEffect(() => () => clearTimeout(d.current), []),
            { canAnimate: c }
        );
    };
