l.d(t, { b: () => v });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(311907),
    o = l(732955),
    u = l(397927),
    c = l(775602),
    d = l(607470),
    p = l(975571),
    m = l(318346),
    h = l(652215),
    x = l(985018),
    b = l(186541),
    g = l(266770),
    y = l(268920),
    E = l(633217);
let f = () => {
        let e = (0, s.bG)([c.A], () => c.A.useReducedMotion);
        return (0, a.jsx)("div", {
            className: b.s,
            children: e
                ? (0, a.jsx)("img", { src: y.A, className: b.Cb, alt: "Orb" })
                : (0, a.jsxs)(d.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: b.Cb,
                      children: [
                          (0, a.jsx)("source", { src: E.A, type: "video/webm" }),
                          (0, a.jsx)("img", { src: y.A, className: b.Cb, alt: "Orb" }),
                      ],
                  }),
        });
    },
    v = (e) => {
        let {
                ctaText: t,
                ctaOnClick: l,
                analyticsPage: r,
                linkPreText: s = x.intl.string(x.t["5qZv9E"]),
                linkText: c = x.intl.string(x.t.XRdyjz),
            } = e,
            d = n.useCallback(() => {
                null != r &&
                    (0, m.Y)({
                        pageType: r,
                        sectionType: h.JJy.ORBS_BALANCE_MENU,
                        ctaObject: h.ZSU.ORBS_LEARN_MORE_LINK,
                    });
            }, [r]);
        return (0, a.jsxs)("div", {
            className: i()(b.kL, g.O),
            children: [
                (0, a.jsx)(f, {}),
                (0, a.jsx)(o.$nd, { text: t, variant: "primary", size: "sm", onClick: l, fullWidth: !0 }),
                (0, a.jsxs)("div", {
                    className: b.kx,
                    children: [
                        void 0 !== s &&
                            (0, a.jsxs)(u.Text, { variant: "text-xs/normal", className: b.D5, children: [s, "\xa0"] }),
                        (0, a.jsx)(u.MzZ, {
                            target: "_blank",
                            rel: "author",
                            href: p.A.getArticleURL(h.MVz.ORBS_FAQ),
                            className: b.CU,
                            onClick: d,
                            children: c,
                        }),
                    ],
                }),
            ],
        });
    };
