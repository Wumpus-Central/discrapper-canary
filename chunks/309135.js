n.r(t), n.d(t, { default: () => b });
var r = n(200651),
    i = n(192379),
    l = n(215569),
    a = n(481060),
    o = n(852860),
    s = n(313201),
    c = n(944163),
    u = n(266395),
    d = n(187565),
    f = n(577809),
    m = n(592286),
    _ = n(388032),
    p = n(460647);
let h = () =>
        (0, r.jsx)(o.Z, {
            submitting: !1,
            message: _.NW.string(_.t['8g514e']),
            onReset: () => {
                (0, u.PE)(!1);
            },
            onResetText: _.NW.string(_.t['ETE/oK']),
            onSave: () => {
                (0, u.PE)(!1), (0, a.Mr3)(m.Pn);
            },
            onSaveText: _.NW.string(_.t['Xt+UaW']),
            onSaveButtonColor: a.Ttl.RED
        }),
    b = (e) => {
        let { transitionState: t, guildId: n, onClose: o, onComplete: m, inviteKey: _, isPreview: b = !1 } = e,
            g = (0, u.rb)((e) => e.shouldShowWarning),
            { verificationForm: x, hasFetched: v } = (0, d.ng)(n, b, _),
            C = (0, s.Dt)();
        return (i.useEffect(() => {
            v && x === c.t && o();
        }, [v, o, x]),
        x === c.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(a.Y0X, {
                          transitionState: t,
                          'aria-labelledby': C,
                          size: a.CgR.DYNAMIC,
                          className: p.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: p.closeButton,
                                  children: (0, r.jsx)(a.olH, {
                                      className: p.closeButtonInner,
                                      innerClassName: p.closeButtonInner,
                                      onClick: () => o(!1)
                                  })
                              }),
                              (0, r.jsx)(f.Z, {
                                  verificationForm: x,
                                  headerId: C,
                                  guildId: n,
                                  onClose: o,
                                  onComplete: m,
                                  isPreview: b
                              })
                          ]
                      }),
                      (0, r.jsx)(l.W, {
                          children:
                              !0 === g &&
                              (0, r.jsx)(a.oXn, {
                                  className: p.notice,
                                  children: (0, r.jsx)(h, {})
                              })
                      })
                  ]
              });
    };
