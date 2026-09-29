a.d(t, { A: () => i });
var s = a(477900),
    l = a(582128),
    n = a(333007),
    r = a(649248);
function o(e) {
    return r.A.subscribeEntries(e);
}
function i(e) {
    let { frameId: t, level: a, className: i, overlay: d } = e,
        u = l.useRef(null);
    l.useLayoutEffect(() => {
        let e = u.current;
        if (null != e)
            return (
                r.A.registerFrameTarget(t, e, a),
                () => {
                    r.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let c = l.useSyncExternalStore(o, () => r.A.getPoolEntry(t)?.overlay ?? null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { ref: u, className: i, style: { pointerEvents: "none" } }),
            null != d && null != c ? (0, n.createPortal)(d, c) : null,
        ],
    });
}
