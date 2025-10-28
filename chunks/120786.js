n.d(t, { L: () => _ });
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(159691),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(63063),
    p = n(507808),
    h = n(981631),
    x = n(388032),
    f = n(97127),
    b = n(665923),
    g = n(477154),
    v = n(387888);
let j = () => {
        let e = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, a.jsx)("div", {
            className: f.assetContainer,
            children: e
                ? (0, a.jsx)("img", {
                      src: g.Z,
                      className: f.orbAsset,
                      alt: "Orb",
                  })
                : (0, a.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: f.orbAsset,
                      children: [
                          (0, a.jsx)("source", {
                              src: v.Z,
                              type: "video/webm",
                          }),
                          (0, a.jsx)("img", {
                              src: g.Z,
                              className: f.orbAsset,
                              alt: "Orb",
                          }),
                      ],
                  }),
        });
    },
    _ = (e) => {
        let {
                ctaText: t,
                ctaOnClick: n,
                analyticsPage: l,
                linkPreText: o = x.intl.string(x.t["5qZv9E"]),
                linkText: d = x.intl.string(x.t.XRdyjz),
            } = e,
            u = r.useCallback(() => {
                null != l &&
                    (0, p.Y)({
                        pageType: l,
                        sectionType: h.jXE.ORBS_BALANCE_MENU,
                        ctaObject: h.qAy.ORBS_LEARN_MORE_LINK,
                    });
            }, [l]);
        return (0, a.jsxs)("div", {
            className: i()(f.container, b.baseCardOutline),
            children: [
                (0, a.jsx)(j, {}),
                (0, a.jsx)(s.zxk, {
                    text: t,
                    variant: "primary",
                    size: "sm",
                    onClick: n,
                    fullWidth: !0,
                }),
                (0, a.jsxs)("div", {
                    className: f.linkContainer,
                    children: [
                        void 0 !== o &&
                            (0, a.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                className: f.linkPreText,
                                children: [o, "\xA0"],
                            }),
                        (0, a.jsx)(c.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: m.Z.getArticleURL(h.BhN.ORBS_FAQ),
                            className: f.learnMoreLink,
                            onClick: u,
                            children: d,
                        }),
                    ],
                }),
            ],
        });
    };
