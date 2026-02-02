n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    o = n(64700),
    a = n(942381),
    l = n(964486),
    i = n(250703),
    c = n(877260),
    s = n(823092),
    u = n(199966),
    d = n(669550),
    _ = n(894858),
    b = n(500425);

function p(e) {
    var t;
    let {
            partialRoot: n,
            target: p,
            defaultTarget: f,
            onClose: y,
            sidebarFooter: g,
            onPanelChange: m,
            emptyState: O,
            searchQuery: h,
            onSearchChange: j,
        } = e,
        x = _.A.useField("currentPanelKey"),
        { node: v, visibleDirectory: S, accessibleDirectory: C } = (0, d.Ay)(n, null != h ? h : ""),
        P = null != p && (null == (t = S.entry(p)) ? void 0 : t.parentPanelKey) != null ? p : f,
        w = o.useMemo(() => {
            var e;
            let t = null == (e = C.entry(null != x ? x : P)) ? void 0 : e.parentPanelKey;
            if (null != t) return C.getPanelOrThrow(t);
        }, [x, C, P]),
        { navigateWithValidation: k } = (0, s.L_)();
    (0, l.Ay)(() => {
        var e, t, n;
        let r = S.entry(P).parentPanelKey,
            o = null == (e = S.entry(P)) ? void 0 : e.parentTabKey,
            a = null == (t = S.entry(P)) ? void 0 : t.parentCategoryKey,
            l = null == (n = S.entry(P)) ? void 0 : n.parentAccordionKey;
        return (
            _.A.setState({
                currentPanelKey: r,
                currentTabKeys: null != o ? new Map([[r, o]]) : new Map(),
                currentCategoryKey: a,
                navTransition: {
                    targetKey: P,
                    targetAccordionKey: l,
                    animateScroll: !1,
                },
                showNavigationMobile: null == p,
            }),
            () => _.A.resetState()
        );
    }),
        o.useEffect(
            () =>
                _.A.subscribe(
                    (e) => ({
                        requestedTargetKey: e.requestedTargetKey,
                        currentPanelKey: e.currentPanelKey,
                    }),
                    (e) => {
                        let { requestedTargetKey: t, currentPanelKey: n } = e;
                        if (null == t) return;
                        let r = S.entry(t);
                        if (null == r) {
                            null == j || j("");
                            return;
                        }
                        let o = r.parentPanelKey;
                        if (null == o)
                            return void _.A.setState({
                                requestedTargetKey: void 0,
                            });
                        let a = _.A.getField("currentTabKeys"),
                            l = null != r.parentTabKey ? new Map(a).set(o, r.parentTabKey) : a,
                            i = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === a.get(o)),
                            c = () => {
                                _.A.setState({
                                    requestedTargetKey: void 0,
                                    currentPanelKey: r.parentPanelKey,
                                    currentTabKeys: l,
                                    currentCategoryKey: r.parentCategoryKey,
                                    navTransition: {
                                        targetKey: t,
                                        targetAccordionKey: r.parentAccordionKey,
                                        animateScroll: i,
                                    },
                                });
                            };
                        r.parentPanelKey !== n
                            ? k(() => {
                                  c(), null == m || m(o);
                              })
                            : c();
                    },
                    {
                        equalityFn: a.x,
                    },
                ),
            [S, k, m, j],
        );
    let T = o.useMemo(
            () => ({
                visibleDirectory: S,
                accessibleDirectory: C,
            }),
            [S, C],
        ),
        A = o.useMemo(() => () => k(y), [k, y]),
        E = null != x ? S.get(x) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: T,
        children: (0, r.jsxs)("div", {
            className: b.k,
            children: [
                (0, r.jsx)(c.L, {
                    root: v,
                    footer: g,
                    onClose: A,
                    emptyState: O,
                    searchQuery: h,
                    onSearchChange: j,
                }),
                (0, r.jsx)(i.A, {
                    onClose: A,
                    setting: null != E ? E : w,
                }),
            ],
        }),
    });
}

function f(e) {
    return (0, r.jsx)(s.ms, {
        children: (0, r.jsx)(
            p,
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
            })({}, e),
        ),
    });
}
