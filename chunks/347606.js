n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(172218),
    c = n(775602),
    u = n(963935),
    d = n(894858),
    f = n(270952);
function p(e) {
    let { node: t, children: n } = e,
        a = i.useRef(!1),
        [p, _] = i.useState(!1),
        h = (0, l.K)((e) => {
            (a.current = e), e && _(!1);
        }, 0.5),
        m = i.useRef(null),
        g = i.useCallback(() => {
            null != m.current && (cancelAnimationFrame(m.current), (m.current = null));
        }, []);
    return (
        i.useEffect(() => {
            let e = d.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if ((g(), null == e || e.targetKey !== t.key || null != e.targetAccordionKey)) return;
                    let n = e.animateScroll && !c.A.useReducedMotion;
                    n || t.type === u.Z6.CATEGORY || _(!0),
                        (m.current = requestAnimationFrame(() => {
                            var t, r;
                            let i = null != (t = e.scrollBlock) ? t : "start";
                            null == (r = h.current) ||
                                r.scrollIntoView({
                                    behavior: n ? "smooth" : "auto",
                                    block: i,
                                }),
                                d.A.setState({ navTransition: void 0 }),
                                a.current && _(!1);
                        }));
                },
                {
                    equalityFn: o.x,
                    fireImmediately: !0,
                },
            );
            return () => {
                e(), g();
            };
        }, [g, t.key, t.type, h]),
        (0, r.jsx)("div", {
            ref: h,
            "data-debug-key": t.key,
            className: s()(f.k, p && f.j),
            children: n,
        })
    );
}
