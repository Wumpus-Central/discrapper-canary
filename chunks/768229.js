s.d(t, { o: () => a });
var r = s(64700);
let a = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        s = (0, r.useCallback)(
            (e) => {
                let s = o.current[e];
                null != s &&
                    ((s.style.scrollMarginTop = `${t}px`), s.scrollIntoView({ behavior: "smooth", block: "start" }));
            },
            [t],
        ),
        [a, i] = (0, r.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [n, l] = (0, r.useState)(e[0]);
    (0, r.useEffect)(() => {
        let e = Object.keys(a).filter((e) => a[e]);
        e.length > 0 && l(e[0]);
    }, [a]);
    let o = (0, r.useRef)({});
    return (
        (0, r.useEffect)(() => {
            let e = new IntersectionObserver((e) => {
                e.forEach((e) => {
                    i((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                });
            });
            return (
                Object.values(o.current).forEach((t) => {
                    null != t && e.observe(t);
                }),
                () => e.disconnect()
            );
        }, []),
        {
            navBarSections: (0, r.useMemo)(
                () =>
                    e.reduce(
                        (e, t, r) => (
                            (e[t] = {
                                id: t,
                                ref: (e) => {
                                    (o.current[t] = e), null != e && (e.id = t);
                                },
                                scrollToSection: () => s(t),
                                order: r,
                            }),
                            e
                        ),
                        {},
                    ),
                [e, s],
            ),
            activeSectionId: n,
            setActiveSectionId: l,
        }
    );
};
