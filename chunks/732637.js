n.d(t, { A: () => p });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(73153),
    a = n(31728),
    o = n(869146),
    u = n(625494),
    d = n(933958),
    c = n(969151),
    h = n(108959),
    f = n(902439),
    g = n(5867),
    C = n(652215);
function A(e, t) {
    s.h.wait(() => {
        (0, a.I_)(e, t);
    });
}
function p(e) {
    let t,
        { embedId: n, className: s, style: a } = e,
        p = (0, r.bG)([o.A], () => o.A.getWindow(C.MLl.CHANNEL_CALL_POPOUT)),
        m = (0, f.A)(),
        E = (0, r.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == m || (0, h.A)((0, c.H)(m.location)) || E !== g.Gd.PANEL ? (p?.window ?? window) : window;
    let I = l.useRef(null),
        S = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        (A(n, I.current?.getBoundingClientRect() ?? null), (e = null));
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", S),
                u._.subscribe(C.jej.REMEASURE_TARGET, S),
                () => {
                    (t.removeEventListener("resize", S), u._.unsubscribe(C.jej.REMEASURE_TARGET, S));
                }
            ),
            [S, t],
        ),
        l.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            S();
            let i = new t.ResizeObserver(S);
            return (
                i.observe(e),
                () => {
                    (i.disconnect(), A(n, null));
                }
            );
        }, [n, S]),
        (0, i.jsx)("div", { ref: I, style: a, className: s })
    );
}
