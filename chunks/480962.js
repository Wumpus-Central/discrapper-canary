n.d(t, { _: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(762328),
    l = n(793030),
    c = n(682973),
    u = n(743236),
    d = n(481060),
    f = n(720312),
    p = n(939350),
    _ = n(564546);
function h(e, t, n) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = "right-start",
    v = i.createContext(O);
function S(e) {
    let t = i.useContext(v),
        { subMenuClassName: n, parentItem: a, isFocused: h, menuSubmenuProps: g, renderSubmenu: y } = e,
        { focusIndex: O, isUsingKeyboardNavigation: S } = g,
        I = b(g, ["focusIndex", "isUsingKeyboardNavigation"]),
        T = i.useRef(null),
        C = i.useRef(null),
        A = i.useRef(null),
        [N, P] = i.useState(!1);
    i.useLayoutEffect(() => {
        P(!0);
    }, []),
        i.useLayoutEffect(() => {
            h && (0, u.F)(T);
        }, [h]);
    let w = (0, r.jsx)("div", {
            className: _.submenuPaddingContainer,
            children: (0, r.jsx)(
                "div",
                E(m({ className: o()(_.submenu, n) }, I), {
                    ref: A,
                    children: (0, r.jsx)(l.zJl, {
                        className: _.scroller,
                        children: y(),
                    }),
                }),
            ),
        }),
        R = (0, c.E)("MenuSubmenuItem"),
        D = (0, f.c)("MenuSubmenuItem"),
        [x, L] = i.useState(!1);
    if (R)
        return (0, r.jsx)(s.pS, {
            open: x || h,
            viewportPadding: p.sb,
            maxHeight: p.Ts,
            onOpenChange: L,
            spacing: D ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(v.Provider, {
                    value: t,
                    children: w,
                });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", E(m({ ref: t }, n), { children: a }));
            },
        });
    let j = (0, r.jsx)(d.jRF, {
        targetRef: C,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: () => w,
    });
    return (0, r.jsxs)("div", {
        ref: T,
        children: [(0, r.jsx)("div", { ref: C }), a, h && N ? j : null],
    });
}
