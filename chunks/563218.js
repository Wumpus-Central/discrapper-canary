n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    o = n(519938),
    c = n(928518),
    s = n(585483),
    u = n(317381),
    d = n(16609),
    f = n(917107),
    p = n(716600),
    _ = n(918559),
    m = n(981631);
let g = (e, t) => {
    a.Z.wait(() => {
        (0, o.Cz)(e, t);
    });
};
function v(e) {
    let t,
        { embedId: n, className: a, style: o } = e,
        v = (0, l.e7)([c.Z], () => c.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
        b = (0, p.Z)(),
        E = (0, l.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
    if (null == b || (0, f.Z)((0, d.p)(b.location)) || E !== _.Ez.PANEL) {
        var h;
        t = null != (h = null == v ? void 0 : v.window) ? h : window;
    } else t = window;
    let S = i.useRef(null),
        y = i.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        g(n, null != (r = null == (t = S.current) ? void 0 : t.getBoundingClientRect()) ? r : null),
                            (e = null);
                    }));
            };
        }, [n, t]);
    return (
        i.useEffect(
            () => (
                t.addEventListener("resize", y),
                s.S.subscribe(m.CkL.REMEASURE_TARGET, y),
                () => {
                    t.removeEventListener("resize", y), s.S.unsubscribe(m.CkL.REMEASURE_TARGET, y);
                }
            ),
            [y, t],
        ),
        i.useLayoutEffect(() => {
            let e = S.current;
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
            ref: S,
            style: o,
            className: a,
        })
    );
}
