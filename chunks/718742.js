r.d(t, { default: () => m }), r(47120);
var n = r(200651),
    a = r(192379),
    i = r(120356),
    c = r.n(i),
    o = r(481060),
    s = r(540059),
    p = r(585483),
    l = r(637538),
    u = r(747387),
    d = r(981631),
    h = r(388032),
    f = r(566321),
    y = r(480781),
    b = r(140238);
let v = new Set([o.Dvm.ENTERING, o.Dvm.ENTERED]);
function m(e) {
    var { onClose: t, onCaptchaVerify: r, onReject: i, transitionState: m, headerText: O, bodyText: g, rqtoken: C, serveInvisible: E } = e,
        j = (function (e, t) {
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
    let w = (0, l.Z)(i),
        R = (0, s.Q3)('CaptchaModal');
    return (a.useEffect(() => {
        p.S.subscribe(d.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    null != m && v.has(m))
        ? (0, n.jsx)(o.Y0X, {
              transitionState: m,
              'aria-label': 'CAPTCHA',
              className: c()(f.modal, f.gradientBorder),
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
                              m !== o.Dvm.ENTERED
                                  ? (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)('div', {
                                                children: (0, n.jsx)('img', {
                                                    src: R ? b : y,
                                                    alt: ''
                                                })
                                            }),
                                            (0, n.jsx)('div', {
                                                className: f.title,
                                                'aria-hidden': !0,
                                                children: null != O ? O : h.NW.string(h.t.FpoiHR)
                                            }),
                                            (0, n.jsx)('div', { children: null != g ? g : h.NW.string(h.t['/CidxM']) }),
                                            (0, n.jsxs)('div', {
                                                className: f.captchaContainer,
                                                children: [
                                                    E && (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE }),
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
                                                                size: E ? 'invisible' : void 0,
                                                                onVerify: (e) => {
                                                                    w(), r(e, C), t();
                                                                },
                                                                onClose: E ? t : void 0
                                                            },
                                                            j
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
