n.d(t, { default: () => C }), n(47120);
var a = n(200651),
    r = n(192379),
    i = n(120356),
    c = n.n(i),
    o = n(481060),
    s = n(540059),
    p = n(585483),
    d = n(637538),
    l = n(747387),
    h = n(981631),
    u = n(388032),
    f = n(172857),
    v = n(480781),
    m = n(140238);
let y = new Set([o.Dvm.ENTERING, o.Dvm.ENTERED]);
function C(e) {
    let { onClose: t, onCaptchaVerify: n, onReject: i, transitionState: C, headerText: E, bodyText: _, rqtoken: b, serveInvisible: R, ...x } = e,
        g = (0, d.Z)(i),
        w = (0, s.Q3)('CaptchaModal');
    return (r.useEffect(() => {
        p.S.subscribe(h.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    null != C && y.has(C))
        ? (0, a.jsx)(o.Y0X, {
              transitionState: C,
              'aria-label': 'CAPTCHA',
              className: c()(f.modal, f.gradientBorder),
              children: (0, a.jsxs)(o.hzk, {
                  className: f.container,
                  children: [
                      (0, a.jsx)(o.olH, {
                          className: f.close,
                          onClick: t
                      }),
                      (0, a.jsx)('div', {
                          className: f.content,
                          children:
                              C !== o.Dvm.ENTERED
                                  ? (0, a.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)('div', {
                                                children: (0, a.jsx)('img', {
                                                    src: w ? m : v,
                                                    alt: ''
                                                })
                                            }),
                                            (0, a.jsx)('div', {
                                                className: f.title,
                                                'aria-hidden': !0,
                                                children: null != E ? E : u.intl.string(u.t.FpoiHR)
                                            }),
                                            (0, a.jsx)('div', { children: null != _ ? _ : u.intl.string(u.t['/CidxM']) }),
                                            (0, a.jsxs)('div', {
                                                className: f.captchaContainer,
                                                children: [
                                                    R && (0, a.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE }),
                                                    (0, a.jsx)(l.Z, {
                                                        size: R ? 'invisible' : void 0,
                                                        onVerify: (e) => {
                                                            g(), n(e, b), t();
                                                        },
                                                        onClose: R ? t : void 0,
                                                        ...x
                                                    })
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
