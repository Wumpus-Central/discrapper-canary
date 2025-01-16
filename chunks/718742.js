n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    c = n(585483),
    o = n(637538),
    s = n(747387),
    p = n(981631),
    d = n(388032),
    l = n(172857),
    u = n(480781);
let h = new Set([a.ModalTransitionState.ENTERING, a.ModalTransitionState.ENTERED]);
function f(e) {
    let { onClose: t, onCaptchaVerify: n, onReject: f, transitionState: v, headerText: m, bodyText: y, rqtoken: C, serveInvisible: E, ...b } = e,
        _ = (0, o.Z)(f);
    return (i.useEffect(() => {
        c.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t);
    }, [t]),
    null != v && h.has(v))
        ? (0, r.jsx)(a.ModalRoot, {
              transitionState: v,
              'aria-label': 'CAPTCHA',
              className: l.modal,
              children: (0, r.jsxs)(a.ModalContent, {
                  className: l.container,
                  children: [
                      (0, r.jsx)(a.ModalCloseButton, {
                          className: l.close,
                          onClick: t
                      }),
                      (0, r.jsx)('div', {
                          className: l.content,
                          children:
                              v !== a.ModalTransitionState.ENTERED
                                  ? (0, r.jsx)(a.Spinner, { type: a.Spinner.Type.SPINNING_CIRCLE })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('div', {
                                                children: (0, r.jsx)('img', {
                                                    src: u,
                                                    alt: ''
                                                })
                                            }),
                                            (0, r.jsx)('div', {
                                                className: l.title,
                                                'aria-hidden': !0,
                                                children: null != m ? m : d.intl.string(d.t.FpoiHR)
                                            }),
                                            (0, r.jsx)('div', { children: null != y ? y : d.intl.string(d.t['/CidxM']) }),
                                            (0, r.jsxs)('div', {
                                                className: l.captchaContainer,
                                                children: [
                                                    E && (0, r.jsx)(a.Spinner, { type: a.Spinner.Type.SPINNING_CIRCLE }),
                                                    (0, r.jsx)(s.Z, {
                                                        size: E ? 'invisible' : void 0,
                                                        onVerify: (e) => {
                                                            _(), n(e, C), t();
                                                        },
                                                        onClose: E ? t : void 0,
                                                        ...b
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
