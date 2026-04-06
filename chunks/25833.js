n.d(t, { A: () => x });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(87719),
    r = n(287809),
    o = n(975571),
    d = n(927578),
    c = n(652215),
    u = n(788868),
    m = n(985018),
    g = n(934008),
    _ = n(410229);
function x() {
    let e = (0, s.bG)([r.default], () => r.default.getCurrentUser());
    if (null == e || d.Ay.hasFreeBoosts(e)) return null;
    let t = o.A.getArticleURL(c.MVz.GUILD_BOOSTING_FAQ);
    return (0, i.jsxs)(l.hLv, {
        color: "nitro-pink",
        className: g.vK,
        children: [
            (0, i.jsxs)("div", {
                className: g.nw,
                children: [
                    (0, i.jsx)("img", { alt: "", className: g.q3, src: _.A }),
                    (0, i.jsxs)("div", {
                        className: g.Tm,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: m.intl.format(m.t.Idh1Vs, { count: u.M4, boostCount: u.M4 }),
                            }),
                            (0, i.jsxs)("div", {
                                className: g.xv,
                                children: [
                                    (0, i.jsx)(l.tvc, { className: g.nE }),
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["6UAu+f"], {
                                            count: u.M4,
                                            boostCount: u.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(l.Button, {
                variant: "expressive",
                size: "sm",
                icon: l.tvc,
                text: m.intl.string(m.t["8x0jKT"]),
                onClick: a.e,
            }),
        ],
    });
}
