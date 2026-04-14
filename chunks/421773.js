"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(451988);
function s(e, t) {
    let [n, s] = r.useState(!1),
        a = r.useRef(new i.J_(t, () => s(!1))),
        o = r.useRef(new i.J_(e, () => s(!0))),
        l = r.useCallback(() => {
            a.current.cancel(), o.current.cancel();
        }, []);
    r.useEffect(() => l, [l]);
    let u = r.useCallback(() => {
        l(), a.current.delay();
    }, [l]);
    return {
        isHovered: n,
        setIsHovered: s,
        onMouseEnter: r.useCallback(() => {
            l(), o.current.delay();
        }, [l]),
        onMouseLeave: u,
        cancelTimers: l,
    };
}
