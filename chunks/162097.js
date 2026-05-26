n.d(t, { b: () => b });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(821609),
    u = n(834730),
    c = n(349288),
    o = n(303136),
    d = n(975571),
    m = n(318346),
    x = n(652215),
    f = n(375708),
    h = n(177426),
    j = n(19587),
    v = n(268920),
    g = n(633217);
let C = () =>
        (0, a.jsx)("div", {
            className: h.s,
            children: (0, a.jsx)(o.A, { src: g.A, fallbackImage: v.A, className: h.Cb }),
        }),
    b = (e) => {
        let {
                ctaText: t,
                ctaOnClick: n,
                analyticsPage: r,
                linkPreText: o = f.intl.string(f.t["5qZv9E"]),
                linkText: v = f.intl.string(f.t.XRdyjz),
            } = e,
            g = l.useCallback(() => {
                null != r &&
                    (0, m.Y)({
                        pageType: r,
                        sectionType: x.JJy.ORBS_BALANCE_MENU,
                        ctaObject: x.ZSU.ORBS_LEARN_MORE_LINK,
                    });
            }, [r]);
        return (0, a.jsxs)("div", {
            className: s()(h.kL, j.O),
            children: [
                (0, a.jsx)(C, {}),
                (0, a.jsx)(i.$, { text: t, variant: "primary", size: "sm", onClick: n, fullWidth: !0 }),
                (0, a.jsxs)("div", {
                    className: h.kx,
                    children: [
                        void 0 !== o &&
                            (0, a.jsxs)(u.E, { variant: "text-xs/normal", className: h.D5, children: [o, "\xa0"] }),
                        (0, a.jsx)(c.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: d.A.getArticleURL(x.MVz.ORBS_FAQ),
                            className: h.CU,
                            onClick: g,
                            children: v,
                        }),
                    ],
                }),
            ],
        });
    };
