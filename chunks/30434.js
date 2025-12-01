n.d(t, { Z: () => s });
var r = n(54381),
    l = n(473749),
    i = n(55160),
    o = n(607070),
    a = n(996435);
function s(e) {
    let { node: t, children: n } = e,
        s = l.useRef(null),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (cancelAnimationFrame(c.current), (c.current = null));
        }, []);
    return (
        l.useEffect(() => {
            let e = a.Z.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    u(),
                        null != e &&
                            e.targetKey === t.key &&
                            null == e.targetAccordionKey &&
                            (c.current = requestAnimationFrame(() => {
                                var t;
                                null == (t = s.current) ||
                                    t.scrollIntoView({
                                        behavior: e.animateScroll && !o.Z.useReducedMotion ? "smooth" : "auto",
                                        block: "start",
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
                e(), u();
            };
        }, [u, t.key]),
        (0, r.jsx)("div", {
            ref: s,
            "data-debug-key": t.key,
            children: n,
        })
    );
}
