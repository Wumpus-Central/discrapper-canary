n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    o = n(519938),
    s = n(928518),
    c = n(585483),
    u = n(317381),
    d = n(16609),
    p = n(917107),
    f = n(716600),
    h = n(918559),
    m = n(981631);
let g = (e, t) => {
    a.Z.wait(() => {
        (0, o.Cz)(e, t);
    });
};
function b(e) {
    let t,
        { embedId: n, className: a, style: o } = e,
        b = (0, l.e7)([s.Z], () => s.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
        _ = (0, f.Z)(),
        y = (0, l.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
    if (null == _ || (0, p.Z)((0, d.p)(_.location)) || y !== h.Ez.PANEL) {
        var C;
        t = null != (C = null == b ? void 0 : b.window) ? C : window;
    } else t = window;
    let v = i.useRef(null),
        O = i.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        g(n, null != (r = null == (t = v.current) ? void 0 : t.getBoundingClientRect()) ? r : null),
                            (e = null);
                    }));
            };
        }, [n, t]);
    return (
        i.useEffect(
            () => (
                t.addEventListener("resize", O),
                c.S.subscribe(m.CkL.REMEASURE_TARGET, O),
                () => {
                    t.removeEventListener("resize", O), c.S.unsubscribe(m.CkL.REMEASURE_TARGET, O);
                }
            ),
            [O, t],
        ),
        i.useLayoutEffect(() => {
            let e = v.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            O();
            let r = new t.ResizeObserver(O);
            return (
                r.observe(e),
                () => {
                    r.disconnect(), g(n, null);
                }
            );
        }, [n, O]),
        (0, r.jsx)("div", {
            ref: v,
            style: o,
            className: a,
        })
    );
}
