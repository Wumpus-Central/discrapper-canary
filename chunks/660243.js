n.d(t, { r: () => _ });
var i = n(200651);
n(192379);
var s = n(793030),
    l = n(481060),
    r = n(230711),
    a = n(695346),
    o = n(903002),
    c = n(214492),
    d = n(981631),
    u = n(388032),
    h = n(875351),
    m = n(146036),
    g = n(510176);
function x(e) {
    let { headerAssetSrc: t, headerText: n, description: r, assets: a = [], assetCount: c = 0, disabled: d = !1, onClick: m } = e;
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)('div', {
                className: h.headerContainer,
                children: [
                    (0, i.jsx)('img', {
                        src: t,
                        alt: '',
                        className: h.headerAsset
                    }),
                    (0, i.jsx)(s.X6, {
                        variant: 'heading-lg/normal',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, i.jsx)(s.xv, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: r
                    })
                ]
            }),
            d
                ? (0, i.jsx)(s.xv, {
                      variant: 'text-sm/semibold',
                      color: 'text-muted',
                      children: u.intl.string(u.t.jfrLLS)
                  })
                : (0, i.jsxs)('div', {
                      className: h.sharingContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: h.sharingTitleSpacer,
                              children:
                                  c > 0 &&
                                  (0, i.jsx)(s.xv, {
                                      variant: 'text-sm/semibold',
                                      children: u.intl.string(u.t.NOIHs7)
                                  })
                          }),
                          (0, i.jsxs)('div', {
                              className: h.manageContainer,
                              children: [
                                  (0, i.jsx)(o.D, {
                                      assets: a,
                                      assetCount: c,
                                      size: o.F.MEDIUM
                                  }),
                                  (0, i.jsx)(l.zxk, {
                                      onClick: m,
                                      color: l.zxk.Colors.PRIMARY,
                                      children: 'Manage'
                                  })
                              ]
                          })
                      ]
                  })
        ]
    });
}
function _() {
    let e = !a.G6.useSetting(),
        { assets: t, count: n } = (0, c.oF)(),
        { assets: s, count: l } = (0, c.hs)();
    return (0, i.jsxs)('div', {
        className: h.cardsContainer,
        children: [
            (0, i.jsx)(x, {
                headerAssetSrc: m,
                headerText: u.intl.string(u.t.CQkyMj),
                description: u.intl.string(u.t.ctRS3d),
                assets: t,
                assetCount: n,
                onClick: () => r.Z.open(d.oAB.REGISTERED_GAMES),
                disabled: e
            }),
            (0, i.jsx)(x, {
                headerAssetSrc: g,
                headerText: u.intl.string(u.t['3fe7U1']),
                description: u.intl.string(u.t.DU5UXF),
                assets: s,
                assetCount: l,
                onClick: () => r.Z.open(d.oAB.CONNECTIONS),
                disabled: e
            })
        ]
    });
}
