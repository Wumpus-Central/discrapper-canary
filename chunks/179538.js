n.d(t, { A: () => u });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(84735),
    a = n(993365),
    o = n(550762);
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
function u(e) {
    var { role: t = 'button', text: n, focusProps: r, variant: u = 'primary', textVariant: m = 'text-md/medium', lineClamp: g = 1 } = e,
        p = (function (e, t) {
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
        })(e, ['role', 'text', 'focusProps', 'variant', 'textVariant', 'lineClamp']);
    return (0, i.jsx)(
        l.t,
        d(c({}, r), {
            children: (0, i.jsx)(
                'button',
                d(
                    c(
                        {
                            role: t,
                            className: s()(o.textButton, o[u])
                        },
                        p
                    ),
                    {
                        children: (0, i.jsx)(a.x, {
                            tag: 'span',
                            variant: m,
                            color: 'none',
                            lineClamp: g,
                            className: o.text,
                            children: n
                        })
                    }
                )
            )
        })
    );
}
