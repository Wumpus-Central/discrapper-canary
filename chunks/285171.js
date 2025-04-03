r.d(t, { default: () => O });
var n = r(200651),
    o = r(192379),
    i = r(442837),
    c = r(481060),
    l = r(313201),
    s = r(237997),
    a = r(451478),
    u = r(358085),
    b = r(998502),
    f = r(145597),
    d = r(981631),
    p = r(388032);
function O(e) {
    var t,
        r,
        { transitionState: O, onClose: j, contextKey: y } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['transitionState', 'onClose', 'contextKey']);
    let h = (0, l.Dt)(),
        x = (0, i.e7)([a.Z], () => a.Z.isFocused()),
        P = y === d.IlC.APP,
        k = (0, f.getPID)(),
        m = (0, i.e7)([s.default], () => s.default.isLocked(k));
    return (o.useEffect(() => {
        (x || P || m) && (null == j || j());
    }, [x, j, P, m]),
    x || m)
        ? null
        : (0, n.jsxs)(
              c.Y0X,
              ((t = (function (e) {
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
              })(
                  {
                      transitionState: O,
                      'aria-labelledby': h
                  },
                  g
              )),
              (r = r =
                  {
                      size: c.CgR.SMALL,
                      children: [
                          (0, n.jsx)(c.xBx, {
                              children: (0, n.jsx)(c.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: p.NW.string(p.t.DJ8ojI)
                              })
                          }),
                          (0, n.jsx)(c.hzk, {
                              children: (0, n.jsx)(c.Text, {
                                  color: 'text-normal',
                                  variant: 'text-md/medium',
                                  children: p.NW.string(p.t['E+Ph7O'])
                              })
                          }),
                          (0, n.jsxs)(c.mzw, {
                              children: [
                                  (0, n.jsx)(c.zxk, {
                                      onClick: () => {
                                          u.isPlatformEmbedded ? b.ZP.focus() : window.focus(), j();
                                      },
                                      color: c.zxk.Colors.BRAND,
                                      children: p.NW.string(p.t.ELRJQk)
                                  }),
                                  (0, n.jsx)(c.zxk, {
                                      onClick: () => (null == j ? void 0 : j()),
                                      color: c.zxk.Colors.PRIMARY,
                                      look: c.zxk.Looks.LINK,
                                      children: p.NW.string(p.t.FgK5QE)
                                  })
                              ]
                          })
                      ]
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
              t)
          );
}
