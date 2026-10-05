a.d(t, { A: () => r });
var s = a(477900),
    l = a(582128),
    n = a(333007),
    i = a(558960);
function r(e) {
    let { frameId: t, level: a, className: r, overlay: o } = e,
        d = l.useRef(null);
    l.useLayoutEffect(() => {
        let e = d.current;
        if (null != e)
            return (
                i.A.registerFrameTarget(t, e, a, void 0),
                () => {
                    i.A.removeFrameTarget(t, e);
                }
            );
    }, [t, a]);
    let c = l.useSyncExternalStore(i.A.subscribe, () => i.A.getFrameEntry(t)?.overlay ?? null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { ref: d, className: r, style: { pointerEvents: "none" } }),
            null != o && null != c ? (0, n.createPortal)(o, c) : null,
        ],
    });
}
