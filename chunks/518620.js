n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(884362),
    l = n(837381),
    s = n(311907),
    o = n(397927),
    d = n(775602);
n(646363);
var c = n(652215),
    u = n(788868),
    A = n(520936);
let h = function (e) {
    let { rows: t, renderRow: n, renderSection: h, footer: _, sectionFilter: m, renderSectionFooter: p } = e,
        g = (e) => {
            let { section: i, row: r } = e,
                a = t[i];
            if (null == a || null == r) return null;
            let l = a[r];
            return null == l ? null : n(l, i);
        },
        E = r.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return m === c.m3P.ALL && i?.giftIntentType === u.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 62;
            },
            [t, m],
        ),
        f = r.useCallback(
            (e) => {
                let { section: t } = e;
                return h(t);
            },
            [h],
        ),
        I = r.useCallback((e) => (null == p ? null : p(e.section)), [p]),
        C = r.useCallback((e) => (null == p ? 0 : 48 * (null != p(e))), [p]),
        N = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        T = r.useRef(null),
        S = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = T.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        x = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = T.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        v = r.useCallback((e) => {
            let t = document.querySelector(e),
                n = T.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        b = (0, a.Ay)({ id: "people-list", isEnabled: N, scrollToStart: S, scrollToEnd: x, setFocus: v }),
        y = r.useMemo(() => t.map((e) => e.length), [t]);
    return (0, i.jsx)(l.hD, {
        navigator: b,
        children: (0, i.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Eie, {
                            ref: (e) => {
                                (T.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: g,
                            rowHeight: E,
                            renderSection: f,
                            sectionHeight: 50,
                            renderFooter: I,
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
