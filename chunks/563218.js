n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(570140),
    s = n(519938),
    o = n(928518),
    c = n(585483),
    u = n(317381),
    d = n(16609),
    m = n(917107),
    f = n(716600),
    p = n(918559),
    h = n(981631);
let g = (e, t) => {
    r.Z.wait(() => {
        (0, s.Cz)(e, t);
    });
};
function v(e) {
    let t,
        { embedId: n, className: r, style: s } = e,
        v = (0, a.e7)([o.Z], () => o.Z.getWindow(h.KJ3.CHANNEL_CALL_POPOUT)),
        _ = (0, f.Z)(),
        I = (0, a.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
    if (null == _ || (0, m.Z)((0, d.p)(_.location)) || I !== p.Ez.PANEL) {
        var S;
        t = null !== (S = null == v ? void 0 : v.window) && void 0 !== S ? S : window;
    } else t = window;
    let x = l.useRef(null),
        E = l.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, i;
                        g(n, null !== (i = null === (t = x.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== i ? i : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        l.useEffect(
            () => (
                t.addEventListener('resize', E),
                c.S.subscribe(h.CkL.REMEASURE_TARGET, E),
                () => {
                    t.removeEventListener('resize', E), c.S.unsubscribe(h.CkL.REMEASURE_TARGET, E);
                }
            ),
            [E, t]
        ),
        l.useLayoutEffect(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            E();
            let i = new t.ResizeObserver(E);
            return (
                i.observe(e),
                () => {
                    i.disconnect(), g(n, null);
                }
            );
        }, [n, E]),
        (0, i.jsx)('div', {
            ref: x,
            style: s,
            className: r
        })
    );
}
