n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    r = n(17928),
    l = n(228366),
    s = n(31728),
    o = n(869146),
    c = n(625494),
    d = n(933958),
    u = n(969151),
    _ = n(108959),
    E = n(902439),
    f = n(5867),
    A = n(652215);
let S = (e, t) => {
    l.h.wait(() => {
        (0, s.I_)(e, t);
    });
};
function g(e) {
    let t,
        { embedId: n, className: l, style: s } = e,
        g = (0, r.bG)([o.A], () => o.A.getWindow(A.MLl.CHANNEL_CALL_POPOUT)),
        m = (0, E.A)(),
        h = (0, r.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == m || (0, _.A)((0, u.H)(m.location)) || h !== f.Gd.PANEL ? (g?.window ?? window) : window;
    let p = a.useRef(null),
        C = a.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        S(n, p.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        a.useEffect(
            () => (
                t.addEventListener("resize", C),
                c._.subscribe(A.jej.REMEASURE_TARGET, C),
                () => {
                    t.removeEventListener("resize", C), c._.unsubscribe(A.jej.REMEASURE_TARGET, C);
                }
            ),
            [C, t],
        ),
        a.useLayoutEffect(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            C();
            let i = new t.ResizeObserver(C);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), S(n, null);
                }
            );
        }, [n, C]),
        (0, i.jsx)("div", { ref: p, style: s, className: l })
    );
}
