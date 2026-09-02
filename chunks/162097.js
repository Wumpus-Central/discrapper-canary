n.d(t, { b: () => A });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(821609),
    u = n(834730),
    c = n(28863),
    o = n(303136),
    d = n(975571),
    m = n(318346),
    f = n(652215),
    x = n(375708),
    h = n(492931),
    j = n(503928),
    k = n(268920),
    v = n(633217);
function g() {
    return (0, a.jsx)("div", {
        className: h.s,
        children: (0, a.jsx)(o.A, { src: v.A, fallbackImage: k.A, className: h.Cb }),
    });
}
function A(e) {
    let {
            ctaText: t,
            ctaOnClick: n,
            analyticsPage: s,
            linkPreText: o = x.intl.string(x.t["5qZv9E"]),
            linkText: k = x.intl.string(x.t.XRdyjz),
        } = e,
        v = l.useCallback(() => {
            null != s &&
                (0, m.Y)({ pageType: s, sectionType: f.JJy.ORBS_BALANCE_MENU, ctaObject: f.ZSU.ORBS_LEARN_MORE_LINK });
        }, [s]);
    return (0, a.jsxs)("div", {
        className: r()(h.kL, j.O),
        children: [
            (0, a.jsx)(g, {}),
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
                        children: k,
                    }),
                ],
            }),
        ],
    });
}
