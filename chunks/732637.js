n.d(t, { A: () => h });
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(31728),
    o = n(869146),
    c = n(203982),
    u = n(933958),
    d = n(969151),
    f = n(108959),
    p = n(902439),
    b = n(5867),
    g = n(652215);
let m = (e, t) => {
    a.h.wait(() => {
        (0, s.I_)(e, t);
    });
};
function h(e) {
    let t,
        { embedId: n, className: a, style: s } = e,
        h = (0, i.bG)([o.A], () => o.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        A = (0, p.A)(),
        y = (0, i.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
    if (null == A || (0, f.A)((0, d.H)(A.location)) || y !== b.Gd.PANEL) {
        var _;
        t = null != (_ = null == h ? void 0 : h.window) ? _ : window;
    } else t = window;
    let E = r.useRef(null),
        v = r.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, l;
                        m(n, null != (t = null == (l = E.current) ? void 0 : l.getBoundingClientRect()) ? t : null),
                            (e = null);
                    }));
            };
        }, [n, t]);
    return (
        r.useEffect(
            () => (
                t.addEventListener("resize", v),
                c._.subscribe(g.jej.REMEASURE_TARGET, v),
                () => {
                    t.removeEventListener("resize", v), c._.unsubscribe(g.jej.REMEASURE_TARGET, v);
                }
            ),
            [v, t],
        ),
        r.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            v();
            let l = new t.ResizeObserver(v);
            return (
                l.observe(e),
                () => {
                    l.disconnect(), m(n, null);
                }
            );
        }, [n, v]),
        (0, l.jsx)("div", {
            ref: E,
            style: s,
            className: a,
        })
    );
}
