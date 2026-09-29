a.d(t, { A: () => o });
var s = a(477900),
    l = a(582128),
    n = a(333007),
    r = a(649248);
function i(e) {
    return r.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: a, className: o, overlay: d } = e,
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
    let c = l.useSyncExternalStore(i, () => r.A.getPoolEntry(t)?.overlay ?? null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { ref: u, className: o, style: { pointerEvents: "none" } }),
            null != d && null != c ? (0, n.createPortal)(d, c) : null,
        ],
    });
}
