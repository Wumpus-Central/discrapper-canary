t.r(n), t.d(n, { default: () => x });
var o = t(200651),
    r = t(192379),
    i = t(215569),
    s = t(481060),
    a = t(852860),
    l = t(313201),
    c = t(944163),
    d = t(266395),
    u = t(187565),
    m = t(200305),
    _ = t(592286),
    h = t(388032),
    b = t(739387);
let p = () =>
        (0, o.jsx)(a.Z, {
            submitting: !1,
            message: h.intl.string(h.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: h.intl.string(h.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, s.Mr3)(_.Pn);
            },
            onSaveText: h.intl.string(h.t['Xt+UaW']),
            onSaveButtonColor: s.Ttl.RED
        }),
    x = (e) => {
        let { guildId: n, transitionState: t, onClose: a, onComplete: _, isPreview: h = !1 } = e,
            x = (0, d.rb)((e) => e.shouldShowWarning),
            C = (0, u.ng)(n, h),
            f = (0, l.Dt)();
        return (r.useEffect(() => {
            C === c.t && a();
        }, [a, C]),
        C === c.t)
            ? null
            : (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsxs)(s.Y0X, {
                          size: s.CgR.MEDIUM,
                          className: b.container,
                          transitionState: t,
                          'aria-labelledby': f,
                          children: [
                              (0, o.jsx)(s.olH, {
                                  onClick: () => a(!1),
                                  className: b.closeButton
                              }),
                              (0, o.jsx)(m.Z, {
                                  verificationForm: C,
                                  headerId: f,
                                  guildId: n,
                                  onClose: a,
                                  onComplete: _,
                                  isPreview: h
                              })
                          ]
                      }),
                      (0, o.jsx)(i.W, {
                          children:
                              !0 === x &&
                              (0, o.jsx)(s.oXn, {
                                  className: b.notice,
                                  children: (0, o.jsx)(p, {})
                              })
                      })
                  ]
              });
    };
