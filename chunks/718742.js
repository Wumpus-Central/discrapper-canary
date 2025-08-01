(n.d(t, { default: () => g }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(667202),
    s = n(481060),
    l = n(724723),
    p = n(626135),
    d = n(585483),
    u = n(637538),
    h = n(747387),
    f = n(981631),
    y = n(388032),
    b = n(566321),
    v = n(140238);
let m = new Set([s.Dvm.ENTERING, s.Dvm.ENTERED]);
function g(e) {
    var { onClose: t, onCaptchaVerify: n, onReject: i, transitionState: g, headerText: C, bodyText: O, rqtoken: E, serveInvisible: w } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        })(e, ['onClose', 'onCaptchaVerify', 'onReject', 'transitionState', 'headerText', 'bodyText', 'rqtoken', 'serveInvisible']);
    let x = l.Z.getCurrentConfig({ location: 'CaptchaModal' }, { autoTrackExposure: !0 }).enabled,
        R = (0, u.Z)({ onReject: i });
    if (
        (a.useEffect(() => {
            d.S.subscribe(f.CkL.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        a.useEffect(() => {
            p.default.track(f.rMx.OPEN_MODAL, { type: 'Captcha Modal' });
        }, []),
        null == g || !m.has(g))
    )
        return null;
    let _ = (0, r.jsxs)('div', {
        className: o()(b.captchaContainer, { [b.manaDesktopModal]: x }),
        children: [
            w && (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE }),
            (0, r.jsx)(
                h.Z,
                (function (e) {
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
                })(
                    {
                        size: w ? 'invisible' : void 0,
                        onVerify: (e) => {
                            (R(), n(e, E), t());
                        },
                        onClose: w ? t : void 0
                    },
                    j
                )
            )
        ]
    });
    return x
        ? (0, r.jsx)(c.I, {
              transitionState: g,
              onClose: t,
              size: 'sm',
              gradientColor: 'blue',
              graphic: {
                  type: 'image',
                  src: v
              },
              title: null != C ? C : y.intl.string(y.t.FpoiHR),
              subtitle: null != O ? O : y.intl.string(y.t['/CidxM']),
              children: _
          })
        : (0, r.jsx)(s.Y0X, {
              transitionState: g,
              'aria-label': 'CAPTCHA',
              className: o()(b.modal, b.gradientBorder),
              parentComponent: 'CaptchaModal',
              'data-migration-pending': !0,
              children: (0, r.jsxs)(s.hzk, {
                  'data-migration-pending': !0,
                  className: b.container,
                  children: [
                      (0, r.jsx)(s.olH, {
                          'data-migration-pending': !0,
                          className: b.close,
                          onClick: t
                      }),
                      (0, r.jsx)('div', {
                          className: b.content,
                          children:
                              g !== s.Dvm.ENTERED
                                  ? (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('div', {
                                                children: (0, r.jsx)('img', {
                                                    src: v,
                                                    alt: ''
                                                })
                                            }),
                                            (0, r.jsx)('div', {
                                                className: b.title,
                                                'aria-hidden': !0,
                                                children: null != C ? C : y.intl.string(y.t.FpoiHR)
                                            }),
                                            (0, r.jsx)('div', { children: null != O ? O : y.intl.string(y.t['/CidxM']) }),
                                            _
                                        ]
                                    })
                      })
                  ]
              })
          });
}
