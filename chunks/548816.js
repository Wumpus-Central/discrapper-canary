n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(890333);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    var {
            padded: t = !0,
            inset: n = !1,
            active: i = !1,
            className: u,
            children: d,
            onClick: p,
            ref: f,
            noBackground: m = !1,
        } = e,
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["padded", "inset", "active", "className", "children", "onClick", "ref", "noBackground"]);
    return null != p
        ? (0, r.jsx)(
              a.P3F,
              c(
                  o(
                      {
                          innerRef: f,
                          onClick: p,
                          tabIndex: null != p ? 0 : -1,
                          className: l()(u, {
                              [s.outer]: !n,
                              [s.inset]: n,
                              [s.padded]: t,
                              [s.active]: i,
                              [s.interactive]: null != p,
                              [s.noBackground]: m,
                          }),
                      },
                      h,
                  ),
                  { children: d },
              ),
          )
        : (0, r.jsx)(
              "div",
              c(
                  o(
                      {
                          ref: f,
                          className: l()(u, {
                              [s.outer]: !n,
                              [s.inset]: n,
                              [s.padded]: t,
                              [s.active]: i,
                              [s.noBackground]: m,
                          }),
                      },
                      h,
                  ),
                  { children: d },
              ),
          );
}
