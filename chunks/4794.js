n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(55160),
    l = n(996435),
    c = n(36361),
    u = n(530171),
    d = n(175993),
    f = n(774642),
    p = n(445642);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
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
function g(e, t) {
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
function E(e) {
    let { node: t } = e,
        { useTitle: n, layout: a, useCollapsedSubtitle: _, useNotice: h } = t,
        [E, b] = i.useState(!1),
        [y, O] = i.useState(!0);
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
                    n && !E && (b(!0), O(!1)),
                        n && E && (l.Z.setState({ navTransition: g(m({}, e), { targetAccordionKey: void 0 }) }), O(!0));
                },
                {
                    equalityFn: s.X,
                    fireImmediately: !0,
                },
            ),
        [E, t.key],
    );
    let v = null == n ? void 0 : n(E),
        S = null == _ ? void 0 : _(),
        I = null == h ? void 0 : h(),
        T = i.useCallback(
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
            "--custom-base-setting-wrapper-horizontal-padding": "".concat(f.q, "px"),
            "--custom-base-setting-wrapper-vertical-padding": "".concat(f.G, "px"),
        },
        className: o()({ [p.open]: E }),
        children: (0, r.jsxs)(u.I, {
            title: v,
            collapsedSubtitle: S,
            isExpanded: E,
            onExpandedChange: b,
            onExpandedChangeComplete: T,
            animate: y,
            children: [null != I && (0, r.jsx)(d.Z, { notice: I }), a.map((e) => (0, r.jsx)(c.Z, { node: e }, e.key))],
        }),
    });
}
let b = i.memo(E);
