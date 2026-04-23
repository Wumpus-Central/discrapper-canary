i.d(e, { A: () => f });
var s = i(627968);
i(64700);
var r = i(417597),
    n = i(885574),
    l = i(834730),
    a = i(775602),
    d = i(289397),
    o = i(500770),
    c = i(253932),
    C = i(580630),
    u = i(218394),
    x = i(319664),
    h = i(634654),
    _ = i(652215),
    p = i(985018),
    j = i(68817);
function g() {
    let t = c.kt.useSetting(),
        e = (0, u.j)(),
        i = (0, r.bG)([a.A], () => a.A.useReducedMotion),
        n =
            e && t && !i
                ? (0, d.n)("server_products/storefront/question-mark.gif")
                : (0, d.n)("server_products/storefront/question-mark.png");
    return (0, s.jsxs)("div", {
        className: j.Xq,
        children: [
            (0, s.jsx)(o.A, {
                role: void 0,
                ctaComponent: null,
                imageUrl: (0, d.n)("server_products/storefront/preview-thumbnail.png"),
                name: p.intl.string(p.t.U2hvDo),
                description: p.intl.string(p.t["w/TNGT"]),
                formattedPrice: (0, C.$g)(0, _.Yri.USD, {
                    localeMatcher: "best fit",
                    style: "currency",
                    maximumSignificantDigits: 1,
                }),
                shouldShowFullDescriptionButton: !1,
                productType: p.intl.string(p.t.ih4QMU),
                onTapCard: () => null,
                hideRoleTag: !0,
                lineClamp: 3,
                thumbnailHeight: 197,
                cardWidth: 332,
                descriptionTextVariant: "text-xs/normal",
            }),
            (0, s.jsx)("img", { className: j.kz, alt: "", src: n }),
        ],
    });
}
function m() {
    return (0, s.jsxs)("div", {
        className: j.od,
        children: [
            (0, s.jsx)(n.m, { size: "md", color: "currentColor", className: j.ZC }),
            (0, s.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: p.intl.format(p.t.umfZ8q, { learnMoreLink: h.rv }),
            }),
        ],
    });
}
function f(t) {
    let { guildId: e } = t;
    return (0, s.jsxs)("div", {
        className: j.Bh,
        children: [
            (0, s.jsxs)("div", {
                className: j.gp,
                children: [(0, s.jsx)(g, {}), (0, s.jsx)(x.A, { guildId: e, showCTA: !0 })],
            }),
            (0, s.jsx)(m, {}),
        ],
    });
}
