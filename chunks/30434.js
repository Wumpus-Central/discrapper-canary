n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(55160),
    o = n(607070),
    a = n(996435),
    s = n(135443);
function c(e) {
    let { node: t, children: n } = e,
        c = l.useRef(null),
        u = l.useRef(null),
        d = l.useCallback(() => {
            null != u.current && (cancelAnimationFrame(u.current), (u.current = null));
        }, []);
    return (
        l.useEffect(() => {
            let e = a.Z.subscribe(
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
                                    l = null != (n = e.scrollBlock) ? n : "nearest";
                                null == (t = c.current) ||
                                    t.scrollIntoView({
                                        behavior: r ? "smooth" : "auto",
                                        block: l,
                                    }),
                                    a.Z.setState({ navTransition: void 0 });
                            }));
                },
                {
                    equalityFn: i.X,
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
            className: s.container,
            children: n,
        })
    );
}
