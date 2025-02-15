n.r(t), n.d(t, { default: () => v });
var i = n(200651),
    r = n(192379),
    a = n(215569),
    l = n(481060),
    o = n(852860),
    s = n(313201),
    d = n(944163),
    c = n(266395),
    u = n(187565),
    m = n(577809),
    _ = n(592286),
    f = n(388032),
    x = n(912885);
let h = () =>
        (0, i.jsx)(o.Z, {
            submitting: !1,
            message: f.intl.string(f.t['8g514e']),
            onReset: () => {
                (0, c.PE)(!1);
            },
            onResetText: f.intl.string(f.t['ETE/oK']),
            onSave: () => {
                (0, c.PE)(!1), (0, l.Mr3)(_.Pn);
            },
            onSaveText: f.intl.string(f.t['Xt+UaW']),
            onSaveButtonColor: l.Ttl.RED
        }),
    v = (e) => {
        let { transitionState: t, guildId: n, onClose: o, onComplete: _, isPreview: f = !1 } = e,
            v = (0, c.rb)((e) => e.shouldShowWarning),
            g = (0, u.ng)(n, f),
            p = (0, s.Dt)();
        return (r.useEffect(() => {
            g === d.t && o();
        }, [o, g]),
        g === d.t)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(l.Y0X, {
                          transitionState: t,
                          'aria-labelledby': p,
                          size: l.CgR.DYNAMIC,
                          className: x.container,
                          hideShadow: !0,
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.closeButton,
                                  children: (0, i.jsx)(l.olH, { onClick: () => o(!1) })
                              }),
                              (0, i.jsx)(m.Z, {
                                  verificationForm: g,
                                  headerId: p,
                                  guildId: n,
                                  onClose: o,
                                  onComplete: _,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, i.jsx)(a.W, {
                          children:
                              !0 === v &&
                              (0, i.jsx)(l.oXn, {
                                  className: x.notice,
                                  children: (0, i.jsx)(h, {})
                              })
                      })
                  ]
              });
    };
