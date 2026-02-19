"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(451988);
function l(e, t) {
    let [n, l] = i.useState(!1),
        r = i.useRef(new s.J_(t, () => l(!1))),
        a = i.useRef(new s.J_(e, () => l(!0))),
        o = i.useCallback(() => {
            r.current.cancel(), a.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let c = i.useCallback(() => {
        o(), r.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: l,
        onMouseEnter: i.useCallback(() => {
            o(), a.current.delay();
        }, [o]),
        onMouseLeave: c,
        cancelTimers: o,
    };
}
