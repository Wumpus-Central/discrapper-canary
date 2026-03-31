n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(884362),
    r = n(837381),
    s = n(311907),
    o = n(397927),
    d = n(775602);
n(646363);
var c = n(652215),
    u = n(788868),
    A = n(998838);
let h = function (e) {
    let { rows: t, renderRow: n, renderSection: h, footer: _, sectionFilter: m, renderSectionFooter: p } = e,
        g = (e) => {
            let { section: i, row: l } = e,
                a = t[i];
            if (null == a || null == l) return null;
            let r = a[l];
            return null == r ? null : n(r, i);
        },
        E = l.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return m === c.m3P.ALL && i?.giftIntentType === u.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, m],
        ),
        I = l.useCallback(
            (e) => {
                let { section: t } = e;
                return h(t);
            },
            [h],
        ),
        f = l.useCallback((e) => (null == p ? null : p(e.section)), [p]),
        C = l.useCallback((e) => (null == p ? 0 : 48 * (null != p(e))), [p]),
        T = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        N = l.useRef(null),
        S = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = N.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        x = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = N.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        v = l.useCallback((e) => {
            let t = document.querySelector(e),
                n = N.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        b = (0, a.Ay)({ id: "people-list", isEnabled: T, scrollToStart: S, scrollToEnd: x, setFocus: v }),
        y = l.useMemo(() => t.map((e) => e.length), [t]);
    return (0, i.jsx)(r.hD, {
        navigator: b,
        children: (0, i.jsx)(r.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Eie, {
                            ref: (e) => {
                                (N.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: g,
                            rowHeight: E,
                            renderSection: I,
                            sectionHeight: 50,
                            renderFooter: f,
                            footerHeight: C,
                            sections: y,
                            className: A.e3,
                            ...n,
                        }),
                        _,
                    ],
                });
            },
        }),
    });
};
