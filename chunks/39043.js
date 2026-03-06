n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(770178),
    r = n(894858),
    o = n(272053),
    d = n(641324),
    c = n(791498),
    u = n(78837);
function _(e) {
    return r.A.getField("requestAccordionOpenKey") === e.key;
}
let g = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: g, useCollapsedSubtitle: m } = t,
        [A, h] = s.useState(!0),
        [p, x] = s.useState(() => _(t)),
        E = s.useRef(p),
        T = s.useRef(_(t) ? "navigation" : null);
    s.useEffect(
        () =>
            r.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === t.key &&
                        (E.current ? o.A.notifyAccordionExpanded(t.key) : ((T.current = "navigation"), h(!1), x(!0)));
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            ),
        [t.key, p],
    );
    let S = s.useCallback(
            (e) => {
                if (null != e.target && p !== E.current && ((E.current = p), E.current))
                    switch (T.current) {
                        case "navigation":
                            h(!0), o.A.notifyAccordionExpanded(t.key);
                            break;
                        case "user":
                            o.A.navigate(t.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [p, t.key],
        ),
        C = s.useMemo(() => (0, l.debounce)(S, 50), [S]),
        f = (0, a.w)(C),
        I = n?.(p),
        b = m?.(),
        N = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: f,
        title: I,
        collapsedSubtitle: b,
        isExpanded: p,
        onExpandedChange: (e) => {
            (T.current = "user"), N(), x(e);
        },
        animate: A,
        children: g.map((e) => (0, i.jsx)(d.A, { node: e }, e.key)),
    });
});
