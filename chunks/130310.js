n.d(t, { Z: () => p }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(785681),
    l = n(231994),
    c = n(412297),
    u = n(388032),
    d = n(485101),
    f = n(10198);
let _ = (e) => {
        let { header: t, description: n, icon: i, inModal: s } = e;
        return (0, r.jsxs)("div", {
            className: a()(d.row, f.marginBottom8, { [d.inModal]: s }),
            children: [
                (0, r.jsx)("div", {
                    className: d.iconContainer,
                    children: i,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: d.header,
                            variant: "text-sm/bold",
                            color: "header-primary",
                            children: t,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: n,
                        }),
                    ],
                }),
            ],
        });
    },
    p = (e) => {
        let { inModal: t } = e,
            n = (0, s.o)(u.intl.string(c.default.Sm8Gq6), u.intl.string(c.default.YU7aaW)),
            i = (0, s.o)(u.intl.string(c.default["TCzk/f"]), u.intl.string(c.default["2OqtJC"])),
            a = (0, s.o)(u.intl.string(c.default.ASf7XF), u.intl.string(c.default["82y87e"])),
            f = (0, s.o)(u.intl.string(c.default["0QDVFB"]), u.intl.string(c.default["1xBHHR"]));
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.Text, {
                    className: d.groupHeader,
                    variant: "text-xxs/bold",
                    color: "header-secondary",
                    children: n,
                }),
                (0, r.jsx)(_, {
                    header: u.intl.string(c.default["/zMYZW"]),
                    description: u.intl.string(c.default.DxFKkZ),
                    icon: (0, r.jsx)(o.iFz, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: o.TVs.colors.TEXT_PRIMARY.css,
                    }),
                    inModal: t,
                }),
                (0, r.jsx)(_, {
                    header: u.intl.string(c.default["44NEx8"]),
                    description: u.intl.string(c.default.WrY56O),
                    icon: (0, r.jsx)(o.dRF, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: o.TVs.colors.TEXT_PRIMARY.css,
                    }),
                    inModal: t,
                }),
                (0, r.jsx)(_, {
                    header: u.intl.string(c.default["Z3G+8v"]),
                    description: u.intl.string(c.default.KBgAra),
                    icon: (0, r.jsx)(l.Z, {
                        width: 20,
                        height: 20,
                        color: o.TVs.colors.TEXT_PRIMARY.css,
                    }),
                    inModal: t,
                }),
                (0, r.jsx)(o.Text, {
                    className: d.groupHeader,
                    variant: "text-xxs/bold",
                    color: "header-secondary",
                    children: i,
                }),
                (0, r.jsx)(_, {
                    header: a,
                    description: f,
                    icon: (0, r.jsx)(o.Dio, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: o.TVs.colors.TEXT_PRIMARY.css,
                    }),
                    inModal: t,
                }),
            ],
        });
    };
