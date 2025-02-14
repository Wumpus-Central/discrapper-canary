n.d(t, { r: () => E });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(793030),
    a = n(481060),
    o = n(230711),
    c = n(695346),
    d = n(903002),
    u = n(214492),
    m = n(981631),
    g = n(388032),
    h = n(875351),
    x = n(146036),
    _ = n(510176);
function p(e) {
    let { headerAssetSrc: t, headerText: n, description: s, assets: o = [], assetCount: c = 0, disabled: u = !1, onClick: m } = e;
    return (0, i.jsx)('div', {
        className: h.container,
        children: (0, i.jsxs)('div', {
            className: r()(h.innerContainer, { [h.disabled]: u }),
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
                            children: s
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
function E() {
    let e = !c.G6.useSetting(),
        { assets: t, count: n } = (0, u.oF)(),
        { assets: s, count: r } = (0, u.hs)();
    return (0, i.jsxs)('div', {
        className: h.cardsContainer,
        children: [
            (0, i.jsx)(p, {
                headerAssetSrc: x,
                headerText: g.intl.string(g.t.CQkyMj),
                description: g.intl.string(g.t.ctRS3d),
                assets: t,
                assetCount: n,
                onClick: () => o.Z.open(m.oAB.REGISTERED_GAMES),
                disabled: e
            }),
            (0, i.jsx)(p, {
                headerAssetSrc: _,
                headerText: g.intl.string(g.t['3fe7U1']),
                description: g.intl.string(g.t.DU5UXF),
                assets: s,
                assetCount: r,
                onClick: () => o.Z.open(m.oAB.CONNECTIONS),
                disabled: e
            })
        ]
    });
}
