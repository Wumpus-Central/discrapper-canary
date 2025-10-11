n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(565138),
    a = n(388032),
    o = n(99563);
let s = (e) => {
    let { guild: t } = e;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: a.intl.string(a.t["0ox7Hh"]),
            }),
            (0, r.jsx)("div", {
                className: o.guildContainer,
                children: (0, r.jsxs)("div", {
                    className: o.guildInfo,
                    children: [
                        (0, r.jsx)("div", {
                            className: o.guildIcon,
                            children: (0, r.jsx)(l.Z, {
                                guild: t,
                                size: l.Z.Sizes.LARGE,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(i.Text, {
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
