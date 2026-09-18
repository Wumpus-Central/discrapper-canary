a.d(t, { A: () => d });
var s = a(477900),
    l = a(582128),
    n = a(333007),
    o = a(649248);
function r(e) {
    return o.A.subscribeEntries(e);
}
function d(e) {
    let { frameId: t, level: a, className: d, overlay: i } = e,
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
            (0, s.jsx)("div", { ref: c, className: d, style: { pointerEvents: "none" } }),
            null != i && null != u ? (0, n.createPortal)(i, u) : null,
        ],
    });
}
