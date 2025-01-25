var i = n(200651),
    r = n(192379),
    l = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(617015),
    u = n(732144);
t.Z = function (e) {
    let { rows: t, renderRow: n, renderSection: h, footer: m } = e,
        p = (e) => {
            let { section: i, row: r } = e,
                l = t[i];
            if (null == l || null == r) return null;
            let a = l[r];
            return null == a ? null : n(a);
        },
        g = r.useCallback(
            (e) => {
                let { section: t } = e;
                return h(t);
            },
            [h]
        ),
        f = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        _ = r.useRef(null),
        E = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        I = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        C = r.useCallback((e) => {
            let t = document.querySelector(e),
                n = _.current;
            null != t &&
                null != n &&
                n.scrollIntoViewNode({
                    node: t,
                    padding: 8,
                    callback: () => (null == t ? void 0 : t.focus())
                });
        }, []),
        N = (0, l.ZP)({
            id: 'people-list',
            isEnabled: f,
            scrollToStart: E,
            scrollToEnd: I,
            setFocus: C
        }),
        v = r.useMemo(() => t.map((e) => e.length), [t]);
    return (0, i.jsx)(a.bG, {
        navigator: N,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.ListAuto, {
                            ref: (e) => {
                                var n;
                                (_.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
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
