"use strict";
n.d(t, { A: () => o });
var a = n(627968);
n(64700);
var i = n(534514),
    r = n(834730),
    l = n(263063),
    s = n(985018),
    d = n(306032);
let o = (e) => {
    let { guild: t } = e;
    return (0, a.jsxs)("div", {
        className: d.kL,
        children: [
            (0, a.jsx)(i.D, {
                className: d.wx,
                variant: "heading-sm/semibold",
                children: s.intl.string(s.t["0ox7Hq"]),
            }),
            (0, a.jsx)("div", {
                className: d.bo,
                children: (0, a.jsxs)("div", {
                    className: d.OA,
                    children: [
                        (0, a.jsx)("div", {
                            className: d.$f,
                            children: (0, a.jsx)(l.Ay, { guild: t, size: l.Ay.Sizes.LARGE }),
                        }),
                        (0, a.jsx)("div", {
                            children: (0, a.jsx)(r.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: t.name,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
};
