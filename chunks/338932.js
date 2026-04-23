"use strict";
n.d(t, { T: () => o });
var r = n(64700),
    i = n(311907),
    s = n(775602),
    a = n(531685);
let o = (e, t) => {
    let n = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        o = (0, i.bG)([a.A], () => a.A.isFocused()),
        [l, u] = r.useState(!1),
        c = r.useRef(null);
    return (
        r.useEffect(() => {
            null !== c.current && (clearTimeout(c.current), (c.current = null));
            let r = o && (e || (!n && !t));
            r && n
                ? (c.current = window.setTimeout(() => {
                      u(!0);
                  }, 1e3))
                : u(r);
        }, [o, e, n, t]),
        r.useEffect(
            () => () => {
                null !== c.current && (clearTimeout(c.current), (c.current = null));
            },
            [],
        ),
        { canAnimate: l }
    );
};
