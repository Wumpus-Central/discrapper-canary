n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(942381),
    s = n(894858),
    a = n(641324),
    o = n(78837);
let c = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: c, useCollapsedSubtitle: d } = t,
        [u, _] = i.useState(!1),
        [p, m] = i.useState(!0);
    i.useEffect(
        () =>
            s.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if (null == e) return;
                    let n = (null == e ? void 0 : e.targetAccordionKey) === t.key;
                    if ((n && !u && (_(!0), m(!1)), n && u)) {
                        var r, i;
                        s.A.setState({
                            navTransition:
                                ((r = (function (e) {
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
                                })({}, e)),
                                (i = i =
                                    {
                                        targetAccordionKey: void 0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                r),
                        }),
                            m(!0);
                    }
                },
                {
                    equalityFn: l.x,
                    fireImmediately: !0,
                },
            ),
        [u, t.key],
    );
    let g = null == n ? void 0 : n(u),
        A = null == d ? void 0 : d(),
        f = i.useCallback(
            (e) => {
                e &&
                    s.A.setState({
                        navTransition: {
                            targetKey: t.key,
                            targetAccordionKey: t.key,
                            animateScroll: !0,
                            scrollBlock: "nearest",
                        },
                    });
            },
            [t.key],
        );
    return (0, r.jsx)(o.f, {
        title: g,
        collapsedSubtitle: A,
        isExpanded: u,
        onExpandedChange: _,
        onExpandedChangeComplete: f,
        animate: p,
        children: c.map((e) =>
            (0, r.jsx)(
                a.A,
                {
                    node: e,
                },
                e.key,
            ),
        ),
    });
});
