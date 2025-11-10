n.d(t, { _: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(762328),
    l = n(793030),
    c = n(682973),
    u = n(743236),
    d = n(481060),
    f = n(334405);
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
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    let { subMenuClassName: t, parentItem: n, isFocused: a, menuSubmenuProps: _, renderSubmenu: h } = e,
        { focusIndex: E, isUsingKeyboardNavigation: b } = _,
        y = g(_, ["focusIndex", "isUsingKeyboardNavigation"]),
        O = i.useRef(null),
        v = i.useRef(null),
        I = i.useRef(null),
        [S, T] = i.useState(!1);
    i.useLayoutEffect(() => {
        T(!0);
    }, []),
        i.useLayoutEffect(() => {
            var e;
            a && ((0, u.F)(O), null == (e = I.current) || e.focus());
        }, [a]);
    let A = (0, r.jsx)("div", {
            className: f.submenuPaddingContainer,
            children: (0, r.jsx)(
                "div",
                m(p({ className: o()(f.submenu, t) }, y), {
                    ref: I,
                    children: (0, r.jsx)(l.zJl, {
                        className: f.scroller,
                        children: h(),
                    }),
                }),
            ),
        }),
        C = (0, c.E)("MenuSubmenuItem"),
        [N, R] = i.useState(!1);
    if (C)
        return (0, r.jsx)(s.pS, {
            open: N,
            onOpenChange: R,
            spacing: 4,
            placement: "right-start",
            portal: !1,
            trigger: "hover",
            renderLayer: () => A,
            children: (e) => {
                let { ref: t, props: i } = e;
                return (0, r.jsx)("div", m(p({ ref: t }, i), { children: n }));
            },
        });
    let P = (0, r.jsx)(d.jRF, {
        targetRef: v,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: () => A,
    });
    return (0, r.jsxs)("div", {
        ref: O,
        children: [(0, r.jsx)("div", { ref: v }), n, a && S ? P : null],
    });
}
