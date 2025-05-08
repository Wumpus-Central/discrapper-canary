n.d(t, { Z: () => h });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(570140),
    o = n(519938),
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
function h(e) {
    let t,
        { embedId: n, className: a, style: o } = e,
        h = (0, i.e7)([u.Z], () => u.Z.getWindow(E.KJ3.CHANNEL_CALL_POPOUT)),
        v = (0, p.Z)(),
        S = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
    if (null == v || (0, f.Z)((0, d.pY)(v.location)) || S !== m.Ez.PANEL) {
        var b;
        t = null != (b = null == h ? void 0 : h.window) ? b : window;
    } else t = window;
    let O = l.useRef(null),
        y = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        g(n, null != (r = null == (t = O.current) ? void 0 : t.getBoundingClientRect()) ? r : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener('resize', y),
                s.S.subscribe(E.CkL.REMEASURE_TARGET, y),
                () => {
                    t.removeEventListener('resize', y), s.S.unsubscribe(E.CkL.REMEASURE_TARGET, y);
                }
            ),
            [y, t]
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
        (0, r.jsx)('div', {
            ref: O,
            style: o,
            className: a
        })
    );
}
