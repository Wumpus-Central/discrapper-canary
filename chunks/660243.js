n.d(t, { r: () => E });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(793030),
    a = n(481060),
    o = n(230711),
    c = n(695346),
    d = n(903002),
    u = n(214492),
    h = n(981631),
    m = n(388032),
    g = n(875351),
    x = n(146036),
    _ = n(510176);
function p(e) {
    let { headerAssetSrc: t, headerText: n, description: s, assets: o = [], assetCount: c = 0, disabled: u = !1, onClick: h } = e;
    return (0, i.jsx)('div', {
        className: g.container,
        children: (0, i.jsxs)('div', {
            className: l()(g.innerContainer, { [g.disabled]: u }),
            children: [
                (0, i.jsxs)('div', {
                    className: g.headerContainer,
                    children: [
                        (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: g.headerAsset
                        }),
                        (0, i.jsx)(r.X6, {
                            variant: 'heading-md/medium',
                            color: 'header-primary',
                            children: n
                        }),
                        (0, i.jsx)(r.xv, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: s
                        })
                    ]
                }),
                u
                    ? (0, i.jsx)(r.xv, {
                          variant: 'text-sm/semibold',
                          color: 'text-muted',
                          children: m.intl.string(m.t.jfrLLS)
                      })
                    : (0, i.jsxs)('div', {
                          className: g.sharingContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: g.sharingTitleSpacer,
                                  children:
                                      c > 0 &&
                                      (0, i.jsx)(r.xv, {
                                          variant: 'text-sm/semibold',
                                          children: m.intl.string(m.t.NOIHs7)
                                      })
                              }),
                              (0, i.jsxs)('div', {
                                  className: g.manageContainer,
                                  children: [
                                      (0, i.jsx)(d.D, {
                                          assets: o,
                                          assetCount: c,
                                          size: d.F.MEDIUM
                                      }),
                                      (0, i.jsx)(a.zxk, {
                                          onClick: h,
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
        { assets: s, count: l } = (0, u.hs)();
    return (0, i.jsxs)('div', {
        className: g.cardsContainer,
        children: [
            (0, i.jsx)(p, {
                headerAssetSrc: x,
                headerText: m.intl.string(m.t.CQkyMj),
                description: m.intl.string(m.t.ctRS3d),
                assets: t,
                assetCount: n,
                onClick: () => o.Z.open(h.oAB.REGISTERED_GAMES),
                disabled: e
            }),
            (0, i.jsx)(p, {
                headerAssetSrc: _,
                headerText: m.intl.string(m.t['3fe7U1']),
                description: m.intl.string(m.t.DU5UXF),
                assets: s,
                assetCount: l,
                onClick: () => o.Z.open(h.oAB.CONNECTIONS),
                disabled: e
            })
        ]
    });
}
