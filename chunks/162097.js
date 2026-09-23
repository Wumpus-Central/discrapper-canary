a.d(t, { b: () => C });
var n = a(477900),
    l = a(582128),
    s = a(503698),
    r = a.n(s),
    i = a(821609),
    u = a(834730),
    c = a(28863),
    o = a(303136),
    d = a(975571),
    m = a(318346),
    f = a(652215),
    x = a(375708),
    h = a(492931),
    j = a(503928),
    A = a(268920),
    k = a(633217);
function v() {
    return (0, n.jsx)("div", {
        className: h.s,
        children: (0, n.jsx)(o.A, { src: k.A, fallbackImage: A.A, className: h.Cb }),
    });
}
function C(e) {
    let {
            ctaText: t,
            ctaOnClick: a,
            analyticsPage: s,
            linkPreText: o = x.intl.string(x.t["5qZv9E"]),
            linkText: A = x.intl.string(x.t.XRdyjz),
        } = e,
        k = l.useCallback(() => {
            null != s &&
                (0, m.Y)({ pageType: s, sectionType: f.JJy.ORBS_BALANCE_MENU, ctaObject: f.ZSU.ORBS_LEARN_MORE_LINK });
        }, [s]);
    return (0, n.jsxs)("div", {
        className: r()(h.kL, j.O),
        children: [
            (0, n.jsx)(v, {}),
            (0, n.jsx)(i.$, { text: t, variant: "primary", size: "sm", onClick: a, fullWidth: !0 }),
            (0, n.jsxs)("div", {
                className: h.kx,
                children: [
                    void 0 !== o &&
                        (0, n.jsxs)(u.E, { variant: "text-xs/normal", className: h.D5, children: [o, "\xa0"] }),
                    (0, n.jsx)(c.Anchor, {
                        target: "_blank",
                        rel: "author",
                        href: d.A.getArticleURL(f.MVz.ORBS_FAQ),
                        className: h.CU,
                        onClick: k,
                        children: A,
                    }),
                ],
            }),
        ],
    });
}
