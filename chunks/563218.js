n.d(t, { Z: () => h });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(570140),
    u = n(519938),
    o = n(928518),
    s = n(585483),
    c = n(317381),
    d = n(16609),
    f = n(917107),
    m = n(716600),
    p = n(918559),
    E = n(981631);
let g = (e, t) => {
    a.Z.wait(() => {
        (0, u.Cz)(e, t);
    });
};
function h(e) {
    let t,
        { embedId: n, className: a, style: u } = e,
        h = (0, i.e7)([o.Z], () => o.Z.getWindow(E.KJ3.CHANNEL_CALL_POPOUT)),
        S = (0, m.Z)(),
        O = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
    if (null == S || (0, f.Z)((0, d.p)(S.location)) || O !== p.Ez.PANEL) {
        var v;
        t = null != (v = null == h ? void 0 : h.window) ? v : window;
    } else t = window;
    let b = l.useRef(null),
        I = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, r;
                        g(n, null != (r = null == (t = b.current) ? void 0 : t.getBoundingClientRect()) ? r : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener('resize', I),
                s.S.subscribe(E.CkL.REMEASURE_TARGET, I),
                () => {
                    t.removeEventListener('resize', I), s.S.unsubscribe(E.CkL.REMEASURE_TARGET, I);
                }
            ),
            [I, t]
        ),
        l.useLayoutEffect(() => {
            let e = b.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            I();
            let r = new t.ResizeObserver(I);
            return (
                r.observe(e),
                () => {
                    r.disconnect(), g(n, null);
                }
            );
        }, [n, I]),
        (0, r.jsx)('div', {
            ref: b,
            style: u,
            className: a
        })
    );
}
