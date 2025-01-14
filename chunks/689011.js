i.d(e, {
    Oc: function () {
        return j;
    },
    t: function () {
        return h;
    },
    xe: function () {
        return v;
    }
});
var t = i(200651);
i(192379);
var r = i(481060),
    l = i(131388),
    a = i(409813),
    s = i(586585),
    o = i(614277),
    c = i(225715),
    d = i(750143),
    u = i(388032),
    m = i(641479),
    x = i(365627),
    f = i(753260);
let h = (n) => {
        let { step: e, onClose: i } = n,
            s = (0, l.Z)(d.X);
        return e === a.h8.CONFIRM || e === a.h8.BENEFITS
            ? (0, t.jsx)('div', {})
            : (0, t.jsxs)('div', {
                  className: m.headerContainer,
                  children: [
                      !s &&
                          (0, t.jsx)('div', {
                              className: m.headerImageContainer,
                              'aria-hidden': 'true',
                              children: (0, t.jsx)('img', {
                                  src: f,
                                  alt: '',
                                  className: m.headerImage
                              })
                          }),
                      (0, t.jsx)(r.Clickable, {
                          className: m.closeContainer,
                          onClick: () => i(),
                          'aria-label': u.intl.string(u.t.cpT0Cg),
                          children: (0, t.jsx)(r.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: m.closeIcon
                          })
                      })
                  ]
              });
    },
    j = (n) => {
        let { icon: e, storeListingBenefits: i, skuBenefits: r, application: l, title: a, subtitle: s, description: o } = n;
        return null == l
            ? null
            : (0, t.jsx)('div', {
                  className: m.confirmationContainer,
                  children: (0, t.jsxs)(c.q$, {
                      children: [
                          (0, t.jsx)(c.CW, {
                              application: l,
                              asset: e
                          }),
                          (0, t.jsx)(c.r0, { children: a }),
                          (0, t.jsx)(c.s$, {}),
                          (0, t.jsx)(c.K9, {
                              title: s,
                              description: o
                          }),
                          (0, t.jsx)(c.G9, {
                              applicationId: l.id,
                              storeListingBenefits: i,
                              skuBenefits: r
                          })
                      ]
                  })
              });
    };
function v(n) {
    let { tierName: e, onConfirm: i, subscription: l } = n;
    return (0, t.jsxs)('div', {
        className: m.purchaseConfirmation,
        children: [
            (0, t.jsx)('img', {
                src: x,
                alt: '',
                width: 300,
                height: 126
            }),
            (0, t.jsx)(r.Heading, {
                className: m.confirmationTitle,
                variant: 'heading-xl/extrabold',
                color: 'header-primary',
                children: u.intl.format(u.t['wLFT6+'], { tier: e })
            }),
            (0, t.jsx)(r.Text, {
                className: m.confirmationSubtitle,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: u.intl.format(u.t.OsAK9v, { timestamp: null == l ? void 0 : l.currentPeriodEnd })
            }),
            (0, t.jsx)(o.O3, {
                children: (0, t.jsx)(s.Z, {
                    onPrimary: i,
                    primaryCTA: s.g.CONTINUE,
                    primaryText: u.intl.string(u.t['JtWl+f'])
                })
            })
        ]
    });
}
