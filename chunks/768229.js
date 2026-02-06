n.d(t, { o: () => s });
var i = n(64700);
let s = function (e) {
    let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
        n = (0, i.useCallback)(
            (e) => {
                let n = o.current[e];
                null != n &&
                    ((n.style.scrollMarginTop = `${t}px`), n.scrollIntoView({ behavior: "smooth", block: "start" }));
            },
            [t],
        ),
        [s, a] = (0, i.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
        [l, r] = (0, i.useState)(e[0]);
    (0, i.useEffect)(() => {
        let e = Object.keys(s).filter((e) => s[e]);
        e.length > 0 && r(e[0]);
    }, [s]);
    let o = (0, i.useRef)({});
    return (
        (0, i.useEffect)(() => {
            let e = new IntersectionObserver((e) => {
                e.forEach((e) => {
                    a((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
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
            navBarSections: (0, i.useMemo)(
                () =>
                    e.reduce(
                        (e, t, i) => (
                            (e[t] = {
                                id: t,
                                ref: (e) => {
                                    (o.current[t] = e), null != e && (e.id = t);
                                },
                                scrollToSection: () => n(t),
                                order: i,
                            }),
                            e
                        ),
                        {},
                    ),
                [e, n],
            ),
            activeSectionId: l,
            setActiveSectionId: r,
        }
    );
};
