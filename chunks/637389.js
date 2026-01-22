n.d(t, { u: () => v }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508382),
    l = n(158954),
    c = n(502939),
    u = n(563014),
    d = n(397927),
    f = n(298063),
    p = n(885621),
    _ = n(658122);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let O = "right-start",
    A = i.createContext(O);
function v(e) {
    let t = i.useContext(A),
        { subMenuClassName: n, parentItem: a, isFocused: h, menuSubmenuProps: g, renderSubmenu: y } = e,
        { focusIndex: O, isUsingKeyboardNavigation: v } = g,
        S = b(g, ["focusIndex", "isUsingKeyboardNavigation"]),
        I = i.useRef(null),
        T = i.useRef(null),
        C = i.useRef(null),
        [N, R] = i.useState(!1);
    i.useLayoutEffect(() => {
        R(!0);
    }, []),
        i.useLayoutEffect(() => {
            h && (0, u.Y)(I);
        }, [h]);
    let w = (0, r.jsx)("div", {
            className: _.submenuPaddingContainer,
            children: (0, r.jsx)(
                "div",
                E(m({ className: s()(_.submenu, n) }, S), {
                    ref: C,
                    children: (0, r.jsx)(l.IpV, {
                        className: _.scroller,
                        children: y(),
                    }),
                }),
            ),
        }),
        P = (0, c.D)("MenuSubmenuItem"),
        D = (0, f.Y)("MenuSubmenuItem"),
        [x, L] = i.useState(!1);
    if (P)
        return (0, r.jsx)(o.Ow, {
            open: x || h,
            viewportPadding: p.FD,
            maxHeight: p.H0,
            onOpenChange: L,
            spacing: D ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(A.Provider, {
                    value: t,
                    children: w,
                });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", E(m({ ref: t }, n), { children: a }));
            },
        });
    let j = (0, r.jsx)(d.QCO, {
        targetRef: T,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: () => w,
    });
    return (0, r.jsxs)("div", {
        ref: I,
        children: [(0, r.jsx)("div", { ref: T }), a, h && N ? j : null],
    });
}
