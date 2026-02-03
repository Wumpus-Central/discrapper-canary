n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n(942381),
    a = n(770178),
    o = n(894858),
    c = n(641324),
    d = n(78837);
let u = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, useCollapsedSubtitle: _ } = t,
        [p, m] = i.useState(!1),
        [g, A] = i.useState(!0),
        f = i.useRef(p);
    i.useEffect(
        () =>
            o.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    let n = (null == e ? void 0 : e.targetAccordionKey) === t.key;
                    if ((n && !p && ((f.current = !0), m(!0), A(!1)), n && p)) {
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
                    equalityFn: s.x,
                    fireImmediately: !0,
                },
            ),
        [p, t.key],
    );
    let b = i.useCallback(
            (e) => {
                null == e.target ||
                    f.current === p ||
                    ((f.current = p),
                    p &&
                        o.A.setState({
                            navTransition: {
                                targetKey: t.key,
                                targetAccordionKey: t.key,
                                animateScroll: !0,
                                scrollBlock: "nearest",
                            },
                        }));
            },
            [p, t.key],
        ),
        h = i.useMemo(() => (0, l.debounce)(b, 50), [b]),
        E = (0, a.w)(h),
        O = null == n ? void 0 : n(p),
        x = null == _ ? void 0 : _();
    return (0, r.jsx)(d.f, {
        ref: E,
        title: O,
        collapsedSubtitle: x,
        isExpanded: p,
        onExpandedChange: m,
        animate: g,
        children: u.map((e) =>
            (0, r.jsx)(
                c.A,
                {
                    node: e,
                },
                e.key,
            ),
        ),
    });
});
