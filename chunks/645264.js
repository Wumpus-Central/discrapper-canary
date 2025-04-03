t.r(i), t.d(i, { default: () => g });
var n = t(200651),
    r = t(192379),
    l = t(215569),
    u = t(481060),
    o = t(852860),
    a = t(313201),
    s = t(944163),
    E = t(266395),
    c = t(187565),
    d = t(200305),
    I = t(592286),
    f = t(388032),
    _ = t(916199);
let S = () =>
        (0, n.jsx)(o.Z, {
            submitting: !1,
            message: f.NW.string(f.t['8g514e']),
            onReset: () => {
                (0, E.PE)(!1);
            },
            onResetText: f.NW.string(f.t['ETE/oK']),
            onSave: () => {
                (0, E.PE)(!1), (0, u.Mr3)(I.Pn);
            },
            onSaveText: f.NW.string(f.t['Xt+UaW']),
            onSaveButtonColor: u.Ttl.RED
        }),
    g = (e) => {
        let { guildId: i, transitionState: t, onClose: o, onComplete: I, inviteKey: f, isPreview: g = !1 } = e,
            A = (0, E.rb)((e) => e.shouldShowWarning),
            { hasFetched: T, verificationForm: D } = (0, c.ng)(i, g, f),
            h = (0, a.Dt)();
        return (r.useEffect(() => {
            T && D === s.t && o();
        }, [T, o, D]),
        D === s.t)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(u.Y0X, {
                          size: u.CgR.MEDIUM,
                          className: _.container,
                          transitionState: t,
                          'aria-labelledby': h,
                          children: [
                              (0, n.jsx)(u.olH, {
                                  onClick: () => o(!1),
                                  className: _.closeButton
                              }),
                              (0, n.jsx)(d.Z, {
                                  verificationForm: D,
                                  headerId: h,
                                  guildId: i,
                                  onClose: o,
                                  onComplete: I,
                                  isPreview: g
                              })
                          ]
                      }),
                      (0, n.jsx)(l.W, {
                          children:
                              !0 === A &&
                              (0, n.jsx)(u.oXn, {
                                  className: _.notice,
                                  children: (0, n.jsx)(S, {})
                              })
                      })
                  ]
              });
    };
