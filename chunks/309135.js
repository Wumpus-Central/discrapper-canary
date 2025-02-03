t.r(n), t.d(n, { default: () => x });
var r = t(200651),
    a = t(192379),
    i = t(215569),
    o = t(481060),
    l = t(852860),
    s = t(313201),
    c = t(944163),
    d = t(266395),
    u = t(187565),
    _ = t(577809),
    m = t(592286),
    f = t(388032),
    h = t(145638);
let p = () =>
        (0, r.jsx)(l.Z, {
            submitting: !1,
            message: f.intl.string(f.t['8g514e']),
            onReset: () => {
                (0, d.PE)(!1);
            },
            onResetText: f.intl.string(f.t['ETE/oK']),
            onSave: () => {
                (0, d.PE)(!1), (0, o.Mr3)(m.Pn);
            },
            onSaveText: f.intl.string(f.t['Xt+UaW']),
            onSaveButtonColor: o.Ttl.RED
        }),
    x = (e) => {
        let { transitionState: n, guildId: t, onClose: l, onComplete: m, isPreview: f = !1 } = e,
            x = (0, d.rb)((e) => e.shouldShowWarning),
            C = (0, u.ng)(t, void 0, f),
            g = (0, s.Dt)();
        return (a.useEffect(() => {
            C === c.t && l();
        }, [l, C]),
        C === c.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Y0X, {
                          transitionState: n,
                          'aria-labelledby': g,
                          size: o.CgR.DYNAMIC,
                          className: h.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: h.closeButton,
                                  children: (0, r.jsx)(o.olH, { onClick: () => l(!1) })
                              }),
                              (0, r.jsx)(_.Z, {
                                  verificationForm: C,
                                  headerId: g,
                                  guildId: t,
                                  onClose: l,
                                  onComplete: m,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, r.jsx)(i.W, {
                          children:
                              !0 === x &&
                              (0, r.jsx)(o.oXn, {
                                  className: h.notice,
                                  children: (0, r.jsx)(p, {})
                              })
                      })
                  ]
              });
    };
