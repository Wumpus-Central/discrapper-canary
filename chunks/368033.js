r.d(t, { default: () => y });
var n = r(627968),
    o = r(64700),
    c = r(158954),
    i = r(311907),
    l = r(256415),
    s = r(531685),
    u = r(723702),
    a = r(837921),
    p = r(9302),
    f = r(652215),
    b = r(985018);
function y(e) {
    var t, r;
    let { transitionState: y, onClose: O, contextKey: d } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["transitionState", "onClose", "contextKey"]),
        j = (0, i.bG)([s.A], () => s.A.isFocused()),
        P = d === f.BRT.APP,
        w = (0, p.getPID)(),
        m = (0, i.bG)([l.default], () => l.default.isLocked(w));
    return (o.useEffect(() => {
        (j || P || m) && (null == O || O());
    }, [j, O, P, m]),
    j || m)
        ? null
        : (0, n.jsx)(
              c.Modal,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              }),
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })({}, g)),
              (r = r =
                  {
                      title: b.intl.string(b.t.DJ8ojF),
                      subtitle: b.intl.string(b.t["E+Ph7D"]),
                      actions: [
                          {
                              variant: "secondary",
                              text: b.intl.string(b.t.FgK5QE),
                              onClick: () => (null == O ? void 0 : O()),
                          },
                          {
                              variant: "primary",
                              text: b.intl.string(b.t.ELRJQu),
                              onClick: () => {
                                  u.isPlatformEmbedded ? a.Ay.focus() : window.focus(), O();
                              },
                          },
                      ],
                      onClose: O,
                      transitionState: y,
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          );
}
