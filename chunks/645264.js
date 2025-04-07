i.r(t), i.d(t, { default: () => N });
var n = i(200651),
    l = i(192379),
    r = i(215569),
    s = i(481060),
    a = i(852860),
    o = i(313201),
    u = i(944163),
    c = i(266395),
    d = i(187565),
    m = i(200305),
    f = i(592286),
    E = i(388032),
    g = i(916199);
let h = () =>
        (0, n.jsx)(a.Z, {
            submitting: !1,
            message: E.NW.string(E.t['8g514e']),
            onReset: () => {
                (0, c.PE)(!1);
            },
            onResetText: E.NW.string(E.t['ETE/oK']),
            onSave: () => {
                (0, c.PE)(!1), (0, s.Mr3)(f.Pn);
            },
            onSaveText: E.NW.string(E.t['Xt+UaW']),
            onSaveButtonColor: s.Ttl.RED
        }),
    N = (e) => {
        let { guildId: t, transitionState: i, onClose: a, onComplete: f, inviteKey: E, isPreview: N = !1 } = e,
            I = (0, c.rb)((e) => e.shouldShowWarning),
            { hasFetched: v, verificationForm: p } = (0, d.ng)(t, N, E),
            j = (0, o.Dt)();
        return (l.useEffect(() => {
            v && p === u.t && a();
        }, [v, a, p]),
        p === u.t)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(s.Y0X, {
                          size: s.CgR.MEDIUM,
                          className: g.container,
                          transitionState: i,
                          'aria-labelledby': j,
                          children: [
                              (0, n.jsx)(s.olH, {
                                  onClick: () => a(!1),
                                  className: g.closeButton
                              }),
                              (0, n.jsx)(m.Z, {
                                  verificationForm: p,
                                  headerId: j,
                                  guildId: t,
                                  onClose: a,
                                  onComplete: f,
                                  isPreview: N
                              })
                          ]
                      }),
                      (0, n.jsx)(r.W, {
                          children:
                              !0 === I &&
                              (0, n.jsx)(s.oXn, {
                                  className: g.notice,
                                  children: (0, n.jsx)(h, {})
                              })
                      })
                  ]
              });
    };
