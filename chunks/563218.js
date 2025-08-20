n.d(t, { Z: () => b });
var r = n(951288),
    l = n(647438),
    i = n(442837),
    a = n(570140),
    o = n(523238),
    u = n(928518),
    s = n(585483),
    c = n(317381),
    d = n(16609),
    f = n(917107),
    p = n(716600),
    m = n(918559),
    E = n(981631);
let g = (e, t) => {
    a.Z.wait(() => {
        (0, o.Cz)(e, t);
    });
};
function b(e) {
    let t,
        { embedId: n, className: a, style: o } = e,
        b = (0, i.e7)([u.Z], () => u.Z.getWindow(E.KJ3.CHANNEL_CALL_POPOUT)),
        S = (0, p.Z)(),
        v = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
    if (null == S || (0, f.Z)((0, d.p)(S.location)) || v !== m.Ez.PANEL) {
        var h;
        t = null != (h = null == b ? void 0 : b.window) ? h : window;
    } else t = window;
    let O = l.useRef(null),
        y = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        g(n, null != (r = null == (t = O.current) ? void 0 : t.getBoundingClientRect()) ? r : null),
                            (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener("resize", y),
                s.S.subscribe(E.CkL.REMEASURE_TARGET, y),
                () => {
                    t.removeEventListener("resize", y), s.S.unsubscribe(E.CkL.REMEASURE_TARGET, y);
                }
            ),
            [y, t],
        ),
        l.useLayoutEffect(() => {
            let e = O.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            y();
            let r = new t.ResizeObserver(y);
            return (
                r.observe(e),
                () => {
                    r.disconnect(), g(n, null);
                }
            );
        }, [n, y]),
        (0, r.jsx)("div", {
            ref: O,
            style: o,
            className: a,
        })
    );
}
