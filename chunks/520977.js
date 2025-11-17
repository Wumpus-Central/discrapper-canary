r.d(e, { default: () => O });
var n = r(54381),
    o = r(473749),
    i = r(793030),
    c = r(442837),
    l = r(237997),
    s = r(451478),
    u = r(358085),
    a = r(998502),
    f = r(145597),
    b = r(981631),
    p = r(388032);
function O(t) {
    var e,
        r,
        { transitionState: O, onClose: y, contextKey: d } = t,
        g = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["transitionState", "onClose", "contextKey"]);
    let j = (0, c.e7)([s.Z], () => s.Z.isFocused()),
        P = d === b.IlC.APP,
        w = (0, f.getPID)(),
        v = (0, c.e7)([l.default], () => l.default.isLocked(w));
    return (o.useEffect(() => {
        (j || P || v) && (null == y || y());
    }, [j, y, P, v]),
    j || v)
        ? null
        : (0, n.jsx)(
              i.Modal,
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
              })({}, g)),
              (r = r =
                  {
                      title: p.intl.string(p.t.DJ8ojF),
                      subtitle: p.intl.string(p.t["E+Ph7D"]),
                      actions: [
                          {
                              variant: "secondary",
                              text: p.intl.string(p.t.FgK5QE),
                              onClick: () => (null == y ? void 0 : y()),
                          },
                          {
                              variant: "primary",
                              text: p.intl.string(p.t.ELRJQu),
                              onClick: () => {
                                  u.isPlatformEmbedded ? a.ZP.focus() : window.focus(), y();
                              },
                          },
                      ],
                      onClose: y,
                      transitionState: O,
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
