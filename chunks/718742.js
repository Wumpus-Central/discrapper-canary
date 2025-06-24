r.d(t, { default: () => v }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(120356),
    c = r.n(i),
    o = r(481060),
    s = r(626135),
    p = r(585483),
    l = r(637538),
    d = r(747387),
    u = r(981631),
    h = r(388032),
    f = r(566321),
    y = r(140238);
let b = new Set([o.Dvm.ENTERING, o.Dvm.ENTERED]);
function v(e) {
    var { onClose: t, onCaptchaVerify: r, onReject: i, transitionState: v, headerText: m, bodyText: O, rqtoken: g, serveInvisible: C } = e,
        E = (function (e, t) {
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
    let j = (0, l.Z)({ onReject: i });
    return (a.useEffect(() => {
        p.S.subscribe(u.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    a.useEffect(() => {
        s.default.track(u.rMx.OPEN_MODAL, { type: 'Captcha Modal' });
    }, []),
    null != v && b.has(v))
        ? (0, n.jsx)(o.Y0X, {
              transitionState: v,
              'aria-label': 'CAPTCHA',
              className: c()(f.modal, f.gradientBorder),
              parentComponent: 'CaptchaModal',
              children: (0, n.jsxs)(o.hzk, {
                  className: f.container,
                  children: [
                      (0, n.jsx)(o.olH, {
                          className: f.close,
                          onClick: t
                      }),
                      (0, n.jsx)('div', {
                          className: f.content,
                          children:
                              v !== o.Dvm.ENTERED
                                  ? (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)('div', {
                                                children: (0, n.jsx)('img', {
                                                    src: y,
                                                    alt: ''
                                                })
                                            }),
                                            (0, n.jsx)('div', {
                                                className: f.title,
                                                'aria-hidden': !0,
                                                children: null != m ? m : h.intl.string(h.t.FpoiHR)
                                            }),
                                            (0, n.jsx)('div', { children: null != O ? O : h.intl.string(h.t['/CidxM']) }),
                                            (0, n.jsxs)('div', {
                                                className: f.captchaContainer,
                                                children: [
                                                    C && (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE }),
                                                    (0, n.jsx)(
                                                        d.Z,
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
                                                                size: C ? 'invisible' : void 0,
                                                                onVerify: (e) => {
                                                                    j(), r(e, g), t();
                                                                },
                                                                onClose: C ? t : void 0
                                                            },
                                                            E
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
