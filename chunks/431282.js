(n.d(t, {
    V4: () => f,
    XE: () => b,
    gp: () => x
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(25441),
    a = n(91192),
    l = n(657707),
    o = n(755721),
    c = n(481060),
    d = n(209613),
    u = n(475413),
    m = n(404255);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
function h(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
}
function f(e) {
    var { id: t, label: n, sublabel: d, icon: f, hint: b, renderSubmenu: x } = e,
        _ = h(e, ['id', 'label', 'sublabel', 'icon', 'hint', 'renderSubmenu']);
    let j = (0, a.JA)(t),
        { onFocus: O } = j,
        C = h(j, ['onFocus']),
        { id: E } = (0, a.f$)(),
        v = r.useRef(null),
        [S, T] = r.useState(!1),
        N = null != x;
    r.useLayoutEffect(() => {
        if (N)
            return (0, s.N)(E, (e) => {
                T(e === t);
            });
    }, [t, E, N]);
    let I = (e) =>
        (0, i.jsxs)(
            u.kF,
            g(p({}, e, C, _), {
                ref: v,
                role: 'button',
                look: o.zx.Looks.BLANK,
                size: o.zx.Sizes.NONE,
                innerClassName: m.menuItemInner,
                color: m.menuItemColor,
                themeColor: 'none',
                fullWidth: !0,
                onMouseEnter: () => {
                    var t;
                    (null == e || null == (t = e.onMouseEnter) || t.call(e), O());
                },
                children: [
                    (0, i.jsx)('div', {
                        className: m.menuItemIcon,
                        children: (0, i.jsx)(f, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: m.menuItemLabel,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [n, d]
                            }),
                            b
                        ]
                    }),
                    N &&
                        (0, i.jsx)(l.Fbu, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                ]
            })
        );
    return N
        ? (0, i.jsx)(c.yRy, {
              targetElementRef: v,
              spacing: 0,
              renderPopout: x,
              shouldShow: S,
              onRequestClose: () => T(!0),
              children: I
          })
        : I();
}
function b(e) {
    let { id: t, children: n } = e,
        r = (0, d.Z)(t);
    return (0, i.jsx)(a.bG, {
        navigator: r,
        children: (0, i.jsx)(a.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    s = h(e, ['ref']);
                return (0, i.jsx)(
                    'div',
                    g(p({}, s), {
                        ref: t,
                        onMouseLeave: () => r.setFocus(null),
                        children: n
                    })
                );
            }
        })
    });
}
function x(e) {
    return (0, i.jsx)('div', {
        className: m.submenuPaddingContainer,
        children: (0, i.jsx)(
            c.v2r,
            p(
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
