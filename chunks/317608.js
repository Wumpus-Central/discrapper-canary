a.d(t, { A: () => i });
var l = a(477900),
    r = a(582128),
    s = a(333007),
    o = a(649248);
function n(e) {
    return o.A.subscribeEntries(e);
}
function i(e) {
    let { frameId: t, level: a, className: i, overlay: d } = e,
        c = r.useRef(null);
    r.useLayoutEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                o.A.registerFrameTarget(t, e, a),
                () => {
                    o.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let u = r.useSyncExternalStore(n, () => o.A.getPoolEntry(t)?.overlay ?? null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: c, className: i, style: { pointerEvents: "none" } }),
            null != d && null != u ? (0, s.createPortal)(d, u) : null,
        ],
    });
}
