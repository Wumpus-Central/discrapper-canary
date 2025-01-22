r.d(n, {
    Oc: function () {
        return g;
    },
    t: function () {
        return m;
    },
    xe: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(131388),
    s = r(409813),
    l = r(586585),
    u = r(614277),
    c = r(225715),
    d = r(750143),
    f = r(388032),
    p = r(641479),
    h = r(365627),
    _ = r(753260);
let m = (e) => {
        let { step: n, onClose: r } = e,
            l = (0, o.Z)(d.X);
        return n === s.h8.CONFIRM || n === s.h8.BENEFITS
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: p.headerContainer,
                  children: [
                      !l &&
                          (0, i.jsx)('div', {
                              className: p.headerImageContainer,
                              'aria-hidden': 'true',
                              children: (0, i.jsx)('img', {
                                  src: _,
                                  alt: '',
                                  className: p.headerImage
                              })
                          }),
                      (0, i.jsx)(a.Clickable, {
                          className: p.closeContainer,
                          onClick: () => r(),
                          'aria-label': f.intl.string(f.t.cpT0Cg),
                          children: (0, i.jsx)(a.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.closeIcon
                          })
                      })
                  ]
              });
    },
    g = (e) => {
        let { icon: n, storeListingBenefits: r, skuBenefits: a, application: o, title: s, subtitle: l, description: u } = e;
        return null == o
            ? null
            : (0, i.jsx)('div', {
                  className: p.confirmationContainer,
                  children: (0, i.jsxs)(c.q$, {
                      children: [
                          (0, i.jsx)(c.CW, {
                              application: o,
                              asset: n
                          }),
                          (0, i.jsx)(c.r0, { children: s }),
                          (0, i.jsx)(c.s$, {}),
                          (0, i.jsx)(c.K9, {
                              title: l,
                              description: u
                          }),
                          (0, i.jsx)(c.G9, {
                              applicationId: o.id,
                              storeListingBenefits: r,
                              skuBenefits: a
                          })
                      ]
                  })
              });
    };
function E(e) {
    let { tierName: n, onConfirm: r, subscription: o } = e;
    return (0, i.jsxs)('div', {
        className: p.purchaseConfirmation,
        children: [
            (0, i.jsx)('img', {
                src: h,
                alt: '',
                width: 300,
                height: 126
            }),
            (0, i.jsx)(a.Heading, {
                className: p.confirmationTitle,
                variant: 'heading-xl/extrabold',
                color: 'header-primary',
                children: f.intl.format(f.t['wLFT6+'], { tier: n })
            }),
            (0, i.jsx)(a.Text, {
                className: p.confirmationSubtitle,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: f.intl.format(f.t.OsAK9v, { timestamp: null == o ? void 0 : o.currentPeriodEnd })
            }),
            (0, i.jsx)(u.O3, {
                children: (0, i.jsx)(l.Z, {
                    onPrimary: r,
                    primaryCTA: l.g.CONTINUE,
                    primaryText: f.intl.string(f.t['JtWl+f'])
                })
            })
        ]
    });
}
