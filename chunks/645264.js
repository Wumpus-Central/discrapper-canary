n.d(t, { default: () => b });
var r = n(255367),
    i = n(73800),
    l = n(215569),
    o = n(755721),
    s = n(481060),
    a = n(852860),
    c = n(313201),
    d = n(944163),
    u = n(266395),
    m = n(187565),
    f = n(200305),
    h = n(592286),
    p = n(388032),
    x = n(916199);
let g = () =>
        (0, r.jsx)(a.Z, {
            submitting: !1,
            message: p.intl.string(p.t['8g514e']),
            onReset: () => {
                (0, u.PE)(!1);
            },
            onResetText: p.intl.string(p.t['ETE/oK']),
            onSave: () => {
                ((0, u.PE)(!1), (0, s.Mr3)(h.Pn));
            },
            onSaveText: p.intl.string(p.t['Xt+UaW']),
            onSaveButtonColor: o.Tt.RED
        }),
    b = (e) => {
        let { transitionState: t, guildId: n, onClose: o, onComplete: a, inviteKey: h, isPreview: p = !1 } = e,
            b = (0, u.rb)((e) => e.shouldShowWarning),
            { verificationForm: v, hasFetched: _ } = (0, m.ng)(n, p, h),
            j = (0, c.Dt)();
        return (i.useEffect(() => {
            _ && v === d.t && o();
        }, [_, o, v]),
        v === d.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(s.Y0X, {
                          transitionState: t,
                          'aria-labelledby': j,
                          size: s.CgR.DYNAMIC,
                          className: x.container,
                          hideShadow: !0,
                          parentComponent: 'MemberVerificationModal',
                          children: [
                              (0, r.jsx)('div', {
                                  className: x.closeButton,
                                  children: (0, r.jsx)(s.olH, {
                                      className: x.closeButtonInner,
                                      innerClassName: x.closeButtonInner,
                                      onClick: () => o(!1)
                                  })
                              }),
                              (0, r.jsx)(f.Z, {
                                  verificationForm: v,
                                  headerId: j,
                                  guildId: n,
                                  onClose: o,
                                  onComplete: a,
                                  isPreview: p
                              })
                          ]
                      }),
                      (0, r.jsx)(l.W, {
                          children:
                              !0 === b &&
                              (0, r.jsx)(s.oXn, {
                                  className: x.notice,
                                  children: (0, r.jsx)(g, {})
                              })
                      })
                  ]
              });
    };
