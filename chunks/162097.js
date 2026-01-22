n.d(t, { b: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(732955),
    c = n(397927),
    u = n(775602),
    d = n(607470),
    f = n(975571),
    p = n(318346),
    _ = n(652215),
    h = n(985018),
    m = n(186541),
    g = n(266770),
    E = n(268920),
    b = n(633217);
let y = () => {
        let e = (0, o.bG)([u.A], () => u.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: m.s,
            children: e
                ? (0, r.jsx)("img", {
                      src: E.A,
                      className: m.Cb,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(d.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: m.Cb,
                      children: [
                          (0, r.jsx)("source", {
                              src: b.A,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: E.A,
                              className: m.Cb,
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
                linkPreText: o = h.intl.string(h.t["5qZv9E"]),
                linkText: u = h.intl.string(h.t.XRdyjz),
            } = e,
            d = i.useCallback(() => {
                null != a &&
                    (0, p.Y)({
                        pageType: a,
                        sectionType: _.JJy.ORBS_BALANCE_MENU,
                        ctaObject: _.ZSU.ORBS_LEARN_MORE_LINK,
                    });
            }, [a]);
        return (0, r.jsxs)("div", {
            className: s()(m.kL, g.O),
            children: [
                (0, r.jsx)(y, {}),
                (0, r.jsx)(l.$nd, {
                    text: t,
                    variant: "primary",
                    size: "sm",
                    onClick: n,
                    fullWidth: !0,
                }),
                (0, r.jsxs)("div", {
                    className: m.kx,
                    children: [
                        void 0 !== o &&
                            (0, r.jsxs)(c.Text, {
                                variant: "text-xs/normal",
                                className: m.D5,
                                children: [o, "\xA0"],
                            }),
                        (0, r.jsx)(c.MzZ, {
                            target: "_blank",
                            rel: "author",
                            href: f.A.getArticleURL(_.MVz.ORBS_FAQ),
                            className: m.CU,
                            onClick: d,
                            children: u,
                        }),
                    ],
                }),
            ],
        });
    };
