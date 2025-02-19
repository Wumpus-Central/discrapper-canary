n.d(t, {
    Mv: () => h,
    PB: () => f,
    eq: () => N
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(25441),
    a = n(91192),
    l = n(657707),
    o = n(481060),
    c = n(209613),
    d = n(475413),
    u = n(307525);
function m(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e) {
    var { id: t, label: n, icon: c, hint: h, renderSubmenu: f } = e,
        N = p(e, ['id', 'label', 'icon', 'hint', 'renderSubmenu']);
    let x = (0, a.JA)(t),
        { onFocus: b } = x,
        _ = p(x, ['onFocus']),
        { id: E } = (0, a.f$)(),
        [j, C] = i.useState(!1),
        O = null != f;
    i.useLayoutEffect(() => {
        if (O)
            return (0, s.N)(E, (e) => {
                C(e === t);
            });
    }, [t, E, O]);
    let v = (e) =>
        (0, r.jsxs)(
            d.kF,
            g(m({}, e, _, N), {
                role: 'button',
                look: o.zxk.Looks.BLANK,
                innerClassName: u.menuItemInner,
                color: u.menuItemColor,
                themeColor: 'none',
                fullWidth: !0,
                onMouseEnter: () => {
                    var t;
                    null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e), b();
                },
                children: [
                    (0, r.jsx)(c, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, r.jsxs)('div', {
                        className: u.menuItemLabel,
                        children: [n, h]
                    }),
                    O &&
                        (0, r.jsx)(l.Fbu, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                ]
            })
        );
    return O
        ? (0, r.jsx)(o.yRy, {
              spacing: 0,
              renderPopout: f,
              shouldShow: j,
              onRequestClose: () => C(!1),
              children: v
          })
        : v();
}
function f(e) {
    let { id: t, children: n } = e,
        i = (0, c.Z)(t);
    return (0, r.jsx)(a.bG, {
        navigator: i,
        children: (0, r.jsx)(a.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    s = p(e, ['ref']);
                return (0, r.jsx)(
                    'div',
                    g(m({}, s), {
                        ref: t,
                        onMouseLeave: () => i.setFocus(null),
                        children: n
                    })
                );
            }
        })
    });
}
function N(e) {
    return (0, r.jsx)('div', {
        className: u.submenuPaddingContainer,
        children: (0, r.jsx)(
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
