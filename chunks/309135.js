n.r(t), n.d(t, { default: () => _ });
var l = n(200651),
    a = n(192379),
    r = n(215569),
    i = n(481060),
    s = n(852860),
    o = n(313201),
    c = n(944163),
    d = n(266395),
    u = n(187565),
    m = n(577809),
    f = n(592286),
    h = n(388032),
    p = n(460647);
let x = () =>
        (0, l.jsx)(s.Z, {
            submitting: !1,
            message: h.NW.string(h.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: h.NW.string(h.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, i.Mr3)(f.Pn);
            },
            onSaveText: h.NW.string(h.t['Xt+UaW']),
            onSaveButtonColor: i.Ttl.RED
        }),
    _ = (e) => {
        let { transitionState: t, guildId: n, onClose: s, onComplete: f, inviteKey: h, isPreview: _ = !1 } = e,
            g = (0, d.rb)((e) => e.shouldShowWarning),
            { verificationForm: v, hasFetched: N } = (0, u.ng)(n, _, h),
            b = (0, o.Dt)();
        return (a.useEffect(() => {
            N && v === c.t && s();
        }, [N, s, v]),
        v === c.t)
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)(i.Y0X, {
                          transitionState: t,
                          'aria-labelledby': b,
                          size: i.CgR.DYNAMIC,
                          className: p.container,
                          hideShadow: !0,
                          children: [
                              (0, l.jsx)('div', {
                                  className: p.closeButton,
                                  children: (0, l.jsx)(i.olH, {
                                      className: p.closeButtonInner,
                                      innerClassName: p.closeButtonInner,
                                      onClick: () => s(!1)
                                  })
                              }),
                              (0, l.jsx)(m.Z, {
                                  verificationForm: v,
                                  headerId: b,
                                  guildId: n,
                                  onClose: s,
                                  onComplete: f,
                                  isPreview: _
                              })
                          ]
                      }),
                      (0, l.jsx)(r.W, {
                          children:
                              !0 === g &&
                              (0, l.jsx)(i.oXn, {
                                  className: p.notice,
                                  children: (0, l.jsx)(x, {})
                              })
                      })
                  ]
              });
    };
