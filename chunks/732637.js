"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(228366),
    l = n(31728),
    o = n(869146),
    d = n(625494),
    c = n(933958),
    u = n(969151),
    _ = n(108959),
    E = n(902439),
    A = n(5867),
    h = n(652215);
function I(e, t) {
    s.h.wait(() => {
        (0, l.I_)(e, t);
    });
}
function f(e) {
    let t,
        { embedId: n, className: s, style: l } = e,
        f = (0, a.bG)([o.A], () => o.A.getWindow(h.MLl.CHANNEL_CALL_POPOUT)),
        p = (0, E.A)(),
        T = (0, a.bG)([c.Ay], () => c.Ay.getActivityPanelMode());
    t = null == p || (0, _.A)((0, u.H)(p.location)) || T !== A.Gd.PANEL ? (f?.window ?? window) : window;
    let m = r.useRef(null),
        g = r.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        I(n, m.current?.getBoundingClientRect() ?? null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        r.useEffect(
            () => (
                t.addEventListener("resize", g),
                d._.subscribe(h.jej.REMEASURE_TARGET, g),
                () => {
                    t.removeEventListener("resize", g), d._.unsubscribe(h.jej.REMEASURE_TARGET, g);
                }
            ),
            [g, t],
        ),
        r.useLayoutEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            g();
            let i = new t.ResizeObserver(g);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), I(n, null);
                }
            );
        }, [n, g]),
        (0, i.jsx)("div", { ref: m, style: l, className: s })
    );
}
