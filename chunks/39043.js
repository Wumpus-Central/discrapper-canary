n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(735438),
    l = n(942381),
    r = n(770178),
    o = n(894858),
    c = n(641324),
    d = n(791498),
    u = n(78837);
let _ = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: _, useCollapsedSubtitle: m } = t,
        [A, g] = s.useState(!1),
        [h, x] = s.useState(!0),
        p = s.useRef(A);
    s.useEffect(
        () =>
            o.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    let n = e?.targetAccordionKey === t.key;
                    n && !A && ((p.current = !0), g(!0), x(!1)),
                        n && A && (o.A.setState({ navTransition: { ...e, targetAccordionKey: void 0 } }), x(!0));
                },
                { equalityFn: l.x, fireImmediately: !0 },
            ),
        [A, t.key],
    );
    let E = s.useCallback(
            (e) => {
                null == e.target ||
                    p.current === A ||
                    ((p.current = A),
                    A &&
                        o.A.setState({
                            navTransition: {
                                targetKey: t.key,
                                targetAccordionKey: t.key,
                                animateScroll: !0,
                                scrollBlock: "nearest",
                            },
                        }));
            },
            [A, t.key],
        ),
        C = s.useMemo(() => (0, a.debounce)(E, 50), [E]),
        T = (0, r.w)(C),
        S = n?.(A),
        I = m?.(),
        f = (0, d.q)(t);
    return (0, i.jsx)(u.f, {
        ref: T,
        title: S,
        collapsedSubtitle: I,
        isExpanded: A,
        onExpandedChange: (e) => {
            f(), g(e);
        },
        animate: h,
        children: _.map((e) => (0, i.jsx)(c.A, { node: e }, e.key)),
    });
});
