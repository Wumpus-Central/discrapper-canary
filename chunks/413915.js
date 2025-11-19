t.r(e), t.d(e, { default: () => b });
var s = t(54381),
    n = t(473749),
    d = t(481060),
    i = t(731722),
    c = t(172751),
    g = t(131085),
    r = t(298282);
let b = n.memo(function (a) {
    let { guildId: e, guildProfile: t } = a;
    return (0, s.jsx)("div", {
        className: r.tagContainer,
        children: (0, s.jsxs)("div", {
            className: r.tag,
            children: [
                null != t.badge &&
                    (0, s.jsx)(c.eI, {
                        src: (0, i.Ic)(e, t.badge, g.Gg.SIZE_32),
                        size: g.Gg.SIZE_32,
                        className: r.badge,
                    }),
                (0, s.jsx)(d.Text, {
                    tag: "span",
                    variant: "heading-xl/semibold",
                    children: t.tag,
                }),
            ],
        }),
    });
});
