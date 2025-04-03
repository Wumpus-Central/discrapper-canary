n.d(t, { L: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(693789),
    o = n(481060),
    c = n(607070),
    d = n(70097),
    u = n(981631),
    m = n(388032),
    g = n(350298),
    p = n(806539),
    h = n(477154),
    f = n(230114);
let b = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: g.assetContainer,
            children: e
                ? (0, r.jsx)('img', {
                      src: h.Z,
                      className: g.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: g.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: f.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: h.Z,
                              className: g.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    N = (e) => {
        let { ctaText: t, ctaOnClick: n, linkPreText: i = m.NW.string(m.t['5qZv9P']), linkText: a = m.NW.string(m.t.XRdyj4) } = e;
        return (0, r.jsxs)('div', {
            className: s()(g.container, p.baseCardOutline),
            children: [
                (0, r.jsx)(b, {}),
                (0, r.jsx)(l.zx, {
                    className: g.ctaButton,
                    color: l.zx.Colors.BRAND,
                    look: l.zx.Looks.FILLED,
                    size: l.zx.Sizes.SMALL,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, r.jsxs)('div', {
                    className: g.linkContainer,
                    children: [
                        void 0 !== i &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(o.Text, {
                                        variant: 'text-xs/normal',
                                        className: g.linkPreText,
                                        children: [i, '\xA0']
                                    }),
                                    ' '
                                ]
                            }),
                        (0, r.jsx)(o.eee, {
                            target: '_blank',
                            rel: 'author',
                            href: u.yXt.HELP_ARTICLE_ORBS_FAQ,
                            className: g.learnMoreLink,
                            children: a
                        })
                    ]
                })
            ]
        });
    };
