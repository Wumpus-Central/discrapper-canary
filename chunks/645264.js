n.r(t), n.d(t, { default: () => x });
var o = n(200651),
    r = n(192379),
    i = n(215569),
    a = n(481060),
    s = n(852860),
    l = n(313201),
    c = n(944163),
    d = n(266395),
    u = n(187565),
    m = n(200305),
    _ = n(592286),
    h = n(388032),
    b = n(739387);
let p = () =>
        (0, o.jsx)(s.Z, {
            submitting: !1,
            message: h.intl.string(h.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: h.intl.string(h.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, a.Mr3)(_.Pn);
            },
            onSaveText: h.intl.string(h.t['Xt+UaW']),
            onSaveButtonColor: a.Ttl.RED
        }),
    x = (e) => {
        let { guildId: t, transitionState: n, onClose: s, onComplete: _, isPreview: h = !1 } = e,
            x = (0, d.rb)((e) => e.shouldShowWarning),
            C = (0, u.ng)(t, h),
            N = (0, l.Dt)();
        return (r.useEffect(() => {
            C === c.t && s();
        }, [s, C]),
        C === c.t)
            ? null
            : (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsxs)(a.Y0X, {
                          size: a.CgR.MEDIUM,
                          className: b.container,
                          transitionState: n,
                          'aria-labelledby': N,
                          children: [
                              (0, o.jsx)(a.olH, {
                                  onClick: () => s(!1),
                                  className: b.closeButton
                              }),
                              (0, o.jsx)(m.Z, {
                                  verificationForm: C,
                                  headerId: N,
                                  guildId: t,
                                  onClose: s,
                                  onComplete: _,
                                  isPreview: h
                              })
                          ]
                      }),
                      (0, o.jsx)(i.W, {
                          children:
                              !0 === x &&
                              (0, o.jsx)(a.oXn, {
                                  className: b.notice,
                                  children: (0, o.jsx)(p, {})
                              })
                      })
                  ]
              });
    };
