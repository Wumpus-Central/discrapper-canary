n.d(t, { Z: () => g });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(570140),
    s = n(519938),
    o = n(928518),
    u = n(585483),
    c = n(317381),
    d = n(16609),
    m = n(917107),
    f = n(716600),
    h = n(918559),
    p = n(981631);
let v = (e, t) => {
    a.Z.wait(() => {
        (0, s.Cz)(e, t);
    });
};
function g(e) {
    let t,
        { embedId: n, className: a, style: s } = e,
        g = (0, r.e7)([o.Z], () => o.Z.getWindow(p.KJ3.CHANNEL_CALL_POPOUT)),
        E = (0, f.Z)(),
        Z = (0, r.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
    if (null == E || (0, m.Z)((0, d.p)(E.location)) || Z !== h.Ez.PANEL) {
        var x;
        t = null !== (x = null == g ? void 0 : g.window) && void 0 !== x ? x : window;
    } else t = window;
    let S = i.useRef(null),
        C = i.useMemo(() => {
            let e = null;
            return () => {
                null == e &&
                    (e = t.requestAnimationFrame(() => {
                        var t, l;
                        v(n, null !== (l = null === (t = S.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== l ? l : null), (e = null);
                    }));
            };
        }, [n, t]);
    return (
        i.useEffect(
            () => (
                t.addEventListener('resize', C),
                u.S.subscribe(p.CkL.REMEASURE_TARGET, C),
                () => {
                    t.removeEventListener('resize', C), u.S.unsubscribe(p.CkL.REMEASURE_TARGET, C);
                }
            ),
            [C, t]
        ),
        i.useLayoutEffect(() => {
            let e = S.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            C();
            let l = new t.ResizeObserver(C);
            return (
                l.observe(e),
                () => {
                    l.disconnect(), v(n, null);
                }
            );
        }, [n, C]),
        (0, l.jsx)('div', {
            ref: S,
            style: s,
            className: a
        })
    );
}
