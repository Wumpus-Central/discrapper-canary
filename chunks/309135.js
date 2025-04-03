n.r(t), n.d(t, { default: () => p });
var i = n(200651),
    r = n(192379),
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
    g = n(460647);
let h = () =>
        (0, i.jsx)(o.Z, {
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
    p = (e) => {
        let { transitionState: t, guildId: n, onClose: o, onComplete: m, inviteKey: _, isPreview: p = !1 } = e,
            I = (0, u.rb)((e) => e.shouldShowWarning),
            { verificationForm: E, hasFetched: v } = (0, d.ng)(n, p, _),
            b = (0, s.Dt)();
        return (r.useEffect(() => {
            v && E === c.t && o();
        }, [v, o, E]),
        E === c.t)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(a.Y0X, {
                          transitionState: t,
                          'aria-labelledby': b,
                          size: a.CgR.DYNAMIC,
                          className: g.container,
                          hideShadow: !0,
                          children: [
                              (0, i.jsx)('div', {
                                  className: g.closeButton,
                                  children: (0, i.jsx)(a.olH, {
                                      className: g.closeButtonInner,
                                      innerClassName: g.closeButtonInner,
                                      onClick: () => o(!1)
                                  })
                              }),
                              (0, i.jsx)(f.Z, {
                                  verificationForm: E,
                                  headerId: b,
                                  guildId: n,
                                  onClose: o,
                                  onComplete: m,
                                  isPreview: p
                              })
                          ]
                      }),
                      (0, i.jsx)(l.W, {
                          children:
                              !0 === I &&
                              (0, i.jsx)(a.oXn, {
                                  className: g.notice,
                                  children: (0, i.jsx)(h, {})
                              })
                      })
                  ]
              });
    };
