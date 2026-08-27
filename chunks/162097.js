l.d(t, { b: () => b });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    i = l(821609),
    c = l(834730),
    o = l(28863),
    u = l(303136),
    d = l(975571),
    h = l(318346),
    m = l(652215),
    C = l(375708),
    x = l(492931),
    g = l(503928),
    f = l(268920),
    E = l(633217);
function j() {
    return (0, n.jsx)("div", {
        className: x.s,
        children: (0, n.jsx)(u.A, { src: E.A, fallbackImage: f.A, className: x.Cb }),
    });
}
function b(e) {
    let {
            ctaText: t,
            ctaOnClick: l,
            analyticsPage: s,
            linkPreText: u = C.intl.string(C.t["5qZv9E"]),
            linkText: f = C.intl.string(C.t.XRdyjz),
        } = e,
        E = a.useCallback(() => {
            null != s &&
                (0, h.Y)({ pageType: s, sectionType: m.JJy.ORBS_BALANCE_MENU, ctaObject: m.ZSU.ORBS_LEARN_MORE_LINK });
        }, [s]);
    return (0, n.jsxs)("div", {
        className: r()(x.kL, g.O),
        children: [
            (0, n.jsx)(j, {}),
            (0, n.jsx)(i.$, { text: t, variant: "primary", size: "sm", onClick: l, fullWidth: !0 }),
            (0, n.jsxs)("div", {
                className: x.kx,
                children: [
                    void 0 !== u &&
                        (0, n.jsxs)(c.E, { variant: "text-xs/normal", className: x.D5, children: [u, "\xa0"] }),
                    (0, n.jsx)(o.Anchor, {
                        target: "_blank",
                        rel: "author",
                        href: d.A.getArticleURL(m.MVz.ORBS_FAQ),
                        className: x.CU,
                        onClick: E,
                        children: f,
                    }),
                ],
            }),
        ],
    });
}
