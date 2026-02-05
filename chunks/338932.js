"use strict";
n.d(t, { T: () => l });
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(531685);
let o = 1e3,
    l = (e, t) => {
        let n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
            l = (0, i.bG)([s.A], () => s.A.isFocused()),
            [u, c] = r.useState(!1),
            d = r.useRef(null);
        return (
            r.useEffect(() => {
                null !== d.current && (clearTimeout(d.current), (d.current = null));
                let r = !n && !t,
                    i = l && (e || r);
                i && n
                    ? (d.current = window.setTimeout(() => {
                          c(!0);
                      }, o))
                    : c(i);
            }, [l, e, n, t]),
            r.useEffect(
                () => () => {
                    null !== d.current && (clearTimeout(d.current), (d.current = null));
                },
                [],
            ),
            { canAnimate: u }
        );
    };
