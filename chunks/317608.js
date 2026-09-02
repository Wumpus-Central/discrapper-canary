a.d(t, { A: () => o });
var l = a(477900),
    r = a(582128),
    s = a(333007),
    i = a(649248);
function n(e) {
    return i.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: a, className: o, overlay: d } = e,
        c = r.useRef(null);
    r.useLayoutEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                i.A.registerFrameTarget(t, e, a),
                () => {
                    i.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let u = r.useSyncExternalStore(n, () => i.A.getPoolEntry(t)?.overlay ?? null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: c, className: o, style: { pointerEvents: "none" } }),
            null != d && null != u ? (0, s.createPortal)(d, u) : null,
        ],
    });
}
