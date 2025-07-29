n.d(t, { Q: () => m });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(84735),
    l = n(369426),
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
    var { role: t = 'button', type: n = 'button', size: r = 'md', variant: m = 'secondary', icon: p, iconOpticalOffsetMargin: g = 0, focusProps: h, pressed: f = !1, 'aria-label': b, className: x, style: _ } = e,
        j = (function (e, t) {
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
        })(e, ['role', 'type', 'size', 'variant', 'icon', 'iconOpticalOffsetMargin', 'focusProps', 'pressed', 'aria-label', 'className', 'style']);
    return (0, i.jsx)(
        a.t,
        d(c({}, h), {
            children: (0, i.jsx)(
                'button',
                d(
                    c(
                        {
                            role: t,
                            type: n,
                            'aria-pressed': f,
                            className: s()(l.button, o.button, l[r], o[m], { [o.pressed]: f }),
                            'aria-label': b
                        },
                        j
                    ),
                    {
                        children: (0, i.jsx)('div', {
                            className: l.buttonChildrenWrapper,
                            children: (0, i.jsx)(p, {
                                color: 'currentColor',
                                style: 0 === g ? {} : { marginLeft: g },
                                size: u[r]
                            })
                        })
                    }
                )
            )
        })
    );
}
