n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(55160),
    s = n(996435),
    c = n(36361),
    u = n(530171),
    d = n(175993),
    f = n(445642);
let p = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: i, useCollapsedSubtitle: p, useNotice: b } = t,
        [y, g] = l.useState(!1),
        [v, m] = l.useState(!0);
    l.useEffect(
        () =>
            s.Z.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if (null == e) return;
                    let n = (null == e ? void 0 : e.targetAccordionKey) === t.key;
                    if ((n && !y && (g(!0), m(!1)), n && y)) {
                        var r, l;
                        s.Z.setState({
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
                                (l = l = { targetAccordionKey: void 0 }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                r),
                        }),
                            m(!0);
                    }
                },
                {
                    equalityFn: a.X,
                    fireImmediately: !0,
                },
            ),
        [y, t.key],
    );
    let h = null == n ? void 0 : n(y),
        x = null == p ? void 0 : p(),
        j = null == b ? void 0 : b();
    return (0, r.jsx)("div", {
        className: o()({ [f.open]: y }),
        children: (0, r.jsxs)(u.I, {
            title: h,
            collapsedSubtitle: x,
            isOpen: y,
            setIsOpen: g,
            animate: v,
            children: [null != j && (0, r.jsx)(d.Z, { notice: j }), i.map((e) => (0, r.jsx)(c.Z, { node: e }, e.key))],
        }),
    });
});
