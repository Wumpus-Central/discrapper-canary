n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(884362),
    l = n(837381),
    s = n(311907),
    o = n(397927),
    d = n(775602);
n(646363);
var c = n(652215),
    u = n(788868),
    A = n(63461);
let _ = function (e) {
    let { rows: t, renderRow: n, renderSection: _, footer: h, sectionFilter: m, renderSectionFooter: g } = e,
        p = (e) => {
            let { section: i, row: a } = e,
                r = t[i];
            if (null == r || null == a) return null;
            let l = r[a];
            return null == l ? null : n(l, i);
        },
        E = a.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return m === c.m3P.ALL && i?.giftIntentType === u.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, m],
        ),
        I = a.useCallback(
            (e) => {
                let { section: t } = e;
                return _(t);
            },
            [_],
        ),
        f = a.useCallback((e) => (null == g ? null : g(e.section)), [g]),
        C = a.useCallback((e) => (null == g ? 0 : 48 * (null != g(e))), [g]),
        T = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled),
        N = a.useRef(null),
        S = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = N.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        x = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = N.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        v = a.useCallback((e) => {
            let t = document.querySelector(e),
                n = N.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        b = (0, r.Ay)({ id: "people-list", isEnabled: T, scrollToStart: S, scrollToEnd: x, setFocus: v }),
        y = a.useMemo(() => t.map((e) => e.length), [t]);
    return (0, i.jsx)(l.hD, {
        navigator: b,
        children: (0, i.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Eie, {
                            ref: (e) => {
                                (N.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: p,
                            rowHeight: E,
                            renderSection: I,
                            sectionHeight: 50,
                            renderFooter: f,
                            footerHeight: C,
                            sections: y,
                            className: A.e3,
                            ...n,
                        }),
                        h,
                    ],
                });
            },
        }),
    });
};
