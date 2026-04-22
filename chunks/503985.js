"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(534514),
    r = n(778712),
    l = n(834730),
    s = n(730134),
    d = n(985018),
    o = n(896736);
let c = (e) => {
    let { user: t } = e;
    return (0, a.jsxs)("div", {
        className: o.kL,
        children: [
            (0, a.jsx)(i.D, { className: o.wx, variant: "heading-sm/semibold", children: d.intl.string(d.t.Rsth7z) }),
            (0, a.jsx)("div", {
                className: o.f1,
                children: (0, a.jsxs)("div", {
                    className: o.eF,
                    children: [
                        (0, a.jsx)(s.A, { className: o.Hk, user: t, size: r._3.SIZE_40 }),
                        (0, a.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, a.jsx)(l.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, a.jsx)(l.E, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: t.username,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
};
