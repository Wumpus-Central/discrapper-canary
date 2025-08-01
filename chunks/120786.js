n.d(t, { L: () => C });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(693789),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(63063),
    p = n(507808),
    g = n(981631),
    h = n(388032),
    f = n(350298),
    b = n(806539),
    x = n(477154),
    _ = n(387888);
let j = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsx)('div', {
            className: f.assetContainer,
            children: e
                ? (0, i.jsx)('img', {
                      src: x.Z,
                      className: f.orbAsset,
                      alt: 'Orb'
                  })
                : (0, i.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: f.orbAsset,
                      children: [
                          (0, i.jsx)('source', {
                              src: _.Z,
                              type: 'video/webm'
                          }),
                          (0, i.jsx)('img', {
                              src: x.Z,
                              className: f.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    C = (e) => {
        let { ctaText: t, ctaOnClick: n, analyticsPage: s, linkPreText: l = h.intl.string(h.t['5qZv9P']), linkText: d = h.intl.string(h.t.XRdyj4) } = e,
            u = r.useCallback(() => {
                null != s &&
                    (0, p.Y)({
                        pageType: s,
                        sectionType: g.jXE.ORBS_BALANCE_MENU,
                        ctaObject: g.qAy.ORBS_LEARN_MORE_LINK
                    });
            }, [s]);
        return (0, i.jsxs)('div', {
            className: a()(f.container, b.baseCardOutline),
            children: [
                (0, i.jsx)(j, {}),
                (0, i.jsx)(o.zx, {
                    className: f.ctaButton,
                    color: o.zx.Colors.BRAND,
                    look: o.zx.Looks.FILLED,
                    size: o.zx.Sizes.SMALL,
                    onClick: n,
                    fullWidth: !0,
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: f.linkContainer,
                    children: [
                        void 0 !== l &&
                            (0, i.jsxs)(c.Text, {
                                variant: 'text-xs/normal',
                                className: f.linkPreText,
                                children: [l, '\xA0']
                            }),
                        (0, i.jsx)(c.eee, {
                            target: '_blank',
                            rel: 'author',
                            href: m.Z.getArticleURL(g.BhN.ORBS_FAQ),
                            className: f.learnMoreLink,
                            onClick: u,
                            children: d
                        })
                    ]
                })
            ]
        });
    };
