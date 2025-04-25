n.d(t, {
    V4: () => h,
    XE: () => f,
    gp: () => b
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(25441),
    l = n(91192),
    a = n(657707),
    o = n(481060),
    c = n(209613),
    d = n(475413),
    u = n(404255);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function h(e) {
    var { id: t, label: n, sublabel: c, icon: h, hint: f, renderSubmenu: b } = e,
        _ = g(e, ['id', 'label', 'sublabel', 'icon', 'hint', 'renderSubmenu']);
    let x = (0, l.JA)(t),
        { onFocus: E } = x,
        j = g(x, ['onFocus']),
        { id: C } = (0, l.f$)(),
        [O, S] = r.useState(!1),
        v = null != b;
    r.useLayoutEffect(() => {
        if (v)
            return (0, s.N)(C, (e) => {
                S(e === t);
            });
    }, [t, C, v]);
    let T = (e) =>
        (0, i.jsxs)(
            d.kF,
            p(m({}, e, j, _), {
                role: 'button',
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                innerClassName: u.menuItemInner,
                color: u.menuItemColor,
                themeColor: 'none',
                fullWidth: !0,
                onMouseEnter: () => {
                    var t;
                    null == e || null == (t = e.onMouseEnter) || t.call(e), E();
                },
                children: [
                    (0, i.jsx)('div', {
                        className: u.menuItemIcon,
                        children: (0, i.jsx)(h, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: u.menuItemLabel,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [n, c]
                            }),
                            f
                        ]
                    }),
                    v &&
                        (0, i.jsx)(a.Fbu, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                ]
            })
        );
    return v
        ? (0, i.jsx)(o.yRy, {
              spacing: 0,
              renderPopout: b,
              shouldShow: O,
              onRequestClose: () => S(!0),
              children: T
          })
        : T();
}
function f(e) {
    let { id: t, children: n } = e,
        r = (0, c.Z)(t);
    return (0, i.jsx)(l.bG, {
        navigator: r,
        children: (0, i.jsx)(l.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    s = g(e, ['ref']);
                return (0, i.jsx)(
                    'div',
                    p(m({}, s), {
                        ref: t,
                        onMouseLeave: () => r.setFocus(null),
                        children: n
                    })
                );
            }
        })
    });
}
function b(e) {
    return (0, i.jsx)('div', {
        className: u.submenuPaddingContainer,
        children: (0, i.jsx)(
            o.v2r,
            m(
                {
                    variant: 'fixed',
                    hideScroller: !0,
                    onSelect: void 0
                },
                e
            )
        )
    });
}
