r.d(t, {
    A: () => p,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    o = r(942381),
    a = r(964486),
    c = r(250703),
    i = r(877260),
    s = r(823092),
    u = r(199966),
    f = r(669550),
    b = r(894858),
    y = r(500425);

function d(e) {
    var t;
    let {
            partialRoot: r,
            target: d,
            defaultTarget: p,
            onClose: g,
            sidebarFooter: O,
            onPanelChange: j,
            emptyState: h,
            searchQuery: m,
            onSearchChange: v,
        } = e,
        x = b.A.useField("currentPanelKey"),
        { node: S, visibleDirectory: P, accessibleDirectory: w } = (0, f.Ay)(r, null != m ? m : ""),
        A = null != d && (null == (t = P.entry(d)) ? void 0 : t.parentPanelKey) != null ? d : p,
        C = l.useMemo(() => {
            var e;
            let t = null == (e = w.entry(null != x ? x : A)) ? void 0 : e.parentPanelKey;
            if (null != t) return w.getPanelOrThrow(t);
        }, [x, w, A]),
        { navigateWithValidation: E } = (0, s.L_)();
    (0, a.Ay)(() => {
        var e, t, r;
        let n = P.entry(A).parentPanelKey,
            l = null == (e = P.entry(A)) ? void 0 : e.parentTabKey,
            o = null == (t = P.entry(A)) ? void 0 : t.parentCategoryKey,
            a = null == (r = P.entry(A)) ? void 0 : r.parentAccordionKey;
        return (
            b.A.setState({
                currentPanelKey: n,
                currentTabKeys: null != l ? new Map([[n, l]]) : new Map(),
                currentCategoryKey: o,
                disableSidebarCategoryAutoSelect: !0,
                navTransition: {
                    targetKey: A,
                    targetAccordionKey: a,
                    animateScroll: !1,
                },
                showNavigationMobile: null == d,
            }),
            () => b.A.resetState()
        );
    }),
        l.useEffect(
            () =>
                b.A.subscribe(
                    (e) => ({
                        requestedTargetKey: e.requestedTargetKey,
                        currentPanelKey: e.currentPanelKey,
                    }),
                    (e) => {
                        let { requestedTargetKey: t, currentPanelKey: r } = e;
                        if (null == t) return;
                        let n = P.entry(t);
                        if (null == n) {
                            null == v || v("");
                            return;
                        }
                        let l = n.parentPanelKey;
                        if (null == l)
                            return void b.A.setState({
                                requestedTargetKey: void 0,
                            });
                        let o = b.A.getField("currentTabKeys"),
                            a = null != n.parentTabKey ? new Map(o).set(l, n.parentTabKey) : o,
                            c = n.parentPanelKey === r && (null == n.parentTabKey || n.parentTabKey === o.get(l)),
                            i = () => {
                                b.A.setState({
                                    requestedTargetKey: void 0,
                                    currentPanelKey: n.parentPanelKey,
                                    currentTabKeys: a,
                                    currentCategoryKey: n.parentCategoryKey,
                                    disableSidebarCategoryAutoSelect: !0,
                                    navTransition: {
                                        targetKey: t,
                                        targetAccordionKey: n.parentAccordionKey,
                                        animateScroll: c,
                                    },
                                });
                            };
                        n.parentPanelKey !== r
                            ? E(() => {
                                  i(), null == j || j(l);
                              })
                            : i();
                    },
                    {
                        equalityFn: o.x,
                    },
                ),
            [P, E, j, v],
        );
    let T = l.useMemo(
            () => ({
                visibleDirectory: P,
                accessibleDirectory: w,
            }),
            [P, w],
        ),
        N = l.useMemo(() => () => E(g), [E, g]),
        _ = null != x ? P.get(x) : void 0;
    return (0, n.jsx)(u.x.Provider, {
        value: T,
        children: (0, n.jsxs)("div", {
            className: y.k,
            children: [
                (0, n.jsx)(i.L, {
                    root: S,
                    footer: O,
                    onClose: N,
                    emptyState: h,
                    searchQuery: m,
                    onSearchChange: v,
                }),
                (0, n.jsx)(c.A, {
                    onClose: N,
                    setting: null != _ ? _ : C,
                }),
            ],
        }),
    });
}

function p(e) {
    return (0, n.jsx)(s.ms, {
        children: (0, n.jsx)(
            d,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
