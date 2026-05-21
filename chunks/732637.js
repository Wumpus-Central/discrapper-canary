"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(228366),
    o = n(31728),
    l = n(869146),
    u = n(625494),
    c = n(933958),
    d = n(969151),
    _ = n(108959),
    f = n(902439),
    h = n(5867),
    p = n(652215);
let E = (e, t) => {
    a.h.wait(() => {
        (0, o.I_)(e, t);
    });
};
function m(e) {
    let t,
        { embedId: n, className: a, style: o } = e,
        m = (0, s.bG)([l.A], () => l.A.getWindow(p.MLl.CHANNEL_CALL_POPOUT)),
        g = (0, f.A)(),
        A = (0, s.bG)([c.Ay], () => c.Ay.getActivityPanelMode());
    t = null == g || (0, _.A)((0, d.H)(g.location)) || A !== h.Gd.PANEL ? (m?.window ?? window) : window;
    let I = r.useRef(null),
        T = r.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        E(n, I.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        r.useEffect(
            () => (
                t.addEventListener("resize", T),
                u._.subscribe(p.jej.REMEASURE_TARGET, T),
                () => {
                    t.removeEventListener("resize", T), u._.unsubscribe(p.jej.REMEASURE_TARGET, T);
                }
            ),
            [T, t],
        ),
        r.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            T();
            let i = new t.ResizeObserver(T);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), E(n, null);
                }
            );
        }, [n, T]),
        (0, i.jsx)("div", { ref: I, style: o, className: a })
    );
}
