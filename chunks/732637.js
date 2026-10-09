n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(31728),
    a = n(869146),
    o = n(625494),
    u = n(933958),
    d = n(969151),
    c = n(108959),
    h = n(902439),
    f = n(5867),
    g = n(652215);
function C(e) {
    let t,
        { embedId: n, className: C, style: A } = e,
        p = (0, r.bG)([a.A], () => a.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        m = (0, h.A)(),
        I = (0, r.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
    t = null == m || (0, c.A)((0, d.H)(m.location)) || I !== f.Gd.PANEL ? (p?.window ?? window) : window;
    let E = l.useRef(null),
        S = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        ((0, s.I_)(n, E.current?.getBoundingClientRect() ?? null), (e = null));
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", S),
                o._.subscribe(g.jej.REMEASURE_TARGET, S),
                () => {
                    (t.removeEventListener("resize", S), o._.unsubscribe(g.jej.REMEASURE_TARGET, S));
                }
            ),
            [S, t],
        ),
        l.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            S();
            let i = new t.ResizeObserver(S);
            return (
                i.observe(e),
                () => {
                    (i.disconnect(), (0, s.I_)(n, null));
                }
            );
        }, [n, S]),
        (0, i.jsx)("div", { ref: E, style: A, className: C })
    );
}
