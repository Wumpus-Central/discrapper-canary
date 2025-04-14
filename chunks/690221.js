n.d(t, { Z: () => u });
var a = n(200651),
    r = n(192379),
    i = n(481060),
    o = n(703656),
    l = n(981631);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = r.forwardRef(function (e, t) {
    var { href: n, children: u, onClick: _, onKeyPress: d, focusProps: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['href', 'children', 'onClick', 'onKeyPress', 'focusProps']);
    let m = r.useCallback(
            (e) => {
                e.repeat || ((e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == _ || _()), null == d || d(e));
            },
            [n, d, _]
        ),
        g = r.useCallback(
            (e) => {
                e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == _ || _());
            },
            [n, _]
        ),
        I = (0, a.jsx)(
            'a',
            s(
                c(
                    {
                        ref: t,
                        href: n,
                        onClick: g,
                        onKeyPress: m
                    },
                    p
                ),
                { children: u }
            )
        );
    return (0, a.jsx)(i.tEY, s(c({}, f), { children: I }));
});
