r.d(t, { default: () => O }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    c = r.n(i),
    o = r(481060),
    s = r(540059),
    p = r(626135),
    l = r(585483),
    d = r(637538),
    u = r(747387),
    h = r(981631),
    f = r(388032),
    y = r(198547),
    b = r(480781),
    v = r(140238);
let m = new Set([o.Dvm.ENTERING, o.Dvm.ENTERED]);
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
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['onClose', 'onCaptchaVerify', 'onReject', 'transitionState', 'headerText', 'bodyText', 'rqtoken', 'serveInvisible']);
    let _ = (0, d.Z)(i),
        R = (0, s.Q3)('CaptchaModal');
    return (a.useEffect(() => {
        l.S.subscribe(h.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    a.useEffect(() => {
        p.default.track(h.rMx.OPEN_MODAL, { type: 'Captcha Modal' });
    }, []),
    null != O && m.has(O))
        ? (0, n.jsx)(o.Y0X, {
              transitionState: O,
              'aria-label': 'CAPTCHA',
              className: c()(y.modal, y.gradientBorder),
              children: (0, n.jsxs)(o.hzk, {
                  className: y.container,
                  children: [
                      (0, n.jsx)(o.olH, {
                          className: y.close,
                          onClick: t
                      }),
                      (0, n.jsx)('div', {
                          className: y.content,
                          children:
                              O !== o.Dvm.ENTERED
                                  ? (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)('div', {
                                                children: (0, n.jsx)('img', {
                                                    src: R ? v : b,
                                                    alt: ''
                                                })
                                            }),
                                            (0, n.jsx)('div', {
                                                className: y.title,
                                                'aria-hidden': !0,
                                                children: null != g ? g : f.intl.string(f.t.FpoiHR)
                                            }),
                                            (0, n.jsx)('div', { children: null != C ? C : f.intl.string(f.t['/CidxM']) }),
                                            (0, n.jsxs)('div', {
                                                className: y.captchaContainer,
                                                children: [
                                                    j && (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE }),
                                                    (0, n.jsx)(
                                                        u.Z,
                                                        (function (e) {
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
                                                                size: j ? 'invisible' : void 0,
                                                                onVerify: (e) => {
                                                                    _(), r(e, E), t();
                                                                },
                                                                onClose: j ? t : void 0
                                                            },
                                                            w
                                                        )
                                                    )
                                                ]
                                            })
                                        ]
                                    })
                      })
                  ]
              })
          })
        : null;
}
