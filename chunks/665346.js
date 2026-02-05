"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    s = n(311907),
    l = n(775602),
    r = n(555337);
function a(e, t) {
    let [n, a] = i.useState(!1),
        o = (0, s.bG)([r.A], () => r.A.getProps().subsection),
        d = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    i.useEffect(() => {
        n || (null !== e.current && o === t && (a(!0), e.current.scrollIntoView({ behavior: d ? "auto" : "smooth" })));
    }, [n, o, t, d, e]);
}
