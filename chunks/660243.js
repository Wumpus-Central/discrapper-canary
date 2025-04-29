n.d(t, { r: () => x }), n(953529);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(793030),
    a = n(481060),
    o = n(230711),
    c = n(695346),
    d = n(903002),
    u = n(214492),
    m = n(981631),
    p = n(676654),
    g = n(388032),
    h = n(128910),
    f = n(146036),
    b = n(510176);
function _(e) {
    let { headerAssetSrc: t, headerText: n, description: r, assets: o = [], assetCount: c = 0, disabled: u = !1, onClick: m } = e;
    return (0, i.jsx)('div', {
        className: h.container,
        children: (0, i.jsxs)('div', {
            className: s()(h.innerContainer, { [h.disabled]: u }),
            children: [
                (0, i.jsxs)('div', {
                    className: h.headerContainer,
                    children: [
                        (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: h.headerAsset
                        }),
                        (0, i.jsx)(l.X6, {
                            variant: 'heading-md/medium',
                            color: 'header-primary',
                            children: n
                        }),
                        (0, i.jsx)(l.xv, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: r
                        })
                    ]
                }),
                u
                    ? (0, i.jsx)(l.xv, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: g.intl.string(g.t.jfrLLS)
                      })
                    : (0, i.jsxs)('div', {
                          className: h.sharingContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: h.sharingTitleSpacer,
                                  children:
                                      c > 0 &&
                                      (0, i.jsx)(l.xv, {
                                          variant: 'text-sm/semibold',
                                          children: g.intl.string(g.t.NOIHs7)
                                      })
                              }),
                              (0, i.jsxs)('div', {
                                  className: h.manageContainer,
                                  children: [
                                      (0, i.jsx)(d.D, {
                                          assets: o,
                                          assetCount: c,
                                          size: d.F.MEDIUM
                                      }),
                                      (0, i.jsx)(a.zxk, {
                                          onClick: m,
                                          color: a.zxk.Colors.PRIMARY,
                                          children: 'Manage'
                                      })
                                  ]
                              })
                          ]
                      })
            ]
        })
    });
}
function x() {
    let e = !c.G6.useSetting(),
        { assets: t, count: n } = (0, u.oF)(),
        { assets: r, count: s } = (0, u.hs)();
    return (0, i.jsxs)('div', {
        className: h.cardsContainer,
        children: [
            (0, i.jsx)(_, {
                headerAssetSrc: f,
                headerText: g.intl.string(g.t.CQkyMj),
                description: g.intl.string(p.default.ctRS3d),
                assets: t,
                assetCount: n,
                onClick: () => o.Z.open(m.oAB.REGISTERED_GAMES),
                disabled: e
            }),
            (0, i.jsx)(_, {
                headerAssetSrc: b,
                headerText: g.intl.string(g.t['3fe7U1']),
                description: g.intl.string(p.default.DU5UXF),
                assets: r,
                assetCount: s,
                onClick: () => o.Z.open(m.oAB.CONNECTIONS),
                disabled: e
            })
        ]
    });
}
