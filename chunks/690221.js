r.d(t, { Z: () => s });
var n = r(200651),
    h = r(192379),
    v = r(481060),
    i = r(703656),
    l = r(981631);
function o(e) {
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
function a(e, t) {
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
let s = h.forwardRef(function (e, t) {
    var { href: r, children: s, onClick: c, onKeyPress: f, focusProps: p } = e,
        Z = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                h = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        h = {},
                        v = Object.keys(e);
                    for (n = 0; n < v.length; n++) (r = v[n]), t.indexOf(r) >= 0 || (h[r] = e[r]);
                    return h;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var v = Object.getOwnPropertySymbols(e);
                for (n = 0; n < v.length; n++) (r = v[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (h[r] = e[r]);
            }
            return h;
        })(e, ['href', 'children', 'onClick', 'onKeyPress', 'focusProps']);
    let u = h.useCallback(
            (e) => {
                e.repeat || ((e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != r && (0, i.uL)(r), null == c || c()), null == f || f(e));
            },
            [r, f, c]
        ),
        M = h.useCallback(
            (e) => {
                e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != r && (0, i.uL)(r), null == c || c());
            },
            [r, c]
        ),
        d = (0, n.jsx)(
            'a',
            a(
                o(
                    {
                        ref: t,
                        href: r,
                        onClick: M,
                        onKeyPress: u
                    },
                    Z
                ),
                { children: s }
            )
        );
    return (0, n.jsx)(v.tEY, a(o({}, p), { children: d }));
});
