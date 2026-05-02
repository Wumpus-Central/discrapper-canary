n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(228366),
    a = n(31728),
    o = n(869146),
    u = n(625494),
    d = n(933958),
    c = n(969151),
    h = n(108959),
    g = n(902439),
    A = n(5867),
    f = n(652215);
let E = (e, t) => {
    r.h.wait(() => {
        (0, a.I_)(e, t);
    });
};
function I(e) {
    let t,
        { embedId: n, className: r, style: a } = e,
        I = (0, s.bG)([o.A], () => o.A.getWindow(f.MLl.CHANNEL_CALL_POPOUT)),
        S = (0, g.A)(),
        m = (0, s.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == S || (0, h.A)((0, c.H)(S.location)) || m !== A.Gd.PANEL ? (I?.window ?? window) : window;
    let p = l.useRef(null),
        C = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        E(n, p.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", C),
                u._.subscribe(f.jej.REMEASURE_TARGET, C),
                () => {
                    t.removeEventListener("resize", C), u._.unsubscribe(f.jej.REMEASURE_TARGET, C);
                }
            ),
            [C, t],
        ),
        l.useLayoutEffect(() => {
            let e = p.current;
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
        (0, i.jsx)("div", { ref: p, style: a, className: r })
    );
}
