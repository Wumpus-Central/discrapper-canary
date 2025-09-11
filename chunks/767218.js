n.d(t, {
    Z: () => p,
    b: () => d,
});
var r,
    i = n(951288);
n(647438);
var o = n(657707),
    s = n(793030),
    l = n(692547),
    a = n(989308),
    c = n(388032),
    u = n(293081),
    d = (((r = {})[(r.AVAILABLE = 0)] = "AVAILABLE"), (r[(r.SPENT = 1)] = "SPENT"), (r[(r.TOTAL = 2)] = "TOTAL"), r);
function p(e) {
    let { count: t, type: n } = e;
    return (0, i.jsxs)("div", {
        className: u.container,
        children: [
            (0, i.jsxs)("div", {
                className: u.headerContainer,
                children: [
                    (0, i.jsx)(o.$Eu, {
                        size: "sm",
                        color: 0 !== n ? l.Z.colors.HEADER_MUTED : l.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, i.jsx)(s.X6q, {
                        color: 0 !== n ? "header-muted" : "header-primary",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, i.jsx)(s.xvT, {
                color: "header-muted",
                variant: "text-sm/medium",
                children: (() => {
                    switch (n) {
                        case 0:
                            return c.intl.formatToPlainString(a.default.BdRXZG, { boostCount: t });
                        case 1:
                            return c.intl.formatToPlainString(a.default.xvgIVF, { boostCount: t });
                        case 2:
                            return c.intl.string(a.default["/F7Z29"]);
                    }
                })(),
            }),
        ],
    });
}
