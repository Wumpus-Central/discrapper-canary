n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
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
function f(e) {
    let { embedId: t, className: n, style: a } = e,
        o = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()),
        f = ((0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()), null != o && u.U.FOCUSED, window),
        g = i.useRef(null),
        h = i.useCallback(() => {
            null != g.current && p(t, g.current.getBoundingClientRect());
        }, [t]);
    i.useLayoutEffect(() => {
        h();
    });
    let m = i.useMemo(
        () =>
            new ResizeObserver(() => {
                h();
            }),
        [h],
    );
    return (
        i.useLayoutEffect(() => {
            let e = g.current;
            if (null != e) return m.observe(e), () => m.unobserve(e);
        }, [m]),
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
                s.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, h),
                () => {
                    s.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, h);
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
            ref: g,
            className: n,
            style: a,
        })
    );
}
