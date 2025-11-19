n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(399606),
    s = n(481060),
    o = n(385499),
    c = n(246946),
    d = n(147721);
function u(e) {
    let { className: t, avatarURL: n, name: i, bot: u, verifiedBot: g, userTag: m } = e,
        p = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation);
    return (0, r.jsxs)("div", {
        className: l()(d.container, t),
        children: [
            (0, r.jsx)(s.qEK, {
                className: d.avatar,
                src: n,
                size: s.EFr.SIZE_24,
                "aria-label": i,
            }),
            (0, r.jsxs)("div", {
                className: d.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        tag: "span",
                        className: d.name,
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: i,
                    }),
                    u
                        ? (0, r.jsx)(o.Z, {
                              className: d.botTag,
                              verified: g,
                          })
                        : null,
                    p
                        ? null
                        : (0, r.jsx)(s.Text, {
                              tag: "span",
                              color: "interactive-normal",
                              className: d.userTag,
                              variant: "text-sm/normal",
                              children: m,
                          }),
                ],
            }),
        ],
    });
}
