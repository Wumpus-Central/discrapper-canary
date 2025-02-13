n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    r = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(617015),
    u = n(574514);
let h = function (e) {
    let { rows: t, renderRow: n, renderSection: h, footer: m } = e,
        p = (e) => {
            let { section: i, row: l } = e,
                r = t[i];
            if (null == r || null == l) return null;
            let a = r[l];
            return null == a ? null : n(a);
        },
        g = l.useCallback(
            (e) => {
                let { section: t } = e;
                return h(t);
            },
            [h]
        ),
        _ = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        f = l.useRef(null),
        E = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        I = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        C = l.useCallback((e) => {
            let t = document.querySelector(e),
                n = f.current;
            null != t &&
                null != n &&
                n.scrollIntoViewNode({
                    node: t,
                    padding: 8,
                    callback: () => (null == t ? void 0 : t.focus())
                });
        }, []),
        N = (0, r.ZP)({
            id: 'people-list',
            isEnabled: _,
            scrollToStart: E,
            scrollToEnd: I,
            setFocus: C
        }),
        v = l.useMemo(() => t.map((e) => e.length), [t]);
    return (0, i.jsx)(a.bG, {
        navigator: N,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o._2F, {
                            ref: (e) => {
                                var n;
                                (f.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                            },
                            renderRow: p,
                            rowHeight: d.NV,
                            renderSection: g,
                            sectionHeight: d.aS,
                            sections: v,
                            className: u.peopleList,
                            ...n
                        }),
                        m
                    ]
                });
            }
        })
    });
};
