n.d(t, { b: () => v });
var a = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(821609),
    c = n(834730),
    o = n(28863),
    u = n(303136),
    d = n(975571),
    h = n(318346),
    m = n(652215),
    C = n(375708),
    x = n(492931),
    f = n(503928),
    g = n(268920),
    E = n(633217);
function A() {
    return (0, a.jsx)("div", {
        className: x.s,
        children: (0, a.jsx)(u.A, { src: E.A, fallbackImage: g.A, className: x.Cb }),
    });
}
function v(e) {
    let {
            ctaText: t,
            ctaOnClick: n,
            analyticsPage: s,
            linkPreText: u = C.intl.string(C.t["5qZv9E"]),
            linkText: g = C.intl.string(C.t.XRdyjz),
        } = e,
        E = l.useCallback(() => {
            null != s &&
                (0, h.Y)({ pageType: s, sectionType: m.JJy.ORBS_BALANCE_MENU, ctaObject: m.ZSU.ORBS_LEARN_MORE_LINK });
        }, [s]);
    return (0, a.jsxs)("div", {
        className: r()(x.kL, f.O),
        children: [
            (0, a.jsx)(A, {}),
            (0, a.jsx)(i.$, { text: t, variant: "primary", size: "sm", onClick: n, fullWidth: !0 }),
            (0, a.jsxs)("div", {
                className: x.kx,
                children: [
                    void 0 !== u &&
                        (0, a.jsxs)(c.E, { variant: "text-xs/normal", className: x.D5, children: [u, "\xa0"] }),
                    (0, a.jsx)(o.Anchor, {
                        target: "_blank",
                        rel: "author",
                        href: d.A.getArticleURL(m.MVz.ORBS_FAQ),
                        className: x.CU,
                        onClick: E,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
