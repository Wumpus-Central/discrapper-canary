n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(787205);
function s(e) {
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
function u(e) {
    var { padded: t = !0, inset: n = !1, active: i = !1, className: u, children: d, onClick: p } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['padded', 'inset', 'active', 'className', 'children', 'onClick']);
    return null != p
        ? (0, r.jsx)(
              a.P3F,
              c(
                  s(
                      {
                          onClick: p,
                          tabIndex: null != p ? 0 : -1,
                          className: l()(u, {
                              [o.outer]: !n,
                              [o.inset]: n,
                              [o.padded]: t,
                              [o.active]: i,
                              [o.interactive]: null != p
                          })
                      },
                      h
                  ),
                  { children: d }
              )
          )
        : (0, r.jsx)(
              'div',
              c(
                  s(
                      {
                          className: l()(u, {
                              [o.outer]: !n,
                              [o.inset]: n,
                              [o.padded]: t,
                              [o.active]: i
                          })
                      },
                      h
                  ),
                  { children: d }
              )
          );
}
