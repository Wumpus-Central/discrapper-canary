n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(228366),
    a = n(31728),
    u = n(869146),
    o = n(625494),
    d = n(933958),
    c = n(969151),
    h = n(108959),
    A = n(902439),
    f = n(5867),
    g = n(652215);
let E = (e, t) => {
    r.h.wait(() => {
        (0, a.I_)(e, t);
    });
};
function I(e) {
    let t,
        { embedId: n, className: r, style: a } = e,
        I = (0, s.bG)([u.A], () => u.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        S = (0, A.A)(),
        _ = (0, s.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == S || (0, h.A)((0, c.H)(S.location)) || _ !== f.Gd.PANEL ? (I?.window ?? window) : window;
    let T = l.useRef(null),
        C = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        E(n, T.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", C),
                o._.subscribe(g.jej.REMEASURE_TARGET, C),
                () => {
                    t.removeEventListener("resize", C), o._.unsubscribe(g.jej.REMEASURE_TARGET, C);
                }
            ),
            [C, t],
        ),
        l.useLayoutEffect(() => {
            let e = T.current;
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
        (0, i.jsx)("div", { ref: T, style: a, className: r })
    );
}
