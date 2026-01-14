n.d(t, { C: () => E });
var r = n(54381),
    i = n(473749),
    a = n(762328),
    o = n(682973),
    s = n(743236),
    l = n(481060),
    c = n(218867),
    u = n(939350),
    d = n(564546);
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
function m(e, t) {
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
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: f, rows: _, rowHeight: g, onScroll: E, listClassName: b } = e,
        y = i.useRef(null),
        O = i.useRef(null),
        v = i.useRef(null),
        S = i.useRef(null),
        { isUsingKeyboardNavigation: I, focusIndex: T } = f,
        C = h(f, ["isUsingKeyboardNavigation", "focusIndex"]);
    i.useLayoutEffect(() => {
        var e;
        n && ((0, s.F)(y), null == (e = v.current) || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && T >= 0 && I) {
                var e;
                null == (e = S.current) || e.scrollRowIntoView(T);
            }
        }, [n, I, T]);
    let A = i.useCallback((e) => _[e], [_]),
        N = (0, o.E)("MenuSubmenuListItem"),
        P = () =>
            _.length > 0 &&
            (0, r.jsx)("div", {
                className: d.submenuPaddingContainer,
                children: (0, r.jsx)(
                    "div",
                    m(p({ className: d.submenu }, C), {
                        ref: v,
                        children: (0, r.jsx)(c.Z, {
                            ref: S,
                            className: b,
                            listPadding: [6, 0, 6, 8],
                            onScroll: E,
                            renderRow: A,
                            rowCount: _.length,
                            rowHeight: g,
                        }),
                    }),
                ),
            });
    if (N)
        return (0, r.jsx)(a.pS, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: u.sb,
            maxHeight: u.Ts,
            renderLayer: P,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", m(p({ ref: n }, i), { children: t }));
            },
        });
    let R = (0, r.jsx)(l.jRF, {
        targetRef: O,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: P,
    });
    return (0, r.jsxs)("div", {
        ref: y,
        children: [(0, r.jsx)("div", { ref: O }), t, n ? R : null],
    });
}
