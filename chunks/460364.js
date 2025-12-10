n.d(t, { C: () => g });
var r = n(54381),
    i = n(473749),
    a = n(762328),
    o = n(682973),
    s = n(743236),
    l = n(481060),
    c = n(218867),
    u = n(334405);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: d, rows: p, rowHeight: h, onScroll: g, listClassName: E } = e,
        b = i.useRef(null),
        y = i.useRef(null),
        O = i.useRef(null),
        v = i.useRef(null),
        { isUsingKeyboardNavigation: S, focusIndex: I } = d,
        T = m(d, ["isUsingKeyboardNavigation", "focusIndex"]);
    i.useLayoutEffect(() => {
        var e;
        n && ((0, s.F)(b), null == (e = O.current) || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && I >= 0 && S) {
                var e;
                null == (e = v.current) || e.scrollRowIntoView(I);
            }
        }, [n, S, I]);
    let C = i.useCallback((e) => p[e], [p]),
        A = (0, o.E)("MenuSubmenuListItem"),
        N = () =>
            p.length > 0 &&
            (0, r.jsx)("div", {
                className: u.submenuPaddingContainer,
                children: (0, r.jsx)(
                    "div",
                    _(f({ className: u.submenu }, T), {
                        ref: O,
                        children: (0, r.jsx)(c.Z, {
                            ref: v,
                            className: E,
                            listPadding: [6, 0, 6, 8],
                            onScroll: g,
                            renderRow: C,
                            rowCount: p.length,
                            rowHeight: h,
                        }),
                    }),
                ),
            });
    if (A)
        return (0, r.jsx)(a.pS, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            renderLayer: N,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", _(f({ ref: n }, i), { children: t }));
            },
        });
    let P = (0, r.jsx)(l.jRF, {
        targetRef: y,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: N,
    });
    return (0, r.jsxs)("div", {
        ref: b,
        children: [(0, r.jsx)("div", { ref: y }), t, n ? P : null],
    });
}
