n.d(t, {
    Z: () => p,
    b: () => d,
});
var r,
    i = n(951288);
n(647438);
var l = n(657707),
    o = n(793030),
    a = n(692547),
    s = n(18853),
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
                    (0, i.jsx)(l.Ucv, {
                        size: "sm",
                        color: 0 !== n ? a.Z.colors.HEADER_MUTED : a.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, i.jsx)(o.X6q, {
                        color: 0 !== n ? "header-muted" : "header-primary",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, i.jsx)(o.xvT, {
                color: "header-muted",
                variant: "text-sm/medium",
                children: (() => {
                    switch (n) {
                        case 0:
                            return c.intl.formatToPlainString(s.default.BdRXZA, { boostCount: t });
                        case 1:
                            return c.intl.formatToPlainString(s.default.xvgIVG, { boostCount: t });
                        case 2:
                            return c.intl.string(s.default["/F7Z2y"]);
                    }
                })(),
            }),
        ],
    });
}
