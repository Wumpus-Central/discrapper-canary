n.d(t, { C: () => g });
var r = n(54381),
    i = n(473749),
    a = n(762328),
    o = n(682973),
    s = n(743236),
    l = n(481060),
    c = n(218867),
    u = n(515527);
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
function p(e, t) {
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: d, rows: _, rowHeight: m, onScroll: g, listClassName: E } = e,
        b = i.useRef(null),
        y = i.useRef(null),
        O = i.useRef(null),
        v = i.useRef(null),
        { isUsingKeyboardNavigation: I, focusIndex: T } = d,
        S = h(d, ["isUsingKeyboardNavigation", "focusIndex"]);
    i.useLayoutEffect(() => {
        var e;
        n && ((0, s.F)(b), null == (e = O.current) || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && T >= 0 && I) {
                var e;
                null == (e = v.current) || e.scrollRowIntoView(T);
            }
        }, [n, I, T]);
    let A = i.useCallback((e) => _[e], [_]),
        C = (0, o.E)("MenuSubmenuListItem"),
        N = () =>
            _.length > 0 &&
            (0, r.jsx)("div", {
                className: u.submenuPaddingContainer,
                children: (0, r.jsx)(
                    "div",
                    p(f({ className: u.submenu }, S), {
                        ref: O,
                        children: (0, r.jsx)(c.Z, {
                            ref: v,
                            className: E,
                            listPadding: [6, 0, 6, 8],
                            onScroll: g,
                            renderRow: A,
                            rowCount: _.length,
                            rowHeight: m,
                        }),
                    }),
                ),
            });
    if (C)
        return (0, r.jsx)(a.pS, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            renderLayer: N,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", p(f({ ref: n }, i), { children: t }));
            },
        });
    let R = (0, r.jsx)(l.jRF, {
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
        children: [(0, r.jsx)("div", { ref: y }), t, n ? R : null],
    });
}
