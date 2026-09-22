a.d(t, { A: () => i });
var s = a(477900),
    l = a(582128),
    n = a(333007),
    o = a(649248);
function r(e) {
    return o.A.subscribeEntries(e);
}
function i(e) {
    let { frameId: t, level: a, className: i, overlay: d } = e,
        c = l.useRef(null);
    l.useLayoutEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                o.A.registerFrameTarget(t, e, a),
                () => {
                    o.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let u = l.useSyncExternalStore(r, () => o.A.getPoolEntry(t)?.overlay ?? null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { ref: c, className: i, style: { pointerEvents: "none" } }),
            null != d && null != u ? (0, n.createPortal)(d, u) : null,
        ],
    });
}
