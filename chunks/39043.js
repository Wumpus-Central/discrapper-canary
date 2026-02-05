n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(735438),
    a = n(942381),
    l = n(770178),
    o = n(894858),
    c = n(641324),
    d = n(78837);
let u = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, useCollapsedSubtitle: _ } = t,
        [m, A] = s.useState(!1),
        [g, E] = s.useState(!0),
        h = s.useRef(m);
    s.useEffect(
        () =>
            o.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    let n = e?.targetAccordionKey === t.key;
                    n && !m && ((h.current = !0), A(!0), E(!1)),
                        n && m && (o.A.setState({ navTransition: { ...e, targetAccordionKey: void 0 } }), E(!0));
                },
                { equalityFn: a.x, fireImmediately: !0 },
            ),
        [m, t.key],
    );
    let p = s.useCallback(
            (e) => {
                null == e.target ||
                    h.current === m ||
                    ((h.current = m),
                    m &&
                        o.A.setState({
                            navTransition: {
                                targetKey: t.key,
                                targetAccordionKey: t.key,
                                animateScroll: !0,
                                scrollBlock: "nearest",
                            },
                        }));
            },
            [m, t.key],
        ),
        C = s.useMemo(() => (0, r.debounce)(p, 50), [p]),
        x = (0, l.w)(C),
        T = n?.(m),
        I = _?.();
    return (0, i.jsx)(d.f, {
        ref: x,
        title: T,
        collapsedSubtitle: I,
        isExpanded: m,
        onExpandedChange: A,
        animate: g,
        children: u.map((e) => (0, i.jsx)(c.A, { node: e }, e.key)),
    });
});
