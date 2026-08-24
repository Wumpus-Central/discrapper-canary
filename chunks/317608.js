l.d(t, { A: () => o });
var i = l(477900),
    s = l(582128),
    n = l(333007),
    a = l(649248);
function r(e) {
    return a.A.subscribeEntries(e);
}
function o(e) {
    let { frameId: t, level: l, className: o, overlay: c } = e,
        d = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = d.current;
        if (null != e)
            return (
                a.A.registerFrameTarget(t, e, l),
                () => {
                    a.A.removeFrameTarget(t, e);
                }
            );
    }, [t, l]);
    let u = s.useSyncExternalStore(r, () => a.A.getPoolEntry(t)?.overlay ?? null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: d, className: o, style: { pointerEvents: "none" } }),
            null != c && null != u ? (0, n.createPortal)(c, u) : null,
        ],
    });
}
