n.d(t, { L: () => _ });
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(159691),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(63063),
    p = n(507808),
    h = n(981631),
    x = n(388032),
    f = n(270469),
    b = n(892260),
    g = n(477154),
    v = n(387888);
let j = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion);
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
                analyticsPage: i,
                linkPreText: s = x.intl.string(x.t["5qZv9P"]),
                linkText: d = x.intl.string(x.t.XRdyj4),
            } = e,
            u = r.useCallback(() => {
                null != i &&
                    (0, p.Y)({
                        pageType: i,
                        sectionType: h.jXE.ORBS_BALANCE_MENU,
                        ctaObject: h.qAy.ORBS_LEARN_MORE_LINK,
                    });
            }, [i]);
        return (0, a.jsxs)("div", {
            className: l()(f.container, b.baseCardOutline),
            children: [
                (0, a.jsx)(j, {}),
                (0, a.jsx)(o.zxk, {
                    text: t,
                    variant: "primary",
                    size: "sm",
                    onClick: n,
                    fullWidth: !0,
                }),
                (0, a.jsxs)("div", {
                    className: f.linkContainer,
                    children: [
                        void 0 !== s &&
                            (0, a.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                className: f.linkPreText,
                                children: [s, "\xA0"],
                            }),
                        (0, a.jsx)(c.eee, {
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
