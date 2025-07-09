r.d(t, { default: () => O });
var n = r(255367),
    i = r(73800),
    o = r(442837),
    c = r(481060),
    l = r(313201),
    s = r(237997),
    a = r(451478),
    u = r(358085),
    p = r(998502),
    d = r(145597),
    f = r(981631),
    b = r(388032);
function O(e) {
    var t,
        r,
        { transitionState: O, onClose: y, contextKey: j } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) ((r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) ((r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
        })(e, ['transitionState', 'onClose', 'contextKey']);
    let g = (0, l.Dt)(),
        x = (0, o.e7)([a.Z], () => a.Z.isFocused()),
        P = j === f.IlC.APP,
        m = (0, d.getPID)(),
        v = (0, o.e7)([s.default], () => s.default.isLocked(m));
    return (i.useEffect(() => {
        (x || P || v) && (null == y || y());
    }, [x, y, P, v]),
    x || v)
        ? null
        : (0, n.jsxs)(
              c.Y0X,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      ('function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              })
                          )),
                          n.forEach(function (t) {
                              var n;
                              ((n = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = n));
                          }));
                  }
                  return e;
              })(
                  {
                      transitionState: O,
                      'aria-labelledby': g
                  },
                  h
              )),
              (r = r =
                  {
                      size: c.CgR.SMALL,
                      parentComponent: 'FocusMainAppModal',
                      children: [
                          (0, n.jsx)(c.xBx, {
                              children: (0, n.jsx)(c.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: b.intl.string(b.t.DJ8ojI)
                              })
                          }),
                          (0, n.jsx)(c.hzk, {
                              children: (0, n.jsx)(c.Text, {
                                  color: 'text-default',
                                  variant: 'text-md/medium',
                                  children: b.intl.string(b.t['E+Ph7O'])
                              })
                          }),
                          (0, n.jsx)(c.mzw, {
                              children: (0, n.jsxs)(c.hE2, {
                                  direction: 'horizontal-reverse',
                                  children: [
                                      (0, n.jsx)(c.zxk, {
                                          variant: 'primary',
                                          text: b.intl.string(b.t.ELRJQk),
                                          onClick: () => {
                                              (u.isPlatformEmbedded ? p.ZP.focus() : window.focus(), y());
                                          }
                                      }),
                                      (0, n.jsx)(c.zxk, {
                                          variant: 'secondary',
                                          text: b.intl.string(b.t.FgK5QE),
                                          onClick: () => (null == y ? void 0 : y())
                                      })
                                  ]
                              })
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
