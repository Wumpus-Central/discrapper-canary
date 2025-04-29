n.d(t, { Z: () => v });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(570140),
    o = n(519938),
    s = n(928518),
    u = n(585483),
    c = n(317381),
    d = n(16609),
    f = n(917107),
    m = n(716600),
    p = n(918559),
    E = n(981631);
let g = (e, t) => {
    a.Z.wait(() => {
        (0, o.Cz)(e, t);
    });
};
function v(e) {
    let t,
        { embedId: n, className: a, style: o } = e,
        v = (0, i.e7)([s.Z], () => s.Z.getWindow(E.KJ3.CHANNEL_CALL_POPOUT)),
        h = (0, m.Z)(),
        S = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
    if (null == h || (0, f.Z)((0, d.pY)(h.location)) || S !== p.Ez.PANEL) {
        var b;
        t = null != (b = null == v ? void 0 : v.window) ? b : window;
    } else t = window;
    let y = l.useRef(null),
        O = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        g(n, null != (r = null == (t = y.current) ? void 0 : t.getBoundingClientRect()) ? r : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener('resize', O),
                u.S.subscribe(E.CkL.REMEASURE_TARGET, O),
                () => {
                    t.removeEventListener('resize', O), u.S.unsubscribe(E.CkL.REMEASURE_TARGET, O);
                }
            ),
            [O, t]
        ),
        l.useLayoutEffect(() => {
            let e = y.current;
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
        (0, r.jsx)('div', {
            ref: y,
            style: o,
            className: a
        })
    );
}
