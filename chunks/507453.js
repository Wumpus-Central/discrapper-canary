n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(600164),
    s = n(388032),
    o = n(895453);
let a = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, r.jsx)(l.hzk, {
            className: o.content,
            scrollbarType: n,
            children: t
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, r.jsx)(l.Text, {
                  className: o.error,
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: t
              });
    },
    SlideFooter: function (e) {
        var t,
            n,
            { mfaChallenge: a, setSlide: c, showConfirm: u = !1 } = e,
            d = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ['mfaChallenge', 'setSlide', 'showConfirm']);
        let f = a.methods.length > 1;
        return f || u
            ? (0, r.jsxs)(l.mzw, {
                  className: o.footer,
                  direction: u && !f ? i.Z.Direction.HORIZONTAL_REVERSE : i.Z.Direction.HORIZONTAL,
                  children: [
                      f &&
                          (0, r.jsx)(l.zxk, {
                              look: l.zxk.Looks.LINK,
                              onClick: () => c('select'),
                              color: l.zxk.Colors.PRIMARY,
                              children: s.intl.string(s.t.Tot4EB)
                          }),
                      u &&
                          (0, r.jsx)(
                              l.zxk,
                              ((t = (function (e) {
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
                              })({ type: 'submit' }, d)),
                              (n = n = { children: s.intl.string(s.t['cY+Ooa']) }),
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
        return (0, r.jsxs)(l.xBx, {
            direction: i.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
                (0, r.jsx)(l.X6q, {
                    variant: 'heading-xl/semibold',
                    children: s.intl.string(s.t.saHocH)
                }),
                null != t &&
                    (0, r.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: o.subtitle,
                        children: t
                    }),
                (0, r.jsx)(l.olH, {
                    className: o.closeButton,
                    onClick: n
                })
            ]
        });
    }
};
