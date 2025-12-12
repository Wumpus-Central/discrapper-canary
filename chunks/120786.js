n.d(t, { L: () => O });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(159691),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(63063),
    p = n(507808),
    _ = n(981631),
    m = n(388032),
    h = n(97127),
    g = n(665923),
    E = n(477154),
    b = n(387888);
let y = () => {
        let e = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, r.jsx)("div", {
            className: h.assetContainer,
            children: e
                ? (0, r.jsx)("img", {
                      src: E.Z,
                      className: h.orbAsset,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: h.orbAsset,
                      children: [
                          (0, r.jsx)("source", {
                              src: b.Z,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: E.Z,
                              className: h.orbAsset,
                              alt: "Orb",
                          }),
                      ],
                  }),
        });
    },
    O = (e) => {
        let {
                ctaText: t,
                ctaOnClick: n,
                analyticsPage: o,
                linkPreText: s = m.intl.string(m.t["5qZv9E"]),
                linkText: u = m.intl.string(m.t.XRdyjz),
            } = e,
            d = i.useCallback(() => {
                null != o &&
                    (0, p.Y)({
                        pageType: o,
                        sectionType: _.jXE.ORBS_BALANCE_MENU,
                        ctaObject: _.qAy.ORBS_LEARN_MORE_LINK,
                    });
            }, [o]);
        return (0, r.jsxs)("div", {
            className: a()(h.container, g.baseCardOutline),
            children: [
                (0, r.jsx)(y, {}),
                (0, r.jsx)(l.zxk, {
                    text: t,
                    variant: "primary",
                    size: "sm",
                    onClick: n,
                    fullWidth: !0,
                }),
                (0, r.jsxs)("div", {
                    className: h.linkContainer,
                    children: [
                        void 0 !== s &&
                            (0, r.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                className: h.linkPreText,
                                children: [s, "\xA0"],
                            }),
                        (0, r.jsx)(c.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: f.Z.getArticleURL(_.BhN.ORBS_FAQ),
                            className: h.learnMoreLink,
                            onClick: d,
                            children: u,
                        }),
                    ],
                }),
            ],
        });
    };
