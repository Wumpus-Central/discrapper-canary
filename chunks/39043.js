n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(942381),
    o = n(894858),
    c = n(641324),
    d = n(78837);
n(465133);
var u = n(821443);
let _ = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: l, useCollapsedSubtitle: _ } = t,
        [p, m] = i.useState(!1),
        [g, A] = i.useState(!0);
    i.useEffect(
        () =>
            o.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if (null == e) return;
                    let n = (null == e ? void 0 : e.targetAccordionKey) === t.key;
                    if ((n && !p && (m(!0), A(!1)), n && p)) {
                        var r, i;
                        o.A.setState({
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
                            A(!0);
                    }
                },
                {
                    equalityFn: a.x,
                    fireImmediately: !0,
                },
            ),
        [p, t.key],
    );
    let f = null == n ? void 0 : n(p),
        h = null == _ ? void 0 : _(),
        b = i.useCallback(
            (e) => {
                e &&
                    o.A.setState({
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
    return (0, r.jsx)("div", {
        style: {
            "--custom-base-setting-wrapper-horizontal-padding": "".concat(12, "px"),
            "--custom-base-setting-wrapper-vertical-padding": "".concat(8, "px"),
        },
        className: s()({
            [u.h]: p,
        }),
        children: (0, r.jsx)(d.f, {
            title: f,
            collapsedSubtitle: h,
            isExpanded: p,
            onExpandedChange: m,
            onExpandedChangeComplete: b,
            animate: g,
            children: l.map((e) =>
                (0, r.jsx)(
                    c.A,
                    {
                        node: e,
                    },
                    e.key,
                ),
            ),
        }),
    });
});
