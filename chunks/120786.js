n.d(t, { L: () => E });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(693789),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(507808),
    g = n(981631),
    p = n(388032),
    h = n(350298),
    f = n(806539),
    b = n(477154),
    _ = n(230114);
let x = () => {
        let e = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsx)('div', {
            className: h.assetContainer,
            children: e
                ? (0, i.jsx)('img', {
                      src: b.Z,
                      className: h.orbAsset,
                      alt: 'Orb'
                  })
                : (0, i.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: h.orbAsset,
                      children: [
                          (0, i.jsx)('source', {
                              src: _.Z,
                              type: 'video/webm'
                          }),
                          (0, i.jsx)('img', {
                              src: b.Z,
                              className: h.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    E = (e) => {
        let { ctaText: t, ctaOnClick: n, analyticsPage: s, linkPreText: a = p.intl.string(p.t['5qZv9P']), linkText: d = p.intl.string(p.t.XRdyj4) } = e,
            u = r.useCallback(() => {
                null != s &&
                    (0, m.Y)({
                        pageType: s,
                        sectionType: g.jXE.ORBS_BALANCE_MENU,
                        ctaObject: g.qAy.ORBS_LEARN_MORE_LINK
                    });
            }, [s]);
        return (0, i.jsxs)('div', {
            className: l()(h.container, f.baseCardOutline),
            children: [
                (0, i.jsx)(x, {}),
                (0, i.jsx)(o.zx, {
                    className: h.ctaButton,
                    color: o.zx.Colors.BRAND,
                    look: o.zx.Looks.FILLED,
                    size: o.zx.Sizes.SMALL,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: h.linkContainer,
                    children: [
                        void 0 !== a &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(c.Text, {
                                        variant: 'text-xs/normal',
                                        className: h.linkPreText,
                                        children: [a, '\xA0']
                                    }),
                                    ' '
                                ]
                            }),
                        (0, i.jsx)(c.eee, {
                            target: '_blank',
                            rel: 'author',
                            href: g.yXt.HELP_ARTICLE_ORBS_FAQ,
                            className: h.learnMoreLink,
                            onClick: u,
                            children: d
                        })
                    ]
                })
            ]
        });
    };
