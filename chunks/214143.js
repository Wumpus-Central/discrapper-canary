n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
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
        h = i.useRef(null),
        g = i.useCallback(() => {
            null != h.current && p(t, h.current.getBoundingClientRect());
        }, [t]);
    i.useLayoutEffect(() => {
        g();
    });
    let m = i.useMemo(
        () =>
            new ResizeObserver(() => {
                g();
            }),
        [g],
    );
    return (
        i.useLayoutEffect(() => {
            let e = h.current;
            if (null != e) return m.observe(e), () => m.unobserve(e);
        }, [m]),
        i.useLayoutEffect(() => {
            let e = () => g(),
                t = () => g();
            return (
                f.addEventListener("scroll", e, !0),
                f.addEventListener("resize", t),
                () => {
                    f.removeEventListener("scroll", e, !0), f.removeEventListener("resize", t);
                }
            );
        }, [g, f]),
        i.useLayoutEffect(
            () => (
                o.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, g),
                () => {
                    o.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, g);
                }
            ),
            [g],
        ),
        i.useLayoutEffect(
            () => () => {
                p(t, null);
            },
            [t],
        ),
        (0, r.jsx)("div", {
            ref: h,
            className: n,
            style: a,
        })
    );
}
