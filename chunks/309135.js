t.r(n), t.d(n, { default: () => v });
var i = t(200651),
    r = t(192379),
    l = t(215569),
    a = t(481060),
    s = t(852860),
    o = t(313201),
    d = t(944163),
    c = t(266395),
    u = t(187565),
    m = t(577809),
    _ = t(592286),
    f = t(388032),
    x = t(142406);
let h = () =>
        (0, i.jsx)(s.Z, {
            submitting: !1,
            message: f.intl.string(f.t['8g514e']),
            onReset: () => {
                (0, c.PE)(!1);
            },
            onResetText: f.intl.string(f.t['ETE/oK']),
            onSave: () => {
                (0, c.PE)(!1), (0, a.Mr3)(_.Pn);
            },
            onSaveText: f.intl.string(f.t['Xt+UaW']),
            onSaveButtonColor: a.Ttl.RED
        }),
    v = (e) => {
        let { transitionState: n, guildId: t, onClose: s, onComplete: _, isPreview: f = !1 } = e,
            v = (0, c.rb)((e) => e.shouldShowWarning),
            g = (0, u.ng)(t, f),
            C = (0, o.Dt)();
        return (r.useEffect(() => {
            g === d.t && s();
        }, [s, g]),
        g === d.t)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(a.Y0X, {
                          transitionState: n,
                          'aria-labelledby': C,
                          size: a.CgR.DYNAMIC,
                          className: x.container,
                          hideShadow: !0,
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.closeButton,
                                  children: (0, i.jsx)(a.olH, { onClick: () => s(!1) })
                              }),
                              (0, i.jsx)(m.Z, {
                                  verificationForm: g,
                                  headerId: C,
                                  guildId: t,
                                  onClose: s,
                                  onComplete: _,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, i.jsx)(l.W, {
                          children:
                              !0 === v &&
                              (0, i.jsx)(a.oXn, {
                                  className: x.notice,
                                  children: (0, i.jsx)(h, {})
                              })
                      })
                  ]
              });
    };
