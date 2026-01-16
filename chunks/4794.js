n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(782425),
    l = n(996435),
    c = n(36361),
    u = n(530171),
    d = n(774642),
    f = n(816902);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { node: t } = e,
        { useTitle: n, layout: a, useCollapsedSubtitle: p } = t,
        [h, g] = i.useState(!1),
        [E, b] = i.useState(!0);
    i.useEffect(
        () =>
            l.Z.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if (null == e) return;
                    let n = (null == e ? void 0 : e.targetAccordionKey) === t.key;
                    n && !h && (g(!0), b(!1)),
                        n && h && (l.Z.setState({ navTransition: m(_({}, e), { targetAccordionKey: void 0 }) }), b(!0));
                },
                {
                    equalityFn: s.X,
                    fireImmediately: !0,
                },
            ),
        [h, t.key],
    );
    let y = null == n ? void 0 : n(h),
        O = null == p ? void 0 : p(),
        v = i.useCallback(
            (e) => {
                e &&
                    l.Z.setState({
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
            "--custom-base-setting-wrapper-horizontal-padding": "".concat(d.q, "px"),
            "--custom-base-setting-wrapper-vertical-padding": "".concat(d.G, "px"),
        },
        className: o()({ [f.open]: h }),
        children: (0, r.jsx)(u.I, {
            title: y,
            collapsedSubtitle: O,
            isExpanded: h,
            onExpandedChange: g,
            onExpandedChangeComplete: v,
            animate: E,
            children: a.map((e) => (0, r.jsx)(c.Z, { node: e }, e.key)),
        }),
    });
}
let E = i.memo(g);
