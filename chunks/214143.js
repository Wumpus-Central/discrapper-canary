n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    s = n(519938),
    o = n(585483),
    c = n(591472),
    u = n(408491),
    d = n(981631);
let p = (e, t) => {
    a.Z.wait(() => {
        (0, s.Cz)(e, t);
    });
};
function f(e) {
    let { embedId: t, className: n, style: a } = e,
        s = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()),
        f = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != s && u.U.FOCUSED, window),
        m = i.useRef(null),
        h = i.useCallback(() => {
            null != m.current && p(t, m.current.getBoundingClientRect());
        }, [t]);
    i.useLayoutEffect(() => {
        h();
    });
    let g = i.useMemo(
        () =>
            new ResizeObserver(() => {
                h();
            }),
        [h],
    );
    return (
        i.useLayoutEffect(() => {
            let e = m.current;
            if (null != e) return g.observe(e), () => g.unobserve(e);
        }, [g]),
        i.useLayoutEffect(() => {
            let e = () => h(),
                t = () => h();
            return (
                f.addEventListener("scroll", e, !0),
                f.addEventListener("resize", t),
                () => {
                    f.removeEventListener("scroll", e, !0), f.removeEventListener("resize", t);
                }
            );
        }, [h, f]),
        i.useLayoutEffect(
            () => (
                o.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, h),
                () => {
                    o.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, h);
                }
            ),
            [h],
        ),
        i.useLayoutEffect(
            () => () => {
                p(t, null);
            },
            [t],
        ),
        (0, r.jsx)("div", {
            ref: m,
            className: n,
            style: a,
        })
    );
}
