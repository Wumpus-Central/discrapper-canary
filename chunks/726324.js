n.d(t, { Z: () => u }), n(953529), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(565138),
    a = n(695346),
    s = n(506071),
    o = n(353254),
    c = n(696118);
function u(e) {
    let { coverImageAsset: t, title: n, guild: u, description: d, children: p } = e,
        f = a.QK.useSetting(),
        h = (0, s.n)(),
        [g, m] = (0, o.Z)(t, h && f);
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsx)("div", {
                ref: g,
                className: c.coverImageContainer,
                children:
                    null != m &&
                    (0, r.jsx)("img", {
                        src: m,
                        alt: "",
                        className: c.coverImage,
                    }),
            }),
            (0, r.jsx)("div", {
                className: c.guildIconContainer,
                children: (0, r.jsx)(l.Z, {
                    guild: u,
                    size: l.Z.Sizes.XLARGE,
                }),
            }),
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                className: c.ctaTitle,
                children: n,
            }),
            (0, r.jsx)(i.Text, {
                className: c.ctaSubtitle,
                variant: "text-md/normal",
                color: "header-secondary",
                children: d,
            }),
            p,
        ],
    });
}
