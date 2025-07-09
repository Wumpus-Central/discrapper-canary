n.d(t, { default: () => x });
var r = n(255367),
    i = n(73800),
    l = n(215569),
    o = n(755721),
    s = n(481060),
    a = n(852860),
    c = n(313201),
    u = n(944163),
    d = n(266395),
    m = n(187565),
    f = n(200305),
    h = n(592286),
    p = n(388032),
    b = n(916199);
let g = () =>
        (0, r.jsx)(a.Z, {
            submitting: !1,
            message: p.intl.string(p.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: p.intl.string(p.t['ETE/oK']),
            onSave: () => {
                ((0, d.PE)(!1), (0, s.Mr3)(h.Pn));
            },
            onSaveText: p.intl.string(p.t['Xt+UaW']),
            onSaveButtonColor: o.Tt.RED
        }),
    x = (e) => {
        let { transitionState: t, guildId: n, onClose: o, onComplete: a, inviteKey: h, isPreview: p = !1 } = e,
            x = (0, d.rb)((e) => e.shouldShowWarning),
            { verificationForm: j, hasFetched: v } = (0, m.ng)(n, p, h),
            _ = (0, c.Dt)();
        return (i.useEffect(() => {
            v && j === u.t && o();
        }, [v, o, j]),
        j === u.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(s.Y0X, {
                          transitionState: t,
                          'aria-labelledby': _,
                          size: s.CgR.DYNAMIC,
                          className: b.container,
                          hideShadow: !0,
                          parentComponent: 'MemberVerificationModal',
                          children: [
                              (0, r.jsx)('div', {
                                  className: b.closeButton,
                                  children: (0, r.jsx)(s.olH, {
                                      className: b.closeButtonInner,
                                      innerClassName: b.closeButtonInner,
                                      onClick: () => o(!1)
                                  })
                              }),
                              (0, r.jsx)(f.Z, {
                                  verificationForm: j,
                                  headerId: _,
                                  guildId: n,
                                  onClose: o,
                                  onComplete: a,
                                  isPreview: p
                              })
                          ]
                      }),
                      (0, r.jsx)(l.W, {
                          children:
                              !0 === x &&
                              (0, r.jsx)(s.oXn, {
                                  className: b.notice,
                                  children: (0, r.jsx)(g, {})
                              })
                      })
                  ]
              });
    };
