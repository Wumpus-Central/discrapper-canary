r.d(t, { Z: () => u });
var n = r(200651),
    o = r(192379),
    l = r(481060),
    s = r(703656),
    c = r(981631);
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
function i(e, t) {
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
let u = o.forwardRef(function (e, t) {
    var { href: r, children: u, onClick: b, onKeyPress: p, focusProps: f } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['href', 'children', 'onClick', 'onKeyPress', 'focusProps']);
    let h = o.useCallback(
            (e) => {
                e.repeat || ((e.charCode === c.yXg.SPACE || e.charCode === c.yXg.ENTER) && (e.preventDefault(), null != r && (0, s.uL)(r), null == b || b()), null == p || p(e));
            },
            [r, p, b]
        ),
        y = o.useCallback(
            (e) => {
                e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != r && (0, s.uL)(r), null == b || b());
            },
            [r, b]
        ),
        m = (0, n.jsx)(
            'a',
            i(
                a(
                    {
                        ref: t,
                        href: r,
                        onClick: y,
                        onKeyPress: h
                    },
                    d
                ),
                { children: u }
            )
        );
    return (0, n.jsx)(l.tEY, i(a({}, f), { children: m }));
});
