n.d(t, { c: () => E });
var r = n(627968),
    i = n(64700),
    a = n(508382),
    s = n(502939),
    o = n(563014),
    l = n(397927),
    c = n(962125),
    u = n(885621),
    d = n(658122);
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
function m(e, t) {
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
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function E(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: f, rows: _, rowHeight: g, onScroll: E, listClassName: b } = e,
        y = i.useRef(null),
        O = i.useRef(null),
        A = i.useRef(null),
        v = i.useRef(null),
        { isUsingKeyboardNavigation: S, focusIndex: I } = f,
        T = m(f, ["isUsingKeyboardNavigation", "focusIndex"]);
    i.useLayoutEffect(() => {
        var e;
        n && ((0, o.Y)(y), null == (e = A.current) || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && I >= 0 && S) {
                var e;
                null == (e = v.current) || e.scrollRowIntoView(I);
            }
        }, [n, S, I]);
    let C = i.useCallback((e) => _[e], [_]),
        N = (0, s.D)("MenuSubmenuListItem"),
        R = () =>
            _.length > 0 &&
            (0, r.jsx)("div", {
                className: d.submenuPaddingContainer,
                children: (0, r.jsx)(
                    "div",
                    h(p({ className: d.submenu }, T), {
                        ref: A,
                        children: (0, r.jsx)(c.A, {
                            ref: v,
                            className: b,
                            listPadding: [6, 0, 6, 8],
                            onScroll: E,
                            renderRow: C,
                            rowCount: _.length,
                            rowHeight: g,
                        }),
                    }),
                ),
            });
    if (N)
        return (0, r.jsx)(a.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: u.FD,
            maxHeight: u.H0,
            renderLayer: R,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", h(p({ ref: n }, i), { children: t }));
            },
        });
    let w = (0, r.jsx)(l.QCO, {
        targetRef: O,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: R,
    });
    return (0, r.jsxs)("div", {
        ref: y,
        children: [(0, r.jsx)("div", { ref: O }), t, n ? w : null],
    });
}
