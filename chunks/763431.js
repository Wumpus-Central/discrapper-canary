n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(565138),
    a = n(388032),
    s = n(99563);
let o = (e) => {
    let { guild: t } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(l.Heading, {
                className: s.header,
                variant: "heading-sm/semibold",
                children: a.intl.string(a.t["0ox7Hq"]),
            }),
            (0, r.jsx)("div", {
                className: s.guildContainer,
                children: (0, r.jsxs)("div", {
                    className: s.guildInfo,
                    children: [
                        (0, r.jsx)("div", {
                            className: s.guildIcon,
                            children: (0, r.jsx)(i.Z, {
                                guild: t,
                                size: i.Z.Sizes.LARGE,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t.name,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
};
