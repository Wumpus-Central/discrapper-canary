l.r(t), l.d(t, { default: () => v });
var s = l(200651),
    n = l(192379),
    r = l(215569),
    i = l(481060),
    a = l(852860),
    o = l(313201),
    c = l(944163),
    d = l(266395),
    u = l(187565),
    m = l(200305),
    x = l(592286),
    h = l(388032),
    g = l(916199);
let j = () =>
        (0, s.jsx)(a.Z, {
            submitting: !1,
            message: h.NW.string(h.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: h.NW.string(h.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, i.Mr3)(x.Pn);
            },
            onSaveText: h.NW.string(h.t['Xt+UaW']),
            onSaveButtonColor: i.Ttl.RED
        }),
    v = (e) => {
        let { guildId: t, transitionState: l, onClose: a, onComplete: x, inviteKey: h, isPreview: v = !1 } = e,
            N = (0, d.rb)((e) => e.shouldShowWarning),
            { hasFetched: f, verificationForm: p } = (0, u.ng)(t, v, h),
            b = (0, o.Dt)();
        return (n.useEffect(() => {
            f && p === c.t && a();
        }, [f, a, p]),
        p === c.t)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)(i.Y0X, {
                          size: i.CgR.MEDIUM,
                          className: g.container,
                          transitionState: l,
                          'aria-labelledby': b,
                          children: [
                              (0, s.jsx)(i.olH, {
                                  onClick: () => a(!1),
                                  className: g.closeButton
                              }),
                              (0, s.jsx)(m.Z, {
                                  verificationForm: p,
                                  headerId: b,
                                  guildId: t,
                                  onClose: a,
                                  onComplete: x,
                                  isPreview: v
                              })
                          ]
                      }),
                      (0, s.jsx)(r.W, {
                          children:
                              !0 === N &&
                              (0, s.jsx)(i.oXn, {
                                  className: g.notice,
                                  children: (0, s.jsx)(j, {})
                              })
                      })
                  ]
              });
    };
