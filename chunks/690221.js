n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    o = n(703656),
    l = n(981631);
function a(e) {
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
function c(e, t) {
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
let u = i.forwardRef(function (e, t) {
    var { href: n, children: u, onClick: d, onKeyPress: f, focusProps: p } = e,
        g = (function (e, t) {
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
        })(e, ['href', 'children', 'onClick', 'onKeyPress', 'focusProps']);
    let b = i.useCallback(
            (e) => {
                e.repeat || ((e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == d || d()), null == f || f(e));
            },
            [n, f, d]
        ),
        m = i.useCallback(
            (e) => {
                e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == d || d());
            },
            [n, d]
        ),
        h = (0, r.jsx)(
            'a',
            c(
                a(
                    {
                        ref: t,
                        href: n,
                        onClick: m,
                        onKeyPress: b
                    },
                    g
                ),
                { children: u }
            )
        );
    return (0, r.jsx)(s.tEY, c(a({}, p), { children: h }));
});
