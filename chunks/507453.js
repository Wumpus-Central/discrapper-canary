r.d(t, { Z: () => a });
var n = r(200651);
r(192379);
var l = r(481060),
    s = r(600164),
    i = r(388032),
    o = r(895453);
let a = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: r } = e;
        return (0, n.jsx)(l.hzk, {
            className: o.content,
            scrollbarType: r,
            children: t
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, n.jsx)(l.Text, {
                  className: o.error,
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: t
              });
    },
    SlideFooter: function (e) {
        var t,
            r,
            { mfaChallenge: a, setSlide: c, showConfirm: u = !1 } = e,
            d = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ['mfaChallenge', 'setSlide', 'showConfirm']);
        let f = a.methods.length > 1;
        return f || u
            ? (0, n.jsxs)(l.mzw, {
                  className: o.footer,
                  direction: u && !f ? s.Z.Direction.HORIZONTAL_REVERSE : s.Z.Direction.HORIZONTAL,
                  children: [
                      f &&
                          (0, n.jsx)(l.zxk, {
                              look: l.zxk.Looks.LINK,
                              onClick: () => c('select'),
                              color: l.zxk.Colors.PRIMARY,
                              children: i.NW.string(i.t.Tot4EB)
                          }),
                      u &&
                          (0, n.jsx)(
                              l.zxk,
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
                              })({ type: 'submit' }, d)),
                              (r = r = { children: i.NW.string(i.t['cY+Ooa']) }),
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
                          )
                  ]
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: r } = e;
        return (0, n.jsxs)(l.xBx, {
            direction: s.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
                (0, n.jsx)(l.X6q, {
                    variant: 'heading-xl/semibold',
                    children: i.NW.string(i.t.saHocH)
                }),
                null != t &&
                    (0, n.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: o.subtitle,
                        children: t
                    }),
                (0, n.jsx)(l.olH, {
                    className: o.closeButton,
                    onClick: r
                })
            ]
        });
    }
};
