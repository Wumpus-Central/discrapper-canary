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
    let { embedId: t, className: n, style: a, currentWindow: o } = e,
        f = (0, l.e7)([c.Z], () => c.Z.getConnectedFrame()),
        g = (0, l.e7)([c.Z], () => c.Z.getFrameLayoutMode()),
        h = null != f && g === u.U.FOCUSED ? window : null != o ? o : window,
        m = i.useRef(null),
        b = i.useCallback(() => {
            null != m.current && p(t, m.current.getBoundingClientRect());
        }, [t]);
    i.useLayoutEffect(() => {
        b();
    });
    let _ = i.useMemo(
        () =>
            new ResizeObserver(() => {
                b();
            }),
        [b],
    );
    return (
        i.useLayoutEffect(() => {
            let e = m.current;
            if (null != e) return _.observe(e), () => _.unobserve(e);
        }, [_]),
        i.useLayoutEffect(() => {
            let e = () => b(),
                t = () => b();
            return (
                h.addEventListener("scroll", e, !0),
                h.addEventListener("resize", t),
                () => {
                    h.removeEventListener("scroll", e, !0), h.removeEventListener("resize", t);
                }
            );
        }, [b, h]),
        i.useLayoutEffect(
            () => (
                s.S.subscribe(d.CkL.MANUAL_IFRAME_RESIZING, b),
                () => {
                    s.S.unsubscribe(d.CkL.MANUAL_IFRAME_RESIZING, b);
                }
            ),
            [b],
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
