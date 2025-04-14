n.r(t), n.d(t, { default: () => f });
var i = n(200651),
    r = n(192379),
    l = n(215569),
    o = n(481060),
    a = n(852860),
    s = n(313201),
    c = n(944163),
    d = n(266395),
    u = n(187565),
    m = n(200305),
    x = n(592286),
    h = n(388032),
    b = n(916199);
let g = () =>
        (0, i.jsx)(a.Z, {
            submitting: !1,
            message: h.NW.string(h.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: h.NW.string(h.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, o.Mr3)(x.Pn);
            },
            onSaveText: h.NW.string(h.t['Xt+UaW']),
            onSaveButtonColor: o.Ttl.RED
        }),
    f = (e) => {
        let { guildId: t, transitionState: n, onClose: a, onComplete: x, inviteKey: h, isPreview: f = !1 } = e,
            p = (0, d.rb)((e) => e.shouldShowWarning),
            { hasFetched: j, verificationForm: _ } = (0, u.ng)(t, f, h),
            v = (0, s.Dt)();
        return (r.useEffect(() => {
            j && _ === c.t && a();
        }, [j, a, _]),
        _ === c.t)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(o.Y0X, {
                          size: o.CgR.MEDIUM,
                          className: b.container,
                          transitionState: n,
                          'aria-labelledby': v,
                          children: [
                              (0, i.jsx)(o.olH, {
                                  onClick: () => a(!1),
                                  className: b.closeButton
                              }),
                              (0, i.jsx)(m.Z, {
                                  verificationForm: _,
                                  headerId: v,
                                  guildId: t,
                                  onClose: a,
                                  onComplete: x,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, i.jsx)(l.W, {
                          children:
                              !0 === p &&
                              (0, i.jsx)(o.oXn, {
                                  className: b.notice,
                                  children: (0, i.jsx)(g, {})
                              })
                      })
                  ]
              });
    };
