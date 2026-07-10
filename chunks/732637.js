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
    f = n(5867),
    A = n(652215);
function E(e, t) {
    r.h.wait(() => {
        (0, a.I_)(e, t);
    });
}
function I(e) {
    let t,
        { embedId: n, className: r, style: a } = e,
        I = (0, s.bG)([o.A], () => o.A.getWindow(A.MLl.CHANNEL_CALL_POPOUT)),
        S = (0, g.A)(),
        p = (0, s.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == S || (0, h.A)((0, c.H)(S.location)) || p !== f.Gd.PANEL ? (I?.window ?? window) : window;
    let m = l.useRef(null),
        _ = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        E(n, m.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", _),
                u._.subscribe(A.jej.REMEASURE_TARGET, _),
                () => {
                    t.removeEventListener("resize", _), u._.unsubscribe(A.jej.REMEASURE_TARGET, _);
                }
            ),
            [_, t],
        ),
        l.useLayoutEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            _();
            let i = new t.ResizeObserver(_);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), E(n, null);
                }
            );
        }, [n, _]),
        (0, i.jsx)("div", { ref: m, style: a, className: r })
    );
}
