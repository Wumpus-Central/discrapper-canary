n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(570140),
    s = n(519938),
    l = n(928518),
    c = n(585483),
    u = n(317381),
    d = n(16609),
    f = n(917107),
    _ = n(716600),
    p = n(918559),
    h = n(981631);
let m = (e, t) => {
    a.Z.wait(() => {
        (0, s.Cz)(e, t);
    });
};
function g(e) {
    let t,
        { embedId: n, className: a, style: s } = e,
        g = (0, o.e7)([l.Z], () => l.Z.getWindow(h.KJ3.CHANNEL_CALL_POPOUT)),
        E = (0, _.Z)(),
        b = (0, o.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
    if (null == E || (0, f.Z)((0, d.p)(E.location)) || b !== p.Ez.PANEL) {
        var y;
        t = null != (y = null == g ? void 0 : g.window) ? y : window;
    } else t = window;
    let O = i.useRef(null),
        v = i.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        (m(n, null != (r = null == (t = O.current) ? void 0 : t.getBoundingClientRect()) ? r : null), (e = null));
                    }));
            };
        }, [n, t]);
    return (
        i.useEffect(
            () => (
                t.addEventListener('resize', v),
                c.S.subscribe(h.CkL.REMEASURE_TARGET, v),
                () => {
                    (t.removeEventListener('resize', v), c.S.unsubscribe(h.CkL.REMEASURE_TARGET, v));
                }
            ),
            [v, t]
        ),
        i.useLayoutEffect(() => {
            let e = O.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            v();
            let r = new t.ResizeObserver(v);
            return (
                r.observe(e),
                () => {
                    (r.disconnect(), m(n, null));
                }
            );
        }, [n, v]),
        (0, r.jsx)('div', {
            ref: O,
            style: s,
            className: a
        })
    );
}
