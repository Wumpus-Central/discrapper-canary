n.d(t, { r: () => _ });
var i = n(200651);
n(192379);
var s = n(793030),
    r = n(481060),
    l = n(230711),
    a = n(695346),
    o = n(903002),
    c = n(214492),
    d = n(981631),
    u = n(388032),
    m = n(707288),
    g = n(146036),
    h = n(510176);
function x(e) {
    let { headerAssetSrc: t, headerText: n, description: l, assets: a = [], assetCount: c = 0, disabled: d = !1, onClick: g } = e;
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsxs)('div', {
                className: m.headerContainer,
                children: [
                    (0, i.jsx)('img', {
                        src: t,
                        alt: '',
                        className: m.headerAsset
                    }),
                    (0, i.jsx)(s.X6, {
                        variant: 'heading-lg/normal',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, i.jsx)(s.xv, {
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: l
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
                      className: m.sharingContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: m.sharingTitleSpacer,
                              children:
                                  c > 0 &&
                                  (0, i.jsx)(s.xv, {
                                      variant: 'text-sm/semibold',
                                      children: u.intl.string(u.t['9b/+6e'])
                                  })
                          }),
                          (0, i.jsxs)('div', {
                              className: m.manageContainer,
                              children: [
                                  (0, i.jsx)(o.D, {
                                      assets: a,
                                      assetCount: c,
                                      size: o.F.MEDIUM
                                  }),
                                  (0, i.jsx)(r.zxk, {
                                      onClick: g,
                                      color: r.zxk.Colors.PRIMARY,
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
        { assets: s, count: r } = (0, c.hs)();
    return (0, i.jsxs)('div', {
        className: m.cardsContainer,
        children: [
            (0, i.jsx)(x, {
                headerAssetSrc: g,
                headerText: u.intl.string(u.t.URyqtL),
                description: u.intl.string(u.t['3uTjaG']),
                assets: t,
                assetCount: n,
                onClick: () => l.Z.open(d.oAB.REGISTERED_GAMES),
                disabled: e
            }),
            (0, i.jsx)(x, {
                headerAssetSrc: h,
                headerText: u.intl.string(u.t['3fe7U1']),
                description: u.intl.string(u.t.IoN1am),
                assets: s,
                assetCount: r,
                onClick: () => l.Z.open(d.oAB.CONNECTIONS),
                disabled: e
            })
        ]
    });
}
