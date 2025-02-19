n.d(t, { C: () => h });
var r = n(200651),
    i = n(192379),
    o = n(539907),
    a = n(743236),
    s = n(218867),
    l = n(253068);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: c, rows: d, rowHeight: _, onScroll: h, listClassName: m } = e,
        g = i.useRef(null),
        E = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        { isUsingKeyboardNavigation: y, focusIndex: O } = c,
        S = p(c, ['isUsingKeyboardNavigation', 'focusIndex']);
    i.useLayoutEffect(() => {
        var e;
        n && ((0, a.F)(g), null === (e = v.current) || void 0 === e || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && O >= 0 && y) {
                var e;
                null === (e = b.current) || void 0 === e || e.scrollRowIntoView(O);
            }
        }, [n, y, O]);
    let I = i.useCallback((e) => d[e], [d]);
    return (0, r.jsxs)('div', {
        ref: g,
        className: l.__invalid_submenuContainer,
        children: [
            (0, r.jsx)('div', { ref: E }),
            t,
            n
                ? (0, r.jsx)(o.j, {
                      targetRef: E,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      fixed: !0,
                      spacing: 4,
                      position: 'right',
                      align: 'top',
                      children: () =>
                          d.length > 0 &&
                          (0, r.jsx)('div', {
                              className: l.submenuPaddingContainer,
                              children: (0, r.jsx)(
                                  'div',
                                  f(u({ className: l.submenu }, S), {
                                      ref: v,
                                      children: (0, r.jsx)(s.Z, {
                                          ref: b,
                                          className: m,
                                          listPadding: [6, 0, 6, 8],
                                          onScroll: h,
                                          renderRow: I,
                                          rowCount: d.length,
                                          rowHeight: _
                                      })
                                  })
                              )
                          })
                  })
                : null
        ]
    });
}
