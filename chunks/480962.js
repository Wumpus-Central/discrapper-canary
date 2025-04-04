n.d(t, { _: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(539907),
    l = n(743236),
    c = n(21340),
    u = n(906944);
function d(e, t, n) {
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
function f(e) {
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { subMenuClassName: t, parentItem: n, isFocused: o, menuSubmenuProps: d, renderSubmenu: _ } = e,
        { focusIndex: m, isUsingKeyboardNavigation: g } = d,
        E = h(d, ['focusIndex', 'isUsingKeyboardNavigation']),
        b = i.useRef(null),
        y = i.useRef(null),
        v = i.useRef(null),
        [O, I] = i.useState(!1);
    return (
        i.useLayoutEffect(() => {
            I(!0);
        }, []),
        i.useLayoutEffect(() => {
            var e;
            o && ((0, l.F)(b), null == (e = v.current) || e.focus());
        }, [o]),
        (0, r.jsxs)('div', {
            ref: b,
            children: [
                (0, r.jsx)('div', { ref: y }),
                n,
                o && O
                    ? (0, r.jsx)(s.j, {
                          targetRef: y,
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          fixed: !0,
                          spacing: 4,
                          position: 'right',
                          align: 'top',
                          children: () =>
                              (0, r.jsx)('div', {
                                  className: u.submenuPaddingContainer,
                                  children: (0, r.jsx)(
                                      'div',
                                      p(f({ className: a()(u.submenu, t) }, E), {
                                          ref: v,
                                          children: (0, r.jsx)(c.zJ, {
                                              className: u.scroller,
                                              children: _()
                                          })
                                      })
                                  )
                              })
                      })
                    : null
            ]
        })
    );
}
