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
    let { statusSections: t, renderRow: n, searchQuery: h, footer: m } = e,
        p = (e) => {
            let { section: i, row: r } = e,
                l = t[i];
            if (null == l || null == r) return null;
            let a = l[r];
            return null == a ? null : n(a);
        },
        g = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        f = r.useRef(null),
        _ = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        E = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        I = r.useCallback((e) => {
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
        C = (0, l.ZP)({
            id: 'people-list',
            isEnabled: g,
            scrollToStart: _,
            scrollToEnd: E,
            setFocus: I
        });
    return (0, i.jsx)(a.bG, {
        navigator: C,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                let { ref: n, ...r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.ListAuto, {
                            ref: (e) => {
                                var t;
                                (f.current = e), (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            sectionHeight: 0,
                            renderRow: p,
                            rowHeight: d.NV,
                            sections: t.map((e) => ('' !== h && 0 === e.length ? e.length + 1 : e.length)),
                            className: u.peopleList,
                            ...r
                        }),
                        m
                    ]
                });
            }
        })
    });
};
