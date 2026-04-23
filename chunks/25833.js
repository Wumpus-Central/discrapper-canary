n.d(t, { A: () => x });
var i = n(627968),
    s = n(311907),
    l = n(315629),
    a = n(834730),
    r = n(403581),
    o = n(821609),
    d = n(87719),
    u = n(287809),
    c = n(975571),
    g = n(927578),
    m = n(652215),
    _ = n(788868),
    A = n(985018),
    h = n(397384),
    p = n(410229);
function x() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser());
    if (null == e || g.Ay.hasFreeBoosts(e)) return null;
    let t = c.A.getArticleURL(m.MVz.GUILD_BOOSTING_FAQ);
    return (0, i.jsxs)(l.h, {
        color: "nitro-pink",
        className: h.vK,
        children: [
            (0, i.jsxs)("div", {
                className: h.nw,
                children: [
                    (0, i.jsx)("img", { alt: "", className: h.q3, src: p.A }),
                    (0, i.jsxs)("div", {
                        className: h.Tm,
                        children: [
                            (0, i.jsx)(a.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: A.intl.format(A.t.Idh1Vs, { count: _.M4, boostCount: _.M4 }),
                            }),
                            (0, i.jsxs)("div", {
                                className: h.xv,
                                children: [
                                    (0, i.jsx)(r.t, { className: h.nE }),
                                    (0, i.jsx)(a.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: A.intl.format(A.t["6UAu+f"], {
                                            count: _.M4,
                                            boostCount: _.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(o.$, {
                variant: "expressive",
                size: "sm",
                icon: r.t,
                text: A.intl.string(A.t["8x0jKT"]),
                onClick: d.e,
            }),
        ],
    });
}
