n.r(t), n.d(t, { default: () => _ });
var r = n(200651),
    l = n(192379),
    o = n(215569),
    a = n(481060),
    i = n(852860),
    s = n(313201),
    c = n(944163),
    d = n(266395),
    u = n(187565),
    m = n(577809),
    h = n(592286),
    f = n(388032),
    x = n(460647);
let p = () =>
        (0, r.jsx)(i.Z, {
            submitting: !1,
            message: f.NW.string(f.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: f.NW.string(f.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, a.Mr3)(h.Pn);
            },
            onSaveText: f.NW.string(f.t['Xt+UaW']),
            onSaveButtonColor: a.Ttl.RED
        }),
    _ = (e) => {
        let { transitionState: t, guildId: n, onClose: i, onComplete: h, inviteKey: f, isPreview: _ = !1 } = e,
            g = (0, d.rb)((e) => e.shouldShowWarning),
            { verificationForm: N, hasFetched: v } = (0, u.ng)(n, _, f),
            b = (0, s.Dt)();
        return (l.useEffect(() => {
            v && N === c.t && i();
        }, [v, i, N]),
        N === c.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(a.Y0X, {
                          transitionState: t,
                          'aria-labelledby': b,
                          size: a.CgR.DYNAMIC,
                          className: x.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: x.closeButton,
                                  children: (0, r.jsx)(a.olH, {
                                      className: x.closeButtonInner,
                                      innerClassName: x.closeButtonInner,
                                      onClick: () => i(!1)
                                  })
                              }),
                              (0, r.jsx)(m.Z, {
                                  verificationForm: N,
                                  headerId: b,
                                  guildId: n,
                                  onClose: i,
                                  onComplete: h,
                                  isPreview: _
                              })
                          ]
                      }),
                      (0, r.jsx)(o.W, {
                          children:
                              !0 === g &&
                              (0, r.jsx)(a.oXn, {
                                  className: x.notice,
                                  children: (0, r.jsx)(p, {})
                              })
                      })
                  ]
              });
    };
