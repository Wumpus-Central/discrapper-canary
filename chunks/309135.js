t.r(n), t.d(n, { default: () => x });
var r = t(200651),
    i = t(192379),
    a = t(215569),
    o = t(481060),
    l = t(852860),
    s = t(313201),
    d = t(944163),
    c = t(266395),
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
                (0, c.PE)(!1);
            },
            onResetText: f.intl.string(f.t['ETE/oK']),
            onSave: () => {
                (0, c.PE)(!1), (0, o.Mr3)(m.Pn);
            },
            onSaveText: f.intl.string(f.t['Xt+UaW']),
            onSaveButtonColor: o.Ttl.RED
        }),
    x = (e) => {
        let { transitionState: n, guildId: t, onClose: l, onComplete: m, isPreview: f = !1 } = e,
            x = (0, c.rb)((e) => e.shouldShowWarning),
            v = (0, u.ng)(t, void 0, f),
            C = (0, s.Dt)();
        return (i.useEffect(() => {
            v === d.t && l();
        }, [l, v]),
        v === d.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(o.Y0X, {
                          transitionState: n,
                          'aria-labelledby': C,
                          size: o.CgR.DYNAMIC,
                          className: h.container,
                          hideShadow: !0,
                          children: [
                              (0, r.jsx)('div', {
                                  className: h.closeButton,
                                  children: (0, r.jsx)(o.olH, { onClick: () => l(!1) })
                              }),
                              (0, r.jsx)(_.Z, {
                                  verificationForm: v,
                                  headerId: C,
                                  guildId: t,
                                  onClose: l,
                                  onComplete: m,
                                  isPreview: f
                              })
                          ]
                      }),
                      (0, r.jsx)(a.W, {
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
