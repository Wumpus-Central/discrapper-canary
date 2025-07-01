(r.d(t, { default: () => O }), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(120356),
    c = r.n(i),
    o = r(667202),
    s = r(481060),
    l = r(724723),
    p = r(626135),
    d = r(585483),
    u = r(637538),
    h = r(747387),
    f = r(981631),
    y = r(388032),
    b = r(566321),
    v = r(140238);
let m = new Set([s.Dvm.ENTERING, s.Dvm.ENTERED]);
function O(e) {
    var { onClose: t, onCaptchaVerify: r, onReject: i, transitionState: O, headerText: g, bodyText: C, rqtoken: E, serveInvisible: j } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
            }
            return a;
        })(e, ['onClose', 'onCaptchaVerify', 'onReject', 'transitionState', 'headerText', 'bodyText', 'rqtoken', 'serveInvisible']);
    let _ = l.Z.getCurrentConfig({ location: 'CaptchaModal' }, { autoTrackExposure: !0 }).enabled,
        R = (0, u.Z)({ onReject: i });
    if (
        (a.useEffect(() => {
            d.S.subscribe(f.CkL.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        a.useEffect(() => {
            p.default.track(f.rMx.OPEN_MODAL, { type: 'Captcha Modal' });
        }, []),
        null == O || !m.has(O))
    )
        return null;
    let x = (0, n.jsxs)('div', {
        className: c()(b.captchaContainer, { [b.manaDesktopModal]: _ }),
        children: [
            j && (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE }),
            (0, n.jsx)(
                h.Z,
                (function (e) {
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
                        size: j ? 'invisible' : void 0,
                        onVerify: (e) => {
                            (R(), r(e, E), t());
                        },
                        onClose: j ? t : void 0
                    },
                    w
                )
            )
        ]
    });
    return _
        ? (0, n.jsx)(o.I, {
              transitionState: O,
              onClose: t,
              size: 'sm',
              gradientColor: 'blue',
              image: v,
              title: null != g ? g : y.intl.string(y.t.FpoiHR),
              headerBody: null != C ? C : y.intl.string(y.t['/CidxM']),
              children: x
          })
        : (0, n.jsx)(s.Y0X, {
              transitionState: O,
              'aria-label': 'CAPTCHA',
              className: c()(b.modal, b.gradientBorder),
              parentComponent: 'CaptchaModal',
              children: (0, n.jsxs)(s.hzk, {
                  className: b.container,
                  children: [
                      (0, n.jsx)(s.olH, {
                          className: b.close,
                          onClick: t
                      }),
                      (0, n.jsx)('div', {
                          className: b.content,
                          children:
                              O !== s.Dvm.ENTERED
                                  ? (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)('div', {
                                                children: (0, n.jsx)('img', {
                                                    src: v,
                                                    alt: ''
                                                })
                                            }),
                                            (0, n.jsx)('div', {
                                                className: b.title,
                                                'aria-hidden': !0,
                                                children: null != g ? g : y.intl.string(y.t.FpoiHR)
                                            }),
                                            (0, n.jsx)('div', { children: null != C ? C : y.intl.string(y.t['/CidxM']) }),
                                            x
                                        ]
                                    })
                      })
                  ]
              })
          });
}
