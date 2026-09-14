a.d(t, { A: () => o });
var l = a(477900),
    r = a(582128),
    s = a(333007),
    n = a(649248);
function i(e) {
    return n.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: a, className: o, overlay: d } = e,
        u = r.useRef(null);
    r.useLayoutEffect(() => {
        let e = u.current;
        if (null != e)
            return (
                n.A.registerFrameTarget(t, e, a),
                () => {
                    n.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let c = r.useSyncExternalStore(i, () => n.A.getPoolEntry(t)?.overlay ?? null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: u, className: o, style: { pointerEvents: "none" } }),
            null != d && null != c ? (0, s.createPortal)(d, c) : null,
        ],
    });
}
