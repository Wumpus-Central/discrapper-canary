t.d(n, { A: () => j });
var l = t(627968),
    r = t(64700),
    i = t(735438),
    s = t(770178),
    a = t(894858),
    o = t(272053),
    c = t(641324),
    d = t(791498),
    u = t(78837);
function x(e) {
    return a.A.getField("requestAccordionOpenKey") === e.key;
}
let j = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: j, useCollapsedSubtitle: h } = n,
        [m, f] = r.useState(!0),
        [p, y] = r.useState(() => x(n)),
        g = r.useRef(p),
        v = r.useRef(x(n) ? "navigation" : null);
    r.useEffect(
        () =>
            a.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (g.current ? o.A.notifyAccordionExpanded(n.key) : ((v.current = "navigation"), f(!1), y(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, p],
    );
    let A = r.useCallback(
            (e) => {
                if (null != e.target && p !== g.current && ((g.current = p), g.current))
                    switch (v.current) {
                        case "navigation":
                            f(!0), o.A.notifyAccordionExpanded(n.key);
                            break;
                        case "user":
                            o.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [p, n.key],
        ),
        N = r.useMemo(() => (0, i.debounce)(A, 50), [A]),
        b = (0, s.w)(N),
        k = t?.(p),
        E = h?.(),
        T = (0, d.q)(n);
    return (0, l.jsx)(u.f, {
        ref: b,
        title: k,
        collapsedSubtitle: E,
        isExpanded: p,
        onExpandedChange: (e) => {
            (v.current = "user"), T(), y(e);
        },
        animate: m,
        children: j.map((e) => (0, l.jsx)(c.A, { node: e }, e.key)),
    });
});
