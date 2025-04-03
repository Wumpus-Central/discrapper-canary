n.d(t, { r: () => x }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(793030),
    l = n(481060),
    o = n(230711),
    c = n(695346),
    d = n(903002),
    u = n(214492),
    m = n(981631),
    g = n(676654),
    p = n(388032),
    h = n(128910),
    f = n(146036),
    b = n(510176);
function N(e) {
    let { headerAssetSrc: t, headerText: n, description: i, assets: o = [], assetCount: c = 0, disabled: u = !1, onClick: m } = e;
    return (0, r.jsx)('div', {
        className: h.container,
        children: (0, r.jsxs)('div', {
            className: s()(h.innerContainer, { [h.disabled]: u }),
            children: [
                (0, r.jsxs)('div', {
                    className: h.headerContainer,
                    children: [
                        (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: h.headerAsset
                        }),
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-md/medium',
                            color: 'header-primary',
                            children: n
                        }),
                        (0, r.jsx)(a.xv, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: i
                        })
                    ]
                }),
                u
                    ? (0, r.jsx)(a.xv, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: p.NW.string(p.t.jfrLLS)
                      })
                    : (0, r.jsxs)('div', {
                          className: h.sharingContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: h.sharingTitleSpacer,
                                  children:
                                      c > 0 &&
                                      (0, r.jsx)(a.xv, {
                                          variant: 'text-sm/semibold',
                                          children: p.NW.string(p.t.NOIHs7)
                                      })
                              }),
                              (0, r.jsxs)('div', {
                                  className: h.manageContainer,
                                  children: [
                                      (0, r.jsx)(d.D, {
                                          assets: o,
                                          assetCount: c,
                                          size: d.F.MEDIUM
                                      }),
                                      (0, r.jsx)(l.zxk, {
                                          onClick: m,
                                          color: l.zxk.Colors.PRIMARY,
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
        { assets: i, count: s } = (0, u.hs)();
    return (0, r.jsxs)('div', {
        className: h.cardsContainer,
        children: [
            (0, r.jsx)(N, {
                headerAssetSrc: f,
                headerText: p.NW.string(p.t.CQkyMj),
                description: p.NW.string(g.Z.ctRS3d),
                assets: t,
                assetCount: n,
                onClick: () => o.Z.open(m.oAB.REGISTERED_GAMES),
                disabled: e
            }),
            (0, r.jsx)(N, {
                headerAssetSrc: b,
                headerText: p.NW.string(p.t['3fe7U1']),
                description: p.NW.string(g.Z.DU5UXF),
                assets: i,
                assetCount: s,
                onClick: () => o.Z.open(m.oAB.CONNECTIONS),
                disabled: e
            })
        ]
    });
}
