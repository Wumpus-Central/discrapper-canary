n.d(t, { default: () => g });
var r = n(200651),
    i = n(192379),
    l = n(215569),
    o = n(481060),
    s = n(852860),
    a = n(313201),
    c = n(944163),
    u = n(266395),
    d = n(187565),
    m = n(200305),
    f = n(592286),
    h = n(388032),
    p = n(916199);
let b = () =>
        (0, r.jsx)(s.Z, {
            submitting: !1,
            message: h.NW.string(h.t['8g514e']),
            onReset: () => {
                (0, u.PE)(!1);
            },
            onResetText: h.NW.string(h.t['ETE/oK']),
            onSave: () => {
                (0, u.PE)(!1), (0, o.Mr3)(f.Pn);
            },
            onSaveText: h.NW.string(h.t['Xt+UaW']),
            onSaveButtonColor: o.Ttl.RED
        }),
    g = (e) => {
        let { transitionState: t, guildId: n, onClose: s, onComplete: f, inviteKey: h, isPreview: g = !1 } = e,
            x = (0, u.rb)((e) => e.shouldShowWarning),
            { verificationForm: j, hasFetched: v } = (0, d.ng)(n, g, h),
            N = (0, a.Dt)();
        return (i.useEffect(() => {
            v && j === c.t && s();
        }, [v, s, j]),
        j === c.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Y0X, {
                          transitionState: t,
                          'aria-labelledby': N,
                          size: o.CgR.DYNAMIC,
                          className: p.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: p.closeButton,
                                  children: (0, r.jsx)(o.olH, {
                                      className: p.closeButtonInner,
                                      innerClassName: p.closeButtonInner,
                                      onClick: () => s(!1)
                                  })
                              }),
                              (0, r.jsx)(m.Z, {
                                  verificationForm: j,
                                  headerId: N,
                                  guildId: n,
                                  onClose: s,
                                  onComplete: f,
                                  isPreview: g
                              })
                          ]
                      }),
                      (0, r.jsx)(l.W, {
                          children:
                              !0 === x &&
                              (0, r.jsx)(o.oXn, {
                                  className: p.notice,
                                  children: (0, r.jsx)(b, {})
                              })
                      })
                  ]
              });
    };
