n.d(t, { L: () => x });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(693789),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(507808),
    g = n(981631),
    p = n(388032),
    h = n(350298),
    f = n(806539),
    _ = n(477154),
    b = n(230114);
let N = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: h.assetContainer,
            children: e
                ? (0, r.jsx)('img', {
                      src: _.Z,
                      className: h.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: h.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: b.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: _.Z,
                              className: h.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    x = (e) => {
        let { ctaText: t, ctaOnClick: n, analyticsPage: s, linkPreText: l = p.NW.string(p.t['5qZv9P']), linkText: d = p.NW.string(p.t.XRdyj4) } = e,
            u = i.useCallback(() => {
                null != s &&
                    (0, m.Y)({
                        pageType: s,
                        sectionType: g.jXE.ORBS_BALANCE_MENU,
                        ctaObject: g.qAy.ORBS_LEARN_MORE_LINK
                    });
            }, [s]);
        return (0, r.jsxs)('div', {
            className: a()(h.container, f.baseCardOutline),
            children: [
                (0, r.jsx)(N, {}),
                (0, r.jsx)(o.zx, {
                    className: h.ctaButton,
                    color: o.zx.Colors.BRAND,
                    look: o.zx.Looks.FILLED,
                    size: o.zx.Sizes.SMALL,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, r.jsxs)('div', {
                    className: h.linkContainer,
                    children: [
                        void 0 !== l &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(c.Text, {
                                        variant: 'text-xs/normal',
                                        className: h.linkPreText,
                                        children: [l, '\xA0']
                                    }),
                                    ' '
                                ]
                            }),
                        (0, r.jsx)(c.eee, {
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
