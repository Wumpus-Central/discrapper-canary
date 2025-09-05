n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(565138),
    l = n(388032),
    o = n(296654);
let s = (e) => {
    let { guild: t } = e;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)(i.X6q, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: l.intl.string(l.t["0ox7Hh"]),
            }),
            (0, r.jsx)("div", {
                className: o.guildContainer,
                children: (0, r.jsxs)("div", {
                    className: o.guildInfo,
                    children: [
                        (0, r.jsx)("div", {
                            className: o.guildIcon,
                            children: (0, r.jsx)(a.Z, {
                                guild: t,
                                size: a.Z.Sizes.LARGE,
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
