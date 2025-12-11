n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    a = n(55160),
    o = n(607070),
    s = n(996435),
    l = n(63224);
function c(e) {
    let { node: t, children: n } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        d = i.useCallback(() => {
            null != u.current && (cancelAnimationFrame(u.current), (u.current = null));
        }, []);
    return (
        i.useEffect(() => {
            let e = s.Z.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    d(),
                        null != e &&
                            e.targetKey === t.key &&
                            null == e.targetAccordionKey &&
                            (u.current = requestAnimationFrame(() => {
                                var t, n;
                                let r = e.animateScroll && !o.Z.useReducedMotion,
                                    i = null != (n = e.scrollBlock) ? n : "start";
                                null == (t = c.current) ||
                                    t.scrollIntoView({
                                        behavior: r ? "smooth" : "auto",
                                        block: i,
                                    }),
                                    s.Z.setState({ navTransition: void 0 });
                            }));
                },
                {
                    equalityFn: a.X,
                    fireImmediately: !0,
                },
            );
            return () => {
                e(), d();
            };
        }, [d, t.key]),
        (0, r.jsx)("div", {
            ref: c,
            "data-debug-key": t.key,
            className: l.container,
            children: n,
        })
    );
}
