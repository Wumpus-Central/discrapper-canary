t.r(n), t.d(n, { default: () => f });
var o = t(200651),
    r = t(192379),
    i = t(215569),
    a = t(481060),
    s = t(852860),
    c = t(313201),
    l = t(944163),
    d = t(266395),
    u = t(187565),
    _ = t(200305),
    m = t(592286),
    p = t(388032),
    b = t(832311);
let h = () =>
        (0, o.jsx)(s.Z, {
            submitting: !1,
            message: p.intl.string(p.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: p.intl.string(p.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, a.Mr3)(m.Pn);
            },
            onSaveText: p.intl.string(p.t['Xt+UaW']),
            onSaveButtonColor: a.Ttl.RED
        }),
    f = (e) => {
        let { guildId: n, transitionState: t, onClose: s, onComplete: m, isPreview: p = !1 } = e,
            f = (0, d.rb)((e) => e.shouldShowWarning),
            C = (0, u.ng)(n, void 0, p),
            x = (0, c.Dt)();
        return (r.useEffect(() => {
            C === l.t && s();
        }, [s, C]),
        C === l.t)
            ? null
            : (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsxs)(a.Y0X, {
                          size: a.CgR.MEDIUM,
                          className: b.container,
                          transitionState: t,
                          'aria-labelledby': x,
                          children: [
                              (0, o.jsx)(a.olH, {
                                  onClick: () => s(!1),
                                  className: b.closeButton
                              }),
                              (0, o.jsx)(_.Z, {
                                  verificationForm: C,
                                  headerId: x,
                                  guildId: n,
                                  onClose: s,
                                  onComplete: m,
                                  isPreview: p
                              })
                          ]
                      }),
                      (0, o.jsx)(i.W, {
                          children:
                              !0 === f &&
                              (0, o.jsx)(a.oXn, {
                                  className: b.notice,
                                  children: (0, o.jsx)(h, {})
                              })
                      })
                  ]
              });
    };
