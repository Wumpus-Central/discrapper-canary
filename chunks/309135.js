r.r(t), r.d(t, { default: () => p });
var n = r(200651),
    a = r(192379),
    i = r(215569),
    o = r(481060),
    l = r(852860),
    s = r(313201),
    c = r(944163),
    d = r(266395),
    u = r(187565),
    m = r(530726),
    _ = r(592286),
    f = r(388032),
    x = r(853354);
let b = () =>
        (0, n.jsx)(l.Z, {
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
    p = (e) => {
        let { transitionState: t, guildId: r, onClose: l, onComplete: _, isPreview: f = !1 } = e,
            p = (0, d.rb)((e) => e.shouldShowWarning),
            g = (0, u.ng)(r, f),
            h = (0, s.Dt)();
        return (a.useEffect(() => {
            g === c.t && l();
        }, [l, g]),
        g === c.t)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(o.Y0X, {
                          transitionState: t,
                          'aria-labelledby': h,
                          size: o.CgR.DYNAMIC,
                          className: x.container,
                          hideShadow: !0,
                          children: [
                              (0, n.jsx)('div', {
                                  className: x.closeButton,
                                  children: (0, n.jsx)(o.olH, { onClick: () => l(!1) })
                              }),
                              (0, n.jsx)(m.Z, {
                                  verificationForm: g,
                                  headerId: h,
                                  guildId: r,
                                  onClose: l,
                                  onComplete: _,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, n.jsx)(i.W, {
                          children:
                              !0 === p &&
                              (0, n.jsx)(o.oXn, {
                                  className: x.notice,
                                  children: (0, n.jsx)(b, {})
                              })
                      })
                  ]
              });
    };
