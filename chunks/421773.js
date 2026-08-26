"use strict";
n.d(t, { A: () => a });
var i = n(582128),
    r = n(451988);
function a(e, t) {
    let [n, a] = i.useState(!1),
        s = i.useRef(new r.J_(t, () => a(!1))),
        l = i.useRef(new r.J_(e, () => a(!0))),
        o = i.useCallback(() => {
            s.current.cancel(), l.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let d = i.useCallback(() => {
        o(), s.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: a,
        onMouseEnter: i.useCallback(() => {
            o(), l.current.delay();
        }, [o]),
        onMouseLeave: d,
        cancelTimers: o,
    };
}
