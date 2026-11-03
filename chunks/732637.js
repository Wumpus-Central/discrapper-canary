n.d(t, { A: () => A });
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
function A(e) {
    let t,
        { embedId: n, className: A, style: p } = e,
        m = (0, r.bG)([a.A], () => a.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        I = (0, h.A)(),
        E = (0, r.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
    t = null == I || (0, c.A)((0, d.H)(I.location)) || E !== f.Gd.PANEL ? (m?.window ?? window) : window;
    let S = l.useRef(null),
        C = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        ((0, s.I_)(n, S.current?.getBoundingClientRect() ?? null), (e = null));
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", C),
                o._.subscribe(g.jej.REMEASURE_TARGET, C),
                () => {
                    (t.removeEventListener("resize", C), o._.unsubscribe(g.jej.REMEASURE_TARGET, C));
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
                    (i.disconnect(), (0, s.I_)(n, null));
                }
            );
        }, [n, C]),
        (0, i.jsx)("div", { ref: S, style: p, className: A })
    );
}
