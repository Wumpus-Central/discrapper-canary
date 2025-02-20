n.r(t), n.d(t, { default: () => g });
var r = n(200651),
    a = n(192379),
    i = n(215569),
    o = n(481060),
    l = n(852860),
    s = n(313201),
    c = n(944163),
    d = n(266395),
    u = n(187565),
    m = n(530726),
    _ = n(592286),
    f = n(388032),
    b = n(853354);
let x = () =>
        (0, r.jsx)(l.Z, {
            submitting: !1,
            message: f.NW.string(f.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: f.NW.string(f.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, o.Mr3)(_.Pn);
            },
            onSaveText: f.NW.string(f.t['Xt+UaW']),
            onSaveButtonColor: o.Ttl.RED
        }),
    g = (e) => {
        let { transitionState: t, guildId: n, onClose: l, onComplete: _, isPreview: f = !1 } = e,
            g = (0, d.rb)((e) => e.shouldShowWarning),
            p = (0, u.ng)(n, f),
            h = (0, s.Dt)();
        return (a.useEffect(() => {
            p === c.t && l();
        }, [l, p]),
        p === c.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Y0X, {
                          transitionState: t,
                          'aria-labelledby': h,
                          size: o.CgR.DYNAMIC,
                          className: b.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: b.closeButton,
                                  children: (0, r.jsx)(o.olH, { onClick: () => l(!1) })
                              }),
                              (0, r.jsx)(m.Z, {
                                  verificationForm: p,
                                  headerId: h,
                                  guildId: n,
                                  onClose: l,
                                  onComplete: _,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, r.jsx)(i.W, {
                          children:
                              !0 === g &&
                              (0, r.jsx)(o.oXn, {
                                  className: b.notice,
                                  children: (0, r.jsx)(x, {})
                              })
                      })
                  ]
              });
    };
