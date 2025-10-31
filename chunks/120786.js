n.d(t, { L: () => O });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(159691),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(63063),
    _ = n(507808),
    p = n(981631),
    h = n(388032),
    m = n(97127),
    g = n(665923),
    E = n(477154),
    b = n(387888);
let y = () => {
        let e = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, r.jsx)("div", {
            className: m.assetContainer,
            children: e
                ? (0, r.jsx)("img", {
                      src: E.Z,
                      className: m.orbAsset,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: m.orbAsset,
                      children: [
                          (0, r.jsx)("source", {
                              src: b.Z,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: E.Z,
                              className: m.orbAsset,
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
                analyticsPage: a,
                linkPreText: s = h.intl.string(h.t["5qZv9E"]),
                linkText: u = h.intl.string(h.t.XRdyjz),
            } = e,
            d = i.useCallback(() => {
                null != a &&
                    (0, _.Y)({
                        pageType: a,
                        sectionType: p.jXE.ORBS_BALANCE_MENU,
                        ctaObject: p.qAy.ORBS_LEARN_MORE_LINK,
                    });
            }, [a]);
        return (0, r.jsxs)("div", {
            className: o()(m.container, g.baseCardOutline),
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
                    className: m.linkContainer,
                    children: [
                        void 0 !== s &&
                            (0, r.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                className: m.linkPreText,
                                children: [s, "\xA0"],
                            }),
                        (0, r.jsx)(c.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: f.Z.getArticleURL(p.BhN.ORBS_FAQ),
                            className: m.learnMoreLink,
                            onClick: d,
                            children: u,
                        }),
                    ],
                }),
            ],
        });
    };
