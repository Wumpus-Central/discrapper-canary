n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(782425),
    l = n(907331),
    c = n(607070),
    u = n(28682),
    d = n(996435),
    f = n(63224);
function p(e) {
    let { node: t, children: n } = e,
        a = i.useRef(!1),
        [p, _] = i.useState(!1),
        h = (0, l.O)((e) => {
            (a.current = e), e && _(!1);
        }, 0.5),
        m = i.useRef(null),
        g = i.useCallback(() => {
            null != m.current && (cancelAnimationFrame(m.current), (m.current = null));
        }, []);
    return (
        i.useEffect(() => {
            let e = d.Z.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if ((g(), null == e || e.targetKey !== t.key || null != e.targetAccordionKey)) return;
                    let n = e.animateScroll && !c.Z.useReducedMotion;
                    n || t.type === u.Jq.CATEGORY || _(!0),
                        (m.current = requestAnimationFrame(() => {
                            var t, r;
                            let i = null != (r = e.scrollBlock) ? r : "start";
                            null == (t = h.current) ||
                                t.scrollIntoView({
                                    behavior: n ? "smooth" : "auto",
                                    block: i,
                                }),
                                d.Z.setState({ navTransition: void 0 }),
                                a.current && _(!1);
                        }));
                },
                {
                    equalityFn: s.X,
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
            className: o()(f.container, p && f.flash),
            children: n,
        })
    );
}
