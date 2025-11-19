n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(499033),
    o = n(388032),
    a = n(204122);
function s(e) {
    let { Icon: t, header: n, tip: s, disableStars: c } = e;
    return (0, r.jsxs)("div", {
        className: a.container,
        children: [
            (0, r.jsxs)("div", {
                className: a.iconContainer,
                children: [
                    (0, r.jsx)(t, {
                        color: "currentColor",
                        size: "custom",
                        className: a.icon,
                        width: 36,
                        height: 36,
                    }),
                    c ? null : (0, r.jsx)(l.Z, { className: a.stars }),
                ],
            }),
            (0, r.jsx)(i.Heading, {
                className: a.header,
                variant: "heading-xl/semibold",
                children: n,
            }),
            (0, r.jsxs)(i.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: [
                    c
                        ? null
                        : (0, r.jsxs)(i.Text, {
                              tag: "span",
                              className: a.protip,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [o.intl.string(o.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
