n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(924826),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(617015),
    d = n(981631),
    p = n(474936),
    f = n(535881);
let g = function (e) {
    let { rows: t, renderRow: n, renderSection: g, footer: h, sectionFilter: m, renderSectionFooter: b } = e,
        _ = (e) => {
            let { section: r, row: i } = e,
                l = t[r];
            if (null == l || null == i) return null;
            let a = l[i];
            return null == a ? null : n(a, r);
        },
        E = i.useCallback(
            (e, n) => {
                var r;
                let i = null == (r = t[e]) ? void 0 : r[n];
                return m === d.pJs.ALL && (null == i ? void 0 : i.giftIntentType) === p.hX.FRIEND_ANNIVERSARY && 0 === e
                    ? u.fJ
                    : u.NV;
            },
            [t, m],
        ),
        O = i.useCallback(
            (e) => {
                let { section: t } = e;
                return g(t);
            },
            [g],
        ),
        v = i.useCallback((e) => (null == b ? null : b(e.section)), [b]),
        y = i.useCallback((e) => (null == b ? 0 : null != b(e) ? u.lC : 0), [b]),
        I = (0, o.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        C = i.useRef(null),
        S = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        T = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        N = i.useCallback((e) => {
            let t = document.querySelector(e),
                n = C.current;
            null != t &&
                null != n &&
                n.scrollIntoViewNode({
                    node: t,
                    padding: 8,
                    callback: () => (null == t ? void 0 : t.focus()),
                });
        }, []),
        j = (0, l.ZP)({
            id: "people-list",
            isEnabled: I,
            scrollToStart: S,
            scrollToEnd: T,
            setFocus: N,
        }),
        P = i.useMemo(() => t.map((e) => e.length), [t]);
    return (0, r.jsx)(a.bG, {
        navigator: j,
        children: (0, r.jsx)(a.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(e, ["ref"]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            s._2F,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    ref: (e) => {
                                        var n;
                                        (C.current = e),
                                            (t.current =
                                                null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                    },
                                    renderRow: _,
                                    rowHeight: E,
                                    renderSection: O,
                                    sectionHeight: u.aS,
                                    renderFooter: v,
                                    footerHeight: y,
                                    sections: P,
                                    className: f.peopleList,
                                },
                                n,
                            ),
                        ),
                        h,
                    ],
                });
            },
        }),
    });
};
