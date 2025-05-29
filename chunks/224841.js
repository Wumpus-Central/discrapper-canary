n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(388905),
    o = n(703656),
    a = n(671533),
    s = n(63063),
    c = n(981631),
    u = n(388032),
    d = n(963650);
let h = () => (0, o.uL)(c.Z5c.LOGIN, { source: 'age_gate_underage' }),
    g = (e) => {
        let { authBoxClassName: t, underageMessage: o, inUnclaimedFlowExperiment: g } = e;
        return g
            ? (0, r.jsx)(l.ZP, {
                  children: (0, r.jsxs)('div', {
                      className: d.contentContainer,
                      children: [
                          (0, r.jsx)(l.Dx, {
                              className: d.title,
                              children: u.intl.string(u.t.nCB6GR)
                          }),
                          (0, r.jsx)(l.DK, {
                              className: d.subtitle,
                              children: u.intl.format(u.t.KQgoxM, { underageMessage: null != o ? o : u.intl.string(u.t.WqEH4O) })
                          }),
                          (0, r.jsxs)(i.zxk, {
                              className: d.button,
                              innerClassName: d.buttonWithIcon,
                              onClick: () => window.open(s.Z.getArticleURL(c.BhN.AGE_GATE), '_blank'),
                              children: [
                                  (0, r.jsx)('div', { children: u.intl.string(u.t.hvVgAQ) }),
                                  (0, r.jsx)(a.Z, {
                                      height: 20,
                                      width: 20,
                                      direction: a.Z.Directions.UP,
                                      className: d.externalArrow
                                  })
                              ]
                          })
                      ]
                  })
              })
            : (0, r.jsxs)(l.ZP, {
                  className: t,
                  children: [
                      (0, r.jsx)('img', {
                          alt: '',
                          src: n(231443),
                          className: d.img
                      }),
                      (0, r.jsx)(l.Dx, {
                          className: d.title,
                          children: u.intl.string(u.t.nCB6GR)
                      }),
                      (0, r.jsx)(l.DK, {
                          className: d.subtitle,
                          children: u.intl.format(u.t.b0QzXV, {
                              underageMessage: null != o ? o : u.intl.string(u.t.WqEH4O),
                              helpURL: s.Z.getArticleURL(c.BhN.AGE_GATE)
                          })
                      }),
                      (0, r.jsx)(i.zxk, {
                          fullWidth: !0,
                          onClick: h,
                          children: u.intl.string(u.t.szzQ6O)
                      })
                  ]
              });
    };
