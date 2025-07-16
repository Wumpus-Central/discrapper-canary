(n.d(e, { f: () => m }), n(388685), n(457542));
var a = n(255367),
    i = n(73800),
    r = n(793030),
    l = n(159691),
    s = n(626135),
    o = n(981631),
    c = n(388032),
    d = n(394575),
    x = n(152661);
let m = (t) => {
    let { onClose: e } = t,
        [n, m] = i.useState(!1),
        [u, h] = i.useState(!1),
        C = (t) => {
            (m(t),
                s.default.track(o.rMx.NITRO_PRIVATE_BROWSING_SURVEY_RESPONDED, { is_interested: 1 === t }).finally(() => {
                    (h(!0), m(!1));
                }));
        };
    (0, i.useEffect)(() => {
        if (u)
            return () => {
                e();
            };
    }, [u, e]);
    let g = u
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(r.X6, {
                      variant: 'heading-md/semibold',
                      className: d.header,
                      color: 'text-primary',
                      children: c.intl.string(c.t.FQEiAA)
                  }),
                  (0, a.jsx)(r.xv, {
                      variant: 'text-md/medium',
                      color: 'text-tertiary',
                      children: c.intl.string(c.t.HpIFpK)
                  })
              ]
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(r.X6, {
                      variant: 'heading-md/semibold',
                      className: d.header,
                      color: 'text-primary',
                      children: c.intl.string(c.t.JGz97u)
                  }),
                  (0, a.jsx)(r.xv, {
                      variant: 'text-md/medium',
                      color: 'text-tertiary',
                      children: c.intl.string(c.t.b0QCPT)
                  }),
                  (0, a.jsxs)('div', {
                      className: d.ctaContainer,
                      children: [
                          (0, a.jsx)(l.zx, {
                              loading: 1 === n,
                              disabled: !1 !== n,
                              variant: 'secondary',
                              text: c.intl.string(c.t.p89ACg),
                              onClick: () => C(1),
                              fullWidth: !0
                          }),
                          (0, a.jsx)(l.zx, {
                              loading: 0 === n,
                              disabled: !1 !== n,
                              variant: 'secondary',
                              text: c.intl.string(c.t.gm1Ven),
                              onClick: () => C(0),
                              fullWidth: !0
                          })
                      ]
                  })
              ]
          });
    return (0, a.jsxs)('div', {
        className: d.surveyContainer,
        children: [
            (0, a.jsx)('div', {
                className: d.imageContainer,
                children: (0, a.jsx)('img', {
                    src: x,
                    alt: ''
                })
            }),
            (0, a.jsx)('div', {
                className: d.bodyContainer,
                children: g
            })
        ]
    });
};
