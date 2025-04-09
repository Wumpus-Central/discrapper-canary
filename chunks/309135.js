n.r(t), n.d(t, { default: () => x });
var r = n(200651),
    l = n(192379),
    i = n(215569),
    a = n(481060),
    s = n(852860),
    o = n(313201),
    c = n(944163),
    d = n(266395),
    u = n(187565),
    m = n(577809),
    f = n(592286),
    p = n(388032),
    h = n(460647);
let _ = () =>
        (0, r.jsx)(s.Z, {
            submitting: !1,
            message: p.NW.string(p.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: p.NW.string(p.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, a.Mr3)(f.Pn);
            },
            onSaveText: p.NW.string(p.t['Xt+UaW']),
            onSaveButtonColor: a.Ttl.RED
        }),
    x = (e) => {
        let { transitionState: t, guildId: n, onClose: s, onComplete: f, inviteKey: p, isPreview: x = !1 } = e,
            g = (0, d.rb)((e) => e.shouldShowWarning),
            { verificationForm: v, hasFetched: b } = (0, u.ng)(n, x, p),
            N = (0, o.Dt)();
        return (l.useEffect(() => {
            b && v === c.t && s();
        }, [b, s, v]),
        v === c.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(a.Y0X, {
                          transitionState: t,
                          'aria-labelledby': N,
                          size: a.CgR.DYNAMIC,
                          className: h.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: h.closeButton,
                                  children: (0, r.jsx)(a.olH, {
                                      className: h.closeButtonInner,
                                      innerClassName: h.closeButtonInner,
                                      onClick: () => s(!1)
                                  })
                              }),
                              (0, r.jsx)(m.Z, {
                                  verificationForm: v,
                                  headerId: N,
                                  guildId: n,
                                  onClose: s,
                                  onComplete: f,
                                  isPreview: x
                              })
                          ]
                      }),
                      (0, r.jsx)(i.W, {
                          children:
                              !0 === g &&
                              (0, r.jsx)(a.oXn, {
                                  className: h.notice,
                                  children: (0, r.jsx)(_, {})
                              })
                      })
                  ]
              });
    };
