n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(755721),
    i = n(481060),
    s = n(600164),
    o = n(388032),
    a = n(895453);
let c = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, r.jsx)(i.hzk, {
            className: a.content,
            scrollbarType: n,
            children: t
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, r.jsx)(i.Text, {
                  className: a.error,
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: t
              });
    },
    SlideFooter: function (e) {
        var t,
            n,
            { mfaChallenge: c, setSlide: u, showConfirm: d = !1 } = e,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                }
                return l;
            })(e, ['mfaChallenge', 'setSlide', 'showConfirm']);
        let h = c.methods.length > 1;
        return h || d
            ? (0, r.jsxs)(i.mzw, {
                  className: a.footer,
                  direction: d && !h ? s.Z.Direction.HORIZONTAL_REVERSE : s.Z.Direction.HORIZONTAL,
                  children: [
                      h &&
                          (0, r.jsx)(i.zxk, {
                              variant: 'secondary',
                              text: o.intl.string(o.t.Tot4EB),
                              onClick: () => u('select')
                          }),
                      d &&
                          (0, r.jsx)(
                              l.zx,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({ type: 'submit' }, f)),
                              (n = n = { children: o.intl.string(o.t['cY+Ooa']) }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t)
                          )
                  ]
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n } = e;
        return (0, r.jsxs)(i.xBx, {
            direction: s.Z.Direction.VERTICAL,
            className: a.header,
            separator: !1,
            children: [
                (0, r.jsx)(i.X6q, {
                    variant: 'heading-xl/semibold',
                    children: o.intl.string(o.t.saHocH)
                }),
                null != t &&
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: a.subtitle,
                        children: t
                    }),
                (0, r.jsx)(i.olH, {
                    className: a.closeButton,
                    onClick: n
                })
            ]
        });
    }
};
