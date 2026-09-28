n.d(t, { T: () => u });
var r = n(582128),
    a = n(17928),
    l = n(775602),
    i = n(531685);
let u = (e, t) => {
    let n = (0, a.bG)([l.Ay], () => l.Ay.useReducedMotion),
        u = (0, a.bG)([i.A], () => i.A.isFocused()),
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
};
