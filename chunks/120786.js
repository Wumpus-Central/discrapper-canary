n.d(t, { L: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(568611),
    l = n(442837),
    o = n(693789),
    c = n(607070),
    d = n(70097),
    u = n(198758),
    m = n(803812),
    p = n(477154),
    g = n(230114);
let h = () => {
        let e = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: u.assetContainer,
            children: e
                ? (0, r.jsx)('img', {
                      src: p.Z,
                      className: u.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: u.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: g.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: p.Z,
                              className: u.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    f = (e) => {
        let { ctaText: t, ctaOnClick: n, linkText: i, linkTo: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(u.container, m.baseCardOutline),
            children: [
                (0, r.jsx)(h, {}),
                (0, r.jsx)(o.zx, {
                    className: u.ctaButton,
                    color: o.zx.Colors.BRAND,
                    look: o.zx.Looks.FILLED,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, r.jsx)(a.rU, {
                    to: { pathname: l },
                    className: u.learnMoreLink,
                    children: i
                })
            ]
        });
    };
