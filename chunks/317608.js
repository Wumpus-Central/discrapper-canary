l.d(t, { A: () => o });
var n = l(477900),
    a = l(582128),
    i = l(333007),
    s = l(649248);
function r(e) {
    return s.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: l, className: o, overlay: c } = e,
        d = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = d.current;
        if (null != e)
            return (
                s.A.registerFrameTarget(t, e, l),
                () => {
                    s.A.removeFrameTarget(t, e);
                }
            );
    }, [t, l]);
    let u = a.useSyncExternalStore(r, () => s.A.getPoolEntry(t)?.overlay ?? null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { ref: d, className: o, style: { pointerEvents: "none" } }),
            null != c && null != u ? (0, i.createPortal)(c, u) : null,
        ],
    });
}
