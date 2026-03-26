i.d(e, { A: () => m });
var s = i(627968);
i(64700);
var r = i(417597),
    n = i(397927),
    l = i(775602),
    d = i(289397),
    a = i(500770),
    o = i(253932),
    c = i(580630),
    C = i(218394),
    u = i(319664),
    x = i(634654),
    h = i(652215),
    _ = i(985018),
    p = i(76385);
function j() {
    let t = o.kt.useSetting(),
        e = (0, C.j)(),
        i = (0, r.bG)([l.A], () => l.A.useReducedMotion),
        n =
            e && t && !i
                ? (0, d.n)("server_products/storefront/question-mark.gif")
                : (0, d.n)("server_products/storefront/question-mark.png");
    return (0, s.jsxs)("div", {
        className: p.Xq,
        children: [
            (0, s.jsx)(a.A, {
                role: void 0,
                ctaComponent: null,
                imageUrl: (0, d.n)("server_products/storefront/preview-thumbnail.png"),
                name: _.intl.string(_.t.U2hvDo),
                description: _.intl.string(_.t["w/TNGT"]),
                formattedPrice: (0, c.$g)(0, h.Yri.USD, {
                    localeMatcher: "best fit",
                    style: "currency",
                    maximumSignificantDigits: 1,
                }),
                shouldShowFullDescriptionButton: !1,
                productType: _.intl.string(_.t.ih4QMU),
                onTapCard: () => null,
                hideRoleTag: !0,
                lineClamp: 3,
                thumbnailHeight: 197,
                cardWidth: 332,
                descriptionTextVariant: "text-xs/normal",
            }),
            (0, s.jsx)("img", { className: p.kz, alt: "", src: n }),
        ],
    });
}
function g() {
    return (0, s.jsxs)("div", {
        className: p.od,
        children: [
            (0, s.jsx)(n.mir, { size: "md", color: "currentColor", className: p.ZC }),
            (0, s.jsx)(n.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.format(_.t.umfZ8q, { learnMoreLink: x.rv }),
            }),
        ],
    });
}
function m(t) {
    let { guildId: e } = t;
    return (0, s.jsxs)("div", {
        className: p.Bh,
        children: [
            (0, s.jsxs)("div", {
                className: p.gp,
                children: [(0, s.jsx)(j, {}), (0, s.jsx)(u.A, { guildId: e, showCTA: !0 })],
            }),
            (0, s.jsx)(g, {}),
        ],
    });
}
