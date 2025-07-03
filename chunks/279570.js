n.d(t, { Q: () => m });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(84735),
    a = n(369426),
    o = n(485653);
function c(e) {
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
function d(e, t) {
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
let u = {
    sm: 'xs',
    md: 'refresh_sm',
    lg: 'md'
};
function m(e) {
    var { role: t = 'button', size: n = 'md', variant: r = 'secondary', icon: m, iconOpticalOffsetMargin: g = 0, focusProps: p, pressed: h = !1, 'aria-label': f, className: b, style: x } = e,
        _ = (function (e, t) {
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
        })(e, ['role', 'size', 'variant', 'icon', 'iconOpticalOffsetMargin', 'focusProps', 'pressed', 'aria-label', 'className', 'style']);
    return (0, i.jsx)(
        l.t,
        d(c({}, p), {
            children: (0, i.jsx)(
                'button',
                d(
                    c(
                        {
                            role: t,
                            'aria-pressed': h,
                            className: s()(a.button, o.button, a[n], o[r], { [o.pressed]: h }),
                            'aria-label': f
                        },
                        _
                    ),
                    {
                        children: (0, i.jsx)('div', {
                            className: a.buttonChildrenWrapper,
                            children: (0, i.jsx)(m, {
                                color: 'currentColor',
                                style: 0 === g ? {} : { marginLeft: g },
                                size: u[n]
                            })
                        })
                    }
                )
            )
        })
    );
}
