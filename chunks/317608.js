a.d(t, { A: () => i });
var s = a(477900),
    l = a(582128),
    n = a(333007),
    r = a(558960);
function i(e) {
    let { frameId: t, level: a, className: i, overlay: d } = e,
        o = l.useRef(null);
    l.useLayoutEffect(() => {
        let e = o.current;
        if (null != e)
            return (
                r.A.registerFrameTarget(t, e, a, void 0),
                () => {
                    r.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let u = l.useSyncExternalStore(r.A.subscribe, () => r.A.getFrameEntry(t)?.overlay ?? null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { ref: o, className: i, style: { pointerEvents: "none" } }),
            null != d && null != u ? (0, n.createPortal)(d, u) : null,
        ],
    });
}
