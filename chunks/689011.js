n.d(t, {
    Oc: () => m,
    t: () => h,
    xe: () => g
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(131388),
    s = n(409813),
    o = n(586585),
    l = n(614277),
    u = n(225715),
    c = n(750143),
    d = n(388032),
    f = n(7016),
    _ = n(365627),
    p = n(753260);
let h = (e) => {
        let { step: t, onClose: n } = e,
            o = (0, a.Z)(c.X);
        return t === s.h8.CONFIRM || t === s.h8.BENEFITS
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: f.headerContainer,
                  children: [
                      !o &&
                          (0, i.jsx)('div', {
                              className: f.headerImageContainer,
                              'aria-hidden': 'true',
                              children: (0, i.jsx)('img', {
                                  src: p,
                                  alt: '',
                                  className: f.headerImage
                              })
                          }),
                      (0, i.jsx)(r.P3F, {
                          className: f.closeContainer,
                          onClick: () => n(),
                          'aria-label': d.intl.string(d.t.cpT0Cg),
                          children: (0, i.jsx)(r.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.closeIcon
                          })
                      })
                  ]
              });
    },
    m = (e) => {
        let { icon: t, storeListingBenefits: n, skuBenefits: r, application: a, title: s, subtitle: o, description: l } = e;
        return null == a
            ? null
            : (0, i.jsx)('div', {
                  className: f.confirmationContainer,
                  children: (0, i.jsxs)(u.q$, {
                      children: [
                          (0, i.jsx)(u.CW, {
                              application: a,
                              asset: t
                          }),
                          (0, i.jsx)(u.r0, { children: s }),
                          (0, i.jsx)(u.s$, {}),
                          (0, i.jsx)(u.K9, {
                              title: o,
                              description: l
                          }),
                          (0, i.jsx)(u.G9, {
                              applicationId: a.id,
                              storeListingBenefits: n,
                              skuBenefits: r
                          })
                      ]
                  })
              });
    };
function g(e) {
    let { tierName: t, onConfirm: n, subscription: a } = e;
    return (0, i.jsxs)('div', {
        className: f.purchaseConfirmation,
        children: [
            (0, i.jsx)('img', {
                src: _,
                alt: '',
                width: 300,
                height: 126
            }),
            (0, i.jsx)(r.X6q, {
                className: f.confirmationTitle,
                variant: 'heading-xl/extrabold',
                color: 'header-primary',
                children: d.intl.format(d.t['wLFT6+'], { tier: t })
            }),
            (0, i.jsx)(r.Text, {
                className: f.confirmationSubtitle,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: d.intl.format(d.t.OsAK9v, { timestamp: null == a ? void 0 : a.currentPeriodEnd })
            }),
            (0, i.jsx)(l.O3, {
                children: (0, i.jsx)(o.Z, {
                    onPrimary: n,
                    primaryCTA: o.g.CONTINUE,
                    primaryText: d.intl.string(d.t['JtWl+f'])
                })
            })
        ]
    });
}
