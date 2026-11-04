var r = n(582128),
    a = n(855986),
    i = n(775602),
    l = n(531685);
n.d(
    t,
    {},
    {
        T: (e, t) => {
            let n = (0, a.bG)([i.Ay], () => i.Ay.useReducedMotion),
                u = (0, a.bG)([l.A], () => l.A.isFocused()),
                [o, s] = r.useState(!1),
                A = r.useRef(null);
            return (
                r.useEffect(() => {
                    null !== A.current && (clearTimeout(A.current), (A.current = null));
                    let r = u && (e || (!n && !t));
                    r && n
                        ? (A.current = window.setTimeout(() => {
                              s(!0);
                          }, 1e3))
                        : s(r);
                }, [u, e, n, t]),
                r.useEffect(
                    () => () => {
                        null !== A.current && (clearTimeout(A.current), (A.current = null));
                    },
                    [],
                ),
                { canAnimate: o }
            );
        },
    },
);
