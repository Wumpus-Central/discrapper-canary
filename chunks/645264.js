t.r(n), t.d(n, { default: () => h });
var o = t(200651),
    r = t(192379),
    i = t(215569),
    a = t(481060),
    l = t(852860),
    s = t(313201),
    c = t(944163),
    d = t(266395),
    u = t(187565),
    _ = t(200305),
    m = t(592286),
    p = t(388032),
    b = t(832311);
let f = () =>
        (0, o.jsx)(l.Z, {
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
    h = (e) => {
        let { guildId: n, transitionState: t, onClose: l, onComplete: m, isPreview: p = !1 } = e,
            h = (0, d.rb)((e) => e.shouldShowWarning),
            C = (0, u.ng)(n, void 0, p),
            E = (0, s.Dt)();
        return (r.useEffect(() => {
            C === c.t && l();
        }, [l, C]),
        C === c.t)
            ? null
            : (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsxs)(a.Y0X, {
                          size: a.CgR.MEDIUM,
                          className: b.container,
                          transitionState: t,
                          'aria-labelledby': E,
                          children: [
                              (0, o.jsx)(a.olH, {
                                  onClick: () => l(!1),
                                  className: b.closeButton
                              }),
                              (0, o.jsx)(_.Z, {
                                  verificationForm: C,
                                  headerId: E,
                                  guildId: n,
                                  onClose: l,
                                  onComplete: m,
                                  isPreview: p
                              })
                          ]
                      }),
                      (0, o.jsx)(i.W, {
                          children:
                              !0 === h &&
                              (0, o.jsx)(a.oXn, {
                                  className: b.notice,
                                  children: (0, o.jsx)(f, {})
                              })
                      })
                  ]
              });
    };
