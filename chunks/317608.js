i.d(t, { A: () => o });
var n = i(477900),
    s = i(582128),
    a = i(333007),
    l = i(649248);
function r(e) {
    return l.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: i, className: o, overlay: d } = e,
        c = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = c.current;
        if (null != e)
            return (
                l.A.registerFrameTarget(t, e, i),
                () => {
                    l.A.removeFrameTarget(t, e);
                }
            );
    }, [t, i]);
    let u = s.useSyncExternalStore(r, () => l.A.getPoolEntry(t)?.overlay ?? null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { ref: c, className: o, style: { pointerEvents: "none" } }),
            null != d && null != u ? (0, a.createPortal)(d, u) : null,
        ],
    });
}
