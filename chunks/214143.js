n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(570140),
    o = n(519938),
    s = n(585483),
    c = n(591472),
    u = n(408491),
    d = n(981631);
let p = (e, t) => {
    a.Z.wait(() => {
        (0, o.Cz)(e, t);
    });
};
function h(e) {
    let { embedId: t, className: n, style: a } = e,
        o = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()),
        h = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != o && u.U.FOCUSED, window),
        f = i.useRef(null),
        g = i.useCallback(() => {
            null != f.current && p(t, f.current.getBoundingClientRect());
        }, [t]);
    i.useLayoutEffect(() => {
        g();
    });
    let m = i.useMemo(
        () =>
            new ResizeObserver(() => {
                g();
            }),
        [g]
    );
    return (
        i.useLayoutEffect(() => {
            let e = f.current;
            if (null != e) return (m.observe(e), () => m.unobserve(e));
        }, [m]),
        i.useLayoutEffect(() => {
            let e = () => g(),
                t = () => g();
            return (
                h.addEventListener('scroll', e, !0),
                h.addEventListener('resize', t),
                () => {
                    (h.removeEventListener('scroll', e, !0), h.removeEventListener('resize', t));
                }
            );
        }, [g, h]),
        i.useLayoutEffect(
            () => (
                s.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, g),
                () => {
                    s.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, g);
                }
            ),
            [g]
        ),
        i.useLayoutEffect(
            () => () => {
                p(t, null);
            },
            [t]
        ),
        (0, r.jsx)('div', {
            ref: f,
            className: n,
            style: a
        })
    );
}
