n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(884362),
    a = n(837381),
    r = n(311907),
    o = n(475825),
    c = n(775602);
n(646363);
var d = n(652215),
    u = n(788868),
    m = n(795733);
let A = function (e) {
    let { rows: t, renderRow: n, renderSection: A, footer: h, sectionFilter: x, renderSectionFooter: p } = e,
        g = (e) => {
            let { section: i, row: s } = e,
                l = t[i];
            if (null == l || null == s) return null;
            let a = l[s];
            return null == a ? null : n(a, i);
        },
        N = s.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return x === d.m3P.ALL && i?.giftIntentType === u.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, x],
        ),
        f = s.useCallback(
            (e) => {
                let { section: t } = e;
                return A(t);
            },
            [A],
        ),
        _ = s.useCallback((e) => (null == p ? null : p(e.section)), [p]),
        I = s.useCallback((e) => (null == p ? 0 : 48 * (null != p(e))), [p]),
        v = (0, r.bG)([c.A], () => c.A.keyboardModeEnabled),
        j = s.useRef(null),
        C = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = j.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        y = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = j.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        S = s.useCallback((e) => {
            let t = document.querySelector(e),
                n = j.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        E = (0, l.Ay)({ id: "people-list", isEnabled: v, scrollToStart: C, scrollToEnd: y, setFocus: S }),
        T = s.useMemo(() => t.map((e) => e.length), [t]);
    return (0, i.jsx)(a.hD, {
        navigator: E,
        children: (0, i.jsx)(a.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Ei, {
                            ref: (e) => {
                                (j.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: g,
                            rowHeight: N,
                            renderSection: f,
                            sectionHeight: 50,
                            renderFooter: _,
                            footerHeight: I,
                            sections: T,
                            className: m.e3,
                            ...n,
                        }),
                        h,
                    ],
                });
            },
        }),
    });
};
