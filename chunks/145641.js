n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(924826),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(617015),
    d = n(222001);
let p = function (e) {
    let { rows: t, renderRow: n, renderSection: p, footer: h } = e,
        f = (e) => {
            let { section: r, row: i } = e,
                l = t[r];
            if (null == l || null == i) return null;
            let a = l[i];
            return null == a ? null : n(a);
        },
        g = i.useCallback(
            (e) => {
                let { section: t } = e;
                return p(t);
            },
            [p]
        ),
        m = (0, o.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        b = i.useRef(null),
        _ = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        E = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        O = i.useCallback((e) => {
            let t = document.querySelector(e),
                n = b.current;
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
            isEnabled: m,
            scrollToStart: _,
            scrollToEnd: E,
            setFocus: O
        }),
        y = i.useMemo(() => t.map((e) => e.length), [t]);
    return (0, r.jsx)(a.bG, {
        navigator: N,
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
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['ref']);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            s._2F,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    ref: (e) => {
                                        var n;
                                        (b.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                    },
                                    renderRow: f,
                                    rowHeight: u.NV,
                                    renderSection: g,
                                    sectionHeight: u.aS,
                                    sections: y,
                                    className: d.peopleList
                                },
                                n
                            )
                        ),
                        h
                    ]
                });
            }
        })
    });
};
