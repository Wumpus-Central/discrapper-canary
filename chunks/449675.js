r.d(e, { default: () => l });
var n = r(54381);
r(473749);
var o = r(793030),
    c = r(65912),
    i = r(388032);
function l(t) {
    var e,
        r,
        { ruleName: l, onConfirm: u } = t,
        f = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(t);
                    for (n = 0; n < c.length; n++) (r = c[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(t);
                for (n = 0; n < c.length; n++)
                    (r = c[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["ruleName", "onConfirm"]);
    let { setEditingRule: b } = (0, c.V)(),
        p = null != l ? l : i.intl.string(i.t.ffR2cM);
    return (0, n.jsx)(
        o.ConfirmModal,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })({}, f)),
        (r = r =
            {
                title: i.intl.string(i.t.kknTmH),
                subtitle: i.intl.format(i.t["ff/gx7"], { ruleName: p }),
                confirmText: i.intl.string(i.t["cY+Oob"]),
                onConfirm: () => {
                    b(null), null == u || u();
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e),
    );
}
