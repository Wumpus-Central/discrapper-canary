n.d(t, {
    Oc: () => m,
    t: () => h,
    xe: () => g
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(131388),
    a = n(409813),
    s = n(586585),
    l = n(614277),
    c = n(225715),
    u = n(750143),
    d = n(388032),
    f = n(708820),
    _ = n(365627),
    p = n(753260);
let h = (e) => {
        let { step: t, onClose: n } = e,
            s = (0, o.Z)(u.X);
        return t === a.h8.CONFIRM || t === a.h8.BENEFITS
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: f.headerContainer,
                  children: [
                      !s &&
                          (0, r.jsx)('div', {
                              className: f.headerImageContainer,
                              'aria-hidden': 'true',
                              children: (0, r.jsx)('img', {
                                  src: p,
                                  alt: '',
                                  className: f.headerImage
                              })
                          }),
                      (0, r.jsx)(i.P3F, {
                          className: f.closeContainer,
                          onClick: () => n(),
                          'aria-label': d.NW.string(d.t.cpT0Cg),
                          children: (0, r.jsx)(i.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.closeIcon
                          })
                      })
                  ]
              });
    },
    m = (e) => {
        let { icon: t, storeListingBenefits: n, skuBenefits: i, application: o, title: a, subtitle: s, description: l } = e;
        return null == o
            ? null
            : (0, r.jsx)('div', {
                  className: f.confirmationContainer,
                  children: (0, r.jsxs)(c.q$, {
                      children: [
                          (0, r.jsx)(c.CW, {
                              application: o,
                              asset: t
                          }),
                          (0, r.jsx)(c.r0, { children: a }),
                          (0, r.jsx)(c.s$, {}),
                          (0, r.jsx)(c.K9, {
                              title: s,
                              description: l
                          }),
                          (0, r.jsx)(c.G9, {
                              applicationId: o.id,
                              storeListingBenefits: n,
                              skuBenefits: i
                          })
                      ]
                  })
              });
    };
function g(e) {
    let { tierName: t, onConfirm: n, subscription: o } = e;
    return (0, r.jsxs)('div', {
        className: f.purchaseConfirmation,
        children: [
            (0, r.jsx)('img', {
                src: _,
                alt: '',
                width: 300,
                height: 126
            }),
            (0, r.jsx)(i.X6q, {
                className: f.confirmationTitle,
                variant: 'heading-xl/extrabold',
                color: 'header-primary',
                children: d.NW.format(d.t['wLFT6+'], { tier: t })
            }),
            (0, r.jsx)(i.Text, {
                className: f.confirmationSubtitle,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: d.NW.format(d.t.OsAK9v, { timestamp: null == o ? void 0 : o.currentPeriodEnd })
            }),
            (0, r.jsx)(l.O3, {
                children: (0, r.jsx)(s.Z, {
                    onPrimary: n,
                    primaryCTA: s.g.CONTINUE,
                    primaryText: d.NW.string(d.t['JtWl+f'])
                })
            })
        ]
    });
}
