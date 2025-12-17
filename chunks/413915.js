t.r(a), t.d(a, { default: () => r });
var s = t(54381),
    c = t(473749),
    n = t(481060),
    d = t(731722),
    i = t(172751),
    b = t(131085),
    g = t(152838);
let r = c.memo(function (e) {
    let { guildId: a, guildProfile: t } = e;
    return (0, s.jsx)("div", {
        className: g.tagContainer,
        children: (0, s.jsxs)("div", {
            className: g.tag,
            children: [
                null != t.badge &&
                    (0, s.jsx)(i.eI, {
                        src: (0, d.Ic)(a, t.badge, b.Gg.SIZE_32),
                        size: b.Gg.SIZE_32,
                        className: g.badge,
                    }),
                (0, s.jsx)(n.Text, {
                    tag: "span",
                    variant: "heading-xl/semibold",
                    children: t.tag,
                }),
            ],
        }),
    });
});
