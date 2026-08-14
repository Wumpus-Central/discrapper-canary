"use strict";
n.d(t, { A: () => o });
var i = n(477900),
    r = n(582128),
    a = n(333007),
    s = n(649248);
function l(e) {
    return s.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: n, className: o, overlay: d } = e,
        c = r.useRef(null);
    r.useLayoutEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                s.A.registerFrameTarget(t, e, n),
                () => {
                    s.A.removeFrameTarget(t, e);
                }
            );
    }, [t, n]);
    let u = r.useSyncExternalStore(l, () => s.A.getPoolEntry(t)?.overlay ?? null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: c, className: o, style: { pointerEvents: "none" } }),
            null != d && null != u ? (0, a.createPortal)(d, u) : null,
        ],
    });
}
