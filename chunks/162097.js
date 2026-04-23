n.d(t, { b: () => b });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(821609),
    u = n(834730),
    c = n(349288),
    o = n(303136),
    d = n(975571),
    m = n(318346),
    f = n(652215),
    x = n(985018),
    h = n(429202),
    A = n(913603),
    j = n(268920),
    v = n(633217);
let N = () =>
        (0, l.jsx)("div", {
            className: h.s,
            children: (0, l.jsx)(o.A, { src: v.A, fallbackImage: j.A, className: h.Cb }),
        }),
    b = (e) => {
        let {
                ctaText: t,
                ctaOnClick: n,
                analyticsPage: r,
                linkPreText: o = x.intl.string(x.t["5qZv9E"]),
                linkText: j = x.intl.string(x.t.XRdyjz),
            } = e,
            v = a.useCallback(() => {
                null != r &&
                    (0, m.Y)({
                        pageType: r,
                        sectionType: f.JJy.ORBS_BALANCE_MENU,
                        ctaObject: f.ZSU.ORBS_LEARN_MORE_LINK,
                    });
            }, [r]);
        return (0, l.jsxs)("div", {
            className: s()(h.kL, A.O),
            children: [
                (0, l.jsx)(N, {}),
                (0, l.jsx)(i.$, { text: t, variant: "primary", size: "sm", onClick: n, fullWidth: !0 }),
                (0, l.jsxs)("div", {
                    className: h.kx,
                    children: [
                        void 0 !== o &&
                            (0, l.jsxs)(u.E, { variant: "text-xs/normal", className: h.D5, children: [o, "\xa0"] }),
                        (0, l.jsx)(c.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: d.A.getArticleURL(f.MVz.ORBS_FAQ),
                            className: h.CU,
                            onClick: v,
                            children: j,
                        }),
                    ],
                }),
            ],
        });
    };
