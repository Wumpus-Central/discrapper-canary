n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(60747);

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
    let {
            padded: t = !0,
            inset: n = !1,
            active: i = !1,
            className: u,
            children: d,
            onClick: p,
            ref: f,
            noBackground: h = !1,
        } = e,
        A = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["padded", "inset", "active", "className", "children", "onClick", "ref", "noBackground"]);
    return null != p
        ? (0, r.jsx)(
              a.DUT,
              c(
                  o(
                      {
                          innerRef: f,
                          onClick: p,
                          tabIndex: null != p ? 0 : -1,
                          className: l()(u, {
                              [s.A7]: !n,
                              [s.C5]: n,
                              [s.jC]: t,
                              [s.vu]: i,
                              [s.bG]: null != p,
                              [s._$]: h,
                          }),
                      },
                      A,
                  ),
                  {
                      children: d,
                  },
              ),
          )
        : (0, r.jsx)(
              "div",
              c(
                  o(
                      {
                          ref: f,
                          className: l()(u, {
                              [s.A7]: !n,
                              [s.C5]: n,
                              [s.jC]: t,
                              [s.vu]: i,
                              [s._$]: h,
                          }),
                      },
                      A,
                  ),
                  {
                      children: d,
                  },
              ),
          );
}
