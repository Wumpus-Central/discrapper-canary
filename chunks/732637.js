n.d(t, { A: () => p });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(228366),
    a = n(31728),
    o = n(869146),
    u = n(625494),
    d = n(933958),
    c = n(969151),
    h = n(108959),
    g = n(902439),
    f = n(5867),
    A = n(652215);
function E(e, t) {
    s.h.wait(() => {
        (0, a.I_)(e, t);
    });
}
function p(e) {
    let t,
        { embedId: n, className: s, style: a } = e,
        p = (0, r.bG)([o.A], () => o.A.getWindow(A.MLl.CHANNEL_CALL_POPOUT)),
        m = (0, g.A)(),
        I = (0, r.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == m || (0, h.A)((0, c.H)(m.location)) || I !== f.Gd.PANEL ? (p?.window ?? window) : window;
    let S = l.useRef(null),
        C = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        E(n, S.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", C),
                u._.subscribe(A.jej.REMEASURE_TARGET, C),
                () => {
                    t.removeEventListener("resize", C), u._.unsubscribe(A.jej.REMEASURE_TARGET, C);
                }
            ),
            [C, t],
        ),
        l.useLayoutEffect(() => {
            let e = S.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            C();
            let i = new t.ResizeObserver(C);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), E(n, null);
                }
            );
        }, [n, C]),
        (0, i.jsx)("div", { ref: S, style: a, className: s })
    );
}
