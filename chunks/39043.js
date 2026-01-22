n.d(t, { A: () => g }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(894858),
    c = n(641324),
    u = n(78837);
n(465133);
var d = n(821443);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { node: t } = e,
        { useTitle: n, layout: a, useCollapsedSubtitle: f } = t,
        [_, m] = i.useState(!1),
        [g, E] = i.useState(!0);
    i.useEffect(
        () =>
            l.A.subscribe(
                (e) => {
                    let { navTransition: t } = e;
                    return t;
                },
                (e) => {
                    if (null == e) return;
                    let n = (null == e ? void 0 : e.targetAccordionKey) === t.key;
                    n && !_ && (m(!0), E(!1)),
                        n && _ && (l.A.setState({ navTransition: h(p({}, e), { targetAccordionKey: void 0 }) }), E(!0));
                },
                {
                    equalityFn: o.x,
                    fireImmediately: !0,
                },
            ),
        [_, t.key],
    );
    let b = null == n ? void 0 : n(_),
        y = null == f ? void 0 : f(),
        O = i.useCallback(
            (e) => {
                e &&
                    l.A.setState({
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
        className: s()({ [d.h]: _ }),
        children: (0, r.jsx)(u.f, {
            title: b,
            collapsedSubtitle: y,
            isExpanded: _,
            onExpandedChange: m,
            onExpandedChangeComplete: O,
            animate: g,
            children: a.map((e) => (0, r.jsx)(c.A, { node: e }, e.key)),
        }),
    });
}
let g = i.memo(m);
