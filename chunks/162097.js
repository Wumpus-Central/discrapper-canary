n.d(t, { b: () => A });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(821609),
    u = n(834730),
    c = n(28863),
    o = n(303136),
    d = n(975571),
    m = n(318346),
    f = n(652215),
    x = n(375708),
    h = n(492931),
    g = n(503928),
    j = n(268920),
    v = n(633217);
function C() {
    return (0, a.jsx)("div", {
        className: h.s,
        children: (0, a.jsx)(o.A, { src: v.A, fallbackImage: j.A, className: h.Cb }),
    });
}
function A(e) {
    let {
            ctaText: t,
            ctaOnClick: n,
            analyticsPage: r,
            linkPreText: o = x.intl.string(x.t["5qZv9E"]),
            linkText: j = x.intl.string(x.t.XRdyjz),
        } = e,
        v = l.useCallback(() => {
            null != r &&
                (0, m.Y)({ pageType: r, sectionType: f.JJy.ORBS_BALANCE_MENU, ctaObject: f.ZSU.ORBS_LEARN_MORE_LINK });
        }, [r]);
    return (0, a.jsxs)("div", {
        className: s()(h.kL, g.O),
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
                        href: d.A.getArticleURL(f.MVz.ORBS_FAQ),
                        className: h.CU,
                        onClick: v,
                        children: j,
                    }),
                ],
            }),
        ],
    });
}
