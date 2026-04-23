n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(73153),
    r = n(31728),
    o = n(869146),
    c = n(203982),
    d = n(933958),
    u = n(969151),
    h = n(108959),
    m = n(902439),
    A = n(5867),
    g = n(652215);
let _ = (e, t) => {
    s.h.wait(() => {
        (0, r.I_)(e, t);
    });
};
function p(e) {
    let t,
        { embedId: n, className: s, style: r } = e,
        p = (0, a.bG)([o.A], () => o.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        f = (0, m.A)(),
        E = (0, a.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == f || (0, h.A)((0, u.H)(f.location)) || E !== A.Gd.PANEL ? (p?.window ?? window) : window;
    let C = l.useRef(null),
        x = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        _(n, C.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", x),
                c._.subscribe(g.jej.REMEASURE_TARGET, x),
                () => {
                    t.removeEventListener("resize", x), c._.unsubscribe(g.jej.REMEASURE_TARGET, x);
                }
            ),
            [x, t],
        ),
        l.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            x();
            let i = new t.ResizeObserver(x);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), _(n, null);
                }
            );
        }, [n, x]),
        (0, i.jsx)("div", { ref: C, style: r, className: s })
    );
}
