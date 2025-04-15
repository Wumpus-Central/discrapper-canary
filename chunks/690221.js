r.d(t, { Z: () => h });
var n = r(200651),
    i = r(192379),
    s = r(481060),
    o = r(703656),
    l = r(981631);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let h = i.forwardRef(function (e, t) {
    var { href: r, children: h, onClick: v, onKeyPress: u, focusProps: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['href', 'children', 'onClick', 'onKeyPress', 'focusProps']);
    let d = i.useCallback(
            (e) => {
                e.repeat || ((e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != r && (0, o.uL)(r), null == v || v()), null == u || u(e));
            },
            [r, u, v]
        ),
        b = i.useCallback(
            (e) => {
                e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != r && (0, o.uL)(r), null == v || v());
            },
            [r, v]
        ),
        g = (0, n.jsx)(
            'a',
            c(
                a(
                    {
                        ref: t,
                        href: r,
                        onClick: b,
                        onKeyPress: d
                    },
                    p
                ),
                { children: h }
            )
        );
    return (0, n.jsx)(s.tEY, c(a({}, f), { children: g }));
});
